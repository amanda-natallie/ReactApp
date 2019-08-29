/*  Redux */
import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
/*  Reducers */
import CadastroCliente from './CadastroCliente'
const combineReducer = combineReducers({
  form: formReducer,
  CadastroCliente
})

/*  Store */
export const store = createStore(combineReducer)

