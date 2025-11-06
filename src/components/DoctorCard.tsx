import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  bio: string;
  image: string;
}

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2">{doctor.name}</CardTitle>
        <p className="text-teal-600 dark:text-teal-400 font-semibold mb-3">{doctor.specialization}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{doctor.bio}</p>
        <Button asChild variant="outline" className="w-full">
          <Link to="/appointments">Book Appointment</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;