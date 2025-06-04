import React from "react";

const ProfilePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/3">
          <div className="bg-gray-200 h-48 w-full rounded-lg mb-4"></div>
          <h1 className="text-2xl font-bold">Lisa Wang</h1>
          <h2 className="text-lg text-gray-600">Marketing Director</h2>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <span className="text-gray-500 w-24">Marketing</span>
              <span>5+ years</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 w-24">Location</span>
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 w-24">Joined</span>
              <span>February 2020</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          {/* Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            <button className="px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600">Overview</button>
            <button className="px-4 py-2 font-medium text-gray-500 hover:text-blue-600">Experience</button>
            <button className="px-4 py-2 font-medium text-gray-500 hover:text-blue-600">Projects</button>
            <button className="px-4 py-2 font-medium text-gray-500 hover:text-blue-600">Contact</button>
          </div>
          
          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-gray-700 mb-4">
              Driving brand growth through strategic campaigns and digital marketing excellence. 
              Lisa has transformed our market presence and built lasting customer relationships.
            </p>
            
            <div>
              <h4 className="font-medium mb-2">Skills & Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {["Digital Marketing", "Brand Strategy", "Analytics", "Content Marketing", "SEO"].map((skill) => (
                  <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Language Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Language</h3>
            <ul className="space-y-2">
              <li>English (Native)</li>
              <li>Mandarin (Fluent)</li>
              <li>German (Intermediate)</li>
            </ul>
          </div>
          
          {/* Education Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <ul className="space-y-2">
              <li>MBA Marketing from Wharton</li>
              <li>BA Communications from USC</li>
            </ul>
          </div>
          
          {/* Interests Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Interests & Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              {["Yoga", "Food Blogging", "Digital Art", "Hiking"].map((interest) => (
                <span key={interest} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;