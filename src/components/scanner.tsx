import React from 'react';
import Webcam from 'react-webcam';
import WebcamLoader from './WebcamLoader';

type ScannerProps = {
    setImage: React.Dispatch<React.SetStateAction<string>>;
};

function Scanner(props: ScannerProps) {
    const { setImage } = props;

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
                className="mx-auto mb-6 rounded-3xl"
            />
            {!isLoading && (
                <button
                    onClick={capture}
                    className="mx-auto block cursor-pointer 
                    rounded-lg bg-blue-500 px-4 py-2
                    font-bold text-white 
                    hover:bg-blue-700"
                >
                    Capture photo
                </button>
            )}
        </>
    );
}

export default Scanner;
