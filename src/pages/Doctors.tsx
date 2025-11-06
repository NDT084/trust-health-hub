import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data';

const Doctors = () => {
  return (
    <div className="container mx-auto py-20 px-4 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Our Medical Team</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Our doctors are dedicated, experienced, and committed to providing the best care. We are proud to have a team of specialists who are leaders in their fields.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;