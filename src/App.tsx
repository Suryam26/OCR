import React from 'react';
import Preview from './components/Preview';
import Scanner from './components/Scanner';

import './App.css';

function App() {
    const [image, setImage] = React.useState<string>('');
    const [imageDetails, setImageDetails] = React.useState<string>('');

    React.useEffect(() => {
        if (image) {
            // const data = processImage();
            // setImageDetails(data);
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
        </React.Fragment>
    );
}

export default App;
