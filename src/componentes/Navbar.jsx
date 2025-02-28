import CartWidget from "./CartWidget"

const Navbar = () => {
    return(
        <header>
        <nav className="navContainer">
            <img src='./iconWhite.png' alt='logo'></img>
            <a href="">Home</a>
            <a href="">Nuevos</a>
            <a href="">Mas vendidos</a>
            <a href="">Ofertas</a>
            <CartWidget className="carrito"/>
        </nav>
        </header>
    )
}

export default Navbar