import styles from '@/styles/components/navbar.module.scss';

const Headline = () => {
  return (
    <div className="bg-primary">
      <div className={styles.headline}>
        <div className={styles.headlineLeft}>
          <ul className="flex item-center">
            <li className="border-r border-red-400">
              <a href="#">Seller Centre</a>
            </li>
            <li className="border-r border-red-400">
              <a href="#">Mulai Jual</a>
            </li>
            <li className="border-r border-red-400">
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">Ikuti kami di</a>
            </li>
          </ul>
        </div>
        <div className={styles.headlineRight}>
          <ul className="flex item-center">
            <li className="border-r border-red-400">
              <a href="#">Daftar</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Headline;
