export const CONTENT_LAYOUT = [
  { 
    id: 'instagram-reel',
    type: 'video', 
    platform: 'Reels', 
    color: 'gray',
    className: 'col-span-1 row-span-2'
  },
  { 
    id: 'linkedin-post',
    type: 'text', 
    platform: 'LinkedIn', 
    color: 'gray',
    className: 'col-span-1 row-span-1'
  },
  { 
    id: 'twitter-post',
    type: 'text', 
    platform: 'Twitter', 
    color: 'gray',
    className: 'col-span-1 row-span-1'
  },
  { 
    id: 'instagram-post',
    type: 'image', 
    platform: 'Instagram', 
    color: 'gray',
    className: 'col-span-1 row-span-1'
  }
] as const;