import React, { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';  // Certifique-se de que o caminho está correto

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
    <div className="form-page">
      <h1>Buscar Filme</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-input"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="filme">Filme:</label>
          <input
            id="filme"
            type="text"
            value={filme}
            onChange={(e) => setFilme(e.target.value)}
            className="form-input"
            placeholder="Digite o nome do filme"
          />
        </div>
        <button type="submit" className="submit-button">Buscar</button>
      </form>
    </div>
  );
};

export default FormPage;
