const preprocessing = (imageData: ImageData) => {
    
    adjustContrastAndBrightness(imageData.data, 50, 20);
    convertToGrayscale(imageData.data);
    return imageData;
};

export default preprocessing;

const convertToGrayscale = (data: Uint8ClampedArray) => {
    for (let i = 0; i < data.length; i += 4) {
        const grayscale =
            data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
        data[i] = grayscale; 
        data[i + 1] = grayscale; 
        data[i + 2] = grayscale; 
  
    }
};
const adjustContrastAndBrightness = (
    data: Uint8ClampedArray,
    contrast: number,
    brightness: number,
) => {
    const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
    for (let i = 0; i < data.length; i += 4) {
        data[i] = factor * (data[i] - 128) + 128 + brightness;
        data[i + 1] = factor * (data[i + 1] - 128) + 128 + brightness;
        data[i + 2] = factor * (data[i + 2] - 128) + 128 + brightness;
    }
};
