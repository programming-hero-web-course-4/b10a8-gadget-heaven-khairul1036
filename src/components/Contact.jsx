import React from 'react';

const Contact = () => {
    return (
        <>
        <div className="bg-[#9538E2] text-center py-16">
            <div className="w-2/3 mx-auto text-white space-y-5">
                <h1 className="text-5xl font-bold">Contact</h1>
                <p className="px-60">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        </div>
        <div className="max-w-screen-2xl mx-auto py-10 flex justify-between bg-white p-5 rounded-xl my-10">
            <div className='w-1/2'>
                <form action="">
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700">Name</label>
                        <input type="text" class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#9538E2]" placeholder="Your Name"/>
                    </div>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700">Email</label>
                        <input type="text" class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#9538E2]" placeholder="Your Email"/>
                    </div>
                    <div class="mb-4"> 
                        <label for="name" class="block text-gray-700">Message</label>
                        <textarea rows="4" class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#9538E2]" placeholder="Your Message"/>
                    </div>
                    <div>
                        <button type="submit" class="w-full bg-[#9538E2] text-white p-2 rounded hover:bg-[#7931b3] transition duration-200">Send Message</button>
                    </div>
                </form>
            </div>
            <div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187878219!2d90.33728799397399!3d23.78097572837469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1730743754648!5m2!1sen!2sbd" 
                    width="600" 
                    height="450" 
                    style={{ border: '0' }}
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
        </>
    );
};

export default Contact;