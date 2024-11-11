import React from 'react';
// Ensure Font Awesome is installed: npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faRulerVertical, faWeight, faLeaf, faUtensils, faBullseye, faEdit } from '@fortawesome/free-solid-svg-icons';
import image from '../assets/anita.jpg'
const ProfileInfo = () => {
  const name = 'Anita Gupta';
  const email = 'anitagupta@gmail.com';
  const profileImage = image; // Replace with actual image URL
  const height = '5 ft 1 in';
  const weight = '45 kg';
  const healthGoal = 'Maintain a balanced lifestyle';
  const isVegetarian = true;
  const favoriteFood = 'Chole bhature';

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden font-poppins flex flex-col md:flex-row">
      <div className="w-full h-80 bg-gray-200 flex items-center justify-center md:w-80 md:h-auto">
        <img src={profileImage} alt="Profile" className="w-5/6 h-5/6 object-cover md:rounded-full" />
      </div>
      {/* Information Section */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 flex items-center mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500" />
          {email}
        </p>

        {/* Health Information */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Health Information</h3>
          <ul className="text-gray-600 space-y-3">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faRulerVertical} className="mr-2 text-green-500" />
              <strong>Height:</strong> {height}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faWeight} className="mr-2 text-orange-500" />
              <strong>Weight:</strong> {weight}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faBullseye} className="mr-2 text-purple-500" />
              <strong>Health Goal:</strong> {healthGoal}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faLeaf} className="mr-2 text-green-600" />
              <strong>Diet:</strong> {isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faUtensils} className="mr-2 text-red-500" />
              <strong>Favorite Food:</strong> {favoriteFood}
            </li>
          </ul>
        </div>

        {/* About Section */}
        

        {/* Edit Button */}
        
      </div>

      {/* Profile Image Section */}
      
    </div>
  );
};

export default ProfileInfo;
