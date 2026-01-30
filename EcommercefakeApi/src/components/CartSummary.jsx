const CartSummary = ({ total, dispatch }) => {
  const tax = total * 0.18.toFixed(2);
  const wholetotal = (total + Number(tax)).toFixed(2);

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-semibold mb-4">Your Cart</h3>

      <div className="flex justify-between text-sm mb-2">
        <span>Subtotal</span>
        <span>₹ {total}</span>
      </div>

      <div className="flex justify-between text-sm mb-3">
        <span>Tax (18%)</span>
        <span>₹ {tax}</span>
      </div>

      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Total</span>
        <span>₹ {wholetotal}</span>
      </div>

      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
        Checkout →
      </button>

      <button
        className="w-full text-red-500 text-sm mt-3"
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartSummary;
