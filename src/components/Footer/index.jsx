import React from 'react';
import img from "./../../assets/react.svg"
import "./style.scss"
import { context } from '../../context/context';
import { useContext } from 'react';

const footer = () => {
  const { lang, langs } = useContext(context);

  const t = lang[langs];

    return (
        <>
        <footer>
          <div className="container">
        <div className="footer d-flex justify-content-between">
          <a href="#link" className='footer__link'>
            <img src={img} className="img" alt="images" />
            React
          </a>
          <h5 className="text-center text-white">{new Date().getFullYear()}</h5>
          <small className='text-white'>{t.copyright}</small>
          </div>
        </div>  
          </footer>  
        </>
    );
};

export default footer;