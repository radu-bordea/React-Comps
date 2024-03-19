// Importing necessary components and pages
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

// Main App component
function App() {
  return (
    // Container with grid layout
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      {/* Sidebar component */}
      <Sidebar />
      {/* Main content area */}
      <div className="col-span-5">
        {/* Routing setup */}
        {/* Each Route component corresponds to a specific path */}
        {/* Renders the respective page component based on the path */}
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}

// Exporting the App component as default
export default App;
