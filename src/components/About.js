import React, { useState } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import javascriptIcon from '@iconify/icons-devicon/javascript';
import csharpIcon from '@iconify/icons-devicon/csharp';
import pythonIcon from '@iconify/icons-devicon/python';
import mysqlIcon from '@iconify/icons-devicon/mysql';
import sassIcon from '@iconify/icons-devicon/sass';
import bootstrapIcon from '@iconify/icons-devicon/bootstrap';
import javaIcon from '@iconify/icons-devicon/java';
import { FaDownload } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const About = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [fileType, setFileType] = useState(""); // "resume" or "coverLetter"

  const handleShow = (type) => {
    setFileType(type);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const filePath = fileType === "resume" ? "files/resume.pdf" : "files/cover-letter.pdf";

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{props.resumeBasicInfo?.section_name.about}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
          <div className="polaroid">
            <img height="250px" src={`images/${props.sharedBasicInfo?.image}`} alt="Avatar" />
            <div className="icon-container">
              <Icon icon={javaIcon} className="icon" />
              <Icon icon={reactIcon} className="icon" />
              <Icon icon={javascriptIcon} className="icon" />
              <Icon icon={csharpIcon} className="icon" />
              <Icon icon={pythonIcon} className="icon" />
              <Icon icon={mysqlIcon} className="icon" />
              <Icon icon={sassIcon} className="icon" />
              <Icon icon={bootstrapIcon} className="icon" />
            </div>
          </div>
        </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span className="iconify" data-icon="twemoji:red-circle"></span> &nbsp;
                  <span className="iconify" data-icon="twemoji:yellow-circle"></span> &nbsp;
                  <span className="iconify" data-icon="twemoji:green-circle"></span>
                </div>
                <div className="card-body font-trebuchet text-justify ml-3 mr-3" style={{ fontSize: "132%", lineHeight: "200%" }}>
                  <br />
                  <span className="wave">{props.resumeBasicInfo?.description_header} :) </span>
                  <br />
                  <br />
                  {props.resumeBasicInfo?.description}
                </div>
              </div>

              {/* Buttons Below Bio Section */}
              <div className="text-center my-3">
                <button className="btn btn-primary btn-lg" style={{ margin: "10px" }} onClick={() => handleShow("resume")}>
                  View Resume
                </button>
                <button className="btn btn-secondary btn-lg" style={{ margin: "10px" }} onClick={() => handleShow("coverLetter")}>
                  View Cover Letter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Resume/Cover Letter */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{fileType === "resume" ? "Resume" : "Cover Letter"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src={filePath} width="100%" height="500px" title="Document Viewer"></iframe>
        </Modal.Body>
        <Modal.Footer>
          <a href={filePath} download className="btn btn-success">
            <FaDownload /> Download
          </a>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default About;
