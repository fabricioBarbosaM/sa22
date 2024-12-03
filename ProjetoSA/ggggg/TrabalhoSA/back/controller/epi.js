import Epi from "../models/epi.js"

const listarEpi = async (req, res) => {
    try {
        const detalhes = await Epi.findAll()
        res.status(200).send({ detalhes: detalhes })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ erro })
    }
}

const cadastrarEpi = async (req, res) => {
    try {

        const { nome, quantidade } = req.body
        console.log(nome, quantidade)

        const criarEpi = Epi.create({ nome, quantidade })
        res.status(201).send({ criarEpi })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ erro })
    }
}

const atualizarEpi = async (req, res) => {
    try {
        const id = req.params.id
        const { nome, quantidade } = req.body

        const atualizar = await Epi.update({ nome, quantidade }, { where: { id } })
        res.status(200).send({ atualizar })
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

const deletarEpi = async (req, res) => {
    try {
        const id = req.params.id
        await Epi.destroy({ where: { id } })
        res.status(200).send({ mensagem: 'Epi devolvida' })
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

export { cadastrarEpi, atualizarEpi, listarEpi, deletarEpi }

 /* <tbody >
                    {listaFuncionario?.map((funcionario, index) => (
                        <tr key={index}>
                            <td>{funcionario.nome}</td>
                        </tr>
                    ))}
                </tbody>*/