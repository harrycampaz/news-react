import React, { Component } from 'react';
// e2e31acf44744967adbfc05c32672e50
class App extends Component {

  async componentDidMount(){

    state = {

      noticias: []
    }
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=e2e31acf44744967adbfc05c32672e50`;

    const response = await fetch(url);
    const noticias = await response.json();

    console.log(noticias);
    this.setState({
      state: noticias
    })
    
  }

  render() {
    return (
      <div>
        harry
      </div>
    );
  }
}

export default App;
