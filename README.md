# AI Mock Interview Platform - Frontend

## Overview

The frontend is developed using React and communicates with the backend through the API Gateway.

It provides a complete AI-powered mock interview experience from registration to interview report generation.

---

# Tech Stack

- React
- React Router
- Axios
- Tailwind CSS
- Vite

---

# Project Structure

```
src

├── api

├── components

├── layouts

├── pages

│ ├── auth

│ ├── interview

│ ├── history

│ └── report

├── services

└── App.jsx

```

---

# Application Flow

Landing Page

↓

Register

↓

Login

↓

Dashboard

↓

Take Mock

↓

Enter Role

↓

Enter Job Description

↓

Upload Resume

↓

AI Interview

↓

Answer Questions

↓

Receive Feedback

↓

Generate Report

↓

History

---

# Pages

## Landing Page

Features

- Register
- Login

---

## Register

Features

- Register User
- Backend Validation

---

## Login

Features

- JWT Login
- Store Token
- Navigate Dashboard

---

## Dashboard

Features

- Sidebar
- Take Mock
- History
- Logout

---

## Take Mock

Features

- Enter Job Role
- Enter Job Description
- Start Interview

---

## Upload Resume

Features

- Upload PDF
- Resume Parsing
- Generate First Question

---

## Interview Page

Features

- Display Question
- Submit Answer
- Show Score
- Show Feedback
- Generate Next Question

---

## Report Page

Features

- Overall Score
- Strengths
- Weaknesses
- Recommendations

---

## History Page

Features

- Previous Interviews
- Overall Score
- Interview Date
- View Report

---

# API Integration

Authentication

- Register
- Login

Interview

- Start Interview
- Upload Resume
- Submit Answer

Report

- Get Report

History

- Get Previous Interviews

---

# Features Implemented

## Authentication

- Register
- Login
- JWT Storage

## Interview

- Resume Upload
- AI Questions
- AI Evaluation
- Dynamic Questions
- Feedback

## Report

- Overall Score
- Strengths
- Weaknesses
- Recommendations

## History

- Previous Interviews
- View Reports

---

# User Flow

Register

↓

Login

↓

Dashboard

↓

Take Mock

↓

Role

↓

Description

↓

Resume Upload

↓

Question 1

↓

Answer

↓

Feedback

↓

Next Question

↓

Question 2

↓

...

↓

Question 10

↓

Report

↓

History

---

# Future Improvements

## UI

- Professional Dashboard
- Better Sidebar
- Charts
- Responsive Design
- Dark Mode

## Features

- Voice Interview
- Webcam Interview
- PDF Download
- Email Report
- Resume Management
- Interview Analytics

## User Experience

- Toast Notifications
- Loading Animations
- Skeleton Loaders
- Progress Bar
- Timer
- Interview Resume
