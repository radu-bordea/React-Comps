import React from 'react'; // Importing React library
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'; // Importing icons from react-icons library
import Button from '../components/Button'; // Importing Button component

function ButtonPage() {
  const handleClick = () => {}; // Placeholder function for click event handling

  return (
    <div>
      {/* First Button */}
      <div>
        <Button
          primary // Primary button variant
          outline // Outline style
          rounded // Rounded corners
          className="mb-5" // Additional class for styling
          onClick={handleClick} // Click event handler
        >
          Click me!! {/* Button text */}
        </Button>
      </div>
      {/* Second Button */}
      <div>
        <Button danger outline onMouseEnter={handleClick}> {/* Danger button variant with outline style */}
          Buy Now! {/* Button text */}
        </Button>
      </div>
      {/* Third Button */}
      <div>
        <Button warning onMouseLeave={handleClick}> {/* Warning button variant */}
          See Deal! {/* Button text */}
        </Button>
      </div>
      {/* Fourth Button */}
      <div>
        <Button secondary outline> {/* Secondary button variant with outline style */}
          Hide Ads! {/* Button text */}
        </Button>
      </div>
      {/* Fifth Button */}
      <div>
        <Button primary rounded> {/* Primary button variant with rounded corners */}
          Something! {/* Button text */}
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage; // Exporting ButtonPage component as default
