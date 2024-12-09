'use client';

import { Card } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Publishy has transformed how I handle marketing for my projects!",
    author: "Sarah Chen",
    role: "Tech Founder",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=250&h=250&auto=format&fit=crop",
  },
  {
    quote: "Finally, I can focus on coding while my marketing runs on autopilot.",
    author: "Tom Wilson",
    role: "Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop",
  },
  {
    quote: "The AI-generated content is surprisingly good and saves me hours each week.",
    author: "Emma Davis",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Loved by Developers and Entrepreneurs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="p-6">
              <div className="flex items-start mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">"{testimonial.quote}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}