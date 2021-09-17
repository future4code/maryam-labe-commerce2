import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
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

const ProductCard = (props) => {
  return (
    <>
      <CardContainer>
        <img src={props.foto} alt="" />
        <CardInfo>
          <p>{props.nome}</p>
          <p>{props.preco}</p>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </CardInfo>
      </CardContainer>
    </>
  );
};

export default ProductCard;

// class ProductCard extends React.Component {
//   render() {

//     return (
//       <CardContainer>
//         <img src={product.photo} alt={product.name} />
//         <CardInfo>
//           <p>{product.name}</p>
//           <p>{product.price}</p>
//           <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
//         </CardInfo>
//         {/* <img src={product.photo} />
//         <CardInfo>
//           <p>{this.props.product.name}</p>
//           <p>R${product.price},00</p>
//           <AddToCartButton
//             onClick={() => this.props.onAddProductToCart(product.id)}
//           >
//             Adicionar ao carrinho
//           </AddToCartButton>
//         </CardInfo> */}
//       </CardContainer>
//     );
//   }
// }
