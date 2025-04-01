import '../App.css';
import HeaderSp from '../reactspr/HeaderSpring';
import { Gallery, CarouselComponent, Footer} from '../components/Aplication';
import  Componente from '../reactspr/Parallax'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';



function First() {


    return (
        <div>
        <Componente/>
          <div className="App  mt-[60%]">
          <HeaderSp/>
          <Gallery />
          <CarouselComponent />
          <Footer />
        </div>
        </div>
    );
}


export default First;