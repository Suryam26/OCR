import React from 'react';
import Preview from './components/Preview';
import Scanner from './components/Scanner';
import { tesseractTextRecogniser, getProcessedImage } from './utils';

import './App.css';

function App() {
    const [image, setImage] = React.useState<string>('');
    const [imageDetails, setImageDetails] = React.useState<string>();

    const processImage = async () => {
        const processedImage = getProcessedImage(image);
        return await tesseractTextRecogniser(processedImage);
    };

    React.useEffect(() => {
        if (image) {
            processImage()
                .then((result) => setImageDetails(result.data.text))
                .catch((error) => {
                    console.error('Error processing image:', error);
                });
        }
    }, [image]);

    return (
        <React.Fragment>
            <h1 className="m-6 text-center text-3xl font-extrabold">
                Rematter Challenge
            </h1>
            <div className="my-6 p-10">
                {image ? (
                    <Preview imageSrc={image} setImage={setImage} />
                ) : (
                    <Scanner setImage={setImage} />
                )}
            </div>
            <p>{imageDetails}</p>
        </React.Fragment>
    );
}

export default App;
