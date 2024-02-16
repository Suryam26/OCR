import React from 'react';
import Webcam from 'react-webcam';
import WebcamLoader from './WebcamLoader';
import StateDropdown from './StateDropdown';
import { CameraIcon } from '../icons';

type ScannerProps = {
    setImage: React.Dispatch<React.SetStateAction<string>>;
    onStateSelected: (selectedState: string) => void; 
};

function Scanner(props: ScannerProps) {
    const { setImage, onStateSelected } = props;


    const webcamRef = React.useRef<any>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [selectedState, setSelectedState] = React.useState('');

    const handleUserMedia = () => setIsLoading(false);

    const handleStateSelected = (state: string) => {
        setSelectedState(state);
        onStateSelected(state); // Call the original prop function if necessary
    };


    const capture = React.useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
        }
    }, [webcamRef]);

    return (
        <>
            {isLoading && <WebcamLoader />}
            <Webcam
                audio={false}
                ref={webcamRef}
                onUserMedia={handleUserMedia}
                videoConstraints={{ aspectRatio: 16 / 9 }}
                className="mx-auto mb-10 w-[100%] rounded-[18px]"
            />
            {!isLoading && (
                <>
                     <StateDropdown onStateSelected={handleStateSelected} />
                    <button
                        onClick={capture}
                        disabled={!selectedState}
                        className={`mx-auto flex 
                        rounded-xl
                         ${selectedState ? 'bg-[#071427] cursor-pointer' : 'bg-slate-500 cursor-not-allowed'}
                        px-16 py-3 
                        text-lg text-white`}
                    >
                        <CameraIcon />
                        Capture
                    </button>
                </>
            )}
        </>
    );
}

export default Scanner;
