export type AppCategory = 
  | 'focus'
  | 'tasks'
  | 'reminders'
  | 'notes'
  | 'time'
  | 'habits'
  | 'calm'
  | 'planning';

export interface App {
  id: string;
  name: string;
  description: string;
  whyADHD: string;
  categories: AppCategory[];
  platforms: ('ios' | 'android' | 'web' | 'mac' | 'windows')[];
  url: string;
  free: boolean;
  hasFreeTier?: boolean;
}

export const categories: Record<AppCategory, { label: string; emoji: string }> = {
  focus: { label: 'Focus & Deep Work', emoji: '🎯' },
  tasks: { label: 'Task Management', emoji: '✅' },
  reminders: { label: 'Reminders', emoji: '⏰' },
  notes: { label: 'Notes & Capture', emoji: '📝' },
  time: { label: 'Time Management', emoji: '⏱️' },
  habits: { label: 'Habits & Routines', emoji: '🔄' },
  calm: { label: 'Calm & Regulation', emoji: '🧘' },
  planning: { label: 'Planning & Organization', emoji: '📋' },
};

export const apps: App[] = [
  {
    id: 'todoist',
    name: 'Todoist',
    description: 'Simple, powerful task manager with natural language input and smart scheduling.',
    whyADHD: 'Quick capture reduces mental load. Natural language input means less friction. Karma points add gentle gamification.',
    categories: ['tasks', 'reminders'],
    platforms: ['ios', 'android', 'web', 'mac', 'windows'],
    url: 'https://todoist.com',
    free: false,
    hasFreeTier: true,
  },
  {
    id: 'forest',
    name: 'Forest',
    description: 'Stay focused by growing virtual trees. Leave the app and your tree dies.',
    whyADHD: 'Visual consequence for phone checking. Gamification makes focus rewarding. Simple, no complicated setup.',
    categories: ['focus'],
    platforms: ['ios', 'android'],
    url: 'https://forestapp.cc',
    free: false,
    hasFreeTier: true,
  },
  {
    id: 'due',
    name: 'Due',
    description: 'Reminders that nag you until you do them. Auto-snooze and persistent notifications.',
    whyADHD: 'Keeps nagging until acknowledged — perfect for ADHD forgetfulness. Dead simple interface.',
    categories: ['reminders'],
    platforms: ['ios', 'mac'],
    url: 'https://www.dueapp.com',
    free: false,
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes, tasks, wikis, and databases.',
    whyADHD: 'Flexible enough to build YOUR system. Can be a brain dump or structured planner. Templates reduce setup friction.',
    categories: ['notes', 'tasks', 'planning'],
    platforms: ['ios', 'android', 'web', 'mac', 'windows'],
    url: 'https://notion.so',
    free: false,
    hasFreeTier: true,
  },
  {
    id: 'brain-fm',
    name: 'Brain.fm',
    description: 'AI-generated music designed to help you focus, relax, or sleep.',
    whyADHD: 'Specifically designed for focus. No lyrics to distract. Many users report it actually works for ADHD brains.',
    categories: ['focus', 'calm'],
    platforms: ['ios', 'android', 'web'],
    url: 'https://brain.fm',
    free: false,
    hasFreeTier: true,
  },
  {
    id: 'streaks',
    name: 'Streaks',
    description: 'Simple habit tracker. Track up to 24 tasks you want to complete each day.',
    whyADHD: 'Limited to 24 habits prevents overwhelm. Visual streaks motivate consistency. Apple Watch support for quick logging.',
    categories: ['habits'],
    platforms: ['ios', 'mac'],
    url: 'https://streaksapp.com',
    free: false,
  },
  {
    id: 'toggl',
    name: 'Toggl Track',
    description: 'Simple time tracking with one-click timers and detailed reports.',
    whyADHD: 'Helps with time blindness. See where time actually goes. One-click start reduces friction.',
    categories: ['time'],
    platforms: ['ios', 'android', 'web', 'mac', 'windows'],
    url: 'https://toggl.com/track',
    free: false,
    hasFreeTier: true,
  },
  {
    id: 'finch',
    name: 'Finch',
    description: 'Self-care pet app. Complete goals to help your pet grow and explore.',
    whyADHD: 'Gamification without pressure. Gentle, not punishing. Celebrating small wins builds momentum.',
    categories: ['habits', 'calm'],
    platforms: ['ios', 'android'],
    url: 'https://finchcare.com',
    free: false,
    hasFreeTier: true,
  },
  {
    id: 'things',
    name: 'Things 3',
    description: 'Beautifully designed task manager with areas, projects, and tags.',
    whyADHD: 'Gorgeous design makes you want to use it. Quick entry is frictionless. "Today" view keeps focus narrow.',
    categories: ['tasks', 'planning'],
    platforms: ['ios', 'mac'],
    url: 'https://culturedcode.com/things',
    free: false,
  },
  {
    id: 'cold-turkey',
    name: 'Cold Turkey',
    description: 'Website and app blocker that actually works. Block distractions completely.',
    whyADHD: 'Nuclear option for distraction. Can\'t be easily bypassed. Scheduled blocks for work hours.',
    categories: ['focus'],
    platforms: ['web', 'mac', 'windows'],
    url: 'https://getcoldturkey.com',
    free: false,
    hasFreeTier: true,
  },
  {
    id: 'otter',
    name: 'Otter.ai',
    description: 'AI transcription for meetings and conversations.',
    whyADHD: 'Never miss meeting details. Review later when mind wandered. Searchable transcripts.',
    categories: ['notes'],
    platforms: ['ios', 'android', 'web'],
    url: 'https://otter.ai',
    free: false,
    hasFreeTier: true,
  },
  {
    id: 'centered',
    name: 'Centered',
    description: 'Flow state app with AI coach, focus music, and task management.',
    whyADHD: 'Built specifically for focus. Virtual coworking. Gentle nudges when distracted.',
    categories: ['focus', 'tasks'],
    platforms: ['mac', 'windows', 'web'],
    url: 'https://centered.app',
    free: false,
    hasFreeTier: true,
  },
  {
    id: 'routinery',
    name: 'Routinery',
    description: 'Visual routine builder with timers for each step.',
    whyADHD: 'Step-by-step guidance through routines. Timers prevent hyperfocus on one task. Morning/evening routine templates.',
    categories: ['habits', 'time'],
    platforms: ['ios', 'android'],
    url: 'https://routinery.app',
    free: false,
    hasFreeTier: true,
  },
  {
    id: 'goblin-tools',
    name: 'Goblin Tools',
    description: 'AI tools including Magic ToDo that breaks tasks into smaller steps.',
    whyADHD: 'Built BY someone with ADHD. Task breakdown is a superpower. Free and simple.',
    categories: ['tasks', 'planning'],
    platforms: ['web', 'ios'],
    url: 'https://goblin.tools',
    free: true,
  },
  {
    id: 'reclaim',
    name: 'Reclaim.ai',
    description: 'AI calendar assistant that auto-schedules tasks, habits, and breaks.',
    whyADHD: 'Automatic time blocking. Protects focus time. Reschedules when things shift.',
    categories: ['time', 'planning', 'habits'],
    platforms: ['web'],
    url: 'https://reclaim.ai',
    free: false,
    hasFreeTier: true,
  },
];
