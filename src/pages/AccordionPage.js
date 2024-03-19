// Importing necessary components
import Accordion from '../components/Accordion';

// Component representing the Accordion page
function AccordionPage() {
  // Sample items for the Accordion component
  const items = [
    {
      id: 'l2kj5',
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'lk2j35lkj',
      label: 'Can I use Javascript on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'l1kj2i0g',
      label: 'Can I use CSS on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
  ];

  // Rendering the Accordion component with the provided items
  return <Accordion items={items} />;
}

// Exporting the AccordionPage component as default
export default AccordionPage;
