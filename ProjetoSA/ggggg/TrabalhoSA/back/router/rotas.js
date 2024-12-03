import express from "express"
const router = express.Router()
import {cadastrarEpi, atualizarEpi, listarEpi, deletarEpi, } from '../controller/epi.js'
import {listarFuncionario, cadastrarFuncionario, atualizarFuncionario, deletarFuncionario} from '../controller/funcionario.js'

router.get('/epis', listarEpi)//listar epis
router.get('/funcionarios', listarFuncionario)//listar funcionario
router.post('/epi', cadastrarEpi)//add epi
router.post('/funcionario', cadastrarFuncionario)//add funcionario
router.put('/epi/:id', atualizarEpi)//atualizar epi
router.put('/funcionario/:id', atualizarFuncionario)//atualizar funcionario
router.delete('/deletarEpi/:id', deletarEpi)//deletar epi
router.delete('/deletarFuncionario/:id', deletarFuncionario)//deletar funcionario

export default router