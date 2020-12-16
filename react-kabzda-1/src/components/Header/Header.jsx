import React from 'react';
import s from './Header.module.css';

const Header  = ()=>{
    return(
        <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png" />
      </header>
    );
}

export default Header