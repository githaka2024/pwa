import Brand from './components/Brand';
import Github from './components/Github';
import Mode from './components/Mode';
import './css/header.css';

function Header() {
    return (
        <header>
            <Brand />
            <Mode />
            <Github />
        </header>
    );
}

export default Header;
