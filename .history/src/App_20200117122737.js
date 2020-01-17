import React, { Component, Fragment } from 'react';
import Header from './components/Header';
// e2e31acf44744967adbfc05c32672e50
class App extends Component {

  state = {

    noticias: []
  }
  async componentDidMount(){

    this.getNoticias();
    
  }

  getNoticias =  async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=e2e31acf44744967adbfc05c32672e50`;

    const response = await fetch(url);
    const noticias = await response.json();

    console.log(noticias);
    this.setState({
      noticias: noticias.articles
    })
  }

  render() {
    return (

      <Fragment>
      <Header titulo= "Noticias Harry"/>
      <div className ="container white news-container">

      </div>
      </Fragment>
    );
  }
}

export default App;
