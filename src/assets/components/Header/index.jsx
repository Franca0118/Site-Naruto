import './Header.css'

function Header() {
    return (
        <header>
            <a href="/"><img src="https://logopng.com.br/logos/naruto-138.png"/></a>
            <ul>
                <li><a href="/Clans">Clas</a></li>
                <li><a href="/Poderes">Poder</a></li>
                <li><a href="/Aldeias">Aldeia</a></li>
                <li><a href="/TodosPersonagens">Todos os personagens</a></li>
            </ul>
            <div id='borda'> </div>
        </header>
    )    
}

export default Header
