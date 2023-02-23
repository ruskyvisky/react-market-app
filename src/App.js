import { useSelector, useDispatch } from 'react-redux'
import { increment } from './Slices/cartSlice';
function App() {

  const dispatch = useDispatch();
  const cartItemsCount = useSelector((state) => state.cart.items);
  return <div>
    <h1>Cart Items: {cartItemsCount}</h1>
    <button onClick={() => dispatch(increment())}>Buy Item</button>
  </div>;
}

export default App;
