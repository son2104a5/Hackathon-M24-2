import { MouseEventHandler } from 'react';
import '../App.css';

interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  cart: Cart[];
  handleDelete: MouseEventHandler
}

export default function YourCart({ cart, handleDelete }: Props) {
  let total: number = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="panel-body">
      <table className="table">
        <thead>
          <tr>
            <th className='w-[4%]'>STT</th>
            <th>Name</th>
            <th className='w-[15%]'>Price</th>
            <th className='w-[4%]'>Quantity</th>
            <th className='w-[25%]'>Action</th>
          </tr>
        </thead>
        <tbody id="my-cart-body">
          {cart.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.price} USD</td>
              <td><input type="number" value={item.quantity}/></td>
              <td>
                <a className="label label-info update-cart-item" data-product="">Update</a>
                <a className="label label-danger delete-cart-item" data-product="" onClick={handleDelete}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot id="my-cart-footer">
          {cart.length !== 0 ? (
            <tr>
              <td colSpan={4}>
                Có <b>{cart.length}</b> sản phẩm trong giỏ của bạn.
              </td>
              <td colSpan={2} className="total-price text-left">{total} USD</td>
            </tr>
          ) : (
            <tr>
              <td colSpan={4}>
                Không có sản phẩm trong giỏ của bạn.
              </td>
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );
}
