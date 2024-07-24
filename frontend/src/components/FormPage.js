import React, { useState } from 'react';
import axios from 'axios';

const FormPage = () => {
  const [nome, setNome] = useState('');
  const [filme, setFilme] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/filmes/', {
        nome,
        filme,
        ano_do_filme: new Date().getFullYear()  // Supondo que estamos pegando o ano atual
      });
      console.log(response.data);
      alert('Dados enviados com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar os dados');
    }
  };

  return (
    <div>
      <h1>Buscar Filme</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>Filme:</label>
          <input type="text" value={filme} onChange={(e) => setFilme(e.target.value)} />
        </div>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default FormPage;
