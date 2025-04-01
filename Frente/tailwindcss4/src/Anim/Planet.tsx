import PlanetSVG from "../Photos/PhotoTw.svg"
import PlanetSVGOne from "../Photos/PhotoOne.svg"
import PlanetSVGTwo from "../Photos/Photothr.svg"
import PlanetSVGThree from "../Photos/PhotoFou.svg"
import PlanetSVGFour from "../Photos/PhotoFiv.svg"
import PlanetSVGFive from "../Photos/PhotoSix.svg"
import PlanetSVGSix from "../Photos/PhotoSev.svg"
import PlanetSVGSev from "../Photos/PhotoEig.svg"

import styles from "./Planet.module.css"

// Función para generar posiciones aleatorias dentro de un rango específico
const randomPosition = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

export const PlanetA = () => 
    <img 
        src={PlanetSVG} 
        alt="Planet A" 
        className={styles.planet} 
        style={{ 
            top: `50px`, 
            left: `845px`,
            transform: 'scale(0.7)'  // Ajustamos el tamaño de la imagen
        }} 
    />
export const PlanetB = () => 
    <img 
        src={PlanetSVGOne} 
        alt="Planet B" 
        className={styles.planet} 
        style={{ 
            top: `${randomPosition(230, 150)}px`, 
            left: `450px`,
            transform: 'scale(0.7)'  // Ajustamos el tamaño de la imagen
        }} 
    />
export const PlanetC = () => 
    <img 
        src={PlanetSVGTwo} 
        alt="Planet C" 
        className={styles.planet} 
        style={{ 
            top: `50px`, 
            left: `1200px`,
            transform: 'scale(0.7)'  // Ajustamos el tamaño de la imagen
        }} 
    />
export const PlanetD = () => 
    <img 
        src={PlanetSVGThree} 
        alt="Planet D" 
        className={styles.planet} 
        style={{ 
            top: `150px`, 
            left: `560px`,
            transform: 'scale(0.7)'  // Ajustamos el tamaño de la imagen
        }} 
    />
export const PlanetE = () => 
    <img 
        src={PlanetSVGFour} 
        alt="Planet E" 
        className={styles.planet} 
        style={{ 
            top: `1px`, 
            left: `350px`,
            transform: 'scale(0.7)'  // Ajustamos el tamaño de la imagen
        }} 
    />
export const PlanetF = () => 
    <img 
        src={PlanetSVGFive} 
        alt="Planet F" 
        className={styles.planet} 
        style={{ 
            top: `60px`, 
            left: `120px`,
            transform: 'scale(0.7)'  // Ajustamos el tamaño de la imagen
        }} 
    />
export const PlanetG = () => 
    <img 
        src={PlanetSVGSix} 
        alt="Planet G" 
        className={styles.planet} 
        style={{ 
            top: `120px`, 
            left: `1450px`,
            transform: 'scale(0.7)'  // Ajustamos el tamaño de la imagen
        }} 
    />
export const PlanetH = () => 
    <img 
        src={PlanetSVGSev} 
        alt="Planet H" 
        className={styles.planet} 
        style={{ 
            top: `250px`, 
            left: `280px`,
            transform: 'scale(0.7)'  
        }} 
    />


