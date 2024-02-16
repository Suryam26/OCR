const extractAddress = (paragraph: string, addPattern: RegExp) => {
    const address = paragraph.match(addPattern);

    if (address) {
        return address[0];
    } else {
        return 'Unable to Extract address.';
    }
};

const getAddress = (paragraph: string, state: string) => {
    if (state === 'California') {
        const addPattern = /\b\d{4}(?:\s+\S+){3,6}\s*CA\s\d{5}\b/;
        return extractAddress(paragraph, addPattern);
    }
    if (state === 'Texas') {
        const addPattern = /\b\d{4}(?:\s+\S+){3,6}\s*TX\s\d{5}\b/;
        return extractAddress(paragraph, addPattern);
    }
};

export default getAddress;
