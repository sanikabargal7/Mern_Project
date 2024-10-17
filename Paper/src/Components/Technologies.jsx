import React from 'react';
import C1 from '../Images/Home/java-logo.png'
import C2 from '../Images/Home/android-logo.png'
import C3 from '../Images/Home/integrated-circuit.png'
import C4 from '../Images/Home/programming-1.png'
import C5 from '../Images/Home/wireless-network.png'
import C6 from '../Images/Home/computer-microprocessor.png'
import C7 from '../Images/Home/ieee-mini-project.png'

const Card = ({ image, title, subtitle, items }) => {
  return (
    <div className="flex items-start bg-white shadow-md rounded-lg p-6 mb-4 max-w-3xl">
      <img src={image} alt={title} className="w-1/3 h-auto rounded-lg" />
      <div className="ml-4 w-2/3">
        <h3 className="text-xl font-bold">{title}</h3>
        <h4 className="text-md text-gray-600 mb-2">{subtitle}</h4>
        <ul className="list-disc list-inside space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-gray-800">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Technologies = () => {
  const cards = [
    {
      image: C1,
      title: 'Java Development Services',
      subtitle: 'Our customers have relied on our understanding and expertise of Java technologies supported with a commitment to keeping up with the ever changing Java technology landscape. We help our clients choose the right Java architecture; following tried and tested approaches to build robust and scalable Java applications: ',
      items: ['Java Web Development', 'Java Application Development', 'Java Software Development'],
    },
    {
      image: C4,
      title: '.NET Development Services',
      subtitle: 'Ieee Xpert helps companies develop powerful solutions using the Microsoft .NET platform. If you are looking for a robust, scalable and secure software design that uses .NET development best practices, our company can help. Our team of experienced programmers can enable your next .NET software development initiative across:',
      items: ['ASP.NET Web Development', 'Azure Application Development', '.NET Migration Services', '.NET Professional Services'],
    },
    {
      image: C2,
      title: 'Android Project Developement',
      subtitle: 'Ieee Xpert  is an experienced and mature app development provider that knows how to generate value through Android apps and maximize returns on your Android app investment. We have developed mobile applications for a vast number of business or consumer needs such as:',
      items: ['Acadamic Apps', 'Visual Imaging Apps', 'Mobile Project Apps'],
    },
    {
      image: C3,
      title: 'VLSI Project Developement',
      subtitle: 'Ieee Xpert is a focused provider of VLSI design and verification services to help leading semiconductor research students globally, with a special focus on system-on-chip (SOC) designs in the following domains:',
      items: ['System On Chip', 'Arithmetic', 'Digital Circuit Design', 'Digital Signal Processing'],
    },
    {
      image: C5,
      title: 'NS2/NS2 Project Developement',
      subtitle: 'The area on network has always been a fascinating topic for researchers for along time . wired networks to wireless networks, there are ,many research papers ,journals and applications designs submitted every year',
      items: ['Mobile Ad Hoc Networks', 'Wired Networks', 'Mobile Wireless network', 'Vehicular Ad Hoc Networks'],
    },
    {
      image: C6,
      title: 'Embedded Project Developemet',
      subtitle: 'Embedded systems is a chip programming technology that has been on the rise as its has contributed a lot towards system Automation .though Electronics and Electrical Engineering students opt for IEEE Embedded Systems project',
      items: ['ARM Microprocessor Project Development', 'PIC Micro controller Project Development', 'ATMEL / ARDUINO Project Development', 'Android With Controllers Developement'],
    },
    
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>

    
  );
};

export default Technologies;
