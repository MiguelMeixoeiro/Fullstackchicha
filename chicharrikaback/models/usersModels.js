import db from "../db.js"
import { DataTypes} from "sequelize"

const UsersModels=db.define("clients",{
    name:{type:DataTypes.STRING},
    lastname:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    address:{type:DataTypes.STRING},
    tfl:{type:DataTypes.STRING},
    

   
})
export default UsersModels;

