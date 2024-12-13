import react from 'react';

function Contato() {
    return (
        <div id='Contato'>
            <form >
                <label>Nome: </label><br />
                <input placeholder='Digite aqui...' /><br />
                <label>Email: </label><br />
                <input placeholder='Digite aqui...' /><br />
                <label>CPF: </label><br />
                <input placeholder='Digite aqui...' /><br />
                <label>Mensagem: </label><br />
                <textarea placeholder='Digite aqui...' /><br />
                <input type='submit' id='Enviar'/><br/>
            </form>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14396.680642568337!2d-48.54874065!3d-25.566004999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db9004be97793f%3A0xc74d266cea0c5ae4!2sR.%20Gilberto%20Elias%20Chaiben%20-%20Parque%20S%C3%A3o%20Jo%C3%A3o%2C%20Paranagu%C3%A1%20-%20PR%2C%2083212-510!5e0!3m2!1spt-BR!2sbr!4v1734025122749!5m2!1spt-BR!2sbr" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Contato;