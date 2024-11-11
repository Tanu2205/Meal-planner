import React from 'react';
// Ensure Font Awesome is installed: npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faRulerVertical, faWeight, faLeaf, faUtensils, faBullseye, faEdit } from '@fortawesome/free-solid-svg-icons';

const ProfileInfo = () => {
  const name = 'John Doe';
  const email = 'johndoe@email.com';
  const profileImage = 'https://via.placeholder.com/250'; // Replace with actual image URL
  const height = '5 ft 9 in';
  const weight = '150 lbs';
  const healthGoal = 'Maintain a balanced lifestyle';
  const isVegetarian = true;
  const favoriteFood = 'Pasta Primavera';

  return (
    <div className="max-w-4/5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex font-poppins">
      
      {/* Information Section */}
      <div className="flex-1 p-6 ml-10">
        <h2 className="text-4xl font-semibold font-poppins text-blue">{name}</h2>
        <p className="text-green flex items-center mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500" />
          {email}
        </p>

        {/* Health Information */}
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Health Information</h3>
          <ul className="text-gray-600 space-y-3 text-xl mt-4">
            <li className="flex items-center ">
              <FontAwesomeIcon icon={faRulerVertical} className="mr-2 text-#ff0000" />
              <strong>Height:</strong> {height}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faWeight} className="mr-2 text-orange" />
              <strong>Weight:</strong> {weight}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faBullseye} className="mr-2 text-#7f32a8" />
              <strong>Health Goal:</strong> {healthGoal}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faLeaf} className="mr-2 text-green" />
              <strong>Diet:</strong> {isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faUtensils} className="mr-2 text-#4debe5" />
              <strong>Favorite Food:</strong> {favoriteFood}
            </li>
          </ul>
        </div>

        {/* About Section */}
        

        {/* Edit Button */}
        
      </div>

      {/* Profile Image Section */}
      <div className="flex-none w-80 h-80 bg-gray-200 flex items-center justify-center rounded-full mr-5 mt-5">
        <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
      </div>
    </div>
  );
};

export default ProfileInfo;
