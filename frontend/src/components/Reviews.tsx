import React from 'react';
import { Star } from 'lucide-react';
import Review1 from '../public/review1.jpg'
import Review2 from '../public/review2.avif';
import Review3 from '../public/review3.jpg';

interface Review {
  name: string;
  rating: number;
  comment: string;
  image: string; // Changed to string since imported images resolve to string paths in most builds
}

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Kulveer Singh",
      rating: 5,
      comment: "Best internet service I've ever had! The speeds are incredible and customer service is top-notch.",
      image: Review1, // Imported image
    },
    {
      name: "Preeti Sharma",
      rating: 4,
      comment: "Switched from my old provider and couldn't be happier. Gaming and streaming are butter smooth now!",
      image: Review2, // Imported image
    },
    {
      name: "Jashan",
      rating: 5,
      comment: "Working from home has never been easier with their reliable connection. Highly recommend!",
      image: Review3, // Imported image (fixed syntax from {Review3} to Review3)
    },
  ];

  return (
    <div id="reviews" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;