export default function CourseCard({ course }: any) {
  return (
    <div>
      <h3>{course.name}</h3>
      <p>{course.email}</p>
    </div>
  );
}
