import React, { Component } from 'react';

class Search extends Component {

    state = {
        category: ''
    }

    componentDidMount(){
        this.setState({
            category: 'general'
        })
    }

    handleCategoy = e => {
        this.setState({
            category: e.target.value
        }, ()=> {
            this.props.getNoticias(this.state.category);
        })

        //enviarlo a la princiale
       
    }

    render() {
        return (
            <div className="buscardor row">
                <div className = "col s12 m8 offset-m2">
                    <form>
                        <h2>
                            Categorias
                        </h2>
    
                        <div className ="input-field col s12 m8">
    
                            <select onChange={this.handleCategoy} >
                                <option value = "general">General</option>
                                <option value = "business">Business</option>
                                <option value = "entertainment">Entertainment</option>
                                <option value = "health">Health</option>
                                <option value = "science">Science</option>
                                <option value = "sports">Sports</option>
                                <option value = "technology">Technology</option>
                            </select>
    
                        </div>
                    </form>
                </div>
    
    
            </div>
        );
    }
}

export default Search;