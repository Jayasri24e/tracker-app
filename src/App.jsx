import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const [openCourse, setOpenCourse] = useState(null);
  const courses = [
    {
      title: "How I Would Learn to be a Data Analyst",
      duration: "08:53",
      videoUrl: "https://youtu.be/_gF2Mj1354M",
      lessons: [
        { time: "00:00", topic: "Intro" },
        { time: "01:15", topic: "What Are Top Skills?" },
        { time: "02:49", topic: "About Top Skills" },
        { time: "02:57", topic: "Databases - SQL" },
        { time: "03:33", topic: "Spreadsheet - Excel" },
        { time: "04:13", topic: "BI - Power BI & Tableau" },
        { time: "04:38", topic: "Programming - Python & R" },
        { time: "05:06", topic: "My Roadmap" },
        { time: "07:03", topic: "How to Learn?" },
        { time: "08:53", topic: "How to Learn Faster?" }
      ]
    },

    {
      title: "Excel for Data Analytics - Full Course for Beginners",
      duration: "10:45:13",
      videoUrl: "https://youtu.be/pCJ15nGFgVg",
      lessons: [
        { time: "0:00:00", topic: "Welcome" },
        { time: "0:03:53", topic: "What is Excel?" },
        { time: "0:07:19", topic: "About Course" },
        { time: "0:11:19", topic: "Excel Install" },
        { time: "0:22:42", topic: "Worksheets" },
        { time: "0:39:15", topic: "Workbooks" },
        { time: "0:52:06", topic: "Ribbon" },
        { time: "1:06:39", topic: "Formulas Intro" },
        { time: "1:18:08", topic: "Function Intro" },
        { time: "1:29:14", topic: "Logical Functions" },
        { time: "1:39:54", topic: "Math Functions" },
        { time: "1:49:46", topic: "Statistical Functions" },
        { time: "2:01:14", topic: "Array Formulas" },
        { time: "2:21:28", topic: "Lookup Function" },
        { time: "2:39:25", topic: "Text Functions" },
        { time: "2:53:19", topic: "Date and Time Functions" },
        { time: "3:01:33", topic: "Charts Intro" },
        { time: "3:22:05", topic: "Charts Advanced" },
        { time: "3:35:37", topic: "Charts Statistics" },
        { time: "3:47:59", topic: "Sparklines" },
        { time: "3:51:57", topic: "Tables" },
        { time: "4:09:28", topic: "Formatting" },
        { time: "4:26:00", topic: "Collaboration" },
        { time: "4:40:30", topic: "Project #1: Build Dashboard" },
        { time: "5:26:43", topic: "Project #1: Share Projects" },
        { time: "5:33:46", topic: "PivotTable Intro" },
        { time: "5:54:53", topic: "PivotTable Advanced" },
        { time: "6:09:33", topic: "PivotCharts" },
        { time: "6:19:43", topic: "Analysis Add-ins" },
        { time: "6:39:00", topic: "Data Tables" },
        { time: "6:48:06", topic: "Analysis ToolPak" },
        { time: "7:03:04", topic: "Power Query Intro" },
        { time: "7:23:26", topic: "Power Query Editor" },
        { time: "7:53:13", topic: "Advanced Transformations" },
        { time: "8:14:58", topic: "Append vs Merge" },
        { time: "8:39:13", topic: "M Language" },
        { time: "9:03:11", topic: "Power Pivot Intro" },
        { time: "9:29:01", topic: "Power Pivot Window" },
        { time: "9:48:18", topic: "DAX Intro" },
        { time: "10:09:34", topic: "DAX Advanced" },
        { time: "10:27:40", topic: "Project #2: Share w/ Git & GitHub" },
        { time: "10:45:13", topic: "Project #2: Document w/ README.md" }
      ]
    },

    {
      title: "SQL for Data Analytics",
      duration: "4:05:16",
      videoUrl: "https://youtu.be/QKIGsShyEsQ",
      lessons: [
        { time: "0:00:00", topic: "Welcome" },
        { time: "0:03:43", topic: "What is SQL" },
        { time: "0:10:44", topic: "Intro to Course" },
        { time: "0:16:51", topic: "The Basics" },
        { time: "0:33:59", topic: "Comparisons" },
        { time: "0:41:18", topic: "Practice Problem 1" },
        { time: "0:45:23", topic: "Wildcards" },
        { time: "0:48:49", topic: "Alias: AS" },
        { time: "0:51:06", topic: "Practice Problem 2" },
        { time: "0:54:01", topic: "Operations" },
        { time: "0:59:37", topic: "Aggregation" },
        { time: "1:06:28", topic: "Practice Problem 3" },
        { time: "1:08:45", topic: "NULL Values" },
        { time: "Skipped", topic: "Practice Problem 4" },
        { time: "1:10:07", topic: "JOINS" },
        { time: "1:20:15", topic: "Order of Execution" },
        { time: "1:22:35", topic: "Practice Problem 5" },
        { time: "1:26:18", topic: "Setup PostgreSQL" },
        { time: "1:32:48", topic: "IDE Install: VS Code" },
        { time: "1:44:08", topic: "Data Types" },
        { time: "1:47:35", topic: "Manipulate Tables" },
        { time: "2:00:00", topic: "Database Load" },
        { time: "2:10:02", topic: "Date Functions" },
        { time: "2:20:26", topic: "Practice Problem 6" },
        { time: "2:25:02", topic: "CASE Expression" },
        { time: "2:30:24", topic: "SubQueries and CTEs" },
        { time: "2:42:21", topic: "Practice Problem 7" },
        { time: "2:50:11", topic: "UNION Operators" },
        { time: "2:54:28", topic: "Practice Problem 8" },
        { time: "2:58:11", topic: "About the Project" },
        { time: "3:02:17", topic: "Create the Repository" },
        { time: "3:14:50", topic: "Query 1 - Top Paying Jobs" },
        { time: "3:20:42", topic: "Query 2 - Top Paying Job's Skills" },
        { time: "3:28:10", topic: "Query 3 - In-Demand Skills" },
        { time: "3:34:14", topic: "Query 4 - Top Paying Skills" },
        { time: "3:41:37", topic: "Query 5 - Most Optimal Skills" },
        { time: "3:53:14", topic: "Share on GitHub" },
        { time: "4:05:16", topic: "Share on LinkedIn" }
      ]
    },

    {
      title: "Power BI for Data Analytics",
      duration: "8:11:03",
      videoUrl: "https://youtu.be/FwjaHCVNBWA",
      lessons: [
        { time: "00:00", topic: "Welcome" },
        { time: "03:58", topic: "What is Power BI?" },
        { time: "09:19", topic: "Course Intro" },
        { time: "13:07", topic: "Power BI Desktop" },
        { time: "35:05", topic: "Dashboard Build" },
        { time: "58:29", topic: "Power BI Service" },
        { time: "1:13:27", topic: "Column & Bar Charts" },
        { time: "1:32:16", topic: "Line & Area Charts" },
        { time: "1:48:33", topic: "Common Charts" },
        { time: "2:04:59", topic: "Map Charts" },
        { time: "2:17:45", topic: "Uncommon Charts" },
        { time: "2:30:24", topic: "Tables" },
        { time: "2:47:48", topic: "Cards" },
        { time: "2:57:23", topic: "Slicers" },
        { time: "3:11:00", topic: "Buttons & Bookmarks" },
        { time: "3:26:17", topic: "Main Dashboard" },
        { time: "3:39:49", topic: "Job Drill Through" },
        { time: "3:49:35", topic: "Share Dashboard" },
        { time: "4:11:47", topic: "Power Query Intro" },
        { time: "4:34:12", topic: "Power Query Editor" },
        { time: "4:57:50", topic: "Project #2: Data Import" },
        { time: "5:19:33", topic: "Advanced Transformations" },
        { time: "5:44:00", topic: "Append Vs Merge" },
        { time: "6:10:04", topic: "M Language" },
        { time: "6:32:37", topic: "DAX Intro" },
        { time: "7:04:03", topic: "Explicit Measures" },
        { time: "7:34:35", topic: "Parameters" },
        { time: "7:49:15", topic: "Dashboard Build" },
        { time: "8:11:03", topic: "Share Dashboard" }
      ]
    },

    {
      title: "Python for Data Analytics",
      duration: "11:06:04",
      videoUrl: "https://youtu.be/wUSDVGivd-8",
      lessons: [
        { time: "0:00:00", topic: "Welcome" },
        { time: "0:03:12", topic: "What is Python?" },
        { time: "0:04:51", topic: "Intro to Course" },
        { time: "0:08:42", topic: "Getting Started" },
        { time: "0:18:52", topic: "Variables" },
        { time: "0:24:25", topic: "Python Terms" },
        { time: "0:38:06", topic: "Data Types" },
        { time: "0:48:41", topic: "Strings" },
        { time: "1:02:04", topic: "ChatBot Help" },
        { time: "1:05:06", topic: "String Formatting" },
        { time: "1:15:10", topic: "Operators Part 1" },
        { time: "1:26:20", topic: "Conditional Statements" },
        { time: "1:34:24", topic: "Lists" },
        { time: "1:49:42", topic: "Dictionaries" },
        { time: "1:59:54", topic: "Sets" },
        { time: "2:05:15", topic: "Tuples" },
        { time: "2:12:26", topic: "Operators Part 2" },
        { time: "2:21:06", topic: "Loops" },
        { time: "2:36:31", topic: "List Comprehensions" },
        { time: "2:44:16", topic: "Exercise: Basics" },
        { time: "2:52:12", topic: "Functions" },
        { time: "3:02:03", topic: "Lambda" },
        { time: "3:12:46", topic: "Modules" },
        { time: "3:28:16", topic: "Exercise: Python Library" },
        { time: "3:40:05", topic: "Library" },
        { time: "3:52:33", topic: "Classes" },
        { time: "4:10:44", topic: "NumPy: Intro" },
        { time: "4:22:56", topic: "Pandas: Intro" },
        { time: "4:33:09", topic: "Pandas: Inspection" },
        { time: "4:47:20", topic: "Pandas: Cleaning" },
        { time: "4:58:46", topic: "Pandas: Analysis" },
        { time: "5:08:26", topic: "Exercise: Pandas Basics" },
        { time: "5:17:19", topic: "Matplotlib: Intro" },
        { time: "5:21:23", topic: "Matplotlib: Plotting" },
        { time: "5:34:41", topic: "Matplotlib: Labeling" },
        { time: "5:40:34", topic: "Matplotlib: Pandas Plotting" },
        { time: "5:46:00", topic: "Exercise: Matplotlib Basics" },
        { time: "5:50:56", topic: "Python Install (Anaconda)" },
        { time: "6:00:34", topic: "VS Code Install" },
        { time: "6:10:49", topic: "Virtual Environments" },
        { time: "6:27:15", topic: "Pandas: Accessing Data" },
        { time: "6:35:38", topic: "Pandas: Data Cleaning" },
        { time: "6:42:54", topic: "Pandas: Data Management" },
        { time: "6:49:35", topic: "Pandas: Pivot Tables" },
        { time: "6:57:00", topic: "Pandas: Index Management" },
        { time: "7:04:50", topic: "Exercise: Job Demand" },
        { time: "7:15:37", topic: "Pandas: Merge DataFrames" },
        { time: "7:25:53", topic: "Pandas: Concat DataFrames" },
        { time: "7:34:31", topic: "Pandas: Exporting Data" },
        { time: "7:40:56", topic: "Pandas: Applying Functions" },
        { time: "7:56:39", topic: "Pandas: Explode" },
        { time: "8:08:27", topic: "Exercise: Trending Skills" },
        { time: "8:17:21", topic: "Matplotlib: Format Charts" },
        { time: "8:30:06", topic: "Matplotlib: Pie Plots" },
        { time: "8:40:04", topic: "Matplotlib: Scatter Plots" },
        { time: "8:50:35", topic: "Matplotlib: Advanced Customization" },
        { time: "9:06:00", topic: "Matplotlib: Histograms" },
        { time: "9:10:36", topic: "Matplotlib: Box Plots" },
        { time: "9:22:01", topic: "Exercise: Skill Pay Analysis" },
        { time: "9:31:39", topic: "Seaborn: Intro" },
        { time: "9:45:40", topic: "Project: Intro" },
        { time: "9:56:23", topic: "Git & GitHub Setup" },
        { time: "10:09:50", topic: "Skill Demand" },
        { time: "10:29:33", topic: "Skills Trend" },
        { time: "10:42:30", topic: "Salary Analysis" },
        { time: "10:50:57", topic: "Optimal Skills" },
        { time: "11:03:22", topic: "Share on GitHub" },
        { time: "11:06:04", topic: "Share on LinkedIn" }
      ]
    },

    {
      title: "ChatGPT for Data Analytics",
      duration: "3:34:02",
      videoUrl: "https://youtu.be/uhyMqbZI6rM",
      lessons: [
        { time: "0:00:00", topic: "Intro" },
        { time: "0:02:22", topic: "Options and Setup" },
        { time: "0:06:59", topic: "Walkthrough" },
        { time: "0:11:56", topic: "Prompting" },
        { time: "0:16:29", topic: "Settings" },
        { time: "0:20:41", topic: "Images" },
        { time: "0:26:39", topic: "Chapter Intro" },
        { time: "0:28:29", topic: "ADA Timeout Issues" },
        { time: "0:30:01", topic: "ADA Intro" },
        { time: "0:37:48", topic: "Connecting to Data Sources" },
        { time: "0:41:02", topic: "Exploring Data Set" },
        { time: "0:45:54", topic: "Cleaning Data" },
        { time: "0:47:57", topic: "Visualizing Data" },
        { time: "0:52:19", topic: "Predicting Data" },
        { time: "0:59:31", topic: "Data Set Limitations and Security" },
        { time: "1:02:01", topic: "Chapter Outro" },
        { time: "1:03:30", topic: "Basic Analysis Intro" },
        { time: "1:07:15", topic: "Core Visualization" },
        { time: "1:16:36", topic: "Statistical Visualizations" },
        { time: "1:27:15", topic: "Visualization Best Practices" },
        { time: "1:38:37", topic: "Numerical Data" },
        { time: "1:45:51", topic: "Categorical Data" },
        { time: "1:50:34", topic: "Types of Data Analytics" },
        { time: "1:54:50", topic: "Descriptive Analysis" },
        { time: "1:59:13", topic: "Diagnostic Analysis" },
        { time: "2:05:04", topic: "Predictive Analysis" },
        { time: "2:09:12", topic: "Prescriptive Analysis" },
        { time: "2:13:04", topic: "Advanced ChatGPT Intro" },
        { time: "2:18:19", topic: "Hallucinations" },
        { time: "2:25:57", topic: "Prompting Best Practices" },
        { time: "2:33:23", topic: "Custom Instructions" },
        { time: "2:39:10", topic: "GPTs" },
        { time: "2:47:43", topic: "Plugins Intro" },
        { time: "2:53:26", topic: "Browse with Bing" },
        { time: "2:58:38", topic: "Time-Saver Plugins" },
        { time: "3:03:38", topic: "Wolfram Plugin" },
        { time: "3:08:20", topic: "DALL-E Image Generation" },
        { time: "3:13:29", topic: "Data Collection Intro" },
        { time: "3:17:03", topic: "Public Data Sets" },
        { time: "3:21:10", topic: "Web Scraping Intro" },
        { time: "3:30:23", topic: "Web Scraping Advanced" },
        { time: "3:34:02", topic: "Course Wrap-up" }
      ]
    }
  ];

  const [progress, setProgress] = useState(() => {
  const savedProgress = localStorage.getItem("trackerProgress");

  return savedProgress
    ? JSON.parse(savedProgress)
    : courses.map((course) => course.lessons.map(() => false));
});
const [streak, setStreak] = useState(() => {
  const savedStreak = localStorage.getItem("learningStreak");

  return savedStreak
    ? JSON.parse(savedStreak)
    : {
        current: 0,
        longest: 0,
        lastDate: null
      };
});
useEffect(() => {
  localStorage.setItem(
    "trackerProgress",
    JSON.stringify(progress)
  );
}, [progress]);
useEffect(() => {
  localStorage.setItem(
    "learningStreak",
    JSON.stringify(streak)
  );
}, [streak]);
useEffect(() => {
  const checkMissedDay = () => {
    if (!streak.lastDate) return;

    const today = new Date().toDateString();

    if (streak.lastDate !== today) {
      sendReminderEmail();
    }
  };

  checkMissedDay();
}, []);
const toggleLesson = (courseIndex, lessonIndex) => {
  const updated = [...progress];
  updated[courseIndex][lessonIndex] =
    !updated[courseIndex][lessonIndex];

  setProgress(updated);

  const today = new Date().toDateString();

  if (streak.lastDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const isYesterday =
      streak.lastDate === yesterday.toDateString();

    const newCurrent = isYesterday
      ? streak.current + 1
      : 1;

    setStreak({
      current: newCurrent,
      longest: Math.max(streak.longest, newCurrent),
      lastDate: today
    });
    saveStreakToNetlify(today);
  }
};

const resetCourse = (courseIndex) => {
  const updated = [...progress];
  updated[courseIndex] =
    updated[courseIndex].map(() => false);
  setProgress(updated);
};

const getCourseProgress = (courseIndex) => {
  const completed = progress[courseIndex].filter(Boolean).length;
  const total = progress[courseIndex].length;
  return Math.round((completed / total) * 100);
};

const totalLessons = progress.flat().length;
const totalCompleted = progress.flat().filter(Boolean).length;
const overallProgress = Math.round(
  (totalCompleted / totalLessons) * 100
);
const timeToSeconds = (time) => {
  if (time === "Skipped") return 0;

  const parts = time.split(":").map(Number);

  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }

  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }

  return 0;
};
const sendReminderEmail = () => {
  emailjs.send(
    "service_cibwz21",
    "template_3t5dpra",
    {
      streak: streak.current,
      course: "Continue your current course",
      lesson: "Resume your next lesson"
    },
    "ccjTnOZdADUoXXC65"
  );
};
const saveStreakToNetlify = async (date) => {
  await fetch("/.netlify/functions/save-streak", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      lastDate: date
    })
  });
};

return (
  <div className="container">
    <h1>📊 Luke Barousse Learning Tracker</h1>
    <h2>Overall Progress: {overallProgress}%</h2>
    <div className="streak-box">
  <p>🔥 Current Streak: {streak.current} days</p>
  <p>🏆 Longest Streak: {streak.longest} days</p>
</div>

    {courses.map((course, courseIndex) => (
      <div key={courseIndex} className="card">
        <div
          className="course-header"
          onClick={() =>
            setOpenCourse(
              openCourse === courseIndex ? null : courseIndex
            )
          }
        >
          <h2>{course.title}</h2>
          <p>
            {openCourse === courseIndex
              ? "▲ Hide Details"
              : "▼ View Details"}
          </p>
        </div>

        {openCourse === courseIndex && (
          <>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>

            <p>
              <strong>Progress:</strong>{" "}
              {getCourseProgress(courseIndex)}%
            </p>

            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${getCourseProgress(courseIndex)}%`
                }}
              ></div>
            </div>

            {course.lessons.map((lesson, lessonIndex) => (
              <div key={lessonIndex} className="lesson">
  <input
    type="checkbox"
    checked={progress[courseIndex][lessonIndex]}
    onChange={() =>
      toggleLesson(courseIndex, lessonIndex)
    }
  />

  <a
    href={`${course.videoUrl}?t=${timeToSeconds(lesson.time)}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {lesson.time} - {lesson.topic}
  </a>
</div>
            ))}

            <button onClick={() => resetCourse(courseIndex)}>
              Restart This Course
            </button>
          </>
        )}
      </div>
    ))}
  </div>
);
}

export default App;