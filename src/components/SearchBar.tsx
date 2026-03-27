import { useState } from "react";

export default function SearchBar({ onSearch }: any) {
  const [search, setSearch] = useState("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search course..."
      value={search}
      onChange={handleChange}
    />
  );
}
