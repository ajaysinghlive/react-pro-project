import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  sortProducts = (event: any) => {
    const sort = event.target.value;
    this.setState((state: any) => ({
      sort: sort,
      Products: this.state.products
        .slice()
        .sort((a: any, b: any) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  filterProducts = (event: any) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, Products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        Products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  render(): React.ReactNode {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shoping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>all right reserve</footer>
      </div>
    );
  }
}

export default App;
