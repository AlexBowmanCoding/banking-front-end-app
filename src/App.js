import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './pages/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='about'element={<AboutPage/>}/> 
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
