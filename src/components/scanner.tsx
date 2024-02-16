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

    const handleUserMedia = () => setIsLoading(false);


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
                    <StateDropdown onStateSelected={onStateSelected} />
                    <button
                        onClick={capture}
                        className="mx-auto flex 
                        cursor-pointer rounded-xl 
                        bg-[#071427] px-16 py-3 
                        text-lg text-white"
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
