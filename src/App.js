import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    const store = ConfigureStore();
    return (

      // <div className="App">
      //   {/* <Navbar dark color="primary">
      //     <div className="container">
      //       <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      //     </div>
      //   </Navbar>
      //   <Menu dishes={this.state.dishes} /> */}
      //   {/* <Main /> */}


      // </div>
      // <BrowserRouter>
      //   <div className="App">
      //     <Main />
      //   </div>
      // </BrowserRouter>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;