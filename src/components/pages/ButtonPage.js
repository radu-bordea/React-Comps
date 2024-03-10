// Import necessary dependencies
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

// Define the ButtonPage component
function ButtonPage() {
  // Click event handler function
  const handleClick = () => {
    console.log('Click!');
  }

  // Render Button components with different variations
  return (
    <div>
      <div>
        {/* Button with secondary outline and rounded corners */}
        <Button secondary outline rounded className="mb-5" onClick={handleClick}>
          <GoBell /> {/* Icon */}
          Click me!! {/* Button text */}
        </Button>
      </div>
      <div>
        {/* Button with danger outline */}
        <Button danger outline>
          <GoCloudDownload /> {/* Icon */}
          Buy Now! {/* Button text */}
        </Button>
      </div>
      <div>
        {/* Button with warning variation */}
        <Button warning>
          <GoDatabase /> {/* Icon */}
          See Deal! {/* Button text */}
        </Button>
      </div>
      <div>
        {/* Button with secondary outline */}
        <Button secondary outline>
          Hide Ads! {/* Button text */}
        </Button>
      </div>
      <div>
        {/* Button with primary variation and rounded corners */}
        <Button primary rounded>
          Something! {/* Button text */}
        </Button>
      </div>
    </div>
  );
}

// Export the ButtonPage component as default
export default ButtonPage;
