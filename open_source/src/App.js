import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Open Source</h1>
        <h2>Debian</h2>
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <p>
          Uso de Debian
        </p>
        <p>
          Debian es utilizado en uso de oficina para poder programar o poder relizar servidores de grandes servidores
        </p>
        <p>
          Caraterisiticas
        </p>
        <ul>
          <li>
            La disponibilidad en varias arquitecturas. La versión estable incluye soporte para 12 plataformas
          </li>
          <li>
            Una amplia colección de software disponible. La versión 9.0 viene con más de ≈ 51.000
          </li>
          <li>
            Su compromiso con los principios y valores involucrados en el movimiento del Software Libre.
          </li>
          <li>
            No tiene marcado ningún entorno gráfico en especial, pudiéndose no instalar ninguno, o instalar GNOME, KDE, MATE, Xfce, LXDE, Enlightenment u otro.
          </li>
            <li>
            Gran Informacion de mi Compañero.
          </li>
        </ul>
        <p>
          Empresa:
          <br></br>
          Proyecto Debian
        </p>
      </header>
    </div>
  );
}

export default App;
