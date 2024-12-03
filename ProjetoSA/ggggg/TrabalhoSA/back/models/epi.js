import { DataTypes } from "sequelize";
import conexao from "../database.js";

const Epi = conexao.define('epi', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    quantidade: {
        type: DataTypes.INTEGER
    }
})

export default Epi

