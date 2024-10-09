import { Link } from "react-router-dom";
import { HiOutlineSaveAs } from "react-icons/hi";
import Card from "react-bootstrap/Card";
import "./index.css";

const CardItems = (props) => {
  const { discoverContent } = props;
  return (
    <div style={{ marginTop: "20px", height: "100%" }}>
      <Link to="/details" style={{ textDecoration: "none" }}>
        <Card
          style={{ width: "100%", backgroundColor: "#202222", color: "white" }}
        >
          <Card.Img variant="top" src="meta.png" className="main-image-cont" />
          <Card.Body>
            <Card.Title>{discoverContent[0].name}</Card.Title>
            <Card.Text className="limit-description">
              {discoverContent[0].description}
            </Card.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#878c8c",
                }}
              >
                <img
                  src="profile.png"
                  alt="profile"
                  className="profile-image"
                />
                <p>elymc</p>
              </div>
              <HiOutlineSaveAs color="#878c8c" />
            </div>
          </Card.Body>
        </Card>
      </Link>
      <div className="three-cards-container">
        <Card
          style={{ width: "100%", backgroundColor: "#202222", color: "white" }}
        >
          <Link
            to="/details"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Card.Img
              variant="top"
              src="FaceObj.png"
              className="small-image-cont"
            />
            <Card.Body>
              <Card.Title>{discoverContent[1].name}</Card.Title>
              <Card.Text className="limit-description">
                {discoverContent[1].description}
              </Card.Text>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#878c8c",
                  }}
                >
                  <img
                    src="profile.png"
                    alt="profile"
                    className="profile-image"
                  />
                  <p>elymc</p>
                </div>
                <HiOutlineSaveAs color="#878c8c" />
              </div>
            </Card.Body>
          </Link>
        </Card>
        <Card
          style={{ width: "100%", backgroundColor: "#202222", color: "white" }}
        >
          <Link
            to="/details"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Card.Img
              variant="top"
              src="Tokyo.png"
              className="small-image-cont"
            />
            <Card.Body>
              <Card.Title>{discoverContent[2].name}</Card.Title>
              <Card.Text className="limit-description">
                {discoverContent[2].description}
              </Card.Text>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#878c8c",
                  }}
                >
                  <img
                    src="profile.png"
                    alt="profile"
                    className="profile-image"
                  />
                  <p>elymc</p>
                </div>
                <HiOutlineSaveAs color="#878c8c" />
              </div>
            </Card.Body>
          </Link>
        </Card>
        <Card
          style={{ width: "100%", backgroundColor: "#202222", color: "white" }}
        >
          <Link
            to="/details"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Card.Img
              variant="top"
              src="Earth.png"
              className="small-image-cont"
            />
            <Card.Body>
              <Card.Title>{discoverContent[3].name}</Card.Title>
              <Card.Text className="limit-description">
                {discoverContent[3].description}
              </Card.Text>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#878c8c",
                  }}
                >
                  <img
                    src="profile.png"
                    alt="profile"
                    className="profile-image"
                  />
                  <p>elymc</p>
                </div>
                <HiOutlineSaveAs color="#878c8c" />
              </div>
            </Card.Body>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default CardItems;
