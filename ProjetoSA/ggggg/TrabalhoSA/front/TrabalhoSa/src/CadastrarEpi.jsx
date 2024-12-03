import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cadastro.css';
import { Link } from 'react-router-dom';

export function CadastrarEpi() {
    const [epiName, setEpiName] = useState('');
    const [epiQuantity, setEpiQuantity] = useState('');
    const [epiList, setEpiList] = useState([]);
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(0);
    const [item, setItem] = useState({ nome: '', quantidade: '' });

    useEffect(() => {
        buscarDetalhesEpi();
    }, []);

    const buscarDetalhesEpi = async () => {
        try {
            const response = await axios.get('http://localhost:3000/epis');
            setEpiList(response.data.detalhes);
        } catch (error) {
            console.error('Erro ao buscar EPIs:', error);
        }
    };

    const adicionar = async () => {
        if (epiName && epiQuantity) {
            try {
                await axios.post('http://localhost:3000/epi', { nome: epiName, quantidade: epiQuantity });
                setEpiName('');
                setEpiQuantity('');
                buscarDetalhesEpi();
            } catch (error) {
                console.error('Erro ao adicionar EPI:', error);
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    const deletar = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/deletarEpi/${id}`);
            buscarDetalhesEpi();
        } catch (error) {
            console.error('Erro ao deletar EPI:', error);
        }
    };

    const editar = async () => {
        if (item.nome && item.quantidade) {
            try {
                await axios.put(`http://localhost:3000/epi/${id}`, item);
                setEdit(false);
                setItem({ nome: '', quantidade: '' });
                buscarDetalhesEpi();
            } catch (error) {
                console.error('Erro ao editar EPI:', error);
            }
        } else {
            alert('Por favor, preencha todos os campos para editar.');
        }
    };

    return (
        <div className="container">
            <h1>Gestão de EPIs</h1>
            {edit ? (
                <>
                    <div className="campoNome">
                        <input
                            type="text"
                            data-cy="nome-editar"
                            value={item.nome}
                            onChange={(e) => setItem({ ...item, nome: e.target.value })}
                            placeholder="Ex: Capacete"
                        />
                        <input
                            type="number"
                            data-cy="quantidade-editar"
                            value={item.quantidade}
                            onChange={(e) => setItem({ ...item, quantidade: e.target.value })}
                            placeholder="Ex: 10"
                        />
                    </div>
                    <button className="botaoEditar2" data-cy="botaoEditar2" onClick={() => editar()}>
                        Editar
                    </button>
                </>
            ) : (
                <div id="epi-form">
                    <div>
                        <label className="pe">Nome do EPI</label>
                        <input
                            type="text"
                            id="name"
                            data-cy="nome-epi"
                            value={epiName}
                            onChange={(e) => setEpiName(e.target.value)}
                            placeholder="Ex: Capacete"
                            required
                        />
                    </div>

                    <div className="pe">
                        <p>Quantidade</p>
                        <input
                            type="number"
                            id="quantity"
                            data-cy="quantidade-epi"
                            value={epiQuantity}
                            onChange={(e) => setEpiQuantity(e.target.value)}
                            placeholder="Ex: 10"
                            required
                        />
                    </div>

                    <button type="submit" className="btn" data-cy="adicionar-epi" onClick={() => adicionar()}>
                        Cadastrar EPI
                    </button>
                </div>
            )}

            <div className="conteiner_table">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {epiList.map((epi) => (
                            <tr key={epi.id}>
                                <td>{epi.nome}</td>
                                <td>{epi.quantidade}</td>
                                <td>
                                    <div className="conjuBotao">
                                        <button
                                            className="btnEditar"
                                            data-cy="editar-epi"
                                            onClick={() => {
                                                setEdit(true);
                                                setId(epi.id);
                                                setItem({ nome: epi.nome, quantidade: epi.quantidade });
                                            }}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="btnExcluir"
                                            data-cy="excluir-epi"
                                            onClick={() => deletar(epi.id)}
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h3>
                <Link to={'/CadastrarFuncionario'}>Ir para Cadastrar Funcionário</Link>
            </h3>
            <h3>
                <Link to={'/'}>Ir para Home</Link>
            </h3>
        </div>
    );
}
