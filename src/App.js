import React from "react";
import "./components/styles/App.css";
import { Products } from "./components/Products";

import Filtro from "./components/Filtro";
import Carrinho from "./components/Carrinho";


const products = [
  {
    id: 1,
    name: "Nave Espacial Blaster Version",
    price: 10000,
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
    price: 30000,
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
    price: 100000,
    photo: "https://i.ibb.co/DkM9nts/mcfly.png",
  },
];

class App extends React.Component {
  // state= {
  //   products : [
  //     {
  //       id: 1,
  //       name: "Nave Espacial Blaster Version",
  //       price: 10000,
  //       photo: "https://i.ibb.co/18ZyWFX/img1.png",
  //     },
  //     {
  //       id: 2,
  //       name: "Foguete Top das Galáxias",
  //       price: 18000,
  //       photo: "https://i.ibb.co/ryxNYvD/topdasgalaxias.png",
  //     },
  //     {
  //       id: 3,
  //       name: "Ônibus Espacial #AdeusTerra",
  //       price: 30000,
  //       photo: "https://i.ibb.co/5LXV1Kn/adeus-terra.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Foguete na Planta -Previsão de Entrega: 2025",
  //       price: 7000,
  //       photo: "https://i.ibb.co/zs2m3Vn/naplanta.png",
  //     },
  //     {
  //       id: 5,
  //       name: "Foguete Nasa Só Para Baixinhos",
  //       price: 4000,
  //       photo: "https://i.ibb.co/6wp2fyn/sopara.png",
  //     },
  //     {
  //       id: 6,
  //       name: "Nave Espacial Missão McFly - Back to 1985",
  //       price: 100000,
  //       photo: "https://i.ibb.co/DkM9nts/mcfly.png",
  //     }], 
  //     listaCarrinho: []
  // }


  // function onAddProductToCart (product ) {
  //   const listProducts = [...this.state.listaCarrinho] 
  //   const produtoExist = listProducts.find((item)=>{
  //   return item.id === product.id 
  //   })
  //   if (!produtotExist) {
  //     const novoProduto = {
  //       ...product,
  //       quantidade: 1,
  //     };
  //     this.setState({
  //       listaCarrinho: [...listProducts, novoProduto],
  //     });
  //   } else {
  //     const indexProdutoLista = listProducts.findIndex((item) => {
  //       return item.id === produt.id;
  //     });
  //     listProducts[indexProdutoLista].quantidade += 1;
  //     this.setState({ listaCarrinho: listProducts });
  //   }
  // }
 
  render() {
    return (
      <div className="app-container">
        <Filtro />
        <div className="produtos-container">
          <Products products={products} />
        </div>
        <Carrinho />
      </div>
    );
  }
}

export default App;
