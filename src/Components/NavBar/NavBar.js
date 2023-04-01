import CartWidget from "../CardWidget/CardWidget"


const NavBar = () => {
    return (
        <nav>
            <h3>Reposteria</h3>
            <div>
                <button>Postres</button>
                <button>Tortas</button>
                <button>Helados</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar