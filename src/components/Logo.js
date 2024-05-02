import '../css/Logo.css';
import logo from '../resources/logo.png';

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Music" />
    </div>
  );
}

export default Logo;