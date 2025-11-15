import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'flex-end',
            backgroundColor: '#454748ff',
            gap: '20px',
            padding: '20px 30px',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000
        }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#aaaeb2ff', borderBottom: '1px solid #aaaeb2ff' }}>Home</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: '#aaaeb2ff', borderBottom: '1px solid #aaaeb2ff' }}>About</Link>
            <Link to="/services" style={{ textDecoration: 'none', color: '#aaaeb2ff', borderBottom: '1px solid #aaaeb2ff' }}>Services</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#aaaeb2ff', borderBottom: '1px solid #aaaeb2ff' }}>Contact</Link>
        </nav>
    );
}

export default Navbar;