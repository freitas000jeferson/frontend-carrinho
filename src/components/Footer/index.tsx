import React from 'react';

import { MainFooter } from './styled';

const Footer: React.FC = () => {
  return <MainFooter>
    <p>Todos direitos reservados &copy;| 2021</p>
    <h3>Products Store App</h3>
    <p>Feito por Jeferson Gonçalves de Freitas</p>
    <p>
      <a href="https://github.com/freitas000jeferson/"><i className='fab fa-github icon'></i></a>
      <a href="https://www.linkedin.com/in/jeferson-freitas-5705951a0/"><i className='fab fa-linkedin icon'></i></a>
    </p>
  </MainFooter>;
}

export default Footer;