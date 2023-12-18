import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul>
                <li>Home</li>
                <li>Contacto</li>
                <li>Productos</li>
                <li>Promociones</li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    );
};

export default NavBar;
