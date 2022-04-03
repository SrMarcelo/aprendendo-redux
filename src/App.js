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

  const digitarValorHandler = (event) => {
    dispatch(
      actionsContador.digitarValorContador({
        valor: parseInt(event.target.value)
      })
    );
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
          <div>
            <input
              className={classes.valor}
              type="number"
              value={stateContador.contador}
              onChange={digitarValorHandler}
            />
            {/* <p className={classes.valor}>{stateContador.contador}</p> */}
          </div>
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
