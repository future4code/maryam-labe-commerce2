import React from "react";
import "./styles/App.css";

class Carrinho extends React.Component {
  render() {
    return (
      <div className="carrinhoContainer">
        <h1>Carrinho:</h1>
        <h4>1 X Produto Legal</h4>
        <button>REMOVER</button>
      </div>
    );
  }
}

export default Carrinho;
