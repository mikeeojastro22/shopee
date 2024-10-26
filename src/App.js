import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
