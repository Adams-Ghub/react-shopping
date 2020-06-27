import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './filter-component';
import Item from './stockItem-component';
import purseicon from './images/purseiconimg.png';
import walleticon from './images/walleticonimg.png';
import laptopicon from './images/laptopbagiconimg.png';
import shoulderbagicon from './images/shoulderbagiconimg.png';
import handbagicon from './images/handbagiconimg.png';
import laptopbag from './images/stock/laptopbag.png';
import deinesewall from './images/stock/dainese-wallet.png';
import miyacobag from './images/stock/MiyacoWomenLeatherHandbag.jpg';
import purse from './images/stock/PULeatherLongZipPurse.png';
import laptopbag2 from './images/stock/NavySleekandMinimalDualStrapLaptopBag.jpg'
import shoulderbag from './images/stock/SatchelToteShoulderBags.png'

function App() {
  return (
    <div>
      <div class="container" >
        <div style={{height:'5vh'}}>

        </div>
       <div class="row">
          <div  class="col-lg-2">
              <Filter title="Purse" iconimg={purseicon}/>
              <Filter title="Hand Bags" iconimg={handbagicon}/>
              <Filter title="Shoulder Bags" iconimg={shoulderbagicon}/>
              <Filter title="Wallet" iconimg={walleticon}/>
              <Filter title="Laptop Bags" iconimg={laptopicon}/>
          </div>

          <div class="col-lg-10" style={{backgroundColor:'#f0f0f0',padding:'20px'}}>
            <div style={{display:'flex', flexDirection:'row'}} >
              <Item discount="15%" itemimg={laptopbag} name="Grey Laptop Bag" qty="1 pc" oldprice="$70" price="$59.5"/>
              <Item discount="10%" itemimg={deinesewall} name="Dainese Wallet" qty="24 pcs" oldprice="$60" price="$54"/>
              <Item discount="5%" itemimg={miyacobag} name="Miyaco Leather Handbag" qty="12 pcs" oldprice="$50" price="$47.5"/>
              <Item discount="6%" itemimg={purse} name="Leather Long-zipPurse" qty="15 pcs" oldprice="$30" price="$28.2"/>
              
            </div>
            <div style={{display:'flex', flexDirection:'row'}} >
              <Item discount="12%" itemimg={shoulderbag} name="Satchel Shoulder Bag" qty="13 pcs" oldprice="$120" price="$105.6"/>
              <Item discount="8%" itemimg={laptopbag2} name="Navy Laptop Bag" qty="10 pcs" oldprice="$80" price="$73.6"/>
              <Item discount="20%" itemimg={laptopbag} name="Ash Laptop Bag" qty="1 pc" oldprice="$50" price="$ 45"/>
              <Item discount="20%" itemimg={laptopbag} name="Ash Laptop Bag" qty="1 pc" oldprice="$50" price="$ 45"/>
              
            </div>
             
          </div>
       </div>
      </div>
    </div>
    
  );
}

export default App;
