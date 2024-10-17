import React from 'react'
import backgroundImage from '../Images/About/JellyFish.jpg';
import img1 from '../Images/Home/img1.jpg';
import img2 from '../Images/Home/img2.jpg';
import img3 from '../Images/Home/img3.jpg';

export const About = () => {
  return (
    <>
    {/* section-1 */}
     <div 
      className="flex items-center justify-center min-h-90% bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" p-12 max-w-md w-80%">
        <h1 className="text-xl  text-gray-500">
        Our mission is to be a leader in the Ieee Solutions industry by providing enhanced services, relationship and profitability.
        </h1>
      </div>
    </div>
    {/* section-2 */}
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className=" p-6 max-w-lg w-full">
        <p className="text-gray-700 mb-4 max-w-lg w-full">
        Ieee Xpert, India. Started by a group of entrepreneurs with a sole mission of establishing a dedicated Research & Development (R&D) Cell and bringing the findings to the benefit of budding Engineers. 
        </p>
        <p className="text-gray-700 mb-4">
        In just 4 years of its existence, Ieee Xpert , India. has a pan India acclaim for its unmatched quality services. Ieee Xpert , India. a Training Organization for Technical training offer following services
        </p>
        <ul className="list-disc list-inside">
          <li className="text-gray-800"> Classroom Training</li>
          <li className="text-gray-800">On-Site Training</li>
          <li className="text-gray-800">Certification Courses</li>
          <li className="text-gray-800">Cloud Campus (Distance Learning)</li>
          <li className="text-gray-800">Engineering Projects</li>
          <li className="text-gray-800"> Lab Setup</li>
        </ul>
      </div>
    </div>

    {/* section-3 */}
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-lg w-full">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={img1} alt="Image 1" className="w-full h-auto object-cover" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={img2} alt="Image 2" className="w-full h-auto object-cover" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={img3} alt="Image 3" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
    </>
  )
}
