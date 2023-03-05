/*import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//         Mohammad Al-Hayat 
//         </p>
        
//       </header>
//     </div>
//   );
// }


import React from 'react';
class App extends React.Component
{
  render() {
   return (
     <div>
       <h1>Hello Mr Hayatul</h1>
       <h1>md sazwan</h1>
       <h1>Hello Mr Hayatul</h1>
       <h1>md sazwan</h1>
     </div>
   )
 }
}

export default App;
*/

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/body/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/footer/Footer';
import MenBody from './components/Men.js/MenBody';
import WomenBody from './components/women/WomenBody';
import KidsBody from './components/kids/KidsBody';
import HomeAndLiving from './components/homeAndLiving/HomeAndLiving';
import LogIn from './components/login/LogIn';
import WishList from './components/wishlist/WishList';
import FilterMen from './components/filter/FilterMen';

import FilterCards from './components/filter/FilterCards';




function App() {

  return (
    <Router>
      <div className="App">

        <Navigation />
        <Route exact path={'/'} component={Home} />
        <Route path={'/men'} component={MenBody} />
        <Route path={'/women'} component={WomenBody} />
        <Route path={'/kids'} component={KidsBody} />
        <Route path={'/homeandliving'} component={HomeAndLiving} />
        <Route path={'/login'} component={LogIn} />
        <Route path={'/wishlist'} component={WishList} />
        <Route path={'/filtermen'} component={FilterMen} />

        <Route path={'/filtercard'} component={FilterCards} />
        <Footer />
        <hr />
      </div>
    </Router>
  );
}

export default App;