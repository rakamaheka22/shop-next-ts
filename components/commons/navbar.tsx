import Headline from '@/components/commons/headline';

import styles from '@/styles/components/navbar.module.scss';

import { Search, Bell, ShoppingCart } from 'react-feather';

const Navbar = () => {
  return (
    <header>
      <Headline />
      <div className={styles.navbar}>
        <div className="flex-none hidden md:block">
          <img className="my-1" src="./img/logo.png" alt="Logo Shopeed" width="140" />
        </div>
        <div className="flex-1">
          <div className="relative text-gray-600">
            <input type="search" name="serch" placeholder="Search" className="search-input" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4 focus:outline-none">
              <Search color="#ef4c29" size={20} />
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center mt-3 text-xs gap-3">
              <li><a className="hover:text-primary" href="#">Masker</a></li>
              <li><a className="hover:text-primary" href="#">Tas Selempang Wanita</a></li>
              <li><a className="hover:text-primary" href="#">Tas</a></li>
              <li><a className="hover:text-primary" href="#">Tunik</a></li>
              <li><a className="hover:text-primary" href="#">Kemeja Wanita</a></li>
              <li><a className="hover:text-primary" href="#">Kacamata</a></li>
              <li><a className="hover:text-primary" href="#">Tas Wanita</a></li>
              <li><a className="hover:text-primary" href="#">Daster</a></li>
            </ul>
          </div>
        </div>
        <div className="flex-none flex items-center gap-1">
          <a className={styles.navbarButton} href="#">
            <Bell color="#ef4c29" size={24} />
          </a>
          <a className={styles.navbarButton} href="#">
            <ShoppingCart color="#ef4c29" size={24} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
