import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Footer: React.FC = () => {
    const footerNavs: { href: string; name: string }[] = [
        { href: "#", name: "About" },
        { href: "#", name: "Blog" },
        { href: "#", name: "Contact" },
    ];

    return (

          <div className= "px-4 py-5 w-full  mx-auto md:px-8  bg-[#0F172A]">
              <div className="flex max-w-lg sm:mx-auto sm:text-center items-center justify-center bg-[#0F172A]">
                <img src="https://www.floatui.com/logo.svg" className="w-32 sm:mx-auto" alt="Logo" />
                
            </div>
            <div className="flex max-w-lg sm:mx-auto sm:text-center items-center justify-center bg-[#0F172A]">
                <p className="leading-relaxed mt-2 mx-[10%] text-[15px]">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                </p>
            </div>

            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0 bg-[#0F172A]">
                {footerNavs.map((item, idx) => (
                    <li key={idx} className="flex justify-center text-center bg-[#4F46E5] p-2 rounded  font-semibold  !text-[#CBD5E1] no-underline hover:bg-[#7C3AED]">
                        <a href={item.href} className="!text-[#CBD5E1]">{item.name}</a>
                    </li>
                    //"active !bg-[#4F46E5] hover:!bg-[#7C3AED] text-[#CBD5E1] !font-bold !font-[Poppins,sans-serif]
                ))}
            </ul>

            <div className="mt-8 items-center justify-between sm:flex bg-[#0F172A]">
                <div className="mt-4 sm:mt-0">&copy; 2022 Float UI All rights reserved.</div>
 
            </div>
          </div>
    );
};

export default Footer;
