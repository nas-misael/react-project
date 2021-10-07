import React, { Component } from 'react';
class ListaDeCategorias extends Component {
    _handleEventoInput(e){
        if(e.key === "Enter"){
            let valorCategoria = e.target.value
            this.props.adicionarCategoria(valorCategoria)
        }
    }

    render() { 
        return (
            <section>
                <input type="text" placeholder="Adicionar Categoria" onKeyUp={this._handleEventoInput.bind(this)}/>
                <ul>
                    {this.props.categorias.map((categoria, index) => {
                        return <li key={index}>{categoria}</li>
                    })}
                </ul>
            </section>
        )
    }
}
 
export default ListaDeCategorias;