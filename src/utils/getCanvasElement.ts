const getCanvasElement = (imgElement: HTMLImageElement) => {
    const canvas = document.createElement('canvas');
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    return canvas;
};

export default getCanvasElement;
