import './cadastroFuncionario.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CadastrarFuncionario() {

    const [listFuncionario, setListFuncionario] = useState([]);
    const [nomeFuncionario, setNomeFuncionario] = useState('')
    const [cpfFuncionario, setCpfFuncionario] = useState('')
    const [editIndex, setEditIndex] = useState(null);
    const [listaFuncionario, setListaFuncionario] = useState([])
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState(0)
    const [item, setItem] = useState({ nome: "", cpf: "" })

    useEffect(() => {
        detalhesFuncionario();
    }, []);

    const detalhesFuncionario = async () => {
        const response = await axios.get("http://localhost:3000/funcionarios")
        setListFuncionario(response.data.detalhes);
    };

    const adicionarFuncionario = async () => {
        const response = await axios.post("http://localhost:3000/funcionario", { nome: nomeFuncionario, cpf: cpfFuncionario })
        detalhesFuncionario()
    }

    const deletarFuncionario = async (id) => {
        await axios.delete(`http://localhost:3000/deletarFuncionario/${id}`)
        detalhesFuncionario()
    }

    const editarFuncionario = async () => {
        await axios.put(`http://localhost:3000/funcionario/${id}`, item)
        detalhesFuncionario()
    }
    return (
        <div className="container">
            <h1>Gestão de Funcionários</h1>
            {edit ?
                (
                    <>
                        <div className="campoNome" >
                            <input type="text" data-cy="nomeFuncionario-editar" onChange={(e) => item.nome = e.target.value} placeholder="" />
                            <input type="number" data-cy="cpfFuncionario-editar" onChange={(e) => item.cpf = e.target.value} placeholder="" />
                        </div>
                        <div className="botaoEditar2" data-cy="botao-editarFuncionario" onClick={() => editarFuncionario()}>Editar</div>
                    </>
                )
                :
                (<div id='epi-form'>

                    <div>
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            data-cy="nome-funcionario"
                            value={nomeFuncionario}
                            onChange={(e) => setNomeFuncionario(e.target.value)}
                            placeholder="Ex: João Silva"
                            required
                        />
                    </div>

                    <div>
                        <p>cpf</p>
                        <input
                            type="text"
                            id="role"
                            data-cy="cpf-funcionario"
                            value={cpfFuncionario}
                            onChange={(e) => setCpfFuncionario(e.target.value)}
                            placeholder="Ex: 12345678912"
                            required
                        />
                    </div>

                    <button type="submit" className="btn" data-cy="adicionarFuncionario" onClick={() => adicionarFuncionario()}>
                        {editIndex !== null ? 'Atualizar Funcionário' : 'Cadastrar Funcionário'}
                    </button>
                </div>)}

            <thead>
                <tr>
                    <th>Nome</th>
                    <th>cpf</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody id="employee-list">
                {listFuncionario.map((funcionario, index) => (
                    <tr key={index}>
                        <td>{funcionario.nome}</td>
                        <td>{funcionario.cpf}</td>
                        <td className='reto'>
                            <button className='btnEditar'data-cy="btnEditarFuncionario" onClick={() => { setEdit(true), setId(funcionario.id) }}>Editar</button>
                            <button className='btnExcluir' data-cy="btnExcluirFuncionario" onClick={() => deletarFuncionario(funcionario.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <h3><Link to={'/CadastrarEpi'}> Ir para Cadastrar Epi</Link></h3>
            <h3><Link to={'/'}> Ir para Home</Link></h3>



        </div>
    );
}