import { useState } from 'react'
import '../App.css'
import ListProduct from './ListProduct';


interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export default function HomeCart() {
  const products: Products[] = JSON.parse(localStorage.getItem('products') || '[]');
  const [cart, setCart] = useState<string[]>([])
  return (
    <div className="container">
      <div className="page-header">
        <p className='font-bold text-[36px]'>Shopping Cart</p>
      </div>
      <div className="row">
        <div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">List Products</h1>
              </div>
              <div className="panel-body" id="list-product">
                <ListProduct products={products}></ListProduct>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h1 className="panel-title">Your Cart</h1>
              </div>
              <div className="panel-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th className='w-[4%]' >STT</th>
                      <th>Name</th>
                      <th className='w-[15%]' >Price</th>
                      <th className='w-[4%]' >Quantity</th>
                      <th className='w-[25%]' >Action</th>
                    </tr>
                  </thead>
                  <tbody id="my-cart-body">
                    <tr>
                      <th scope="row">1</th>
                      <td>Cake</td>
                      <td>10 USD</td>
                      <td>
                        <input
                          name="cart-item-quantity-1"
                          type="number"
                          value="15"
                        />
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          data-product=""
                          >Update</a><a
                          className="label label-danger delete-cart-item"
                          data-product=""
                          >Delete</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Hamburger</td>
                      <td>15 USD</td>
                      <td>
                        <input
                          name="cart-item-quantity-1"
                          type="number"
                          value="32"
                        />
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          data-product=""
                          >Update</a><a
                          className="label label-danger delete-cart-item"
                          data-product=""
                          >Delete</a>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot id="my-cart-footer">
                    <tr>
                      <td colSpan={4}>
                        Có <b>2</b> sản phẩm trong giỏ của bạn.
                      </td>
                      <td colSpan={2} className="total-price text-left">630 USD</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            {/* <div className="alert alert-success" role="alert" id="mnotification">
              Add to cart successfully
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
