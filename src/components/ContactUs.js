import React from 'react';
const ContactUs = () => {
    return (
        <div className="contact-us max-w-[400px] mx-auto mt-10 p-6 border border-gray-200 rounded-lg bg-gray-50 shadow-md">
            <h2 className="text-center mb-5 text-2xl font-semibold">Contact Us</h2>
            <p className="text-center mb-6">
                If you have any questions, feel free to reach out!
            </p>
            <form>
                <label htmlFor="name" className="block mb-1">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='name'
                    required
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />

                <label htmlFor="email" className="block mb-1">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='email'
                    required
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />

                <label htmlFor="message" className="block mb-1">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full p-2 min-h-[80px] mb-5 border border-gray-300 rounded"
                ></textarea>

                <button
                    type="submit"
                    className="w-full p-2.5 bg-green-600 text-white border-none rounded font-bold cursor-pointer hover:bg-green-700 transition"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default ContactUs;