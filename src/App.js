import React from "react";
import { Products } from "./components/Products/Products";
import styled from "styled-components";
import "./styles/Produtos.css";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

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
  render() {
    return (
      <AppContainer>
        <Products products={products} />
      </AppContainer>
    );
  }
}

export default App;