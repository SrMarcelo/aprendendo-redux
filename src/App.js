import classes from './contador.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionsContador } from './store/reducers/contador';

function App() {
  const dispatch = useDispatch();

  const ativarContadorHandler = () => {
    dispatch(actionsContador.ativar());
  };

  const adicionarContadorHandler = () => {
    dispatch(actionsContador.adicionar());
  };

  const subtrairContadorHandler = () => {
    dispatch(actionsContador.subtrair());
  };

  const digitarValorHandler = (event) => {
    dispatch(
      actionsContador.digitarValor({
        valor: event.target.value !== '' ? parseInt(event.target.value) : 0
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
