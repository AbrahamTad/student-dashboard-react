import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;

const Sub = styled.p`
  text-align: center;
  color: gray;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const ProgressBar = styled.div`
  background: #eee;
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  background: #0f172a;
  width: 75%;
  color: white;
  padding: 5px;
  text-align: center;
`;

export default function Home() {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=57.7&longitude=12.3&current_weather=true",
    )
      .then((res) => res.json())
      .then((data) => setWeather(data.current_weather));
  }, []);

  const today = new Date().toDateString();

  return (
    <Layout>
      <Title>Student Dashboard</Title>
      <Sub>Welcome back! Today is {today}</Sub>

      <Grid>
        <Card>
          <h3>📚 Courses</h3>
          <p>10 Available Courses</p>
        </Card>

        <Card>
          <h3>📝 Assignments</h3>
          <p>3 Pending</p>
        </Card>

        <Card>
          <h3>📊 Progress</h3>
          <ProgressBar>
            <ProgressFill>75%</ProgressFill>
          </ProgressBar>
        </Card>

        <Card>
          <h3>🌤 Weather</h3>
          {weather ? (
            <>
              <p>Temp: {weather.temperature}°C</p>
              <p>Wind: {weather.windspeed} km/h</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Card>
      </Grid>
    </Layout>
  );
}
