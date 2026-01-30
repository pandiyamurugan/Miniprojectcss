const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg" style={{background:"rgb(48 142 199 / 60%)"}}>
      <div className="flex gap-3 items-center">
        <img
          src={item.image}
          className="w-12 h-12 rounded object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{item.name}</p>
          <p className="text-white text-sm font-bold">
            ₹ {item.price * item.quantity}
          </p>
        </div>
      </div>

      <span className="text-sm">Qty: {item.quantity}</span>
    </div>
  );
};

export default CartItem;
