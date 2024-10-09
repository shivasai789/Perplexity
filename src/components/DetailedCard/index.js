import React, { useEffect, useState, useRef } from "react";
import { CgPentagonUp } from "react-icons/cg";
import { FaLink } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import { IoIosGitNetwork } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { TbCirclesRelation } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const DetailedCard = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold to trigger earlier or later
    );

    // Observe each section
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="discover-cont">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="discover-header"
          style={{ height: "60px", width: "98%" }}
        >
          <img src="perplexity-logo.png" alt="logo2" className="logo-image2" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              type="button"
              style={{
                border: "1px solid #878c8c",
                padding: "5px",
                backgroundColor: "transparent",
                borderRadius: "5px",
                marginRight: "5px",
              }}
            >
              <CgPentagonUp size="25" color="#878c8c" />
            </button>
            <button
              type="button"
              style={{
                border: "0px",
                padding: "7px",
                backgroundColor: "#1e98a9",
                borderRadius: "5px",
                marginRight: "5px",
              }}
            >
              <FaLink size="20" />
            </button>
            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                border: "0px",
                padding: "7px",
                backgroundColor: "#1e98a9",
                borderRadius: "5px",
                marginRight: "5px",
              }}
            >
              <FaShare size="15" style={{ marginRight: "5px" }} />
              <p>Share</p>
            </button>
          </div>
        </div>
      </div>

      <hr style={{ minWidth: "100%", margin: "0px" }} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Container className="cards-container">
          <Row>
            <Col md={12}>
              <img src="meta.png" alt="meta" className="banner-img" />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <div className="content">
                <section id="introduction" className="content-section">
                  <h1 style={{ fontSize: "50px", fontWeight: "500" }}>
                    World-First Ovarian Cancer Vaccine
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="profile.png"
                        alt="profile2"
                        className="profile-image2"
                      />
                      <div>
                        <p style={{ margin: "0px", color: "#878c8c" }}>
                          Curated by dailies
                        </p>
                        <p
                          style={{
                            margin: "0px",
                            color: "#878c8c",
                            fontSize: "10px",
                          }}
                        >
                          2 min read
                        </p>
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", gap: "10px", color: "#878c8c" }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <IoTimeOutline style={{ marginRight: "5px" }} />
                        <p style={{ margin: "0px", fontSize: "12px" }}>
                          9 hours ago
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <FaRegEye style={{ marginRight: "5px" }} />
                        <p style={{ margin: "0px", fontSize: "12px" }}>4,981</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <IoIosGitNetwork style={{ marginRight: "5px" }} />
                        <p style={{ margin: "0px", fontSize: "12px" }}>415</p>
                      </div>
                    </div>
                  </div>
                  <p style={{ marginTop: "15px" }}>
                    According to reports from the University of Oxford,
                    researchers are developing the world's first vaccine to
                    prevent ovarian cancer, called OvarianVax, which aims to
                    teach the immune system to recognize and attack early-stage
                    cancer cells.
                  </p>
                </section>

                <section
                  id="overview"
                  className="content-section"
                  style={{ marginTop: "50px" }}
                >
                  <h1>OvarianVax Overview</h1>
                  <p>
                    Led by Professor Ahmed Ahmed at the University of Oxford's
                    MRC Weatherall Institute of Molecular Medicine, OvarianVax
                    is designed to train the immune system to recognize over 100
                    proteins on the surface of ovarian cancer cells, known as
                    tumor-associated antigens12. The project has received up to
                    £600,000 in funding from Cancer Research UK for a three-year
                    study to support laboratory research and establish cellular
                    targets for the vaccine32. If successful, this innovative
                    approach could offer an alternative to preventive surgery
                    for women with BRCA mutations and potentially benefit the
                    wider population in preventing ovarian cancer
                  </p>
                </section>

                <section
                  id="research"
                  className="content-section"
                  style={{ marginTop: "50px" }}
                >
                  <h1>Research and Trials</h1>
                  <p>
                    Led by Professor Ahmed Ahmed at the University of Oxford's
                    MRC Weatherall Institute of Molecular Medicine, OvarianVax
                    is designed to train the immune system to recognize over 100
                    proteins on the surface of ovarian cancer cells, known as
                    tumor-associated antigens12. The project has received up to
                    £600,000 in funding from Cancer Research UK for a three-year
                    study to support laboratory research and establish cellular
                    targets for the vaccine32. If successful, this innovative
                    approach could offer an alternative to preventive surgery
                    for women with BRCA mutations and potentially benefit the
                    wider population in preventing ovarian cancer
                  </p>
                </section>

                <section
                  id="impact"
                  className="content-section"
                  style={{ marginTop: "50px" }}
                >
                  <h1>Potential Cancer Impact</h1>
                  <p>
                    TLed by Professor Ahmed Ahmed at the University of Oxford's
                    MRC Weatherall Institute of Molecular Medicine, OvarianVax
                    is designed to train the immune system to recognize over 100
                    proteins on the surface of ovarian cancer cells, known as
                    tumor-associated antigens12. The project has received up to
                    £600,000 in funding from Cancer Research UK for a three-year
                    study to support laboratory research and establish cellular
                    targets for the vaccine32. If successful, this innovative
                    approach could offer an alternative to preventive surgery
                    for women with BRCA mutations and potentially benefit the
                    wider population in preventing ovarian cancer
                  </p>
                </section>

                <section
                  id="timeline"
                  className="content-section"
                  style={{ marginTop: "50px" }}
                >
                  <h1>Timeline and Significance</h1>
                  <p>
                    Led by Professor Ahmed Ahmed at the University of Oxford's
                    MRC Weatherall Institute of Molecular Medicine, OvarianVax
                    is designed to train the immune system to recognize over 100
                    proteins on the surface of ovarian cancer cells, known as
                    tumor-associated antigens12. The project has received up to
                    £600,000 in funding from Cancer Research UK for a three-year
                    study to support laboratory research and establish cellular
                    targets for the vaccine32. If successful, this innovative
                    approach could offer an alternative to preventive surgery
                    for women with BRCA mutations and potentially benefit the
                    wider population in preventing ovarian cancer
                  </p>
                </section>

                <section
                  className="content-section"
                  style={{ marginTop: "50px" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <TbCirclesRelation size="25" />
                    <h1 style={{ margin: "0px", marginLeft: "10px" }}>
                      Related
                    </h1>
                  </div>
                  <hr />
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: "0px",
                      marginBottom: "200px",
                    }}
                  >
                    <li>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>
                          How does the OvarianVax vaccine work at the cellular
                          level
                        </p>
                        <FaPlus />
                      </div>

                      <hr />
                    </li>
                    <li>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>
                          How does the OvarianVax vaccine work at the cellular
                          level
                        </p>
                        <FaPlus />
                      </div>
                      <hr />
                    </li>
                    <li>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>
                          How does the OvarianVax vaccine work at the cellular
                          level
                        </p>
                        <FaPlus />
                      </div>
                      <hr />
                    </li>
                    <li>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>
                          How does the OvarianVax vaccine work at the cellular
                          level
                        </p>
                        <FaPlus />
                      </div>
                      <hr />
                    </li>
                    <li>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>
                          How does the OvarianVax vaccine work at the cellular
                          level
                        </p>
                        <FaPlus />
                      </div>
                      <hr />
                    </li>
                    <li>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>
                          How does the OvarianVax vaccine work at the cellular
                          level
                        </p>
                        <FaPlus />
                      </div>
                      <hr />
                    </li>
                  </ul>
                </section>
              </div>
              <div className="follow-up-container">
                <div className="follow-up">
                  <input
                    type="text"
                    placeholder="Ask follow-up"
                    className="follow-input"
                  />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                    <p style={{ marginRight: "15px" }}>Pro</p>
                    <IoIosGitNetwork />
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="sidebar">
                <ul>
                  <li
                    className={activeSection === "introduction" ? "active" : ""}
                  >
                    <a href="#introduction">Introduction</a>
                  </li>
                  <li className={activeSection === "overview" ? "active" : ""}>
                    <a href="#overview">OvarianVax Overview</a>
                  </li>
                  <li className={activeSection === "research" ? "active" : ""}>
                    <a href="#research">Research and Trials</a>
                  </li>
                  <li className={activeSection === "impact" ? "active" : ""}>
                    <a href="#impact">Potential Cancer Impact</a>
                  </li>
                  <li className={activeSection === "timeline" ? "active" : ""}>
                    <a href="#timeline">Timeline and Significance</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DetailedCard;
