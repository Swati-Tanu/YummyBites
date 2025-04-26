import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center py-5  px-4">
        <h1 className="text-4xl font-bold mb-4">About Yummy Bites</h1>
        <p className="text-center max-w-2xl text-gray-700 mb-6 py-5">
          Welcome to{" "}
          <span className="font-semibold text-green-500">Yummy Bites</span> —
          your go-to destination for delicious, fast, and fresh food! Whether
          you're craving spicy snacks, hearty meals, or sweet desserts, we bring
          the best flavors right to your doorstep.
        </p>
        <p className="text-center max-w-2xl text-gray-600">
          Our mission is simple: to deliver happiness, one bite at a time. Thank
          you for making us a part of your foodie journey!
        </p>
      </div>
    );
  }
}

export default About;
