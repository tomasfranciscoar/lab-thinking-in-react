import React, {Component} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import data from "../data.json"

class FilterableDataTable extends Component {
  
  state = {
   products: data,
   filtered: [] 
  }

  handleSearch = e => {
    let {value} = e.target;
    let {products, filtered} = this.state;
    if(!value) filtered = data;
    filtered = products.data.filter(product => product.name.includes(value))
    this.setState({products, filtered})
  }
  
  render(){
    return(
      <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={this.handleSearch} />
      <ProductTable products={data} filtered={this.state.filtered} />
    </div>
    )
  }
}


export default FilterableDataTable