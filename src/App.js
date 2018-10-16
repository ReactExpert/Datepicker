import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import Content from './Components/Content';
import Footer from './Components/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
