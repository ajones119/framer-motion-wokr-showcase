import { useState, useEffect } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';


const FileCodeDisplay = ({ fileUrl }: {fileUrl: string}) => {
    const [fileContent, setFileContent] = useState("");

    useEffect(() => {
    // Fetch the file from the URL
    const fetchFile = async () => {
        const response = await fetch(fileUrl);
        const text = await response.text();
        setFileContent(text);
    };

    fetchFile();
    }, [fileUrl]);

    return (
    <div>
        <div className='text-left text-sm'>
            <CodeBlock
            text={fileContent} // The content fetched from the file URL
            language="javascript" // Adjust language based on the file type
            theme={dracula} // Optional: You can change the theme
            showLineNumbers={true} // Optional: Show line numbers
            />
        </div>
        
    </div>
    );
};

export default FileCodeDisplay;
