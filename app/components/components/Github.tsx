'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './css/github.css';

function Github() {
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
        <div className='github'>
            {darkMode ? (
                <Image
                    src='./svg/github_light.svg'
                    alt='Github Icon Dark'
                    width={50}
                    height={50}
                />
            ) : (
                <Image
                    src='./svg/github_dark.svg'
                    alt='Github Icon Dark'
                    width={50}
                    height={50}
                />
            )}
        </div>
    );
}

export default Github;
