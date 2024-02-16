import React from 'react';
import DetailModal from './components/DetailModal';
import Preview from './components/Preview';
import Scanner from './components/Scanner';
import { tesseractTextRecogniser, getProcessedImage } from './utils';
import { ThunderIcon } from './icons';

import './App.css';

function App() {
    const [image, setImage] = React.useState<string>('');
    const [selectedState, setSelectedState] = React.useState<string>('');
    const [imageDetails, setImageDetails] = React.useState<string>('');
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    const processImage = async () => {
        const processedImage = await getProcessedImage(image);
        const tesseractData = await tesseractTextRecogniser(processedImage);
        return tesseractData;
    };

    const closeModal = () => setIsModalOpen(false);

    React.useEffect(() => {
        if (image) {
            processImage()
                .then((result) => {
                    setImageDetails(result.data.text);
                    setIsModalOpen(true);
                })
                .catch((error) => {
                    console.error('Error processing image:', error);
                });
        }
    }, [image]);

    return (
        <React.Fragment>
            <div className="left-0 top-0 h-[30vh] bg-[#040B16]"></div>
            <div className="absolute left-0 right-0 top-12 px-64">
                <h1
                    className="mb-4 rounded-[18px] 
                    bg-[#0F1621] p-6 text-center 
                    text-xl text-white"
                >
                    <ThunderIcon />
                    Rematter Challenge
                </h1>
                <div>
                    {image ? (
                        <Preview imageSrc={image} setImage={setImage} />
                    ) : (
                        <Scanner setImage={setImage} onStateSelected={setSelectedState} />
                    )}
                </div>
            </div>
            {imageDetails && (
                <DetailModal
                    open={isModalOpen}
                    closeModal={closeModal}
                    imageDetails={imageDetails}
                    selectedState={selectedState}
                />
            )}
        </React.Fragment>
    );
}

export default App;
