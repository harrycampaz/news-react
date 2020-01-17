import React from 'react';

const Search = () => {

    state ={
        category: ''
    }

    return (
        <div className="buscardor row">
            <div className = "col s12 m8 offset-2">
                <form>
                    <h2>
                        Categorias
                    </h2>

                    <div className ="input-field col s12 m8">

                        <select onChange={this.category}>
                            <option value = "general">General</option>
                            <option value = "business">business</option>
                            <option value = "entertainment">entertainment</option>
                            <option value = "health">health</option>
                            <option value = "science">science</option>
                            <option value = "sports">sports</option>
                            <option value = "technology">technology</option>
                        </select>

                    </div>
                </form>
            </div>


        </div>
    );
};

export default Search;