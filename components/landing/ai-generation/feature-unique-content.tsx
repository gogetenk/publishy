'use client';

import { ContentCard } from './content-card';
import { useContentGeneration } from './hooks/use-content-generation';

export function FeatureUniqueContent() {
  const { generatedContent, currentProject } = useContentGeneration();

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-4 h-[700px]">
        {/* Reel - Spans 2 rows */}
        <div key={`reel-${currentProject.id}`} className="col-span-2 row-span-4">
            <ContentCard 
              key={`reel-content-${currentProject.id}`}
              type="video"
              platform="Reels"
              color="gray"
              project={currentProject}
            />
          
        </div>

        {/* LinkedIn post */}
        <div key={`linkedin-${currentProject.id}`} className="col-span-2 row-span-2">
            <ContentCard 
              key={`linkedin-content-${currentProject.id}`}
              type="text"
              platform="LinkedIn"
              color="gray"
              project={currentProject}
            />
         
        </div>

        {/* Instagram post */}
        <div key={`instagram-${currentProject.id}`} className="col-span-2 row-span-2">
            <ContentCard 
              key={`instagram-content-${currentProject.id}`}
              type="image"
              platform="Instagram"
              color="gray"
              project={currentProject}
            />
         
        </div>
      </div>
    </div>
  );
}
