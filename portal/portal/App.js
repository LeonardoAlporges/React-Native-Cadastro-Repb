import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, } from 'redux';
import Reducers from  './src/Reducers';
import Main from './src/pages/Main';
import Cadastro from './src/pages/Cadastro';

let store = createStore(Reducers);

class App extends Component {
  render(){
      return (
        <Provider store={store}>
          <Main></Main>
        </Provider>
    );
  }
}

export default App;
