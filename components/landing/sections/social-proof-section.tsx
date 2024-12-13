'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function SocialProofSection() {
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
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-semibold">
          {t('socialProof.trusted')}
        </h2>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, x: index === 1 ? 0 : index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6">
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
                <p className="text-lg italic text-muted-foreground">
                  "{testimonial.quote}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}