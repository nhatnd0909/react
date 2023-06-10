import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         {/* <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         <Menu dishes={this.state.dishes} /> */}
//         <Main />
//       </div>
//     );
//   }
// }

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;