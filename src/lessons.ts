import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());
app.get("/health", (req, res) => {
  res.json({
    message: "server is up & running...",
  });
});
// Create a new lesson
app.post("/api/lessons", async (req, res) => {
  const { lesson, slug, title } = req.body;
  console.log(req.body);
  try {
    const newLesson = await prisma.englishLessons.create({
      data: {
        lesson,
        slug,
        title,
      },
    });
    res.json(newLesson);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the lesson." + error });
  }
});

// Get all lessons
app.get("/api/lessons", async (req, res) => {
  try {
    const lessons = await prisma.marathiLessons.findMany();
    res.json(lessons);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching lessons." });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
