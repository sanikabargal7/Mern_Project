import React from 'react';
import Img1 from '../Images/Home/Error-Correctiong-155-BCH-Decoder.jpg'
import Img2 from '../Images/Home/Fault-Tolerant-Parallel-Filters-Based-on-Error-Correction-hamming.jpg'
import Img3 from '../Images/Home/vlcsnap-2016-05-30-16h19m03s183-e1503642301751.png'
import Img4 from '../Images/Home/vlcsnap-2016-05-30-16h19m35s235-e1503642207612.png'

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
        <p className="text-gray-700 text-justify text-sm">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const cards = [
    {
      image: {Img1},
      title: 'Online Project',
      description: 'An online project typically refers to a collaborative endeavor conducted via the internet, allowing individuals or teams to work together regardless of geographical boundaries. These projects can range from software development and website creation to research initiatives and educational programs. Online projects leverage various digital tools and platforms for communication, project management, and content sharing, facilitating efficient coordination among participants. The flexibility of remote collaboration not only enhances creativity and innovation but also enables access to a diverse pool of talent and perspectives. As technology continues to evolve, the significance of online projects grows, fostering global partnerships and driving advancements in various fields.',
    },
    {
      image: {Img2},
      title: 'Workshop',
      description: 'A workshop is an interactive educational event designed to engage participants in hands-on learning and skill development within a specific subject area. Typically led by an expert or facilitator, workshops encourage collaboration, discussion, and practical exercises, allowing attendees to apply concepts in real-time. These events can vary in duration, ranging from a few hours to several days, and cover a wide array of topics, including arts and crafts, professional development, technology, and personal growth. Workshops create a dynamic environment where participants can share ideas, receive feedback, and network with others who share similar interests, ultimately enhancing their knowledge and capabilities while fostering a sense of community.',
    },
    {
      image: {Img3},
      title: 'Thesis and Journal',
      description: 'A thesis and a journal serve distinct yet complementary purposes in the realm of academic research. A thesis is a comprehensive document that presents the author original research on a specific topic, demonstrating their expertise and contributing new knowledge to their field. It typically involves a detailed literature review, methodology, results, and discussion, culminating in a defense before a committee. In contrast, a journal is a scholarly publication that features articles from various researchers, providing a platform for sharing findings, insights, and advancements across disciplines. Journals are often peer-reviewed, ensuring the quality and validity of the research presented. While a thesis focuses on a singular, in-depth study, journals collectively contribute to the ongoing dialogue in academia, fostering collaboration and innovation by disseminating diverse perspectives and discoveries to a broader audience.',
    },
    {
      image: {Img4},
      title: 'Web Development',
      description: 'An online project typically refers to a collaborative endeavor conducted via the internet, allowing individuals or teams to work together regardless of geographical boundaries. These projects can range from software development and website creation to research initiatives and educational programs. Online projects leverage various digital tools and platforms for communication, project management, and content sharing, facilitating efficient coordination among participants. The flexibility of remote collaboration not only enhances creativity and innovation but also enables access to a diverse pool of talent and perspectives. As technology continues to evolve, the significance of online projects grows, fostering global partnerships and driving advancements in various fields.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default Services;
