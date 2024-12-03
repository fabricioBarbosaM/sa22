import Funcionario from "../models/funcionario.js";

const listarFuncionario = async (req, res) => {
    try {
        const detalhes = await Funcionario.findAll()
        res.status(200).send({ detalhes: detalhes })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ erro })
    }
}
const cadastrarFuncionario = async (req, res) => {
    try {
        const { nome, cpf } = req.body

        const adicionarFuncionario = Funcionario.create({ nome, cpf })
        res.status(201).send({ adicionarFuncionario })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ erro })
    }
}

const atualizarFuncionario = async (req, res) => {
    try {
        const id = req.params.id
        const { nome, cpf } = req.body

        const atualizar = await Funcionario.update({ nome, cpf }, { where: { id } })
        res.status(200).send({ atualizar })
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

const deletarFuncionario = async (req, res) => {
    try {
        const id = req.params.id
        await Funcionario.destroy({ where: { id } })
        res.status(200).send({ mensagem: 'Funcionario demitido' })
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

export { listarFuncionario, cadastrarFuncionario, atualizarFuncionario, deletarFuncionario }