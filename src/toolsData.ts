import {
  FileText, Hash, Type, Image, ArrowRightLeft, Scissors, Edit, 
  Check, Layers, Minimize, Repeat, FileDown, FileSpreadsheet, FileJson,
  QrCode
} from 'lucide-react';

export interface Tool {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  path: string;
  category: string;
}

export const tools: Tool[] = [
  {
    id: 'pdf-to-jpg',
    icon: Image,
    title: "PDF to JPG",
    description: "Convert PDF pages to JPG images.",
    path: "/tool/pdf-to-jpg",
    category: "pdf"
  },
  {
    id: 'jpg-to-pdf',
    icon: FileText,
    title: "JPG to PDF",
    description: "Convert JPG images to a PDF file.",
    path: "/tool/jpg-to-pdf",
    category: "pdf"
  },
  {
    id: 'merge-pdf',
    icon: ArrowRightLeft,
    title: "Merge PDF",
    description: "Combine multiple PDF files into one.",
    path: "/tool/merge-pdf",
    category: "pdf"
  },
  {
    id: 'split-pdf',
    icon: Scissors,
    title: "Split PDF",
    description: "Separate a PDF into multiple files.",
    path: "/tool/split-pdf",
    category: "pdf"
  },
  {
    id: 'text-case-converter',
    icon: Edit,
    title: "Text Case Converter",
    description: "Convert text to UPPERCASE, lowercase, or Title Case.",
    path: "/tool/text-case-converter",
    category: "writing"
  },
  {
    id: 'word-count',
    icon: FileText,
    title: "Word Count",
    description: "Count the words in your text.",
    path: "/tool/word-count",
    category: "writing"
  },
  {
    id: 'character-count',
    icon: Hash,
    title: "Character Count",
    description: "Count the characters in your text.",
    path: "/tool/character-count",
    category: "writing"
  },
  {
    id: 'lorem-ipsum',
    icon: Type,
    title: "Lorem Ipsum Generator",
    description: "Generate Lorem Ipsum placeholder text.",
    path: "/tool/lorem-ipsum",
    category: "writing"
  },
  {
    id: 'resume-writer',
    icon: Edit,
    title: "AI Resume Writer",
    description: "Create professional resumes with AI assistance.",
    path: "/tool/resume-writer",
    category: "writing"
  },
  {
    id: 'grammar-checker',
    icon: Check,
    title: "Grammar Checker",
    description: "Improve your writing with grammar suggestions.",
    path: "/tool/grammar-checker",
    category: "writing"
  },
  {
    id: 'remove-background',
    icon: Layers,
    title: "Remove Background",
    description: "Remove background from images easily.",
    path: "/tool/remove-background",
    category: "image"
  },
  {
    id: 'image-resizer',
    icon: Minimize,
    title: "Image Resizer",
    description: "Resize images to your desired dimensions.",
    path: "/tool/image-resizer",
    category: "image"
  },
  {
    id: 'image-converter',
    icon: Repeat,
    title: "Image Converter",
    description: "Convert images between different formats.",
    path: "/tool/image-converter",
    category: "image"
  },
  {
    id: 'image-compressor',
    icon: FileDown,
    title: "Image Compressor",
    description: "Compress images to reduce file size.",
    path: "/tool/image-compressor",
    category: "image"
  },
  {
    id: 'excel-to-pdf',
    icon: FileText,
    title: "Excel to PDF",
    description: "Convert Excel spreadsheets to PDF documents.",
    path: "/tool/excel-to-pdf",
    category: "convert"
  },
  {
    id: 'csv-to-excel',
    icon: FileSpreadsheet,
    title: "CSV to Excel",
    description: "Convert CSV files to Excel spreadsheets.",
    path: "/tool/csv-to-excel",
    category: "convert"
  },
  {
    id: 'xml-to-json',
    icon: FileJson,
    title: "XML to JSON",
    description: "Convert XML files to JSON format.",
    path: "/tool/xml-to-json",
    category: "convert"
  },
  {
    id: 'xml-to-csv',
    icon: FileText,
    title: "XML to CSV",
    description: "Convert XML files to CSV format.",
    path: "/tool/xml-to-csv",
    category: "convert"
  },
  {
    id: 'qr-code-generator',
    icon: QrCode,
    title: "QR Code Generator",
    description: "Generate QR codes for text or URLs.",
    path: "/tool/qr-code-generator",
    category: "convert"
  }
];