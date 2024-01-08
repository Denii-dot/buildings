import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import ResidentalBlocks from './components/ResidentalBlocks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommercialPermises from './components/CommercialPermises';
import Factories from './components/Factories';
import Houses from './components/Houses';

const Container = styled.div`
  height: 100vh;
  `;



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<ResidentalBlocks />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/factories" element={<Factories />} />
          <Route path="/commercial_premises" element={<CommercialPermises />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
