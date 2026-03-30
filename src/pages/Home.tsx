import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Link } from "react-router";

// Wraps the top heading and date
const Header = styled.div`
  margin-bottom: 20px;
`;
// Responsive grid that auto-fits cards based on available width
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
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
  padding: 6px;
  text-align: center;
`;

const Button = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background: #0f172a;
  color: white;
  text-decoration: none;
  border-radius: 8px;
`;

export default function Home() {
  // Holds the current weather data fetched from Open-Meteo; null until loaded
  const [weather, setWeather] = useState<any>(null);

  // Fetch live weather once on mount (Gothenburg coordinates)
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
      {/* Page heading and current date */}
      <Header>
        <h1>🎓 Student Dashboard</h1>
        <p>Welcome back! Today is {today}</p>
      </Header>

      <Grid>
        <Card>
          <h3>👤 Student</h3>
          <p>Name: Abraham</p>
          <p>Program: Frontend Development</p>
        </Card>

        <Card>
          <h3>📚 Courses</h3>
          <p>10 Available Courses</p>
          <Button to="/courses">View Courses</Button>
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
              <p>Temperature: {weather.temperature}°C</p>
              <p>Wind: {weather.windspeed} km/h</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Card>

        <Card>
          <h3>📝 Assignments</h3>
          <p>3 pending tasks</p>
        </Card>

        <Card>
          <h3>⚡ Quick Actions</h3>
          <Button to="/courses">Browse Courses</Button>
        </Card>
      </Grid>
    </Layout>
  );
}
