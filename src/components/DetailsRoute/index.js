import Sidebar from "../Sidebar";
import DetailedCard from "../DetailedCard";
import "./index.css";

const DetailsRoute = () => (
  <div className="perplexity-cont">
    <div>
      <Sidebar />
    </div>
    <div className="discover-container">
      <DetailedCard />
    </div>
  </div>
);

export default DetailsRoute;
