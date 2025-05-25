import Header from "../Headerr";
import Footer from "../components/Footer";


const SectGall = () =>{
    return(
        <div >
            <Header />

            <div className="flex items-center justify-center m-auto">
                <input type="text" placeholder="Search..." className="w-[65%] p-2 border border-gray-300 rounded-lg" />
            </div>

            <div className="grid grid-cols-[15rem_1fr] min-h-[75vh]">
                 <aside className="bg-amber-500 rounded-2xl p-4 m-2">

                    <p> Holaa </p>
                 </aside>


            <main className="w-full p-5">
                            <div className="grid grid-cols-3 gap-4 m-auto">

                                    <div className=" h-[10rem] w-[15rem] bg-amber-500 rounded-2xl flex items-center justify-center
">
                                        <p> Holaa </p>
                                        </div>
                                    <div className="h-[10rem] w-[15rem] bg-amber-500 rounded-2xl">
                                        <p> Holaa </p>
                                        </div>  
                                    <div className="h-[10rem] w-[15rem] bg-amber-500 rounded-2xl">
                                        <p> Holaa </p>
                                        </div>
                    
            </div>
            </main>
        </div>
            <Footer />
       </div>

   )
}

export default SectGall;