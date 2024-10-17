import React from 'react'
import Card5 from '../Images/Home/light-bulb.png'

export const PhdGuide = () => {
  return (
    <>
    <div className=" min-h-screen bg-gray-100 p-8">
    <h1 className="text-4xl font-bold text-center mb-2">VLSI PHD RESEARCH THESIS</h1>
    <h2 className="text-xl text-gray-700 text-justify mb-4">VLSI PHD RESEARCH – Doctor of philosophy is the final degree in any area. It requires a lot of efforts and hard work to achieve this.It starts with selection of a topic which should be recent and lies in your area of interest. If we talk specifically about research in technology then the next step is not straightforward and as simple as studying, collecting data, analyzing and writing the hypothesis. Research in technology requires implementation of work in the form of prototype or actual real time implementation of the idea.</h2>
    <div className="flex flex-col items-center justify-center">
     
     <img 
       src= {Card5} 
       alt="Placeholder" 
       className="w-full max-w-md h-auto rounded shadow-lg"
     />
   </div>
    </div>
    <div className="flex flex-col min-h-screen p-4 bg-gray-100">
      <p className="text-2xl font-bold text-center mb-4">VLSI PHD RESEARCH THESIS</p>
      <p className="text-lg text-gray-700 text-justify mb-6">
      If we narrow down our discussion to research in areas like electronics, electrical, computer science, artificial intelligence , wireless communication and related fields, which are the base of everything in this high-tech world. In these fields researchers have developed applications (aided with technology) for every field ranging from biomedical to aerospace and construction, which were nowhere related to electronics or even current.
      </p>
      <p className="text-lg text-gray-700 text-justify mb-6">
      As the research fields we are talking about are providing base to the developing world and providing it with reliable technologies which are being used in real time, the work of researcher becomes more wide starting with an idea to the realization of the idea in the real world in form of application or product.
      </p>
      <p className="text-lg text-gray-700 text-justify mb-6">
      To make a reliable and working model the idea of the VLSI design project ( i.e speech processing application, biomedical monitoring system etc) needs to be implemented and re-implemented, re-tested and improvised. The there are many development cycles and techniques available which eases up the implementation like:
      </p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li className="bg-white p-1 rounded shadow">Behavioral simulation</li>
        <li className="bg-white p-1 rounded shadow">Software based model</li>
        <li className="bg-white p-1 rounded shadow">Hardware Implementation (ASIC)</li>
        <li className="bg-white p-1 rounded shadow">Programmable hardware (FPGA)</li>
        <li className="bg-white p-1 rounded shadow">Co-simulation</li>
      </ul>
      <p className="text-lg text-gray-700 text-justify mb-6">
      Behavioral simulation is used at initial phase and it is not appropriate for testing the real time behavior of the system in actual environment as it is more close to systems behavior in ideal environment.
      </p>
      <p className="text-lg text-gray-700 text-justify mb-6">
      We can simulate the actual environment by using different software models (more like software models of channels used to test communication systems) but its capabilities are also limited to human capability to model the environmental conditions in mathematical equations and models.
      </p>
      <p className="text-lg text-gray-700 text-justify mb-6">
      All of us are familiar with ASIC, their high performance and hardwired implementation. These are good for final implementation but not for intermediate stages of implementation and testing. Nothing is better than ASIC for real time testing of analog VLSI circuits. But for digital circuits and DSP applications we have a better option of FPGA (Field Programmable Gate Array).
      </p>
      <p className="text-lg text-gray-700 text-justify mb-6">
      The hardware co-simulation is a good idea to test and monitor systems in real time. To get more details about PhD thesis in VLSI you can do online research or contact us.
      </p>
    </div>
    
    </>
  )
}
