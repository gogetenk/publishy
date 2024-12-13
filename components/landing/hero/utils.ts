'use client';

import { RssFeed, Keyword } from './types';
import i18n from '@/lib/i18n/config';

const templates: Record<string, Record<string, string[][]>> = {
  tech: {
    en: [
      ["Breaking: Major security update released", "Top 10 developer tools for 2024", "The future of cloud computing"],
      ["How to improve your CI/CD pipeline", "Building scalable microservices", "Web performance optimization guide"],
      ["Introducing our new API platform", "State management best practices", "Serverless architecture explained"]
    ],
    fr: [
      ["Breaking : Mise à jour majeure de sécurité", "Top 10 des outils de développement 2024", "L'avenir du cloud computing"],
      ["Comment améliorer votre pipeline CI/CD", "Construire des microservices évolutifs", "Guide d'optimisation des performances web"],
      ["Présentation de notre nouvelle plateforme API", "Bonnes pratiques de gestion d'état", "L'architecture serverless expliquée"]
    ]
  },
  fitness: {
    en: [
      ["5 Morning Yoga Flows for Energy", "HIIT vs Steady State Cardio", "Mindful Movement Guide"],
      ["Build Your Perfect Home Gym", "Nutrition Tips for Athletes", "Recovery Techniques That Work"],
      ["Monthly Fitness Challenge", "Strength Training 101", "Wellness Habits to Start Today"]
    ],
    fr: [
      ["5 séances de yoga matinal pour l'énergie", "HIIT vs Cardio continu", "Guide du mouvement conscient"],
      ["Créez votre salle de sport à domicile", "Conseils nutrition pour athlètes", "Techniques de récupération efficaces"],
      ["Défi fitness du mois", "Musculation : les bases", "Habitudes bien-être à adopter"]
    ]
  },
  pets: {
    en: [
      ["Essential Puppy Training Tips", "Natural Pet Care Guide", "Understanding Your Cat's Behavior"],
      ["Healthy Pet Food Choices", "Pet First Aid Basics", "Fun Games for Dogs"],
      ["Pet Grooming at Home", "Adopting a New Pet", "Senior Pet Care Guide"]
    ],
    fr: [
      ["Conseils essentiels pour dresser un chiot", "Guide des soins naturels", "Comprendre le comportement félin"],
      ["Choix d'aliments sains pour animaux", "Premiers secours animaliers", "Jeux pour chiens"],
      ["Toilettage à domicile", "Adopter un animal", "Soins des animaux âgés"]
    ]
  },
  food: {
    en: [
      ["30-Minute Healthy Meals", "Meal Prep for Busy Week", "Plant-Based Recipe Guide"],
      ["Seasonal Cooking Tips", "Budget-Friendly Recipes", "International Cuisine Made Easy"],
      ["Baking Tips & Tricks", "Healthy Snack Ideas", "Weekend Brunch Recipes"]
    ],
    fr: [
      ["Repas sains en 30 minutes", "Batch cooking hebdomadaire", "Guide des recettes végétales"],
      ["Cuisine de saison", "Recettes économiques", "Cuisine internationale simplifiée"],
      ["Astuces de pâtisserie", "Idées de collations saines", "Recettes pour le brunch"]
    ]
  },
  startup: {
    en: [
      ["From zero to first customer", "Startup funding explained", "Building in public guide"],
      ["Sustainable growth strategies", "Product market fit tips", "Lean startup methodology"],
      ["Success stories spotlight", "Market analysis insights", "Future trends report"]
    ],
    fr: [
      ["Du zéro au premier client", "Le financement des startups expliqué", "Guide du build in public"],
      ["Stratégies de croissance durable", "Conseils product market fit", "Méthodologie lean startup"],
      ["Focus sur les success stories", "Analyse du marché", "Rapport des tendances futures"]
    ]
  },
  crypto: {
    en: [
      ["Bitcoin halving: What to expect", "NFT market analysis Q1 2024", "DeFi yield farming guide"],
      ["Crypto regulation updates", "Top 5 emerging altcoins", "Web3 gaming revolution"],
      ["Smart contract security tips", "Crypto tax planning guide", "Green mining initiatives"]
    ],
    fr: [
      ["Halving Bitcoin : À quoi s'attendre", "Analyse du marché NFT Q1 2024", "Guide du yield farming DeFi"],
      ["Mises à jour réglementaires crypto", "Top 5 des altcoins émergents", "La révolution du gaming Web3"],
      ["Conseils sécurité smart contracts", "Guide fiscal crypto", "Initiatives de minage vert"]
    ]
  }
};

export function generateTaskContent(source: RssFeed | Keyword, loopCount: number): string {
  const lang = i18n.language || 'en';
  const categoryTemplates = templates[source.category]?.[lang] || templates[source.category]?.['en'];
  
  if (!categoryTemplates) {
    return templates.tech['en'][0][0];
  }
  
  const templateSet = categoryTemplates[loopCount % categoryTemplates.length];
  return templateSet[Math.floor(Math.random() * templateSet.length)];
}