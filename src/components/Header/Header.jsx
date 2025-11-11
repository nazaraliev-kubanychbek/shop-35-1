import './header.scss';
import { Link } from 'react-router-dom';
import { categoryStore } from '../../store/store';

const Header = () => {
    const categories = categoryStore(s => s.category);
    return (
        <header className='header'>
            <div className="container header-container">
                <h1 className="header-logo"><Link to={'/'}>SHOP</Link></h1>
                <nav className="header-nav">
                    <Link className="header-nav-link" to={'/'}>home</Link>
                        {
                            categories.map(item =>{
                                return <Link 
                                className="header-nav-link"
                                to={`/${item}`}
                                key={item}
                                >{item}</Link>
                            })
                        }
                    <Link className="header-nav-link" to={'/cart'}>cart</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
