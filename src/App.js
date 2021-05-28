import './App.css';
import ProductProvider from './context/productContext';
import ProductList from './views/ProductList';
function App() {
  return (
    <ProductProvider>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <ProductList></ProductList>
        </header>
      </div>
    </ProductProvider>
  );
}

export default App;
