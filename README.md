# Student Dashboard

- /            -> HomePage - Overview of the dashboard
- /courses     -> CoursesPage - View and search courses
- /courses/:id -> CourseDetailsPage - View course details

---

## Features

- React + TypeScript
- React Router
- Styled Components (CSS-in-JS)
- API data fetching
- Search filtering
- Loading state
- Responsive layout

---

## Components

- Navbar.tsx       -> Navigation links
- Layout.tsx       -> Page container layout
- SearchBar.tsx    -> Search courses (stateful)
- CourseCard.tsx   -> Course display card
- Footer.tsx       -> Footer section

---

## Pages

- Home.tsx
- Courses.tsx
- CourseDetails.tsx

---

## Data

```typescript
interface Course {
  id: number
  name: string
  email: string
}