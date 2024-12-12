import React, { useEffect, useState } from 'react';
import './App.css';

function FadeIn({ children, duration = 2 }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setVisible(true);
    }, []);
  
    return (
      <div className={visible ? 'fade-in visible' : 'fade-in'} style={{ transitionDuration: `${duration}s` }}>
        {children}
      </div>
    );
  }

export default FadeIn;