import React from "react";
import "./styles/Filtro.css";

class Filtro extends React.Component {
  render() {
    return (
      <div>
        <div className="filtros-container">
          <h3>Filtros</h3>
          <label htmlFor="valor minimo">
            Valor minimo:
            <input type="number" min="0" />
          </label>
          <label htmlFor="valor maximo">
            Valor maximo:
            <input type="number" min="0" />
          </label>
          <label htmlFor="busca por nome">
            Busca por nome
            <input type="text" placeholder="Produto" />
          </label>
        </div>
      </div>
    );
  }
}

export default Filtro;
