export default function CourseCard({ course }: any) {
  return (
    <div>
      <h3>{course.title}</h3>
      <p>{course.teacher}</p>
    </div>
  );
}
