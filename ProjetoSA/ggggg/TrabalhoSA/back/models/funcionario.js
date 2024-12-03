import { DataTypes } from "sequelize";
import conexao from "../database.js";

const Funcionario = conexao.define('funcionario', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true, 
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.INTEGER
    }
})

export default Funcionario