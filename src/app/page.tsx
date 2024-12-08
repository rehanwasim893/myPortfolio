"use client"
import Image from "next/image";
import Navbar from "./navbar";
import alipic from "../../image/WhatsApp Image 2024-12-07 at 08.36.09_c8636140.jpg"
   export default function Home() {
     return (
       <div className="max-w-4xl mx-auto p-4 sm:p-8 font-sans bg-blue-300 text-center">
      <Navbar/>
         <div className="my-10 p-4 sm:p-8 bg-blue-300 text-center">
           <h1 className="text-2xl sm:text-4xl font-bold mb-4 italic text-gray-800 underline">
            Rehan Wasim
           </h1>
           <div className="flex justify-center items-center my-8">
             <Image
               src={alipic}
               alt="alipic"
               height={500}
               width={500}
               className="sm:h-72 sm:w-72"
             />
  
           </div>
           <p className="text-lg">
             <b>Hello everyone  I am Rehan-Wasim </b>{" "}
             <br />
             <i>
                I am a front-end developer,video Grapher, Content-Creator with working experiance in next.js <br />
                 and currently working as a software
               developer.
               and i have a Experience in Programming
               <b> student of Giaic</b>
             </i>{" "}
             <br />
             <b className="underline">skills i have :</b>
             <br />
             <i>
               HTML <br />
               CSS <br />
               TypeScript <br />
               Bootstrap <br />
               next.js
             </i>
           </p>
         </div>
         </div>
  );
}
