import { createWorker } from 'tesseract.js';
import { whiteListChar, tesseractLang, imageDPI } from '../config';


// const saveToFile = (jsonData:JSON) => {
//     const jsonString = JSON.stringify(jsonData, null, 2);
//     const blob = new Blob([jsonString], { type: "application/json" });
//     const url = URL.createObjectURL(blob);
  
//     const downloadLink = document.createElement('a');
//     downloadLink.href = url;
//     downloadLink.download = "data.json";
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
// };


const tesseractTextRecogniser = async (image: string) => {
    
    const worker = await createWorker(tesseractLang);

    await worker.setParameters({
        tessedit_char_whitelist: whiteListChar,
        user_defined_dpi: imageDPI,
    });

    const result = await worker.recognize(
        image,
        { rotateAuto: true },
        { imageColor: true, imageGrey: true, imageBinary: true },
    );

    const processedLines = result.data.lines.map(line => ({
        'bounding-box': line.bbox,
        'baseline': line.baseline,
        'confidence': line.confidence,
        'text': line.text
    }));
    return processedLines;
};

export default tesseractTextRecogniser;