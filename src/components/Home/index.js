import Discover from "../Discover";
import Sidebar from "../Sidebar";

const Home = () => {
  return (
    <div className="perplexity-cont">
      <div>
        <Sidebar />
      </div>
      <div className="discover-container">
        <Discover />
      </div>
    </div>
  );
};

export default Home;
