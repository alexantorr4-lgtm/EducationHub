[Uploading README.md…]()
# Education Hub - Admin Guide

Welcome to Education Hub! This guide explains how to manage and update your content.

---

## 📋 Table of Contents
1. [How to Add YouTube Videos](#how-to-add-youtube-videos)
2. [How to Add Chapters](#how-to-add-chapters)
3. [How to Add Resources](#how-to-add-resources)
4. [How to Deploy to GitHub Pages](#how-to-deploy-to-github-pages)
5. [Project Structure](#project-structure)
6. [Troubleshooting](#troubleshooting)

---

## 🎬 How to Add YouTube Videos

All your content is stored in the **`data.json`** file. To add a YouTube video to a chapter:

### Step 1: Find the Chapter
Open `data.json` and locate the chapter you want to update. The structure is:

```
varsity/medical → subjects → papers → chapters
```

### Step 2: Add Your YouTube URL
Find the `"youtubeUrl"` field in the chapter and paste your YouTube link:

```json
{
  "name": "Chapter 1: Kinematics",
  "description": "Learn about motion...",
  "youtubeUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

### Supported YouTube URL Formats:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`
- Just the video ID: `VIDEO_ID`

The video will automatically display with a custom player that hides YouTube branding.

---

## 📖 How to Add Chapters

To add a new chapter to a subject:

### Step 1: Locate the Paper
Find the paper (1st Paper or 2nd Paper) where you want to add the chapter.

### Step 2: Add the Chapter Object
Add a new chapter to the `chapters` array:

```json
{
  "name": "Chapter 3: New Topic",
  "description": "Description of what students will learn in this chapter.",
  "youtubeUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
  "resources": [
    {
      "name": "Lecture Notes",
      "url": "https://example.com/notes.pdf"
    }
  ]
}
```

### Required Fields:
- `name` (string) - Chapter title
- `description` (string) - Brief description
- `youtubeUrl` (string) - YouTube link (can be empty `""`)
- `resources` (array) - Links to additional materials

---

## 📎 How to Add Resources

Resources are additional materials like lecture sheets, PDFs, or worksheets linked to chapters.

### Step 1: Prepare Your Resource
Upload your PDF/document to a cloud storage (Google Drive, Dropbox, etc.) and get the shareable link.

### Step 2: Add to Chapter
Add the resource to the chapter's `resources` array:

```json
"resources": [
  {
    "name": "Lecture Sheet",
    "url": "https://example.com/physics-ch1.pdf"
  },
  {
    "name": "Practice Problems",
    "url": "https://example.com/problems.pdf"
  }
]
```

Resources will appear as download buttons on the video player screen.

---

## 🚀 How to Deploy to GitHub Pages

### Prerequisites:
- A GitHub account
- Git installed on your computer

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **+** → **New repository**
3. Name it: `education-hub` (or any name you prefer)
4. Choose **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A: Using Git (Recommended)**

```bash
# Navigate to your project folder
cd path/to/education-hub

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Education Hub setup"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/education-hub.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Website**

1. Go to your repository
2. Click **Add file** → **Upload files**
3. Select all files from your project folder
4. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to your repository → **Settings**
2. Scroll to **Pages** section
3. Under **Source**, select **Deploy from a branch**
4. Select branch: **main** and folder: **/ (root)**
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/education-hub/`

### Step 4: Update Content

To update videos or chapters:

1. Edit `data.json` in your repository
2. Click **Commit changes**
3. The website updates automatically within 1-2 minutes

**That's it!** Every time you push changes to GitHub, your website updates.

---

## 📁 Project Structure

```
education-hub/
├── index.html       (Main page - don't edit)
├── styles.css       (Styling - don't edit unless customizing)
├── script.js        (Logic - don't edit unless fixing bugs)
├── data.json        (YOUR CONTENT - EDIT THIS!)
├── README.md        (This file)
└── .gitignore       (Git config)
```

**Only edit `data.json` to add your content.**

---

## 🎯 Quick Examples

### Example 1: Add Physics Chapter with Video

```json
{
  "name": "Chapter 4: Circular Motion",
  "description": "Learn about centripetal force and angular velocity.",
  "youtubeUrl": "https://www.youtube.com/watch?v=abc123",
  "resources": []
}
```

### Example 2: Add Chapter with Multiple Resources

```json
{
  "name": "Chapter 5: Waves",
  "description": "Understand wave properties and interference.",
  "youtubeUrl": "https://youtu.be/xyz789",
  "resources": [
    {
      "name": "Lecture Sheet",
      "url": "https://example.com/waves-lecture.pdf"
    },
    {
      "name": "Practice Problems",
      "url": "https://example.com/waves-problems.pdf"
    },
    {
      "name": "Solutions",
      "url": "https://example.com/waves-solutions.pdf"
    }
  ]
}
```

### Example 3: Add New Subject

To add a new subject (edit with caution):

```json
{
  "name": "New Subject",
  "icon": "📚",
  "papers": [
    {
      "name": "Paper 1",
      "chapters": [
        {
          "name": "Chapter 1: Intro",
          "description": "Introduction to the subject.",
          "youtubeUrl": "",
          "resources": []
        }
      ]
    }
  ]
}
```

---

## ⚠️ Important Notes

### JSON Syntax
- **Commas matter!** Each item needs a comma except the last one
- **Use double quotes** for all strings: `"like this"` not `'like this'`
- **No trailing commas** - this will break the file

### Example of Correct JSON:
```json
{
  "name": "Chapter 1",
  "youtubeUrl": "https://youtube.com/watch?v=abc",
  "resources": []  ← No comma here (it's the last item)
}
```

### YouTube Links
The system automatically extracts the video ID, so these all work:
- `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- `https://youtu.be/dQw4w9WgXcQ`
- `dQw4w9WgXcQ`

---

## 🔧 Troubleshooting

### Issue: Website shows blank/error after editing

**Solution:** Your `data.json` has a JSON syntax error.
- Use [jsonlint.com](https://jsonlint.com) to validate your JSON
- Check for missing commas or quotes

### Issue: YouTube video doesn't play

**Solution:** 
- Verify the video URL is correct
- Make sure the video is not private or deleted
- Try different URL formats

### Issue: Changes not showing up

**Solution:**
- Wait 1-2 minutes for GitHub Pages to rebuild
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check the repository's "Actions" tab to see if deployment succeeded

### Issue: GitHub Pages not enabled

**Solution:**
- Go to Settings → Pages
- Make sure source is set to "main" branch
- Ensure folder is "/" (root)

---

## 📧 Support

For issues with the website code, refer to the comments in:
- `script.js` - JavaScript logic
- `styles.css` - Styling
- `index.html` - HTML structure

For GitHub-related issues, visit [GitHub Docs](https://docs.github.com/en/pages)

---

## 🎓 Tips for Success

1. **Start Small** - Add one chapter with a video first
2. **Test Locally** - Open `index.html` in your browser to test before pushing
3. **Use Descriptive Titles** - Clear chapter names help students
4. **Add Resources** - Include lecture notes, problem sets, and solutions
5. **Organize Well** - Group related chapters logically

---

**Happy Teaching! 🚀**

Last updated: August 26, 2026
