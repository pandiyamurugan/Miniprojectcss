const ProductCard = ({ product, dispatch }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition">
      <div className="h-60 overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          className="h-full w-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-4" style={{background:"rgba(48, 142, 199, 0.6);"}}>
        <p className="text-xs font-bold uppercase text-indigo-600">
          {product.category}
        </p>

        <h3 className="font-semibold text-slate-800">
          {product.name}
        </h3>

        <div className="flex justify-between items-center mt-3">
          <span className="font-bold">₹ {product.price}</span>

          <button
            className=" bg-indigo-600 p-3 text-white rounded-full text-sm font-semibold"
            
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: product })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
