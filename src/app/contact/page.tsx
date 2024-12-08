"use client";

import Navbar from "../navbar";

export default function Contact() {
    return (
        <div className="bg-blue-300 h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-col justify-center items-center p-6">
                <div className="text-center">
                    <label htmlFor="name"><strong>Name:</strong></label>
                    <br />
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        className="border-2 p-2 mb-4" 
                    />
                    <br />

                    <label htmlFor="email"><strong>Email:</strong></label>
                    <br />
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter your email" 
                        className="border-2 p-2 mb-4" 
                    />
                    <br />

                    <label htmlFor="phone"><strong>Phone Number:</strong></label>
                    <br />
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        placeholder="Enter your phone number" 
                        className="border-2 p-2 mb-4" 
                    />
                    <br />

                    <label htmlFor="address"><strong>Address:</strong></label>
                    <br />
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        placeholder="Enter your address" 
                        className="border-2 p-2 mb-4" 
                    />
                    <br />
                    
                    <input 
                        type="submit" 
                        className="text-black text-2xl hover:text-blue-500 cursor-pointer mt-4" 
                    />
                </div>
            </div>
        </div>
    );
}
