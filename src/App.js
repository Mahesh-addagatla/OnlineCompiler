// import logo from './logo.svg';
//import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
//import ProblemComponent from './components/ProblemComponent.jsx';
import SolutionPage from './components/SolutionPage.jsx';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Theme from './Theme.js';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <ChakraProvider theme={Theme}>
      <Router>
      <Routes>
        <Route path="/SolutionPage" element={<SolutionPage />} />
      </Routes>
      </Router>
    </ChakraProvider>  

    </>
  );
}

export default App;
