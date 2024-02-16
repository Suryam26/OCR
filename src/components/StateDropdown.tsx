import React from 'react';

type StateDropdownProps = {
    onStateSelected: (selectedState: string) => void;
};

const StateDropdown: React.FC<StateDropdownProps> = ({ onStateSelected }) => {
    const [selectedOption, setSelectedOption] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
        onStateSelected(event.target.value); // Notify the parent component
    };

    const options = [
        { value: 'California', label: 'California' },
        { value: 'Texas', label: 'Texas' },
    ];

    return (
        <div className="item-center mx-auto flex justify-center pb-5 ">
            <select
                value={selectedOption}
                onChange={handleChange}
                className="mx-auto flex rounded-xl border-8  border-solid
                        border-[#ECF3FF]
                        px-2 py-2 
                        text-sm"
            >
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StateDropdown;
