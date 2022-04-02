import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

const App = () => (
    <CartProvider>
        <Cart/>
        <Header/>
        <main>
            <Meals/>
        </main>
    </CartProvider>
);

export default App;
