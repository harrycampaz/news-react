import React from 'react';

const Search = () => {
    return (
        <div className="buscardor row">
            <div className = "col s12 m8 offset-2">
                <form>
                    <h2>
                        Categorias
                    </h2>

                    <div className ="input-field col s12 m8">

                        <select>
                            <option value = "general"> General

                            </option>
                        </select>

                    </div>
                </form>
            </div>


        </div>
    );
};

export default Search;