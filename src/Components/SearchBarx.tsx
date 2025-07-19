import React from "react";

interface SearchBarProps {
  value?: string; // Optional value prop for controlled input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Pending"
      className="max-w-xs p-2 border border-gray-300 rounded"
    />
  );
};

export default SearchBar;
