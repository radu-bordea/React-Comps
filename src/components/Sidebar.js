import Link from "./Link"; // Importing Link component

function Sidebar() {
  // Array of sidebar links with labels and paths
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
  ];

  // Mapping through links to render Link components
  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });

  // Rendering the sidebar with rendered links
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  );
}

export default Sidebar; // Exporting Sidebar component as default
