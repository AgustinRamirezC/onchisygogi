import React from 'react';
import {Link} from 'react-router-dom';

function Antes(){
    return(
        <React.Fragment>
        <div className='titulo1'>
            <p>Lo que eramos antes  <Link to='/'><img width="25" height="25" src="https://img.icons8.com/fluency-systems-filled/48/F25081/like.png" alt="like"/></Link></p>
        </div>
        <nav className='cajamadreAntes'>
            <img src='/img/15zoe.JPG' alt="."></img>
            <img className='barcomirandonos' src='/img/barcomirandonos.JPG' alt="."></img>
            <img className='barcomirandonos' src='/img/gorracoconutlejos.JPG' alt="."></img>
            <img src='/img/agarrandopelo.JPG' alt="."></img>
            <img className='barbaonchis' src='/img/barbaonchis.JPG' alt="."></img>
            <img src='/img/barcomirandoparaatras.JPG' alt="."></img>
            <img src='/img/colegioabrazados.JPG' alt="."></img>
            <img src='/img/cortandopelo.JPG' alt="."></img>
            <img src='/img/fotodecaida.JPG' alt="."></img>
            <img src='/img/colegiopatiomirandocamara.JPG' alt="."></img>
            <img src='/img/colegiopatiomirandome.JPG' alt="."></img>
            <img src='/img/colegiopatioonchisdiosa.JPG' alt="."></img>
            <img src='/img/frankfurt.JPG' alt="."></img>
            <img className='gorracoconutcerca' src='/img/gorracoconutcerca.JPG' alt="."></img>
            <img src='/img/grasunguis.JPG' alt="."></img>
            <img src='/img/selfieauto.JPG' alt="."></img>
            <img className='ventiladorabrazados' src='/img/ventiladorabrazados.JPG' alt="."></img>
        </nav>
        </React.Fragment>
    );
}

export default Antes;