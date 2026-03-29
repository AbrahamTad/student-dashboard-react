//Stateful component that fetches and displays assignments
// Uses JSONPlaceholder todos API as assignment data source

import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// TypeScript interface defining the shape of each assignment object
interface Assignment {
  id: number;
  title: string;
  completed: boolean;
}
// Union type for the three possible filter values
type Filter = "all" | "completed" | "pending";

// Animation for list items sliding in from the left
const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-6px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  color: #0f172a;
`;
// Container for the three filter buttons
const FilterBar = styled.div`
  display: flex;
  gap: 0.4rem;
  background: #f1f5f9;
  padding: 0.3rem;
  border-radius: 10px;
`;

// Filter button that changes style based on whether it's the active filter
const FilterBtn = styled.button<{ $active: boolean }>`
  padding: 0.35rem 0.9rem;
  border-radius: 7px;
  border: none;
  background: ${({ $active }) => ($active ? "#fff" : "transparent")};
  color: ${({ $active }) => ($active ? "#0f172a" : "#64748b")};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  box-shadow: ${({ $active }) =>
    $active ? "0 1px 3px rgba(0,0,0,0.1)" : "none"};
  transition: all 0.2s;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
// Each assignment item has a colored left border based on completion status
const Item = styled.li<{ $done: boolean }>`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-left: 4px solid ${({ $done }) => ($done ? "#22c55e" : "#f97316")};
  border-radius: 10px;
  padding: 0.9rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: ${fadeIn} 0.25s ease;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  }
`;

// Small pill badge showing "Done" (green) or "Pending" (orange)
const Badge = styled.span<{ $done: boolean }>`
  font-size: 0.72rem;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  background: ${({ $done }) => ($done ? "#f0fdf4" : "#fff7ed")};
  color: ${({ $done }) => ($done ? "#15803d" : "#c2410c")};
  font-weight: 600;
  white-space: nowrap;
  border: 1px solid ${({ $done }) => ($done ? "#bbf7d0" : "#fed7aa")};
`;

const AssignmentTitle = styled.p`
  margin: 0;
  color: #334155;
  font-size: 0.92rem;
  text-transform: capitalize;
`;

const CountNote = styled.p`
  color: #94a3b8;
  font-size: 0.82rem;
  margin: 0 0 1rem;
`;

const LoadingMsg = styled.p`
  color: #94a3b8;
  text-align: center;
  padding: 3rem 0;
`;

export default function AssignmentList() {
  // State for all fetched assignments from the API
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  // State for the currently active filter tab
  const [filter, setFilter] = useState<Filter>("all");

  // State to show a loading message while API call is in progress
  const [loading, setLoading] = useState(true);

  // Fetch assignments from JSONPlaceholder API on component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then((res) => res.json())
      .then((data: Assignment[]) => {
        setAssignments(data);
        setLoading(false);
      })
      .catch(() => setLoading(false)); // stop loading even if fetch fails
  }, []); // empty dependency array = runs once on mount

  // Filter the assignments array based on the active filter state
  const filtered = assignments.filter((a) => {
    if (filter === "completed") return a.completed;
    if (filter === "pending") return !a.completed;
    return true; // "all" returns everything
  });

  return (
    <>
      <TopBar>
        <Title>📋 Assignments</Title>
        {/* Filter buttons - clicking one updates the filter state */}
        <FilterBar>
          {(["all", "completed", "pending"] as Filter[]).map((f) => (
            <FilterBtn
              key={f}
              $active={filter === f}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </FilterBtn>
          ))}
        </FilterBar>
      </TopBar>

      {/* Show loading message while API data is being fetched */}
      {loading && <LoadingMsg>Loading assignments...</LoadingMsg>}

      {/* Show count of visible assignments after loading */}
      {!loading && <CountNote>Showing {filtered.length} assignments</CountNote>}

      {/* Render the filtered list of assignments */}
      <List>
        {filtered.map((a) => (
          <Item key={a.id} $done={a.completed}>
            <Badge $done={a.completed}>
              {a.completed ? "Done" : "Pending"}
            </Badge>
            <AssignmentTitle>{a.title}</AssignmentTitle>
          </Item>
        ))}
      </List>
    </>
  );
}
