// src/data/LessionsData.js

const LessionsData = [
  {
    command: "ls",
    description: "List files and directories.",
    options: [
      "-l: Long format listing.",
      "-a: Include hidden files.",
      "-h: Human-readable file sizes.",
    ],
    examples: [
      "ls -l → displays files and directories with details.",
      "ls -a → shows hidden files.",
      "ls -lh → human-readable sizes.",
    ],
    difficulty: "Beginner",
    category: "File System",
  },
  {
    command: "cd",
    description: "Change directory.",
    options: [],
    examples: ["cd /path/to/directory → changes current directory."],
    difficulty: "Beginner",
    category: "Navigation",
  },
  {
    command: "pwd",
    description: "Print working directory.",
    options: [],
    examples: ["pwd → shows current working directory."],
    difficulty: "Beginner",
    category: "Navigation",
  },
  {
    command: "mkdir",
    description: "Create a new directory.",
    options: [],
    examples: ["mkdir my_directory → creates a directory named 'my_directory'."],
    difficulty: "Beginner",
    category: "File System",
  },
  {
    command: "rm",
    description: "Remove files and directories.",
    options: ["-r: Remove recursively.", "-f: Force removal."],
    examples: [
      "rm file.txt → deletes file.",
      "rm -r my_directory → deletes directory and contents.",
      "rm -f file.txt → force delete without confirmation.",
    ],
    difficulty: "Intermediate",
    category: "File System",
  },
];

// 👇 export it as default
export default LessionsData;
