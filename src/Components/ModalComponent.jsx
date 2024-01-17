import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Gotimg from "./Gotimg";
const ModalComponent = (props) => {
  let pat = {
    paddingTop: "120%",
  };

  console.log(props.getModalData, "error is here");
  return (
    <div>
      <Modal {...props} style={{ background: "#000 !important" }}>
        <Modal.Body style={{ background: "#000 !important" }}>
          <button onClick={props.onHide}>close</button>
          <div className="img-fluid" style={pat}>
            <Gotimg img={props.getModalData.poster_path} />
          </div>

          <h3 style={{ color: "#fff" }}>
            {props.getModalData.name} {props.getModalData.original_title}
          </h3>

          <p style={{ color: "#818181" }}>{props.getModalData.overview}</p>

          <Link to={`/about/${props.getModalData.id}`}>View More</Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalComponent;
