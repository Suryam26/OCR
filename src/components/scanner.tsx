import React from 'react';
import Webcam from 'react-webcam';

type ScannerProps = {
    setImage: React.Dispatch<React.SetStateAction<string>>;
};

function Scanner(props: ScannerProps) {
    const { setImage } = props;

    const webcamRef = React.useRef<any>(null);
    const capture = React.useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
        }
    }, [webcamRef]);

    return (
        <div className="my-6 p-10">
            <Webcam
                audio={false}
                ref={webcamRef}
                className="mx-auto mb-6 rounded-3xl"
            />
            <button
                onClick={capture}
                className="mx-auto block cursor-pointer 
                rounded-lg bg-blue-500 px-4 py-2
                font-bold text-white 
                hover:bg-blue-700"
            >
                Capture photo
            </button>
        </div>
    );
}

export default Scanner;
