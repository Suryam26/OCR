import React from 'react';

type PreviewProps = {
    imageSrc: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
};

function Preview(props: PreviewProps) {
    const { imageSrc, setImage } = props;

    const resetImage = () => setImage('');

    return (
        <>
            <img src={imageSrc} className="mx-auto mb-6 rounded-3xl" />
            <button
                onClick={resetImage}
                className="mx-auto block cursor-pointer 
                rounded-lg bg-blue-500 px-4 py-2
                font-bold text-white 
                hover:bg-blue-700"
            >
                Recapture photo
            </button>
        </>
    );
}

export default Preview;
