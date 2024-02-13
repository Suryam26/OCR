const getImageElement = (base64Image: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = base64Image;
    return imgElement;
};

export default getImageElement;
