import { Modal } from "react-bootstrap";
import { useState } from "react";
import "../styles/component_styles/location_item.scss";
import BookForm from "./BookForm";

interface Props {
  name: string;
  hours: string[];
  address: string;
  phone: string;
}

export default function LocationItem({ data }: { data: Props }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div className="LocationItem">
      <div className="col menu-item h-100">
        <div className="card shadow-sm h-100 d-flex flex-column border-blue border-2">
          <div className="card-body">
            <h4 className="font-coustard">{data.name}</h4>
            <p className="text-body-secondary">
              Open {data.hours[0]}–{data.hours[1]}
            </p>
            <p>
              {data.address.split(",").map((line) => (
                <>
                  {line}
                  <br />
                </>
              ))}
            </p>
            <p className="text-body-secondary">
              <i className="bi bi-telephone-fill" />
              {"  " + data.phone}
            </p>
          </div>
          <button
            className="btn btn-blue mt-0 m-4 font-coustard"
            onClick={handleShowModal}
          >
            Book Now
          </button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header className="bg-blue text-white" closeButton>
          <Modal.Title className="font-coustard">
            Book a table at {data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <BookForm includeLocation={false} />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <button
            className="btn bg-blue text-white px-7 font-coustard"
            onClick={handleCloseModal}
          >
            Book{" "}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
