

const extractName = (paragraph: string, lastnamePattern: RegExp, firstnamePattern: RegExp) => {
  console.log(paragraph)
  const lname = paragraph.match(lastnamePattern);
  const fname = paragraph.match(firstnamePattern)
  console.log(lname, fname)

  if (lname && fname) {
    return `${fname[1]} ${lname[1]} `;
  } else if (lname) {
    return lname[1]
  } else if (fname) {
    return fname[1];
  } else {
    return "Name section not found in the given format.";
  }

}

const getName = (paragraph: string, state: string) => {
  if (state === 'California') {
    const lastnamePattern = /LN\s+([A-Za-z]+)\s+/;
    const firstnamePattern = /FN\s+([A-Za-z]+(?:\s+[A-Za-z]+)*)\s+/;
    return extractName(paragraph, lastnamePattern, firstnamePattern)
  }
  if (state === 'Texas') {
    const lastnamePattern = /\b1\s+([A-Z]+)\b/;
    const firstnamePattern = /\b2\s+([A-Z]+)\b/;
    return extractName(paragraph, lastnamePattern, firstnamePattern)
  }
}

export default getName
