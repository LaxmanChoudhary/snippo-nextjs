import { db } from "./drizzle";
import { Snippet, SnippetTable } from "./schema";
import dotenv from "dotenv";
dotenv.config({
  path: ".env.local",
});

export const snippets = [
  {
    id: 0,
    userId: 2,
    title: "API Request",
    tags: "api;http",
    description: "Make an API request using fetch",
    codeLanguage: "javascript",
    codeValue: `fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
  
function test() {
  console.log("Hello world")
}`,
    public: false,
    deleted: false,
    createdAt: new Date("2024-07-25T10:04:00Z"),
    updatedAt: new Date("2024-07-25T10:04:00Z"),
  },
  {
    id: 1,
    userId: 1,
    title: "Quick Sort Algorithm",
    tags: "algorithm;sorting",
    description: "An efficient sorting algorithm",
    codeLanguage: "python",
    codeValue: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-07-25T10:00:00Z"),
    updatedAt: new Date("2024-07-25T10:00:00Z"),
  },
  {
    id: 2,
    userId: 2,
    title: "React Button Component",
    tags: "react;component;ui",
    description: "A reusable button component",
    codeLanguage: "javascript",
    codeValue: `const Button = ({ text, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {text}
  </button>
);`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-07-25T10:01:00Z"),
    updatedAt: new Date("2024-07-25T10:01:00Z"),
  },
  {
    id: 3,
    userId: 1,
    title: "Database Connection",
    tags: "database;connection",
    description: "Establish a database connection",
    codeLanguage: "python",
    codeValue: `import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="mydb",
    user="user",
    password="password"
)`,
    public: false,
    deleted: false,
    createdAt: new Date("2024-07-25T10:02:00Z"),
    updatedAt: new Date("2024-07-25T10:02:00Z"),
  },
  {
    id: 4,
    userId: 3,
    title: "Bubble Sort",
    tags: "algorithm;sorting",
    description: "A simple sorting algorithm",
    codeLanguage: "java",
    codeValue: `public void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
}`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-07-25T10:03:00Z"),
    updatedAt: new Date("2024-07-25T10:03:00Z"),
  },
  {
    id: 5,
    userId: 2,
    title: "API Request",
    tags: "api;http",
    description: "Make an API request using fetch",
    codeLanguage: "javascript",
    codeValue: `fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));`,
    public: false,
    deleted: false,
    createdAt: new Date("2024-07-25T10:04:00Z"),
    updatedAt: new Date("2024-07-25T10:04:00Z"),
  },
];
export async function seed() {
  const insertedData = await db
    .insert(SnippetTable)
    .values(snippets)
    .returning();
  console.log(`Seeded ${insertedData.length} data`);

  // return {
  //   insertedData,
  // };
  process.exit();
}

// seed();
