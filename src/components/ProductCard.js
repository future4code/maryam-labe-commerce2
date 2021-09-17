import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
  display: grid;
  flex-direction: column;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 30px;
  }
`;

const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
`;

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <CardContainer>
        <img src={product.photo} alt="Imagem do produto" />
        <CardInfo>
          <p>{product.name}</p>
          <p>R${product.price}</p>
          <AddToCartButton
            onClick={() => this.props.adicionarCarrinho(product.id)}
          >
            Adicionar ao carrinho
          </AddToCartButton>
        </CardInfo>
      </CardContainer>
    );
  }
}
