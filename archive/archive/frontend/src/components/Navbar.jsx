import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import logo from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="nav">
      {/* Logo → Home */}
      <Link to="/" className="logo">
        <img src={logo} alt="Divija Speciality Polymers" />
      </Link>

      <nav className="nav-links">
        <Link to="/" className="home-link" aria-label="Home">
          <HomeIcon className="home-icon" />
        </Link>

        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/applications">Applications</Link>
        {/* <Link to="/industries">Industries</Link> */}
        <Link to="/team">The Team</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}