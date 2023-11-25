import React from 'react';
import {Link} from 'react-router-dom';

function Sorpresa(){
    return(
        <nav className='cajamadreSorpresa'>
            <p>Te amo, sos lo mejor que me paso. Felices 10 años y vamos por muchos más.</p>
            <Link to='/'><img width="25" height="25" src="https://img.icons8.com/fluency-systems-filled/48/F25081/like.png" alt="like"/></Link>
        </nav>
    );
}

export default Sorpresa;