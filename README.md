# React Document Scanner and State Selector

1. ## Introduction
    This application harnesses the power of React and modern web technologies to capture images through a webcam and allows users to select states from a dropdown menu. Developed with scalability and maintainability in mind, it demonstrates the effective use of React hooks, context for state management, and component-based architecture, all bundled efficiently with Vite for an enhanced development experience.

2. ## Features
    Webcam Image Capture: Utilizes the react-webcam library to capture real-time images from the user's webcam and extracts the information from the Driving Liscence and displays it on the screen.

    NOTE: <br>
    Currently this supports only 2 States Texas and California

3. ## Technical Stack
    <ul>
    <li>Vite: Chosen for its fast build and hot module replacement, significantly improving development speed.
    <li>React: Provides the foundation for building the user interface with a component-based architecture.
    <li>TypeScript: Adds static type checking, enhancing code quality and developer experience.
    <li>Tailwind CSS: (Optional) For utility-first CSS that enables rapid UI development.
    </ul>
4. ## Getting Started
    
    1. ### Running locally
        1. #### Prerequisites
            <ul>
            <li>npm (v7 or newer)
            </ul>
        2.  Installation
            <ul>
              <li>
                Clone the repo: 

                https://github.com/your-username/react-document-scanner-and-state-selector.git
                
              </li>
              <li>
                Navigate to the project directory:  
                
                OCR
              </li>
              <li>
                Run the below commands for npm package installitions in the terminal:

                npm i
              </li>
              <li>
                Run the below to start the webapplication on the browser:

                npm run dev
              </li>
            </ul>

    ### 2. Deployed Application

5. ## Project Structure
    <ul>
    <li> src/components/ : Contains all React components used within the application.
    <li> src/utils/ : Utility functions and constants.
    <li>src/icons/ : Contins all the Icons components used within the application.
    <li> src/App.tsx : The main application component, orchestrating the scanner and state dropdown components.
    <li> src/index.tsx : Entry point for the React application.
    </ul>

6. ## Code Highlights
    1. ### Webcam Capture
        The Scanner component integrates react-webcam for capturing images. A useRef hook is used to reference the webcam component, and a callback function is employed to handle image capture:
    2. ### Teseract OCR
        The teseract component is responsible for extracting the text from the image and supply it to the text processing
    3. ### Detail Display
        The Detail Modal is responsible for caling different function for text bifurcationa and individual text extracions and displaying it on the Modal that displays the entire details extracted from the liscence
