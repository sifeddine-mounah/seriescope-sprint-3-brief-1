# 🎬 Seriescope

**Seriescope** is a web application dedicated to TV shows. It allows users to explore TV series, discover information about different shows, search for specific titles, filter results by genre, and add their own series.

The project focuses on building a dynamic and interactive web application using **Vanilla JavaScript**, DOM manipulation, and an external API.

## ✨ Features

- **Explore TV Shows:** Retrieve and display TV shows from an external API.
- **Dynamic Cards:** Generate show cards dynamically using JavaScript.
- **Search:** Find series by their titles.
- **Filter by Genre:** Filter shows according to their categories.
- **Add New Series:** Add custom series through a form.
- **Dynamic Rendering:** Update the interface without reloading the page.
- **Responsive Design:** Adapt the interface to different screen sizes.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure and semantic organization |
| CSS3 | Styling and layout |
| Tailwind CSS | Utility-first styling and responsive design |
| JavaScript (Vanilla) | Application logic and interactivity |
| TVmaze API | External TV shows data |
| Fetch API | Retrieve data from the API |
| Git & GitHub | Version control and collaboration |
| Gitflow | Branch management and development workflow |
| Jira | Task management and project planning |

## 🌐 External API Integration

Seriescope uses the **TVmaze API** to retrieve real TV show information.

API endpoint:

`https://api.tvmaze.com/shows?page=0`

Data is retrieved using JavaScript's Fetch API and handled asynchronously with:

- `fetch()` – Sends HTTP requests to the external API.
- `async / await` – Handles asynchronous operations.
- `response.json()` – Converts the API response into JavaScript objects.
- `try / catch` – Handles potential errors during data retrieval.

## 💻 JavaScript Concepts & Methods

The project applies several fundamental JavaScript concepts:

### DOM Manipulation
- `document.querySelector()`
- `document.getElementById()`
- `document.createElement()`
- `appendChild()`
- `textContent`
- `classList.add()`

### Array Methods
- `forEach()` – Iterates through series to generate cards.
- `push()` – Adds new series to the array.
- `slice()` – Extracts a limited number of results.
- `filter()` – Filters series according to search terms and selected genres.

### Events & Interactivity
- Event listeners for user interactions.
- Form handling and input management.
- Search functionality.
- Dynamic filtering.
- Updating the interface without refreshing the page.

### JavaScript Fundamentals
- Variables and constants.
- Arrays and objects.
- Functions.
- Conditions and loops.
- Arrow functions.
- Template literals.
- Asynchronous JavaScript.

## 🔀 Gitflow Workflow

Gitflow was used to organize development and maintain a structured Git workflow.

The project uses separate branches to develop and manage features before integrating them into the main branch.

Main workflow:

1. `main` – Stable and final version of the project.
2. `develop` – Main development branch.
3. `feature/*` – Dedicated branches for developing individual features.

Changes are developed in feature branches, then integrated into the development branch before being merged into the main branch.

Git commands used include:
- `git branch`
- `git checkout`
- `git switch`
- `git add`
- `git commit`
- `git push`
- `git merge`
- `git pull`

## 📋 Project Management with Jira

Jira was used for project planning and task organization.

The planning process included:

- Breaking down the project into smaller tasks.
- Organizing features and development priorities.
- Tracking task progress.
- Managing the development workflow.
- Monitoring completed and pending tasks.

  <img width="1920" height="1020" alt="Board - SER board - Jira - Google Chrome 11_13_2026 9_04_59 AM" src="https://github.com/user-attachments/assets/f5cac91f-9081-4798-997b-0f578cb9b2a5" />


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd Seriescope
```

### 3. Run the project

Open `index.html` using Live Server in Visual Studio Code.

## 🎯 Project Objectives

The main objectives of Seriescope are to:

- Practice Vanilla JavaScript and DOM manipulation.
- Understand how to consume external APIs.
- Work with asynchronous JavaScript.
- Manipulate arrays and objects.
- Build dynamic and interactive interfaces.
- Apply responsive design using Tailwind CSS.
- Practice Gitflow and version control.
- Learn project planning and task management with Jira.

---

**Seriescope – Discover, Explore & Track Your Favorite Shows.**
