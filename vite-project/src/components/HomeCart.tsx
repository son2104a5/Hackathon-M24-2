import { useState, useEffect } from 'react';
import '../App.css';
import ListProduct from './ListProduct';
import YourCart from './YourCart';
import Notification from './Notification';

interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function HomeCart() {
  const products: Products[] = JSON.parse(localStorage.getItem('products') || '[]');
  const [cart, setCart] = useState<Cart[]>(() => {
    const storedCart = localStorage.getItem('carts');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [notification, setNotification] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(cart));
  }, [cart]);

  const handleClick = (product: Products) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      product.quantity = product.quantity - 1;
    } else {
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
      product.quantity = product.quantity - 1;
    }
    setNotification(`${product.name} đã được thêm vào giỏ!`);
    setTimeout(() => setNotification(''), 3000);
  };
  const handleDelete = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    setNotification(`Product has been removed from your cart!`);
    setTimeout(() => setNotification(''), 3000);
  }
  return (
    <div className="container">
      <div className="page-header">
        <p className='font-bold text-[36px]'>Shopping Cart</p>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              <ListProduct products={products} handleClick={handleClick}></ListProduct>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">Your Cart</h1>
            </div>
            <YourCart cart={cart} handleDelete={handleDelete}></YourCart>
          </div>
          {notification && <Notification message={notification} />}
        </div>
      </div>
    </div>
  );
}
