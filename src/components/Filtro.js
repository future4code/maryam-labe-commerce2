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
            <input
              value={this.props.filtroMin}
              onChange={this.props.filtrarMin}
              type="number"
              min="0"
            />
          </label>
          <label htmlFor="valor maximo">
            Valor maximo:
            <input
              value={this.props.filtroMax}
              onChange={this.props.filtrarMax}
              type="number"
              min="0"
            />
          </label>
          <label htmlFor="busca por nome">
            Busca por nome
            <input
              value={this.props.filtroNome}
              onChange={this.props.filtrarNome}
              type="text"
              placeholder="Produto"
            />
          </label>
          {this.props.filtrarNome}
        </div>
      </div>
    );
  }
}

export default Filtro;
