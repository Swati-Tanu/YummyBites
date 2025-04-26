import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const ItemList = ({ items }) => {
  const [showMessageId, setShowMessageId] = useState(null);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((el) => {
        return (
          <div
            key={el?.card?.info?.id}
            className="p-2 m-2 border-b-1 border-gray-200 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{el?.card?.info?.name}</span>
                <span>
                  {" - ₹ "}
                  {el?.card?.info?.price / 100 ||
                    el?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{el?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg"
                  onClick={() => {
                    handleAddItem(el);
                    setShowMessageId(el?.card?.info?.id);
                    setTimeout(() => setShowMessageId(null), 2000);
                  }}
                >
                  Add +
                </button>
                {showMessageId === el?.card?.info?.id && (
                  <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md text-sm animate-bounce">
                    Item added to cart
                  </div>
                )}
              </div>
              <img src={CDN_URL + el?.card?.info?.imageId} className="w-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
