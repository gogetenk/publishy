'use client';

import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export function TestimonialsSection() {
  const { t, i18n } = useTranslation();

  const testimonials = i18n.language === 'fr' ? [
    {
      quote: "Publishy nous fait gagner plus de 20 heures par semaine. C'est un véritable changement pour les startups en croissance.",
      author: "Sarah Chen",
      role: "CTO chez TechStart",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=250&h=250&auto=format&fit=crop"
    },
    {
      quote: "Avec 3 MVPs en production, j'avais besoin d'automatiser le marketing pour rester concentré sur le développement. Publishy l'a rendu possible.",
      author: "Alex Rivera",
      role: "Développeur Indépendant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop"
    },
    {
      quote: "Le contenu généré par l'IA est étonnamment bon et me fait gagner des heures chaque semaine.",
      author: "Emma Davis",
      role: "Chef de Produit",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop"
    }
  ] : [
    {
      quote: "Publishy has saved us 20+ hours weekly. It's a game-changer for scaling startups.",
      author: "Sarah Chen",
      role: "CTO at TechStart",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=250&h=250&auto=format&fit=crop"
    },
    {
      quote: "With 3 MVPs in production, I needed to automate marketing to stay focused on building. Publishy made it possible.",
      author: "Alex Rivera",
      role: "Indie Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop"
    },
    {
      quote: "The AI-generated content is surprisingly good and saves me hours each week.",
      author: "Emma Davis",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="p-6">
              <div className="flex items-start mb-4">
                <img
                  src={testimonial.image}
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