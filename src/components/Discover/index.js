import { BsGlobe } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { LiaMedalSolid } from "react-icons/lia";
import { CgScreen } from "react-icons/cg";
import { v4 as uuid } from "uuid";
import { BiSearchAlt } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { PiSignInBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineFilterAlt } from "react-icons/md";
import Card from "react-bootstrap/Card";
import CardItems from "../CardItems";
import TabItems from "../TabItems";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const interestsList = [
  {
    id: "TOP",
    name: "Top",
    icon: <FaRegStar />,
  },
  {
    id: "TECH&SCIENCE",
    name: "Tech & Science",
    icon: <GrTechnology />,
  },
  {
    id: "FINANCE",
    name: "Finance",
    icon: <AiOutlineDollar />,
  },
  {
    id: "SPORTS",
    name: "Sports",
    icon: <LiaMedalSolid />,
  },
  {
    id: "ENTERTAINMENT",
    name: "Entertainment",
    icon: <CgScreen />,
  },
];

const discoverContent = [
  {
    id: uuid(),
    name: "Meta Unveils Movie Gen",
    description:
      "Meta has unveiled Movie Gen, a cutting-edge generative AI tool that can create and edit videos and audio using text prompts, marking a significant advancement in AI-powered media creation. As reported by CNET, this new technology allows users to generate high-quality videos, perform personalized video creation, edit existing footage, and produce synchronized audio content.",
    imageUrl: "meta.png",
  },
  {
    id: uuid(),
    name: "AI Sees Faces in Objects, Too",
    description:
      "Recent research from MIT, awaiting peer review, reveals that artificial intelligence can now recognize faces in inanimate objects, a phenomenon known as pareidolia, opening new avenues for understanding both machine learning and human cognition. This capability, while initially challenging for AI, has been significantly improved through training on animal faces, suggesting intriguing links between evolutionary survival skills and our tendency to see faces in everyday objects.",
    imageUrl: "FaceObj.png",
  },
  {
    id: uuid(),
    name: "Tokyo Expands Underground Cavern",
    description:
      'Tokyo is expanding its underground flood defense system, known as the "Cathedral" complex, to combat the increasing threat of extreme weather events fueled by climate change. As reported by Reuters, the city is launching a seven-year, $250 million initiative to upgrade its infrastructure, including reinforcing levees, improving drainage systems, and constructing new reservoirs to handle more intense rainfall and prevent flooding in densely populated areas.',
    imageUrl: "Tokyo.png",
  },
  {
    id: uuid(),
    name: "The .io Ownership Battle",
    description:
      "The .io domain, linked to the British Indian Ocean Territory, is at the center of a contentious ownership battle involving the UK, Mauritius, and the Chagossian people, as geopolitical shifts and ethical concerns about digital colonialism emerge with the UK's decision to transfer control of the Chagos Archipelago to Mauritius.",
    imageUrl: "Earth.png",
  },
];

const Perplexity = () => {
  return (
    <>
      <div className="discover-cont">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="discover-header"
            style={{ height: "60px", width: "78%" }}
          >
            <div
              style={{ display: "flex", alignItems: "center", height: "60px;" }}
            >
              <BsGlobe size="25" style={{ marginRight: "9px" }} />
              <h1>Discover</h1>
            </div>
            <MdOutlineFilterAlt className="filter-icon" size="30" />
          </div>
        </div>
        <hr style={{ minWidth: "100%", margin: "0px" }} />
        <Container className="cards-container">
          <Row>
            <Col md={8}>
              <ul className="interests-container">
                {interestsList.map((eachItem) => (
                  <TabItems tabDetails={eachItem} key={eachItem.id} />
                ))}
              </ul>
              <div style={{ maxWidth: "100%", minHeight: "auto" }}>
                <CardItems discoverContent={discoverContent} />
                <CardItems discoverContent={discoverContent} />
                <CardItems discoverContent={discoverContent} />
                <CardItems discoverContent={discoverContent} />
                <CardItems discoverContent={discoverContent} />
                <CardItems discoverContent={discoverContent} />
                <CardItems discoverContent={discoverContent} />
              </div>
              <ul className="interests-container2">
                <li className="navigation-item">
                  <BiSearchAlt size="25" style={{ marginRight: "5px" }} />
                  <p>Home</p>
                </li>
                <li className="navigation-item active-nav-item">
                  <BsGlobe size="18" style={{ marginRight: "9px" }} />
                  <p>Discover</p>
                </li>
                <li className="navigation-item">
                  <ImBooks size="22" style={{ marginRight: "5px" }} />
                  <p>Library</p>
                </li>
                <li className="navigation-item">
                  <PiSignInBold size="22" style={{ marginRight: "5px" }} />
                  <p>Sign in</p>
                </li>
              </ul>
            </Col>
            <Col xs={4}>
              <Card
                className="interests-side-cont"
                style={{
                  width: "100%",
                  marginTop: "100px",
                  backgroundColor: "#13343b",
                  color: "white",
                }}
              >
                <Card.Body>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Title>Make it yours</Card.Title>
                    <RxCross2 style={{ cursor: "pointer" }} />
                  </div>
                  <Card.Text style={{ color: "#878c8c" }}>
                    Select topics and interests to customize your Discover
                    experience
                  </Card.Text>
                  <ul className="interest-items-container">
                    {interestsList.map((eachItem) => {
                      return (
                        <li className="interest-side-item">
                          {eachItem.icon}
                          <p>{eachItem.name}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <hr />
                  <button type="button" className="save-interest-btn">
                    Save Interests
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Perplexity;
