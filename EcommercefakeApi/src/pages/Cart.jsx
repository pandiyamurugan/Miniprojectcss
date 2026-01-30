const Cart = ({ state }) => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h2 className="text-xl font-bold mb-6">Your Cart</h2>

      {state.cart.map(item => (
        <div key={item.id} className="bg-white p-4 mb-3 rounded">
          {item.name} × {item.quantity}
        </div>
      ))}

      <h3 className="font-bold mt-4">
        Total: ₹ {state.total}
      </h3>
    </div>
  );
};

export default Cart;
