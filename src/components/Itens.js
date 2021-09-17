import React from "react";

class Itens extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.quantidade}x</p>
        <p>{this.props.nome}</p>
        <button onClick={this.props.removerItens}>REMOVER</button>
      </div>
    );
  }
}

export default Itens;
