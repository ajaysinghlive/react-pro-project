import React from "react";
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

  render(): React.ReactNode {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shoping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
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
