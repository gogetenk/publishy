export interface Project {
  id: string;
  name: string;
  linkedInContent: {
    title: string;
    content: string;
    hashtag: string;
    likes: string;
    comments: string;
    shares: string;
  };
  instagramContent: {
    image: string;
    caption: string;
    likes: string;
  };
  reelContent: {
    video: string;
    caption: string;
    likes: string;
    comments: string;
  };
}

export interface ContentType {
  type: 'text' | 'image' | 'video';
  platform: string;
  color: string;
}