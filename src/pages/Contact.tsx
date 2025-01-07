import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <div className="flex flex-col items-center mt-4">
        <div className="mt-4 max-w-2xl">
          <p className="text-lg mt-4">
            If you have any questions or would like to get in touch, please feel free to reach out to me.
          </p>
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
              <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
              <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border rounded" id="message" name="message" rows={4}></textarea>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;