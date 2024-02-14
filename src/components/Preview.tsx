import React from 'react';
import { ReloadIcon } from '../icons';

type PreviewProps = {
    imageSrc: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
};

function Preview(props: PreviewProps) {
    const { imageSrc, setImage } = props;

    const resetImage = () => setImage('');

    return (
        <>
            <img
                src={imageSrc}
                className="mx-auto mb-10 w-[100%] rounded-[18px]"
            />
            <button
                onClick={resetImage}
                className="mx-auto flex 
                cursor-pointer rounded-xl 
                border border-neutral-300 
                bg-white px-16 py-3 text-lg"
            >
                <ReloadIcon />
                Retake
            </button>
        </>
    );
}

export default Preview;
