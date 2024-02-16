const getDates = (paragraph: string) => {
    const dateRegex =
        /(?<!\S)(0?[1-9]|1[0-2])[-\/](0?[1-9]|[12]\d|3[01])[-\/]([0-9]{4})(?!\S)/g;
        // /(0?[1-9]|1[0-2])[-\/](0?[1-9]|[12]\d|3[01])[-\/]([0-9]{4})/g;

    let dates = [];
    let match;
    while ((match = dateRegex.exec(paragraph)) !== null) {
        const month = parseInt(match[1], 10);
        const day = parseInt(match[2], 10);
        const year = parseInt(match[3], 10);

        const date = new Date(year, month - 1, day);
        dates.push(date);
    }

    dates.sort((a, b) => a - b);

    const sortedFormattedDates = dates.map((date) => {
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`; // Or adjust formatting if needed
    });

    return sortedFormattedDates;
};

export default getDates;
