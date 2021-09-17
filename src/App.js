import React from "react";
import "./components/styles/App.css";
import { Products } from "./components/Products";

import Filtro from "./components/Filtro";
import Carrinho from "./components/Carrinho";

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Nave Espacial Blaster Version",
        price: 1000,
        photo: "https://i.ibb.co/18ZyWFX/img1.png",
      },
      {
        id: 2,
        name: "Foguete Top das Galáxias",
        price: 18000,
        photo: "https://i.ibb.co/ryxNYvD/topdasgalaxias.png",
      },
      {
        id: 3,
        name: "Ônibus Espacial #AdeusTerra",
        price: 3000,
        photo: "https://i.ibb.co/5LXV1Kn/adeus-terra.png",
      },
      {
        id: 4,
        name: "Foguete na Planta -Previsão de Entrega: 2025",
        price: 7000,
        photo: "https://i.ibb.co/zs2m3Vn/naplanta.png",
      },
      {
        id: 5,
        name: "Foguete Nasa Só Para Baixinhos",
        price: 4000,
        photo: "https://i.ibb.co/6wp2fyn/sopara.png",
      },
      {
        id: 6,
        name: "Nave Espacial Missão McFly - Back to 1985",
        price: 1000,
        photo: "https://i.ibb.co/DkM9nts/mcfly.png",
      },
    ],
    maxFilter: "",
    minFilter: "",
    filtroNome: "",
    listaCarrinho: [],
    valorTotal: 0,
  };
  filtrarValorMin = (e) => {
    this.setState({ minFilter: e.target.value });
  };
  filtrarValorMax = (e) => {
    this.setState({ maxFilter: e.target.value });
  };

  filtrarPeloNome = (e) => {
    this.setState({ filtroNome: e.target.value });
  };

  adicionarProdutoCarrinho = (produto) => {
    const listaCarrinho = [...this.state.listaCarrinho];
    listaCarrinho.push(produto);
    this.setState({ listaCarrinho });
  };

  renderizarItensNoCarrinho = () => {};

  removerItensCarrinho = (produto) => {
    alert(produto);
  };

  render() {
    return (
      <div className="app-container">
        <Filtro
          filtrarMin={this.filtrarValorMin}
          filtrarMax={this.filtrarValorMax}
          filtroMin={this.state.minFilter}
          filtroMax={this.state.maxFilter}
          filtroNome={this.state.filtroNome}
          filtrarNome={this.filtrarPeloNome}
        />
        <div className="produtos-container">
          <Products
            buscaMin={this.state.minFilter}
            buscaMax={this.state.maxFilter}
            buscaNome={this.state.filtroNome}
            products={this.state.produtos}
            adicionarCarrinho={this.adicionarProdutoCarrinho}
          />
        </div>
        <Carrinho
          nome={this.state.listaCarrinho.name}
          itensDoCarrinho={this.state.listaCarrinho}
          valorTotal={this.state.valorTotal}
          quantidade={this.state.listaCarrinho.length}
          removerItens={this.removerItensCarrinho}
        />
      </div>
    );
  }
}

export default App;
