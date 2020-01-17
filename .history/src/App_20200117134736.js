import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListNews from './components/news/ListNews';
import Search from './components/Search';
import {GLOBAL} from './config/constants'

class App extends Component {

  state = {

    news: []
  }
  async componentDidMount(){

    this.getNoticias();
    
  }

  getNoticias =  async (category = 'general') => {
    const url = `${GLOBAL.url}${GLOBAL.version}top-headlines?country=co&category=${category}&apiKey=${GLOBAL.apiKey}`;

    const response = await fetch(url);
    const news = await response.json();

    this.setState({
      news: news.articles
    })
  }

  render() {
    return (

      <Fragment>
      <Header titulo= "Noticias Harry"/>
      <div className ="container white contenedor-noticias">

<Search getNoticias = {this.getNoticias}/>
<ListNews news = {this.state.news}/>

      </div>
      </Fragment>
    );
  }
}

export default App;
