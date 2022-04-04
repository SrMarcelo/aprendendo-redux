import { createSlice } from '@reduxjs/toolkit';

const stateInicial = {
  contador: 0,
  clicks: 0,
  ativado: false
};

const sliceContador = createSlice({
  name: 'contador',
  initialState: stateInicial,
  reducers: {
    ativar(state) {
      state.ativado = true;
      state.clicks += 1;
    },
    adicionar(state) {
      state.contador += 1;
      state.clicks += 1;
    },
    subtrair(state) {
      state.contador -= 1;
      state.clicks += 1;
    },
    digitarValor(state, action) {
      state.contador = action.payload.valor;
    }
  }
});

export const actionsContador = sliceContador.actions;

export default sliceContador;
