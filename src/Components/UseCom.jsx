import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UseCom = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const [disc, setDisc] = useState("");

  const handleImageClick = (src, description) => {
    setSelectedImage(src);
    setShow(true);
    setDisc(description);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=7b6d93da90c725dd57c0b15ad689e502"
    )
      .then((res) => {
        return res.json();
      })
      .then((secres) => {
        setData(secres);
        console.log(setData);
      })
      .catch((err) => {
        console.log("oh no");
      });
  }, []);
  // console.log(data, 'data is here')

  return (
    <div>
      <div className="container">
        <div className="row py-3s">
          {data.map?.((post, index) => {
            const newHandler = () => {
              handleImageClick((post.image, post.description));
            };
            return (
              <div className="col-md-4">
                <div
                  className="w-100"
                  key={post.id}
                  onClick={
                    /*() => handleImageClick(post.image, post.description)*/ newHandler
                  }
                >
                  <div className="img-fluid">
                    <img src={`${post.image}`} alt="" />
                  </div>
                  <p>${post.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="img-fluid">
            <img src={selectedImage} alt="" />
          </div>

          <div className="dic">{disc}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UseCom;
