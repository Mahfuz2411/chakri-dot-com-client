import About from "../components/About";
import Comments from "../components/Comments";
import Jtabs from "../components/Jtabs";
import Quotes from "../components/Quotes";

const Home = () => {
  return (
    <div>
      <Quotes></Quotes>
      <Jtabs></Jtabs>
      <About></About>
      {/* <Comments></Comments> */}
    </div>
  );
};

export default Home;