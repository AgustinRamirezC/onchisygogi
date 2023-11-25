import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <nav className='cajamayor'>
        <div className='titulo'>
            <h2>10 años juntos</h2>
            <p>Onchis + Gogi = <img width="25" height="25" src="https://img.icons8.com/fluency-systems-filled/48/F25081/like.png" alt="like"/></p>
        </div>
        <nav className='cajamadre'>
            <div className='fotosantes'>
                <p>antes</p>
                <Link to='/antes'><img className='gorracoconut' src='/img/gorracoconutlejos.JPG' alt="."></img></Link>
            </div>
            <div className='fotosdespues'>
                <p>después</p>
                <Link to='/despues'><img src='/img/pinapaz.JPG' alt="."></img></Link>
            </div>
        </nav>
        </nav>
    );
}

export default Home;