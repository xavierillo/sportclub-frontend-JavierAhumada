import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <h1 className="logo">SportClub</h1>
            <nav className="nav">
                <a href="#">Inicio</a>
                <a href="#">Clases</a>
                <a href="#">Contacto</a>
            </nav>
        </header>
    );
}