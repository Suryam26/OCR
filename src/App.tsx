import React from 'react';
import Preview from './components/Preview';
import Scanner from './components/Scanner';
import { tesseractTextRecogniser, getProcessedImage, xyz, processText } from './utils';

import './App.css';

function App() {
    const [image, setImage] = React.useState<string>('');
    const [imageDetails, setImageDetails] = React.useState();
    // const [result, setResult] = React.useState<Array>();


    const processImage = async () => {
       const temp =  await xyz(image)
       return processText(temp)
        // const processedImage = await getProcessedImage(image);

        // setResult(processedImage)

        // return await tesseractTextRecogniser(processedImage);
    };

    React.useEffect(() => {
        if (image) {
            processImage()
                .then((result) => setImageDetails(result))
                .catch((error) => {
                    console.error('Error processing image:', error);
                });
        }
        // console.log(imageDetails)
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
            {/* <div className=' mx-60 '>{ result ? <img src={result}/> : null}
            </div> */}
            {/* <p className=' mx-60'>{imageDetails}</p> */}
        </React.Fragment>
    );
}

export default App;
