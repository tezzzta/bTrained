import Header from "../Headerr";

const Componente = () => {
    return(
        //            que pereza y sueño, mañana sigo  

        <div className="grid grid-cols-1">
            <p className="m-auto text-[50px]">  titulo </p>
            <div className="grid m-auto bg-green-400 w-1/2 h-full rounded">
        
                <p className="text-white m-10"> Holaa</p>


            </div>
        </div>
    )
}




const FinishTheme = () => {
    return(
        <div>
            <Header/>
                <p> Hola</p>
                <Componente/>
        </div>
    )
}



export default FinishTheme;