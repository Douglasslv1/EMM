import React, { useState, useEffect } from 'react';
import Style from '../page2/Style.module.css'

const DataHoje = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    // Função para formatar a data no formato desejado
    const formatarData = (data) => {
      const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat('pt-BR', opcoes).format(data);
    };

    // Obter a data de hoje e formatar
    const hoje = new Date();
    setData(formatarData(hoje));
  }, []);

  return (
    <div className={Style.data}>
      <p>{new Date().getHours()}</p>
      <h1>Data de Hoje</h1>
      <p>{data}</p>
    </div>
  );
};

export default DataHoje;