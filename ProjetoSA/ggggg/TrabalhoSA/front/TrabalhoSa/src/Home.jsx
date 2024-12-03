import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function Home() {
    const buscarDetalhesEpi = async () => {
        const response = await axios.get('http://localhost:3000/epis');
        setEpi(response.data.detalhes);
    };

    const detalhesFuncionario = async () => {
        const response = await axios.get("http://localhost:3000/funcionarios");
        setListFuncionario(response.data.detalhes);
    };

    const [listFuncionario, setListFuncionario] = useState([]);
    const [epi, setEpi] = useState([]);

    useEffect(() => {
        buscarDetalhesEpi();
        detalhesFuncionario();
    }, []);

    const combinedData = listFuncionario.map((funcionario, index) => {
        return {
            ...funcionario,
            epi: epi[index] || {}, 
        };
    });

    return (
        <div className='container'>
            <div className='containerH1'>
                <h1>Históricos de Retirada e Devoluções por EPI e Funcionário</h1>
            </div>

            <h3><Link to={'/CadastrarEpi'}>Cadastrar Epis</Link></h3>
            <h3><Link to={'/historicoRetirada'}>Retirada Epis</Link></h3>

            <table>
                <thead>
                    <tr>
                        <th>Funcionário</th>
                        <th>CPF</th>
                        <th>EPI</th>
                    </tr>
                </thead>
                <tbody>
                    {combinedData.map((data, index) => (
                        <tr key={index}>
                            <td data-cy="historico-nome">{data.nome}</td>
                            <td data-cy="historico-cpf">{data.cpf}</td>
                            <td data-cy="historico-epi">{data.epi.nome || 'Capacete'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
