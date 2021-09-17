import React from "react";
import Itens from "./Itens";
import "./styles/App.css";

class Carrinho extends React.Component {
  render() {
    const itens =
      this.props.itensDoCarrinho &&
      this.props.itensDoCarrinho.map((item) => {
        return (
          <Itens
            nome={this.props.nome}
            valorTotal={this.props.valorTotal}
            quantidade={this.props.quantidade}
            removerItem={() => this.props.removerItem(item)}
          />
        );
      });
    return (
      <div className="carrinhoContainer">
        <h1>Carrinho:</h1>
        <div>{itens}</div>
        <h5>Valor Total : R${this.props.valorTotal}</h5>
      </div>
    );
  }
}

export default Carrinho;
