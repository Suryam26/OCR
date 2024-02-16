const lastnamePattern = /LN\s+([A-Za-z]+)\s+/;
const firstnamePattern = /FN\s+([A-Za-z]+(?:\s+[A-Za-z]+)*)\s+/;

const extractNameSection=(paragraph:string)=> {
  console.log(paragraph)
  const lname = paragraph.match(lastnamePattern);
  const fname = paragraph.match(firstnamePattern)
  console.log(lname, fname)

  if (lname && fname) { 
    return `${fname[1]} ${lname[1]} `;  
  } else if (lname[1]) {
    return lname
  } else if (fname[1]) {
    return fname;
  } else {
    return "Name section not found in the given format.";
  }

}

export default extractNameSection 
