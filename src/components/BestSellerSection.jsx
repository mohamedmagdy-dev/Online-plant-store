// React Router
import { Link } from "react-router";

// icons
import rightArrow from "../assets/icons/right-arrow.svg";

// imgs
import plantImg1 from "../assets/imgs/plant-1.png"
import plantImg2 from "../assets/imgs/plant-2.png"
import plantImg3 from "../assets/imgs/plant-3.png"

// Components
import ItemCard from "./ui/ItemCard";

export default function BestSellerSection() {
  return (
    <section className="pb-35">
      <div className="container px-5 flex gap-9.5 justify-center items-center flex-wrap">
        <div className="info ">
          <h2 className="text-[64px] text-abyss font-medium mb-10.5">
            Best Seller
            <br /> Product
          </h2>
          <Link to="/best-seller-items" className="text-gray-dark flex gap-5 font-medium">
            See all collection
            <img src={rightArrow} alt="right Arrow" width={20} height={21} />
          </Link>
        </div>
        <div className="cards flex gap-8 flex-wrap justify-center">
          <ItemCard  rate="5" title = "Chrysanthemum" price="140.34" plantImg={plantImg1} />
          <ItemCard  rate="2" title = "Bougainvillea" price="990.7" plantImg={plantImg2} />
          <ItemCard  rate="3" title = "Eucalyptus" price="10.66" plantImg={plantImg3} />
        </div>
      </div>
    </section>
  );
}
