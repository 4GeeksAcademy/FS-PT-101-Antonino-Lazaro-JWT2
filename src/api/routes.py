"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from sqlalchemy import select
from flask_jwt_extended import create_access_token,get_jwt_identity,jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register',methods = ['POST'])
def register():
    try:
        data = request.json
        if not data['email'] or not data['password']:
            raise Exception['missing data']
        
        stm = select(User).where(User.email==data['email'])
        existing_user = db.session.execute(stm).scalar_one_or_none()
        if existing_user:
            return jsonify({'error':'email en uso, intenta logearte'}), 418
        new_user = User(
            email=data['email'],
            password=data['password'],
            is_active=True
        )        
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"success":"True"})

    except Exception as e:
        print(e)
        return jsonify({'Error':'Algo pasó'})
    

@api.route('/login',methods = ['POST'])
def login():
    try:
        
        data = request.json
        
        if not data['email'] or not data['password']:
            raise Exception['missing data']
        
        stm = select(User).where(User.email==data['email'])
        user = db.session.execute(stm).scalar_one_or_none()
        
        if not user:
            return jsonify({'error':'el email no está registrado'}), 418
        
        if user.password != data['password']:
            return jsonify({'error':'la contraseña no es correcta'}), 418
        

        #generamos token, tiene que ser un str no puede ser un número
        token = create_access_token(identity = str(user.id))

        return jsonify({"success":"True", "token":token})

    except Exception as e:
        print(e)
        return jsonify({'Error':'Algo pasó'})
    

#endopoint privado
@api.route('/private', methods = ["GET"])
@jwt_required()
def get_user_info():
    id = get_jwt_identity()
    stm = select(User).where(User.id == id)
    user = db.session.execute(stm).scalar_one_or_none()
    if not user:
        return jsonify({'success':'false', 'msg':'que paso'})
    
    print(id)
    return jsonify({"success":"True", 'user': user.serialize()})