// Importing necessary hooks and components
import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

// Component representing the Modal page
function ModalPage() {
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to handle opening the modal
  const handleClick = () => {
    setShowModal(true);
  };

  // Function to handle closing the modal
  const handleClose = () => {
    setShowModal(false);
  };

  // Action bar content for the modal
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  // Modal content
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  // Rendering the modal button and the modal itself if showModal is true
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}

      {/* Sample text */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      {/* Sample text */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      {/* Sample text */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      {/* Sample text */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      {/* Sample text */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      {/* Sample text */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      {/* Sample text */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
    </div>
  );
}

// Exporting the ModalPage component as default
export default ModalPage;
