import Image from 'next/image';
import './css/github.css';

function Github() {
    return (
        <div className='github'>
            <Image
                src='./svg/github_dark.svg'
                alt='Github Icon Dark'
                width={50}
                height={50}
            />
        </div>
    );
}

export default Github;
