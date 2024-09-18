import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-800 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-8">Indian Tour and Travels</h1>
        <p className="text-xl text-center mb-12">Great Car Rentals and At Best Prices !</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6" />
              <div>
                <h2 className="font-semibold">Phone</h2>
                <p>+91-8005931153</p>
                <p>+91-9660332163</p>
                <p>+91-8947951450</p>
                <p>+91-9549823845</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <div>
                <h2 className="font-semibold">Email</h2>
                <p>info@indiantourandtravels.com</p>
                <p>support@indiantourandtravels.com</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6" />
              <div>
                <h2 className="font-semibold">Address</h2>
                <p>Plot No. 38, Scheme Jai Ganesh Colony</p>
                <p>Data Ram Hospital Near Om Colony</p>
                <p>Jaisingh Pura Khor, Jaipur - 302027</p>
                <p>India</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Globe className="w-6 h-6" />
              <div>
                <h2 className="font-semibold">Website</h2>
                <p>indiantourandtravels.vercel.app/</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg">We're here to help and answer any questions you might have.</p>
          <p className="text-lg">We look forward to hearing from you!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
