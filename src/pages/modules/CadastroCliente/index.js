const CLIENT_ADDED = 'modules/CadastroCliente/SENT'

export const CadastroEnviado = values => {
  return {
    type: CLIENT_ADDED,
    payload: values
  }
}

const initialState = {
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_ADDED:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state
  }
}
