const stateInicial = {
  contador: 0,
  clicks: 0,
  ativado: false
};

const reducerContador = (state = stateInicial, action) => {
  switch (action.type) {
    case 'ativar':
      return {
        ...state,
        clicks: state.clicks + 1,
        ativado: true
      };
    case 'adicionar':
      return {
        ...state,
        contador: state.contador + 1,
        clicks: state.clicks + 1
      };
    case 'subtrair':
      return {
        ...state,
        contador: state.contador - 1,
        clicks: state.clicks + 1
      };
    case 'digitarValor':
      return {
        ...state,
        contador: action.payload.valor,
        clicks: state.clicks + 1
      };
    default:
      return state;
  }
};

export default reducerContador;
