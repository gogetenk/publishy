export const MOCK_PROJECTS = [
  {
    name: 'FitPartner',
    description: 'Cross-platform fitness tracking app',
    platforms: ['Twitter', 'LinkedIn', 'Dev.to'],
    progress: 0,
    color: 'bg-blue-500/10 border-blue-500/20',
    accent: 'text-blue-500',
    tasks: [
      { id: '1', title: 'Top 5 Workouts to Kickstart Your Day', platform: 'Twitter', time: '4h', status: 'scheduled' },
      { id: '2', title: 'Success Story: How Sarah Reached Her Goals', platform: 'Instagram', time: '2d', status: 'draft' }
    ],
    justRemovedTask: false
  },
  {
    name: 'Dashy',
    description: 'B2B analytics dashboard',
    platforms: ['LinkedIn', 'Twitter'],
    progress: 0,
    color: 'bg-purple-500/10 border-purple-500/20',
    accent: 'text-purple-500',
    tasks: [
      { id: '3', title: 'Unlocking Growth: B2B Analytics Essentials', platform: 'LinkedIn', time: '2h', status: 'scheduled' },
      { id: '4', title: 'Data-Driven Decision Making: A Quick Start', platform: 'Twitter', time: '1d', status: 'draft' }
    ],
    justRemovedTask: false
  },
  {
    name: 'PowerDev',
    description: 'VS Code productivity extension',
    platforms: ['Twitter', 'Dev.to'],
    progress: 0,
    color: 'bg-emerald-500/10 border-emerald-500/20',
    accent: 'text-emerald-500',
    tasks: [
      { id: '5', title: '10 VS Code Productivity Hacks', platform: 'Twitter', time: '2d', status: 'scheduled' },
      { id: '6', title: 'Behind the Scenes: Building a Powerful Extension', platform: 'Dev.to', time: '3d', status: 'draft' }
    ],
    justRemovedTask: false
  }
];

export const PREDEFINED_TASK_NAMES = [
  "10 VS Code Productivity Hacks",
  "How B2B Analytics Can Boost Your ROI",
  "5 Morning Workout Routines For Busy Professionals",
  "Exclusive Insider Tips on Dashboard Optimization",
  "Beginner's Guide to Efficient Code Reviews",
  "Case Study: Scaling Your Fitness Community",
  "7 Data Insights to Transform Your Strategy",
  "Behind the Scenes: Building a Powerful Extension"
];