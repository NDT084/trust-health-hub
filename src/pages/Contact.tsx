import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading('Sending your message...');
    setTimeout(() => {
      if(name && email && message) {
        toast.success(`Thank you, ${name}! Your message has been sent.`);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error('Please fill out all fields.');
      }
    }, 1500);
  };

  return (
    <div className="container mx-auto py-20 px-4 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">We are here to help. Contact us with any questions or to schedule an appointment.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start"><Mail className="w-6 h-6 mr-3 mt-1 text-teal-600" /> <div><strong>Email:</strong><br /> contact@afyahealth.com</div></li>
            <li className="flex items-start"><Phone className="w-6 h-6 mr-3 mt-1 text-teal-600" /> <div><strong>Phone:</strong><br /> +254 712 345 678</div></li>
            <li className="flex items-start"><MapPin className="w-6 h-6 mr-3 mt-1 text-teal-600" /> <div><strong>Address:</strong><br /> 123 Afya Lane, Nairobi, Kenya</div></li>
          </ul>
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
             <h3 className="text-xl font-semibold mb-2">Emergency Contact</h3>
             <p className="text-red-600 dark:text-red-500 font-bold text-lg">+254 700 111 222</p>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600"></textarea>
            </div>
            <div>
              <Button type="submit" className="w-full">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;