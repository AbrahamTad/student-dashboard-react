import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 20px auto;
  position: relative;
`;

const Icon = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px 12px 36px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: #7ac27a;
    box-shadow: 0 0 0 3px rgba(122, 194, 122, 0.2);
  }
`;

export default function SearchBar({ onChange }: any) {
  return (
    <Wrapper>
      <Icon>🔍</Icon>
      <Input type="text" placeholder="Search courses..." onChange={onChange} />
    </Wrapper>
  );
}
