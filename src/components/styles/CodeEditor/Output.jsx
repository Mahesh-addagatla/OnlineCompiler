import { Box, Button, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { executeCode } from '../../../api';

const Output = ({ editorRef, language }) => {
    const toast = useToast();
    const [output, setOutput] = useState([]); // Initialize as an empty array
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, sourceCode);
            setIsError(!!result.stderr); // Set isError to true if result.stderr exists
            // Ensure result.output is an array before splitting it
            const outputLines = Array.isArray(result.output) ? result.output : [result.output];
            setOutput(outputLines.map(line => line.split('\n')).flat()); // Flatten array of arrays
        } catch (error) {
            console.error(error);
            toast({
                title: 'An Error Occurred.',
                description: error.message || "Unable to run code",
                status: "error",
                duration: 6000,
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Box w='50%' mr={4}>
            <Text mb={2} fontSize='lg'>Output</Text>
            <Button 
                variant='outline'
                colorScheme='green'
                mb={4}
                onClick={runCode}
                isLoading={isLoading}
            >
                Run Code
            </Button>
            <Box 
                height='100vh'
                p={2}
                color={isError ? "red.500" : ""}
                border='1px solid'
                borderRadius={4}
                borderColor={isError ? 'red.500' : "gray.700"}
                overflow="auto"
            >
                {output.length ? output.map((line, i) => <Text key={i}>{line}</Text>) : "Click 'Run Code' to see the output here"}
            </Box>
        </Box>
    );
}

export default Output;
