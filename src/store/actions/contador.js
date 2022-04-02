export const ativarContador = () => ({
  type: 'ativar'
});

export const adicionarContador = () => ({
  type: 'adicionar'
});

export const subtrairContador = () => ({
  type: 'subtrair'
});

export const digitarValorContador = (payload) => ({
  type: 'digitarValor',
  payload: payload
});
