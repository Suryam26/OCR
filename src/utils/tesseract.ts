import { createWorker } from 'tesseract.js';
import { whiteListChar, tesseractLang, imageDPI } from '../config';

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

    // console.log(result.data.text);
    return result;
};

export default tesseractTextRecogniser;
