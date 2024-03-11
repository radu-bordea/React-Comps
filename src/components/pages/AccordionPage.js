import Accordion from "../components/Accordion";

// Define the main App component
function AccordionPage() {
  // Data for the accordion items
  const items = [
    {
      id: "ejk43jbbg",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want! You can use React on any project you want!",
    },
    {
      id: "htrjnrt43",
      label: "Can I use Javascript on a project?",
      content:
        "You can use Javascript on any project you want! You can use Javascript on any project you want! You can use Javascript on any project you want! You can use Javascript on any project you want! You can use Javascript on any project you want!",
    },
    {
      id: "ert43re43",
      label: "Can I use CSS on a project?",
      content:
        "You can use CSS on any project you want! You can use CSS on any project you want! You can use CSS on any project you want! You can use CSS on any project you want! You can use CSS on any project you want!",
    },
  ];

  // Render the Accordion component with the provided items
  return <Accordion items={items} />;
}

// Export the App component as default
export default AccordionPage;
