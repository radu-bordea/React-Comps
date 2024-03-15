import Sidebar from './components/Sidebar'; // Importing the Sidebar component
import Route from './components/Route'; // Importing the Route component
import AccordionPage from './pages/AccordionPage'; // Importing the AccordionPage component
import DropdownPage from './pages/DropdownPage'; // Importing the DropdownPage component
import ButtonPage from './pages/ButtonPage'; // Importing the ButtonPage component

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4"> {/* Main container */}
      <Sidebar /> {/* Sidebar component */}
      <div className="col-span-5"> {/* Main content area, spanning 5 columns */}
        <Route path="/accordion"> {/* Route for the AccordionPage */}
          <AccordionPage /> {/* AccordionPage component */}
        </Route>
        <Route path="/"> {/* Default route for the DropdownPage */}
          <DropdownPage /> {/* DropdownPage component */}
        </Route>
        <Route path="/buttons"> {/* Route for the ButtonPage */}
          <ButtonPage /> {/* ButtonPage component */}
        </Route>
      </div>
    </div>
  );
}

export default App; // Exporting the App component as default
