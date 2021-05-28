import "./product.scss";
function Product({product}) {
  return(
    <div className="product">
      <img src={product.filename} alt="product_image"></img>
      <div className="details">
        <div className="description">
          <header className="product-name">{product.product_name}</header>
          <div className="brand">{product.brand_name}</div>
        </div>
        <div className="pricing">
          <div className="base-price">Price: {product.base_price}</div>
          <div className="actual-price">{product.actual_price}</div>
        </div>
      </div>
    </div>
  )
}

export default Product;