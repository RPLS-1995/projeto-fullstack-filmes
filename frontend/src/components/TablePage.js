// src/components/TablePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';  // Certifique-se de que o caminho está correto

const TablePage = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/filmes/');
        setDados(response.data);
      } catch (error) {
        console.error(error);
        alert('Erro ao buscar os dados');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-page">
      <h1>Filmes Consultados</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Filme</th>
            <th>Ano do Filme</th>
            <th>Data/Hora da Consulta</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dado) => (
            <tr key={dado._id}>
              <td>{dado.nome}</td>
              <td>{dado.filme}</td>
              <td>{dado.ano_do_filme}</td>
              <td>{new Date(dado.data_hora_consulta).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
