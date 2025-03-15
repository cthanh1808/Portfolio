import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      const { technologies, images, title, description, url, documents } = this.props.data;
      
      // Map Technologies
      const tech = technologies?.map((icons, i) => (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center">
              <i className={icons.class} style={{ fontSize: "300%" }}>
                <p className="text-center" style={{ fontSize: "30%" }}>
                  {icons.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      ));

      // Map Images
      const img = images?.map((elem, i) => <div key={i} data-src={elem} />);

      // Map Documents (if available)
      const docLinks = documents ? (
        <div className="col-md-10 mx-auto">
          <h4>Project Documents</h4>
          <ul>
            {Object.entries(documents).map(([key, link]) => (
              <li key={key}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {key.replace(/([A-Z])/g, " $1").trim()} 📄
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null;

      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-inside"
        >
          <span onClick={this.props.onHide} className="modal-close">
            <i className="fas fa-times fa-3x close-icon"></i>
          </span>
          <div className="col-md-12">
            <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
              <div className="slider-tab">
                <span className="iconify slider-iconfiy" data-icon="emojione:red-circle"></span> &nbsp;
                <span className="iconify slider-iconfiy" data-icon="twemoji:yellow-circle"></span> &nbsp;
                <span className="iconify slider-iconfiy" data-icon="twemoji:green-circle"></span>
              </div>
              <AwesomeSlider
                cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
                animation="scaleOutAnimation"
                className="slider-image"
              >
                {img}
              </AwesomeSlider>
            </div>
            <div className="col-md-10 mx-auto">
              <h3 style={{ padding: "5px 5px 0 5px" }}>
                {title}
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="link-href">
                    <i className="fas fa-external-link-alt" style={{ marginLeft: "10px" }}></i>
                  </a>
                )}
              </h3>
              <p className="modal-description">{description}</p>

              {/* Display Documents if available */}
              {docLinks}

              <div className="col-md-12 text-center">
                <ul className="list-inline mx-auto">{tech}</ul>
              </div>
            </div>
          </div>
        </Modal>
      );
    }
    return null;
  }
}

export default ProjectDetailsModal;
