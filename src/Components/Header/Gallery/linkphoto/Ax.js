import React from 'react';
import { useParams } from 'react-router-dom';

// کامپوننت‌های جداگانه برای هر عکس
import Ax1 from './ax1';
import Ax2 from './ax2';
import Ax3 from './ax3';
import Ax4 from './ax4';
import Ax5 from './ax5';
import Ax6 from './ax6';
import Ax7 from './ax7';
import Ax8 from './ax8';

const Ax = () => {
  const { photoId } = useParams(); // دریافت مقدار داینامیک از URL

  // نگاشت photoId به کامپوننت‌ها
  const components = {
    ax1: <Ax1 />,
    ax2: <Ax2 />,
    ax3: <Ax3 />,
    ax4: <Ax4 />,
    ax5: <Ax5 />,
    ax6: <Ax6 />,
    ax7: <Ax7 />,
    ax8: <Ax8 />,
  };

  // کامپوننت مرتبط
  const SelectedComponent = components[photoId];

  // اگر مسیر معتبر نیست
  if (!SelectedComponent) {
    return <h2>صفحه‌ای یافت نشد</h2>;
  }

  return (
    <div>
       
      {SelectedComponent}
    </div>
  );
};

export default Ax;
