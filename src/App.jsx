import './App.css';
import Header from './Components/Header/Header';
import Gallery from './Components/Header/Gallery/Gallery';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ax from './Components/Header/Gallery/linkphoto/Ax';  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* مسیر گالری */}
        <Route path="/gallery" element={<Gallery />} />
        
        {/* مسیر داینامیک برای نمایش عکس‌ها */}
        <Route path="/gallery/:photoId" element={<Ax />} />
        
        {/* مسیر اصلی */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
