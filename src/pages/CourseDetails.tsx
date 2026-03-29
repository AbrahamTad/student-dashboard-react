import { useParams, Link } from "react-router";
import styled from "styled-components";
import { courses } from "../data/courses";

const Wrapper = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  padding: 0 2rem;
`;

const BackLink = styled(Link)`
  color: #64748b;
  text-decoration: none;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 1.5rem;

  &:hover {
    color: #0f172a;
  }
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h1`
  font-size: 1.6rem;
  color: #0f172a;
  margin: 0 0 1rem;
`;

const Info = styled.p`
  color: #475569;
  margin: 0.5rem 0;
  font-size: 0.95rem;
`;

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course)
    return (
      <Wrapper>
        <BackLink to="/courses">← Back to courses</BackLink>
        <p>Course not found.</p>
      </Wrapper>
    );

  return (
    <Wrapper>
      <BackLink to="/courses">← Back to courses</BackLink>
      <Card>
        <Title>📘 {course.title}</Title>
        <Info>👤 Teacher: {course.teacher}</Info>
      </Card>
    </Wrapper>
  );
}
