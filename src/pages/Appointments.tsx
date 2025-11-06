import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { services, doctors } from '../data';

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

const Appointments = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading('Booking appointment...');
    setTimeout(() => {
      if (selectedService && selectedDoctor && selectedDate && selectedTime) {
        toast.success(`Appointment booked with ${selectedDoctor} for ${selectedService} on ${selectedDate} at ${selectedTime}`);
        // Reset form
        setStep(1);
        setSelectedService('');
        setSelectedDoctor('');
        setSelectedDate('');
        setSelectedTime('');
      } else {
        toast.error('Please complete all steps to book an appointment.');
      }
    }, 1500);
  };

  return (
    <div className="container mx-auto py-20 px-4 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Book an Appointment</h1>
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Your Appointment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleBooking}>
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div>
                <h3 className="font-semibold text-lg mb-4">Step 1: Select a Service</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <Button 
                      key={service.id} 
                      variant={selectedService === service.name ? 'default' : 'outline'}
                      onClick={() => setSelectedService(service.name)}
                      className="h-auto py-4"
                    >
                      {service.name}
                    </Button>
                  ))}
                </div>
                <div className="text-right mt-8">
                  <Button onClick={() => setStep(2)} disabled={!selectedService}>Next</Button>
                </div>
              </div>
            )}

            {/* Step 2: Select Doctor */}
            {step === 2 && (
              <div>
                <h3 className="font-semibold text-lg mb-4">Step 2: Select a Doctor</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {doctors.map((doctor) => (
                    <Button 
                      key={doctor.id} 
                      variant={selectedDoctor === doctor.name ? 'default' : 'outline'}
                      onClick={() => setSelectedDoctor(doctor.name)}
                      className="h-auto py-4"
                    >
                      {doctor.name}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                  <Button onClick={() => setStep(3)} disabled={!selectedDoctor}>Next</Button>
                </div>
              </div>
            )}

            {/* Step 3: Select Date & Time */}
            {step === 3 && (
              <div>
                <h3 className="font-semibold text-lg mb-4">Step 3: Select Date and Time</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <label htmlFor="date" className="block font-medium mb-2">Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-2">Available Time Slots</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map(time => (
                        <Button 
                          key={time} 
                          variant={selectedTime === time ? 'default' : 'outline'}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                  <Button type="submit" disabled={!selectedDate || !selectedTime}>Confirm Booking</Button>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Appointments;