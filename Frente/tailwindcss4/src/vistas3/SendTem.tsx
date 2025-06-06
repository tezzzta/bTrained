import Header from "../Headerr";
import Componente from "./Component";
import Footer from "../components/Footer"






const FinishTheme = () => {
    return(
        <div>
            <Header/>
                <div className="grid  grid-cols-1 m-10 gap-3">
                    <p className="m-auto text-[28px]"> Revisa antes de enviar </p>
                    <button className="m-auto py-2 px-5 rounded bg-amber-950">
                        Hola
                    </button>
                </div>
                <Componente/>
                
                                    <Footer/>

        </div>
    )
}



export default FinishTheme;