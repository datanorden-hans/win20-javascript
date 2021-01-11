import './App.css';
import AddForm from './components/AddProductForm'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <div>
          <div>
            <AddForm />   
          </div>
          <div className="border">
            <ProductList  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
