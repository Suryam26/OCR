import React from 'react'

type StateDropdownProps = {
  onStateSelected: (selectedState: string) => void;
};

const StateDropdown: React.FC<StateDropdownProps> = ({ onStateSelected }) => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onStateSelected(event.target.value); // Notify the parent component
  };
 
  const options = [
    { value: 'California', label: 'California' },
    { value: 'Texas', label: 'Texas' },
  ];

  return (
    <div className="mx-auto flex item-center justify-center gap-5 pb-5 ">
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption && <div>You selected: {selectedOption}</div>}
    </div>
  );
}

export default StateDropdown
