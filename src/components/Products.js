import React from "react";
import { ProductCard } from "./ProductCard";

import "./styles/App.css";

export class Products extends React.Component {
  state = {
    sort: "DECRESCENTE",
  };

  getFilteredAndOrderedList = () => {
    return this.props.products
      .filter((product) =>
        this.props.buscaMax ? product.price < this.props.buscaMax : true
      )
      .filter((product) =>
        this.props.buscaMin ? product.price > this.props.buscaMin : true
      )
      .filter((product) =>
        this.props.buscaNome
          ? product.name
              .toLowerCase()
              .includes(this.props.buscaNome.toLowerCase())
          : true
      )
      .sort((a, b) =>
        this.state.sort === "CRESCENTE" ? a.price - b.price : b.price - a.price
      );
  };

  onChangeSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  render() {
    const filteredAndOrderedList = this.getFilteredAndOrderedList();
    console.log("product js", this.props.buscaMax);
    return (
      <div className="produtos-container-card">
        <div className="produtos-header">
          <p>Quantidade de produtos: {filteredAndOrderedList.length}</p>
          <label>
            Ordenação:
            <select value={this.state.sort} onChange={this.onChangeSort}>
              <option value={"CRESCENTE"}>Crescente</option>
              <option value={"DECRESCENTE"}>Decrescente</option>
            </select>
          </label>
        </div>
        <div className="produtos-grid">
          {filteredAndOrderedList.map((product) => {
            return (
              <ProductCard
                product={product}
                key={product.id}
                onAddProductToCart={this.props.onAddProductToCart}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
