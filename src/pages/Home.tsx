import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import DoctorCard from '../components/DoctorCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { doctors, services, testimonials } from '../data';

const Home = () => {
  return (
    <div className="dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[600px] text-white"
        style={{ backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/1bf5f45e-e8b7-46bc-a7e1-02107678ad0d/hero-background-3ats3oj-1762434143684.webp)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">Your Health, Our Priority</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">Experience compassionate and expert healthcare. Book your appointment today and take the first step towards a healthier you.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              <Link to="/appointments">Book an Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Doctors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Expert Doctors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.slice(0, 4).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/doctors">View All Doctors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Comprehensive Medical Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;