import style from './style.module.scss';
import {Link} from 'react-router-dom';
import AccountIcon from '../../assets/icons/account.svg';
import Logo from '../../../public/vite.svg';
import clsx from "clsx";
const Header = () => {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerInnerContainer}>
        <img src={Logo}/>
        <nav className={style.navigation}>
          <Link to='/books' className={clsx(style.item, style.navItem)}>Books</Link>
        </nav>
        <Link to='/profile' className={clsx(style.item, style.accountItem)}>
          <img src={AccountIcon}/>
        </Link>
      </div>
    </header>
  )
};

export default Header;