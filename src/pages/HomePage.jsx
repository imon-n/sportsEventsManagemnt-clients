import Carousel from "../components/homeComponent/Carousel";
import Collaps from "../components/homeComponent/Collaps";
import HomeCards from "../components/homeComponent/HomeCards";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <HomeCards></HomeCards>
      <Collaps />
    </div>
  );
};

export default HomePage;
