'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './css/brand.css';

function Brand() {
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
        <div className='brand'>
            {darkMode ? (
                <Image
                    src='./svg/light.svg'
                    alt='Logo Dark'
                    width={50}
                    height={50}
                />
            ) : (
                <Image
                    src='./svg/dark.svg'
                    alt='Logo Dark'
                    width={50}
                    height={50}
                />
            )}
            <p>PWA</p>
        </div>
    );
}

export default Brand;
