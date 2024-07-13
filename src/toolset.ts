interface Tool {
  id: string;
  title: string;
  category: 'images' | 'text' | 'convert';
  description: string;
}

export const tools: Tool[] = [
  {
    id: 'remove-background',
    title: 'Remove Background',
    category: 'images',
    description: 'Remove background from images easily'
  },
  {
    id: 'word-to-pdf',
    title: 'Convert Word to PDF',
    category: 'text',
    description: 'Convert Word documents to PDF format'
  },
  // Add more tools here
];