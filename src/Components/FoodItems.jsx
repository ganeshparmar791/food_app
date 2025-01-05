import FoodCard from "./FoodCard";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import FoodData from "../data/FoodData";

export default function FoodItems() {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search.toLowerCase());
  const handleToast = (name) => toast.success(`Added ${name} to cart`);

  const filteredData = FoodData.filter((food) => {
    const foodName = food.name.toLowerCase();
    return (
      (category === "All" || category === food.category) &&
      foodName.includes(search)
    );
  });

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {filteredData.length > 0 ? (
          filteredData.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          ))
        ) : (
          <p className="text-gray-600 font-semibold text-center">
            No items found.
          </p>
        )}
      </div>
    </>
  );
}
