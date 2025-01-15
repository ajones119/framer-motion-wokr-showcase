import { useState, useEffect } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import Boop from '../animation-wrappers/boop';

const FileCodeDisplayModal = ({ fileUrl }: {fileUrl: string}) => {
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
      <Dialog>
        <div className="w-fit">
          <Boop>
            <DialogTrigger className='text-secondary p-1'>Open Code</DialogTrigger>
          </Boop>
        </div>
      <DialogContent className="max-h-[calc(100vh-100px)] max-w-[calc(100vw-60px)] overflow-scroll">
        <div className='text-left text-sm'>
          <CodeBlock
            text={fileContent} // The content fetched from the file URL
            language="javascript" // Adjust language based on the file type
            theme={dracula} // Optional: You can change the theme
            showLineNumbers={true} // Optional: Show line numbers
          />
        </div>
      </DialogContent>
    </Dialog>
      
    </div>
  );
};

export default FileCodeDisplayModal;
