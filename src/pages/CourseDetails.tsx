// CourseDetails.tsx
// Shows detailed information about a single course

import { useParams, Link } from "react-router";
import styled from "styled-components";
import Layout from "../components/Layout";
import { courses } from "../data/courses";

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: #64748b;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: #0f172a;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
`;

const Title = styled.h1`
  margin: 0 0 12px;
  font-size: 1.8rem;
`;

const Teacher = styled.p`
  margin: 6px 0;
  color: #475569;
`;

const Credits = styled.p`
  margin: 6px 0;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 16px;
  color: #64748b;
  line-height: 1.5;
`;

export default function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((c) => c.id === Number(id));

  if (!course) return <p>Course not found</p>;

  return (
    <Layout>
      <Wrapper>
        <BackLink to="/courses">← Back to courses</BackLink>

        <Card>
          <Title>{course.title}</Title>

          <Teacher>👨‍🏫 Teacher: {course.teacher}</Teacher>

          <Credits>🎓 Credits: 15 hp</Credits>

          <Description>
            This course covers fundamental concepts and practical applications.
            Students will learn through hands-on exercises and real-world
            examples.
          </Description>
        </Card>
      </Wrapper>
    </Layout>
  );
}
