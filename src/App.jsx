import './App.css';
import Header from './Components/Header/Header';
import Gallery from './Components/Header/Gallery/Gallery';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clickphoto from './Components/Header/Gallery/Clickphoto';
import Ax1 from './Components/Header/Gallery/linkphoto/ax1';
import Ax2 from './Components/Header/Gallery/linkphoto/ax2';
import Ax3 from './Components/Header/Gallery/linkphoto/ax3';
import Ax4 from './Components/Header/Gallery/linkphoto/ax4';
import Ax5 from './Components/Header/Gallery/linkphoto/ax5';
import Ax6 from './Components/Header/Gallery/linkphoto/ax6';
import Ax7 from './Components/Header/Gallery/linkphoto/ax7';
import Ax8 from './Components/Header/Gallery/linkphoto/ax8';
// صفحات جداگانه برای هر لینک


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* مسیر گالری */}
        <Route path="/gallery" element={<Gallery />} />
        {/* مسیرهای مربوط به عکس‌ها */}
        <Route path="/Gallery/ax1" element={<Ax1 />} />
        <Route path="/Gallery/ax2" element={<Ax2 />} />
        <Route path="/Gallery/ax3" element={<Ax3 />} />
        <Route path="/Gallery/ax4" element={<Ax4 />} />
        <Route path="/Gallery/ax5" element={<Ax5 />} />
        <Route path="/Gallery/ax6" element={<Ax6 />} />
        <Route path="/Gallery/ax7" element={<Ax7 />} />
        <Route path="/Gallery/ax8" element={<Ax8 />} />
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