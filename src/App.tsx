import React from 'react';
import Scanner from './components/scanner';

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
            <Scanner setImage={setImage} />
        </React.Fragment>
    );
}

export default App;
