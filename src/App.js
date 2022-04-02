import classes from './contador.module.css';

function App() {
  return (
    <main className={classes.contador}>
      <h1>Contador</h1>
      <div>
        <p className={classes.valor}>0</p>
        <p>Ative o contador</p>
      </div>
      <div>
        <button className={classes.botao}>+</button>
        <button>-</button>
        <button>Ativar</button>
      </div>
    </main>
  );
}

export default App;
