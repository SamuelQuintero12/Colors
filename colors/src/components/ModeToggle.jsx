export default function ModeToggle({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Modo Light" : "Modo Dark"}
    </button>
  );
}
