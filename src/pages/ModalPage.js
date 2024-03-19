import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt felis tellus. Vivamus sed bibendum nisi. Morbi neque turpis,
        vehicula volutpat libero eu, suscipit tempus turpis. Aliquam rutrum
        placerat consequat. In lobortis augue id dui commodo vestibulum. Fusce
        non ante porta erat imperdiet scelerisque. Morbi vel molestie odio, id
        volutpat lectus. In dapibus sollicitudin ante vitae eleifend.
        Pellentesque eu tellus luctus, mollis magna id, semper lectus. Aenean
        imperdiet, erat ut eleifend ullamcorper, lectus massa pharetra purus,
        nec faucibus metus lacus nec ante.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt felis tellus. Vivamus sed bibendum nisi. Morbi neque turpis,
        vehicula volutpat libero eu, suscipit tempus turpis. Aliquam rutrum
        placerat consequat. In lobortis augue id dui commodo vestibulum. Fusce
        non ante porta erat imperdiet scelerisque. Morbi vel molestie odio, id
        volutpat lectus. In dapibus sollicitudin ante vitae eleifend.
        Pellentesque eu tellus luctus, mollis magna id, semper lectus. Aenean
        imperdiet, erat ut eleifend ullamcorper, lectus massa pharetra purus,
        nec faucibus metus lacus nec ante.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt felis tellus. Vivamus sed bibendum nisi. Morbi neque turpis,
        vehicula volutpat libero eu, suscipit tempus turpis. Aliquam rutrum
        placerat consequat. In lobortis augue id dui commodo vestibulum. Fusce
        non ante porta erat imperdiet scelerisque. Morbi vel molestie odio, id
        volutpat lectus. In dapibus sollicitudin ante vitae eleifend.
        Pellentesque eu tellus luctus, mollis magna id, semper lectus. Aenean
        imperdiet, erat ut eleifend ullamcorper, lectus massa pharetra purus,
        nec faucibus metus lacus nec ante.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt felis tellus. Vivamus sed bibendum nisi. Morbi neque turpis,
        vehicula volutpat libero eu, suscipit tempus turpis. Aliquam rutrum
        placerat consequat. In lobortis augue id dui commodo vestibulum. Fusce
        non ante porta erat imperdiet scelerisque. Morbi vel molestie odio, id
        volutpat lectus. In dapibus sollicitudin ante vitae eleifend.
        Pellentesque eu tellus luctus, mollis magna id, semper lectus. Aenean
        imperdiet, erat ut eleifend ullamcorper, lectus massa pharetra purus,
        nec faucibus metus lacus nec ante.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt felis tellus. Vivamus sed bibendum nisi. Morbi neque turpis,
        vehicula volutpat libero eu, suscipit tempus turpis. Aliquam rutrum
        placerat consequat. In lobortis augue id dui commodo vestibulum. Fusce
        non ante porta erat imperdiet scelerisque. Morbi vel molestie odio, id
        volutpat lectus. In dapibus sollicitudin ante vitae eleifend.
        Pellentesque eu tellus luctus, mollis magna id, semper lectus. Aenean
        imperdiet, erat ut eleifend ullamcorper, lectus massa pharetra purus,
        nec faucibus metus lacus nec ante.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt felis tellus. Vivamus sed bibendum nisi. Morbi neque turpis,
        vehicula volutpat libero eu, suscipit tempus turpis. Aliquam rutrum
        placerat consequat. In lobortis augue id dui commodo vestibulum. Fusce
        non ante porta erat imperdiet scelerisque. Morbi vel molestie odio, id
        volutpat lectus. In dapibus sollicitudin ante vitae eleifend.
        Pellentesque eu tellus luctus, mollis magna id, semper lectus. Aenean
        imperdiet, erat ut eleifend ullamcorper, lectus massa pharetra purus,
        nec faucibus metus lacus nec ante.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt felis tellus. Vivamus sed bibendum nisi. Morbi neque turpis,
        vehicula volutpat libero eu, suscipit tempus turpis. Aliquam rutrum
        placerat consequat. In lobortis augue id dui commodo vestibulum. Fusce
        non ante porta erat imperdiet scelerisque. Morbi vel molestie odio, id
        volutpat lectus. In dapibus sollicitudin ante vitae eleifend.
        Pellentesque eu tellus luctus, mollis magna id, semper lectus. Aenean
        imperdiet, erat ut eleifend ullamcorper, lectus massa pharetra purus,
        nec faucibus metus lacus nec ante.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt felis tellus. Vivamus sed bibendum nisi. Morbi neque turpis,
        vehicula volutpat libero eu, suscipit tempus turpis. Aliquam rutrum
        placerat consequat. In lobortis augue id dui commodo vestibulum. Fusce
        non ante porta erat imperdiet scelerisque. Morbi vel molestie odio, id
        volutpat lectus. In dapibus sollicitudin ante vitae eleifend.
        Pellentesque eu tellus luctus, mollis magna id, semper lectus. Aenean
        imperdiet, erat ut eleifend ullamcorper, lectus massa pharetra purus,
        nec faucibus metus lacus nec ante.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt felis tellus. Vivamus sed bibendum nisi. Morbi neque turpis,
        vehicula volutpat libero eu, suscipit tempus turpis. Aliquam rutrum
        placerat consequat. In lobortis augue id dui commodo vestibulum. Fusce
        non ante porta erat imperdiet scelerisque. Morbi vel molestie odio, id
        volutpat lectus. In dapibus sollicitudin ante vitae eleifend.
        Pellentesque eu tellus luctus, mollis magna id, semper lectus. Aenean
        imperdiet, erat ut eleifend ullamcorper, lectus massa pharetra purus,
        nec faucibus metus lacus nec ante.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt felis tellus. Vivamus sed bibendum nisi. Morbi neque turpis,
        vehicula volutpat libero eu, suscipit tempus turpis. Aliquam rutrum
        placerat consequat. In lobortis augue id dui commodo vestibulum. Fusce
        non ante porta erat imperdiet scelerisque. Morbi vel molestie odio, id
        volutpat lectus. In dapibus sollicitudin ante vitae eleifend.
        Pellentesque eu tellus luctus, mollis magna id, semper lectus. Aenean
        imperdiet, erat ut eleifend ullamcorper, lectus massa pharetra purus,
        nec faucibus metus lacus nec ante.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt felis tellus. Vivamus sed bibendum nisi. Morbi neque turpis,
        vehicula volutpat libero eu, suscipit tempus turpis. Aliquam rutrum
        placerat consequat. In lobortis augue id dui commodo vestibulum. Fusce
        non ante porta erat imperdiet scelerisque. Morbi vel molestie odio, id
        volutpat lectus. In dapibus sollicitudin ante vitae eleifend.
        Pellentesque eu tellus luctus, mollis magna id, semper lectus. Aenean
        imperdiet, erat ut eleifend ullamcorper, lectus massa pharetra purus,
        nec faucibus metus lacus nec ante.
      </p>
    </div>
  );
}

export default ModalPage;
