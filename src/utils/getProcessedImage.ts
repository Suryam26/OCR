import { getImageElement, getCanvasElement } from '.';
import preprocessing from './preprocessing';

const getProcessedImage = async (image: string, filterType :string) => {
    const imageElement = await getImageElement(image);
    const canvasElement = getCanvasElement(imageElement);

    const ctx = canvasElement.getContext('2d');
    if (ctx) {
        ctx.drawImage(imageElement, 0, 0);
        const imageData = ctx.getImageData(0,0, imageElement.width, imageElement.height)
        const processedImageData = preprocessing(imageData, canvasElement, imageElement.width, imageElement.height, filterType)
        ctx.putImageData(processedImageData, 0, 0);
    }

    return canvasElement.toDataURL('image/jpeg');
};

export default getProcessedImage;
