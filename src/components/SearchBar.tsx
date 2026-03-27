import styled from "styled-components";
import { useState } from "react";

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

export default function SearchBar({ onSearch }: any) {
  const [search, setSearch] = useState("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Input
      placeholder="Search course..."
      value={search}
      onChange={handleChange}
    />
  );
}
