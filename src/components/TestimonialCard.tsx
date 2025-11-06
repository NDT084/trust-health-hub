import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-teal-500">
      <CardContent className="p-0">
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 italic mb-4">'{testimonial.quote}'</p>
        <p className="font-semibold text-right">- {testimonial.name}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;