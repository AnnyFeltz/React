import react from 'react';
import Cabecalho from './Cabecalho';
import cabecalho from './Cabecalho'

function Home() {
    return (
        <div>
            <div id='Home'>
                <h1>Bem-vindo à página Home!</h1>
                <p>Esta é a página inicial! Não tem muita coisa.</p>
            </div>

            <div id='Foto'>
                <img id='Imagem' src='/img/Home.jpg'></img>
                <img id='Imagem' src='/img/Home2.jpg'></img>
                <img id='Imagem' src='/img/Home3.jpg'></img>
            </div>
        </div>
    );
} export default Home;