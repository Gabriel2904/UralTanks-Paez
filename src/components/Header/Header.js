import React from 'react';
import './Header.css';
import Cards from './../Cards/Cards'

const Header = (props) => {
  return (
  <div className='Header'>
      <h1>{props.title}</h1>
      <Cards title='Historia' subtitle='loquesea' />
      <Cards title='Actualidad' subtitle='loquesea'/>
      <Cards title='Futuro' subtitle='loquesea'/>
  </div>
  );
};

export default Header;
