import { Menu } from '../../components'
import { Carrousel } from '../Carrousel';

import './Home.css';

export function Home() {
  return (
    <>
      <Menu />
      <h3>Home Page</h3>
      <Carrousel/>
      <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/andrean-prabowo" title="Andrean Prabowo">Andrean Prabowo</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
    </>
  );
}
