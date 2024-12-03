import './App.css';
import Header from './Components/Header/Header';
import Gallery from './Components/Header/Gallery/Gallery';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* مسیر گالری: فقط محتوای گالری را نمایش می‌دهد */}
        <Route 
          path="/Gallery" 
          element={<Gallery />} 
        />
        {/* سایر مسیرها: تمام اجزا را نمایش می‌دهد */}
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
