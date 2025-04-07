import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Footer: React.FC = () => {
    const footerNavs: { href: string; name: string }[] = [
        { href: "#", name: "About" },
        { href: "#", name: "Blog" },
        { href: "#", name: "Contact" },
        { href: "#", name: "Team" },
        { href: "#", name: "Careers" },
        { href: "#", name: "Support" },
    ];

    return (
        <footer className="text-gray-500 px-4 py-5 w-full  mx-auto md:px-8" background-color="#f8f9fa">

            <div className="max-w-lg sm:mx-auto sm:text-center items-center justify-center">
                <img src="https://www.floatui.com/logo.svg" className="w-32 sm:mx-auto" alt="Logo" />
                <p className="leading-relaxed mt-2 text-[15px]">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                </p>
            </div>

            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {footerNavs.map((item, idx) => (
                    <li key={idx} className="hover:text-gray-800">
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>

            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">&copy; 2022 Float UI All rights reserved.</div>
 
            </div>
        </footer>
    );
};

export default Footer;
