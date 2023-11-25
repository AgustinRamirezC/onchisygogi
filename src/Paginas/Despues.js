import React from 'react';
import {Link} from 'react-router-dom';

function Despues(){
    return(
        <React.Fragment>
        <div className='titulo1'>
            <p>Lo que somos ahora  <Link to='/'><img width="25" height="25" src="https://img.icons8.com/fluency-systems-filled/48/F25081/like.png" alt="like"/></Link></p>
        </div>
        <nav className='cajamadreDespues'>
            <img src='/img/adidas.jpg' alt="."></img>
            <img src='/img/lengua.jpg' alt="."></img>
            <img src='/img/brownieplanet.jpg' alt="."></img>
            <img src='/img/camasonrisas.jpg' alt="."></img>
            <img src='/img/camatirados.jpg' alt="."></img>
            <img src='/img/chorimobil.jpg' alt="."></img>
            <img src='/img/estaciondetren.jpg' alt="."></img>
            <img src='/img/galpon.JPG' alt="."></img>
            <img src='/img/obelisco.jpg' alt="."></img>
            <img src='/img/betular.jpg' alt="."></img>
            <img src='/img/museo.jpg' alt="."></img>
            <img src='/img/onchisfuriosa.JPG' alt="."></img>
            <img src='/img/onchisnariz.jpg' alt="."></img>
            <img src='/img/onchisroja.jpg' alt="."></img>
            <img src='/img/selfieremeraroja.jpg' alt="."></img>
            <img src='/img/pinaabrazo.JPG' alt="."></img>
            <img src='/img/pinapaz.JPG' alt="."></img>
            <img src='/img/pinafakiu.JPG' alt="."></img>
            <img src='/img/pinacaminando.JPG' alt="."></img>
            <img src='/img/pinamirandocamara.JPG' alt="."></img>
            <img src='/img/pinamirandocostado.JPG' alt="."></img>
            <img src='/img/remeraroja2.JPG' alt="."></img>
            <img src='/img/selfiepelado.JPG' alt="."></img>
            <img src='/img/subway.jpg' alt="."></img>
            <img src='/img/tiradosenlaplaya.jpg' alt="."></img>
            <img src='/img/tiradosenlaplaya2.jpg' alt="."></img>
            <img src='/img/tiradosenlaplayaonchis.jpg' alt="."></img>
        </nav>
        <div className='titulo1'>
            <p><Link to='/river'>Si queres ver la mejor foto de todas, apreta acá</Link></p>
        </div>
        </React.Fragment>
    );
}

export default Despues;