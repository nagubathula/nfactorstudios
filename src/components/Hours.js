import React from "react";

const Hours = () => {
  const careerData = [
    {
      skills: "User Experience Testing",
    },
    {
      skills: "Usability Engineering",
    },
    {
      skills: "Web Applications",
    },
    {
      skills: "UI/UX",
    },
    {
      skills: "Electronics",
    },
    {
      skills: "E-Commerce",
    },
    
    {
      skills: "User Research",
    },
    {
      skills: "Prototyping",
    },
  ];
 
  return (
    <div>
      <div className="w-[90%] mx-auto border-b mt-12 pb-16 border-gray-200 flex items-center mb-8">
        <div className="bg-black text-white rounded-full px-4 py-2 text-4xl ">
          5k+ Hours Invested
        </div>
      </div>
      <div className="flex  w-[90%] mx-auto items-left justify-end min-h-screen  pb-16">
        <div className="w-full md:w-4/5 ">
          <div className="grid grid-cols-1 md:grid-cols-3 py-6">
            {careerData.map((item, index) => (
              <div key={index} className="border-b p-4 border-gray-100">
                <div className="text-4xl">{item.skills}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hours;
