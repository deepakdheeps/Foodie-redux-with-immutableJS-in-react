import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import MealsSummary from "./MealSummary";
import mealsImage from "../../assests/meals.jpg";

const MainHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Foodie</h1>
        <nav>
          <ul>
            <li>
              <CartButton />
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table of delicious food" />
      </div>
      <MealsSummary />
    </>
  );
};

export default MainHeader;
