const { INTEGER, DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const Employees = sequelize.define("Employees",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    department:{
        type:DataTypes.STRING,
        allowNull:false
    },
    salary:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
},{
    tableName:"employees",
    timestamps:true,
    underscored:true
})

module.exports = Employees