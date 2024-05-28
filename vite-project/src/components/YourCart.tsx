

export default function YourCart() {
  return (
    <div>
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
    </div>
  )
}
