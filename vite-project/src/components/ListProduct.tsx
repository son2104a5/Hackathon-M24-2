interface Products {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    quantity: number;
  }
  
  interface Props {
    products: Products[];
    handleClick: (product: Products) => void;
  }
  
  export default function ListProduct({ products, handleClick }: Props) {
    return (
      <div>
        {products.map(product => (
          <div className="media product" key={product.id}>
            <div className="media-left">
              <a href="#">
                <img className="media-object" src={product.image} alt={product.name} />
              </a>
            </div>
            <div className="media-body">
              <p className="media-heading font-bold text-[16px]">{product.name}</p>
              <p>{product.description}</p>
              {product.quantity !== 0 ? (
                <input name="quantity-product-1" type="number" value="1" />
              ) : ''}
              {product.quantity === 0 ? (
                <span className="price">{product.price} USD</span>
              ) : (
                <a onClick={() => handleClick(product)} className="price cursor-pointer">{product.price} USD</a>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  