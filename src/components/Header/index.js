import React from 'react';
import './styles.css';

import logopotion from '../../assets/logopotion.png';
import search1 from '../../assets/search1.png';
import bag from '../../assets/bag.png';

const Header = () => 
  <header className="mainHeader">
    <div className="container">
      <img src={logopotion} />
      <div className="divBusca">
        <img src={search1} alt="Buscar"/>
        <input type="text" className="txtBusca" placeholder="Searsh our stock"/>
      </div>
      <div className="groupbag">
        <p className="shipping">Free shipping<br /> on orders over $50</p>
        <img src={bag} />
        <p className="bagtext">BAG: 1</p>
      </div>
    </div>
  </header>


export default Header;