import About from "../components/About";
import Comments from "../components/Comments";
import Faq from "../components/Faq";
import HelmetCompo from "../components/HelmetCompo";
import Jtabs from "../components/Jtabs";
import Quotes from "../components/Quotes";


const Home = () => {
  return (
    <div>
      <HelmetCompo key={"Home"}></HelmetCompo>
      <Quotes></Quotes>
      <Jtabs></Jtabs>
      <About></About>
      <Faq></Faq>
      <Comments></Comments>
    </div>
  );
};

export default Home;