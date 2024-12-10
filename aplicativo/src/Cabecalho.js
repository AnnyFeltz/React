import react from 'react';
import Menu from './Menu';

function Cabecalho() {
    return (
        <div id='Cabecalho'>
            <img id='Logo' src='/img/logo.png'/>
            <Menu/>
        </div>
    );
}

export default Cabecalho;