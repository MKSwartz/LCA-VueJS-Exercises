# FlexZone Fitness - Class Schedule Manager

A Vue.js web application for gym staff to manage fitness class sessions with local browser storage.

![Screenshot](Screenshot.png)

## Features

- Add new classes (name, coach, date, time, capacity)
- Form validation on all fields
- Dynamic schedule list with real-time updates
- Delete sessions with one click
- Empty state message when no sessions exist
- Automatic total session count
- Responsive design (mobile + desktop)
- Local browser storage persistence

## Tech Stack

- Vue.js 3
- LocalStorage API
- HTML/CSS
- Bootstrap
- JavaScript

## Project structure

```bash
src/
├── assets/
│   └── main.css
├── components/
│   ├── AddClassForm.vue
│   ├── ClassList.vue
│   └── SessionCard.vue
├── composables/
│   └── useSessions.js
├── App.vue
└── main.js
```

## Installation & Setup

1. **Clone the repository**

```bash

# Clone the repository

git clone https://github.com/your-username/LCA-VueJS-Exercises.git

# Navigate to project folder

cd LCA-VueJS-Exercises

# Install dependencies

npm install

# Run development server

npm run dev

```
