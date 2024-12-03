import express from 'express'
import conexao from './database.js'
import router from './router/rotas.js'
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

try {
    await conexao.sync()
    console.log('conectou')
} catch (error) {
    console.error('erro:', error)
}


app.listen(3000, () => console.log('Servidor rodando'))