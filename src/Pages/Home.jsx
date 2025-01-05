import CategoryMenu from "../Components/CategoryMenu";
import Navbar from "../Components/Navbar";
import FoodItems from "../Components/FoodItems";
import Cart from "../Components/Cart";

export default function Home() {
  return (
 <>
  <Navbar/>
  <CategoryMenu/>
  <FoodItems/>
  <Cart/>
 </>
  )
}
