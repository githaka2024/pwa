import Image from 'next/image';
import './css/brand.css';

function Brand() {
    return (
        <div className='brand'>
            <Image
                src='./svg/dark.svg'
                alt='Logo Dark'
                width={50}
                height={50}
            />
            <p>PWA</p>
        </div>
    );
}

export default Brand;
