import { useNavigate } from "react-router-dom";
import "./Header.css";
function Header() {
  const navigate = useNavigate();

  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <header>
      <div className="btn-div">
        <button onClick={() => handleNavigation("/")}>Home</button>
        <button onClick={() => handleNavigation("/users")}>Users</button>
        <button onClick={() => handleNavigation("/books")}>Books</button>
        <button onClick={() => handleNavigation("/weather")}>Weather</button>
        <button onClick={() => handleNavigation("/jobs")}>Jobs</button>
        <button onClick={() => handleNavigation("/movies")}>Movies</button>
      </div>
    </header>
  );
}
export default Header;
