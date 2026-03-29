// Reusable search input component used on the Courses page
import styled from "styled-components";

// Styled input with focus highlight effect
const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 16px;
  box-sizing: border-box;

  /* Highlight border and glow when user clicks the input */
  &:focus {
    outline: none;
    border-color: #7ac27a;
    box-shadow: 0 0 0 3px rgba(122, 194, 122, 0.2);
  }
`;

// Props: onChange - callback function passed from parent (Courses page)
export default function SearchBar({
  onChange,
}: {
  onChange: (e: any) => void;
}) {
  return <Input placeholder="Sök kurser..." onChange={onChange} />;
}
