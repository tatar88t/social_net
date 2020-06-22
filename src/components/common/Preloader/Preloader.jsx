import React from 'react';

import stl from './preloader.module.css' ;
import preloader from '../../../Assets/img/preloader.svg';

const Preloader = (props) => {
   return <div>
            <img src= {preloader} alt = 'preloader' className = {stl.spinner} />
        </div>
}
export default Preloader