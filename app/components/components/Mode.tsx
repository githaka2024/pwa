'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './css/mode.css';

function Mode() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const mode = window.matchMedia('(prefers-color-scheme: dark)');
        const checkDarkMode = (event: MediaQueryListEvent) => {
            setDarkMode(event.matches);
        };
        setDarkMode(mode.matches);
        mode.addEventListener('change', checkDarkMode);
        return () => {
            mode.removeEventListener('change', checkDarkMode);
        };
    }, []);
    return (
        <div className='mode'>
            {darkMode ? (
                <Image
                    src='./svg/sun.svg'
                    alt='Sun Icon'
                    width={50}
                    height={50}
                />
            ) : (
                <Image
                    src='./svg/moon.svg'
                    alt='Sun Icon'
                    width={50}
                    height={50}
                />
            )}
        </div>
    );
}

export default Mode;
