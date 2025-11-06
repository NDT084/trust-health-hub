import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

const Services = () => {
  return (
    <div className="container mx-auto py-20 px-4 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Our Medical Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">We offer a wide range of medical services to meet your health needs. From general check-ups to specialized treatments, our team is here for you.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;