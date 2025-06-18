"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert("Message sent!");
      setIsOpen(false);
    };

    return (
    <section id="contact" className="py-20 bg-customGrey text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-8 text-center">Contact Me</h2>
        <p className="text-lg text-center mb-8">
          Feel free to reach out through this form!
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-6 rounded-lg text-lg transition duration-300"
          >
            Email Me
          </button>
        </div>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white text-black max-w-md w-full p-6 rounded-xl shadow-lg">
              <Dialog.Title className="text-2xl font-bold mb-4">Send a Message</Dialog.Title>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  rows={4}
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm rounded-md border border-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700"
                  >
                    Send
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
  }
  