export default function Header({ darkMode }) {
    return <h1  className={`header ${darkMode ? "dark" : "light"}`}>Aplicación Interactiva</h1>;
  }
  