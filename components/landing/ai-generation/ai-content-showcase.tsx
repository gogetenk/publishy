'use client';

import { motion } from 'framer-motion';
import { ContentCard } from './content-card';
import { ContentPlaceholder } from './content-placeholder';
import { useContentGeneration } from './hooks/use-content-generation';

export function AIContentShowcase() {
  const { generatedContent, isGenerating, currentProject } = useContentGeneration();

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-4 h-[700px]">
        {/* Reel - Spans 2 rows */}
        <motion.div
          key={`reel-${currentProject.id}`}
          className="col-span-2 row-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {generatedContent.includes(0) ? (
            <ContentCard 
              key={`reel-content-${currentProject.id}`}
              type="video"
              platform="Reels"
              color="gray"
              project={currentProject}
            />
          ) : (
            <ContentPlaceholder 
              key={`reel-placeholder-${currentProject.id}`}
              type="video"
              platform="Reels"
              color="gray"
              isGenerating={isGenerating}
            />
          )}
        </motion.div>

        {/* LinkedIn post */}
        <motion.div
          key={`linkedin-${currentProject.id}`}
          className="col-span-2 row-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {generatedContent.includes(1) ? (
            <ContentCard 
              key={`linkedin-content-${currentProject.id}`}
              type="text"
              platform="LinkedIn"
              color="gray"
              project={currentProject}
            />
          ) : (
            <ContentPlaceholder 
              key={`linkedin-placeholder-${currentProject.id}`}
              type="text"
              platform="LinkedIn"
              color="gray"
              isGenerating={isGenerating}
            />
          )}
        </motion.div>

        {/* Instagram post */}
        <motion.div
          key={`instagram-${currentProject.id}`}
          className="col-span-2 row-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {generatedContent.includes(3) ? (
            <ContentCard 
              key={`instagram-content-${currentProject.id}`}
              type="image"
              platform="Instagram"
              color="gray"
              project={currentProject}
            />
          ) : (
            <ContentPlaceholder 
              key={`instagram-placeholder-${currentProject.id}`}
              type="image"
              platform="Instagram"
              color="gray"
              isGenerating={isGenerating}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}
