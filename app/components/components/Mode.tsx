import Image from 'next/image';
import './css/mode.css';

function Mode() {
    return (
        <div className='mode'>
            <Image
                src='./svg/moon.svg'
                alt='Sun Icon'
                width={50}
                height={50}
            />
        </div>
    );
}

export default Mode;
