import './css/hero.css';
import localFont from 'next/font/local';

const brushSignature = localFont({
    src: '../../fonts/brush_signature/Brush Signature.otf',
});

function Hero() {
    return (
        <section id='hero'>
            <p className={brushSignature.className}>Dummy</p>
        </section>
    );
}

export default Hero;
