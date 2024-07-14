// components/TestimonialSection.tsx
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah J.",
    role: "Freelance Designer",
    comment: "Juju has been a game-changer for my workflow. The intuitive interface and powerful features have made it so much easier to manage my projects and collaborate with clients. I love how easy it is to make quick edits and the variety of tools available is just fantastic. I can't imagine going back to my old workflow!",
    rating: 5,
    avatar: "/src/assets/images/testimonials/avatar-1.png"
  },
  {
    name: "Mike T.",
    role: "Student",
    comment: "I use Juju daily for my studies and it has been a lifesaver. The app's tools help me organize my notes, manage my assignments, and keep track of my schedule. It's so user-friendly and has everything I need to stay on top of my coursework. I highly recommend it to any student looking to boost their productivity!",
    rating: 5,
    avatar: "/src/assets/images/testimonials/avatar-2.png"
  },
  {
    name: "Emily R.",
    role: "Marketing Manager",
    comment: "The variety of tools in Juju is impressive. Whether I'm creating marketing materials, analyzing data, or planning campaigns, Juju is my go-to for quick edits and efficient work. The collaborative features have also been incredibly helpful for working with my team remotely. It's a comprehensive tool that meets all our needs.",
    rating: 4,
    avatar: "/src/assets/images/testimonials/avatar-3.png"
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 ">
              <p className="text-gray-600 text-center mb-4">"{testimonial.comment}"</p>
              <div className="flex flex-col items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name}'s avatar`} 
                  className="w-16 h-16 rounded-full mb-2"
                />
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500 mb-2">{testimonial.role}</div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
