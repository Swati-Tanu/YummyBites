const Grocery = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Yummy Bites Grocery
      </h1>
      <p className="text-center max-w-2xl text-gray-700 mb-8">
        Fresh fruits, vegetables, dairy, snacks, and more — now delivered faster
        than ever to your doorstep!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fruits"
            className="rounded-md mb-4 w-96 object-cover"
          />
          <h2 className="text-xl font-semibold text-green-600">Fresh Fruits</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <img
            src="https://plus.unsplash.com/premium_photo-1669557211203-b70f811196b7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vegetables"
            className="rounded-md mb-4 w-96 object-cover"
          />
          <h2 className="text-xl font-semibold text-green-600">
            Organic Vegetables
          </h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <img
            src="https://plus.unsplash.com/premium_photo-1695408259712-e84f70655ba8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dairy"
            className="rounded-md mb-4 w-96 object-cover"
          />
          <h2 className="text-xl font-semibold text-green-600">Daily Dairy</h2>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
