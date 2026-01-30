import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

const Home = ({ state, dispatch }) => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* PRODUCTS */}
        <div className="lg:col-span-8">
          <h2 className="text-xl font-bold mb-3 text-indigo-600">New Arrivals Available!</h2>
          <p className="mb-3 text-black font-bold">Explore the latest smartphones and upgrade to the future today.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        {/* CART */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Cart Items</h3>

            <div className="space-y-3">
              {state.cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <CartSummary total={state.total} dispatch={dispatch} />
        </div>

      </div>
    </div>
  );
};

export default Home;
