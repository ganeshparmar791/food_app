import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="relative flex gap-4 shadow-md rounded-lg p-4 mb-3 bg-white">
      {/* Delete Button */}
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, { icon: "👋" });
        }}
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-200"
      />

      {/* Image */}
      <img src={img} alt={name} className="w-[50px] h-[50px] rounded-md" />
      
      {/* Details */}
      <div className="flex flex-col flex-grow">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <span className="text-green-500 font-bold">₹{price}</span>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <AiOutlineMinus
          onClick={() =>
            qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
          }
          className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl cursor-pointer"
        />
        <span className="font-semibold">{qty}</span>
        <AiOutlinePlus
          onClick={() =>
            qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
          }
          className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ItemCard;
