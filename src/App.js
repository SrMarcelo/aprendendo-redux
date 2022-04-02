import classes from './contador.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsContador from './store/actions/contador';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  const ativarContadorHandler = () => {
    dispatch(actionsContador.ativarContador());
  };

  const adicionarContadorHandler = () => {
    dispatch(actionsContador.adicionarContador());
  };

  const subtrairContadorHandler = () => {
    dispatch(actionsContador.subtrairContador());
  };

  const stateContador = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    console.log(stateContador);
  }, [stateContador]);

  return (
    <main className={classes.contador}>
      <h1>Contador</h1>
      <div>
        {stateContador.ativado ? (
          <p className={classes.valor}>{stateContador.contador}</p>
        ) : (
          <p>Ative o contador</p>
        )}
      </div>
      <div>
        {stateContador.ativado ? (
          <div>
            <button onClick={adicionarContadorHandler}>+</button>
            <button onClick={subtrairContadorHandler}>-</button>
          </div>
        ) : (
          <button onClick={ativarContadorHandler}>Ativar</button>
        )}
      </div>
    </main>
  );
}

export default App;
