import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowRight } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
}

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
      </CardContent>
      <div className="mt-4 flex items-center text-teal-600 dark:text-teal-400 font-semibold">
        Learn More <ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </Card>
  );
};

export default ServiceCard;