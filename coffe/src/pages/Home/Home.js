import { Menu } from '../../components'
import Footer from '../../components/Footer/Footer';
import { Image } from 'react-bootstrap';

import './Home.css';

export function Home() {
  return (
    <>
    
      <div className='home'>
      <Menu />
    
      <h1 className='text'>Coffee Shop</h1>
    
     <div className='text-coffee'>
      <p>Coffee is a brewed drink prepared from roasted coffee beans, 
        the seeds of berries from certain Coffea species. From the coffee fruit, 
        the seeds are separated to produce a stable, raw product: unroasted green coffee. 
        The seeds are then roasted, a process which transforms them into a consumable product: 
        roasted coffee, which is ground into fine particles that are typically steeped in hot water before being filtered out, producing a cup of coffee.</p>
        </div>
     
     
      <div className='icon-d'>Iconos diseñados por <a href="https://www.flaticon.es/autores/andrean-prabowo" title="Andrean Prabowo">Andrean Prabowo</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
      <Footer/>
      </div>
    </>
  );
}
