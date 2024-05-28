interface Products {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    quantity: number;
  }

interface Props{
    products: Products[]
}

export default function ListProduct({products}: Props) {
  return (
    <div>
        {products.map(product => {
            return (
                <div className="media product">
                    <div className="media-left">
                        <a href="#"
                        ><img
                            className="media-object"
                            src={product.image}
                        /></a>
                    </div>
                    <div className="media-body">
                        <p className="media-heading font-bold text-[16px]">{product.name}</p>
                        <p>{product.description}</p>
                        {product.quantity!==0 ? <input name="quantity-product-1" type="number" value="1"/>: ''}
                        {product.quantity===0 ? <span className="price"> 30 USD</span>:<a className="price"> {product.price} USD</a>}
                    </div>
                </div>
            )
        })}
    </div>
  )
}
