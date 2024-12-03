import { useEffect, useState } from 'react';
import axios from 'axios';
import './cadastro.css';
import { Link } from 'react-router-dom';

export function HistoricoRetirada() {

    const [epi, setEpi] = useState([]);
    const [epiName, setEpiName] = useState('');
    const [epiQuantity, setEpiQuantity] = useState('');
    const [epiList, setEpiList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(0);
    const [item, setItem] = useState({ nome: "", quantidade: "" });
    const [listFuncionario, setListFuncionario] = useState([]);

    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const [cpfFuncionario, setCpfFuncionario] = useState('');

    useEffect(() => {
        detalhesFuncionario();
    }, []);

    const buscarDetalhesEpi = async () => {
        const response = await axios.get('http://localhost:3000/epis');
        setEpiList(response.data.detalhes);
        console.log(response.data.detalhes);
    };

    const detalhesFuncionario = async () => {
        const response = await axios.get("http://localhost:3000/funcionarios");
        setListFuncionario(response.data.detalhes);
        console.log(response.data.detalhes);
    };

    const adicionar = async () => {
        const response = await axios.post("http://localhost:3000/epi", { nome: epiName });
        buscarDetalhesEpi();
        adicionarFuncionario();
    };

    const adicionarFuncionario = async () => {
        const response = await axios.post("http://localhost:3000/funcionario", { nome: nomeFuncionario, cpf: cpfFuncionario });
        detalhesFuncionario();
    };

    return (
        <div className="container">
            <h1>Retirada de Epis</h1>
            {edit ? (
                <>
                    <div className="campoNome">
                        <input type="text" onChange={(e) => item.nome = e.target.value} placeholder="Ex: Capacete" />
                        <input type="number" onChange={(e) => item.quantidade = e.target.value} placeholder="Ex: 10" />
                    </div>
                    <div className="botaoEditar2" onClick={() => editar()}>Editar</div>
                </>
            ) : (
                <div id="epi-form">
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            data-cy="nome-retirada"
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
                            data-cy="cpf-retirada"
                            value={cpfFuncionario}
                            onChange={(e) => setCpfFuncionario(e.target.value)}
                            placeholder="Ex: 12345678912"
                            required
                        />
                    </div>

                    <div>
                        <label className='pe'>Nome do EPI</label>
                        <input
                            type="text"
                            id="name"
                            data-cy="epi-retirada"
                            value={epiName}
                            onChange={(e) => setEpiName(e.target.value)}
                            placeholder="Ex: Capacete"
                            required
                        />
                    </div>

                    <button type="submit" className="btn" data-cy="botao-retirada" onClick={() => adicionar()}>
                        {editIndex !== null ? 'Atualizar EPI' : 'Retirar Epi'}
                    </button>
                </div>
            )}

            <h3><Link to={'/CadastrarFuncionario'}>Ir para Cadastrar Funcionario</Link></h3>
            <h3><Link to={'/'}>Ir para Home</Link></h3>

            
        </div>
    );
}
