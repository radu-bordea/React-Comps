// Importing necessary modules
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

// Modal component
function Modal({ onClose, children, actionBar }) {
  // Effect to handle body overflow
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  // Return the modal portal
  return ReactDOM.createPortal(
    <div>
      {/* Background overlay */}
      <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
      {/* Modal content */}
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          {/* Action bar */}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

// Exporting the Modal component as default
export default Modal;
