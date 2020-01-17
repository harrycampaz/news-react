import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListNews from './components/news/ListNews';

class App extends Component {

  state = {

    news: []
  }
  async componentDidMount(){

    this.getNoticias();
    
  }

  getNoticias =  async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=e2e31acf44744967adbfc05c32672e50`;

    const response = await fetch(url);
    const news = await response.json();

    console.log(noticias);
    this.setState({
      news: news.articles
    })
  }

  render() {
    return (

      <Fragment>
      <Header titulo= "Noticias Harry"/>
      <div className ="container white contenedor-noticias">

<ListNews news = {this.state.news}/>

      </div>
      </Fragment>
    );
  }
}

export default App;
