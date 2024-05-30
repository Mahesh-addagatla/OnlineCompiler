import { Box, HStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import LangSelector from './LangSelector';
import { CODE_SNIPPETS } from '../../../Constants';
import Output from './Output';

const CodeEditor = () => {
    const [value,setValue]=useState("");
    const editorRef =useRef(null);
    const [language,setLanguage]=useState('javascript');

    const onMount=(editor)=>{
        editorRef.current=editor;
        editor.focus();
    }
    const onSelect=(language)=>{
        setLanguage(language);
        setValue(CODE_SNIPPETS[language])
    }

  return (
    <Box >
      <HStack spacing={4}>
          <Box w='50%'ml={4}>
            <LangSelector language={language} onSelect={onSelect}/>
            <Editor height="100vh"
            theme='vs-dark'
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            value={value}
            onMount={onMount}
            onChange={(value) => setValue(value)}
            />
          </Box>
          <Output editorRef={editorRef} language={language}/>
      </HStack>
      
    </Box>
  )
}

export default CodeEditor
