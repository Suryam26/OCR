import React from 'react';
import DetailModal from './components/DetailModal';
import Preview from './components/Preview';
import Scanner from './components/Scanner';
import { ThunderIcon } from './icons';

import './App.css';

function App() {
    const [image, setImage] = React.useState<string>('');
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const [imageDetails, setImageDetails] = React.useState<string>('');

    const closeModal = () => setIsModalOpen(false);

    React.useEffect(() => {
        if (image) {
            // const data = processImage();
            setImageDetails('HELLO WORLD!');
            setIsModalOpen(true);
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
                        <Scanner setImage={setImage} />
                    )}
                </div>
            </div>
            {imageDetails && (
                <DetailModal
                    open={isModalOpen}
                    closeModal={closeModal}
                    imageDetails={imageDetails}
                />
            )}
        </React.Fragment>
    );
}

export default App;
