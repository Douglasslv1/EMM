import React from "react";
import Style from "../page1/Style.module.css";
import Imagem from '../img/sol.png'
import DataHoje from "../page2";
import Card from '../card/Index.jsx';
import Footer from "../footer/Index.jsx";
import Informs from "../informs/Index.jsx";

const Header = () => {

  return (
    <nav className={Style.nav}>
      <div className={Style.container}>
        <p>Recife | Pernambuco</p>
      </div>
      <div className={Style.mid}>
        <div className={Style.now}>
          <h1>AGORA</h1>
          {<DataHoje />}
          <img className={Style.imgsol} src={Imagem} alt="Sol" />
        </div>
        <div className={Style.info}>
          <h1>Informações</h1>
          <div className={Style.classificacao}>
            <Informs text1='Temperatura' text2='máx 32°' text3='min 28°'/><hr />
            <Informs text1='Temperatura' text2='máx 32°' text3='min 28°'/><hr />
            <Informs text1='Temperatura' text2='máx 32°' text3='min 28°'/><hr />
            <Informs text1='Temperatura' text2='máx 32°' text3='min 28°'/><hr />
            <Informs text1='Temperatura' text2='máx 32°' text3='min 28°'/><hr />
            <Informs text1='Temperatura' text2='máx 32°' text3='min 28°'/><hr />

          </div>
        </div>
      </div>
      <div className={Style.card}>
        <Card inform1='VELOCIDADE DO VENTO' inform2='6.17m/s°'></Card>
        <Card inform1='DISTÂNCIA PARA O AEROPORTO' inform2='38km°'></Card>
        <Card inform1='NASCER DO SOL' inform2='04:50:05°'></Card>
        <Card inform1='PÔR DO SOL' inform2='17:20:23°'></Card>
        <Card inform1='HORÁRIO' inform2='12:00:12'></Card>
      </div>
      <Footer/>
    </nav>
  );
};

export default Header;
