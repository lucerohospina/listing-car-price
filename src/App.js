import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      year: '',
      plan: '',
      total: 2000
    }

    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.totalListingPrice = this.totalListingPrice.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleBrandChange(event) {
    this.setState({
      brand: event.target.value
    });
  }
  handleYearChange(event) {
    this.setState({
      year: event.target.value
    });
  }
  handleOptionChange(event) {
    this.setState({
      plan: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('marca: ' + this.state.brand + 'año: ' + this.state.year);
    event.preventDefault();
    this.totalListingPrice();
  }

  totalListingPrice() {
    if (this.state.brand === 'Americano') {
      this.setState(() => ({
        total: this.state.total + (this.state.total*3/100)
      }));
    };
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3 className="text-center mt-5">Cotizador de carros</h3>
          <div className="row">
            <form className="col-12 col-md-4 offset-md-4 mt-5" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Marca</label>
                <select className="form-control" value={this.state.brand} onChange={this.handleBrandChange}>
                  <option value="">Seleccionar marca</option>
                  <option value="Americano">Americano</option>
                  <option value="Europeo">Europeo</option>
                  <option value="Asiatico">Asiatico</option>
                </select>
              </div>
              <div className="form-group">
                <label>Año</label>
                <select className="form-control" value={this.state.year} onChange={this.handleYearChange}>
                  <option value="">Seleccionar año</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                </select>
              </div>
              <div className="form-group">
                <label>Plan</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Basico" onChange={this.handleOptionChange}/>
                <label className="form-check-label">Básico</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Completo" onChange={this.handleOptionChange}/>
                <label className="form-check-label">Completo</label>
              </div>
              <div className="text-center mt-5">
                <button type="submit" value="Submit" className="btn btn-primary">COTIZAR</button>
              </div>
            </form>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h5>Resumen de Cotización</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-6 offset-4">
              <p>Marca: {this.state.brand}</p>
              <p>Año: {this.state.year}</p>
              <p>Plan: {this.state.plan}</p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-12 text-center">
              <p>TOTAL: {this.state.total}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
