import React from "react";
import Style from "../page1/Style.module.css";
import Imagem from '../img/sol.png'
import DataHoje from "../page2";
import Card from '../card/Index.jsx';
import Footer from "../footer/Index.jsx";

const Header = () => {
  return (
    <nav className={Style.nav}>
      <div className={Style.container}>
        <li>Recife</li>
      </div>
      <div className={Style.mid}>
        <div className={Style.now}>
          <h1>AGORA</h1>
          {<DataHoje />}
          <img className={Style.imgsol} src={Imagem} alt="Sol" />
        </div>
        <div className={Style.info}>
          <h1>Informações</h1>
        </div>
        
      </div>
      <div className={Style.card}>
        <Card inform1='temperatura' inform2='21°'></Card>
        <Card inform1='temperatura' inform2='21°'></Card>
        <Card inform1='temperatura' inform2='21°'></Card>
        <Card inform1='temperatura' inform2='21°'></Card>
      </div>
      <Footer/>
    </nav>
  );
};

export default Header;
