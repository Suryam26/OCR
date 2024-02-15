const getImageElement = async (base64Image: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = base64Image;
    await imgElement.decode();
    return imgElement;
};

export default getImageElement;
