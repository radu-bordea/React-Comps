import Accordion from '../components/Accordion'; // Importing Accordion component

function AccordionPage() {
  // Array of items for the Accordion component
  const items = [
    {
      id: 'l2kj5',
      label: 'Can I use React on a project?', // Accordion item label
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.', // Accordion item content
    },
    {
      id: 'lk2j35lkj',
      label: 'Can I use Javascript on a project?', // Accordion item label
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.', // Accordion item content
    },
    {
      id: 'l1kj2i0g',
      label: 'Can I use CSS on a project?', // Accordion item label
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.', // Accordion item content
    },
  ];

  // Rendering Accordion component with items
  return <Accordion items={items} />;
}

export default AccordionPage; // Exporting AccordionPage component as default
