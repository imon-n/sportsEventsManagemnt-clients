import Carousel from "../components/homeComponent/Carousel";
import CategoryCards from "../components/homeComponent/CategoryCards";
import Collaps from "../components/homeComponent/Collaps";
import HomeCards from "../components/homeComponent/HomeCards";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <CategoryCards />
      <HomeCards></HomeCards>
      <Collaps />
    </div>
  );
};

export default HomePage;
