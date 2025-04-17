import { Building2, MapPin, Phone, Mail, CheckCircle2, ArrowRight, Tractor, Trees as Tree, Home, Users, IndianRupee, Share2, Facebook, Twitter, Linkedin, Apple as WhatsApp } from 'lucide-react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share';

function App() {
  const shareUrl = 'https://barakarsmartcity.com';
  const shareTitle = 'Invest in Barakar Smart City - Premium Plots Available!';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
            BARAKAR SMART CITY
            <span className="block text-2xl md:text-3xl mt-2 text-yellow-400">(BEFORE BULLDOZER)</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Invest In Your Future</p>
          <div className="flex flex-col md:flex-row items-center gap-4 bg-black/40 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210, +91 87654 32109</span>
            </div>
            <div className="hidden md:block">|</div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@barakarsmartcity.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rural Development Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transforming Rural Living</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Tractor className="w-8 h-8" />, title: "Agricultural Friendly", desc: "Close to fertile farmland with irrigation facilities" },
              { icon: <Tree className="w-8 h-8" />, title: "Green Environment", desc: "Surrounded by natural beauty and clean air" },
              { icon: <Home className="w-8 h-8" />, title: "Modern Amenities", desc: "Perfect blend of rural charm and urban facilities" },
              { icon: <Users className="w-8 h-8" />, title: "Strong Community", desc: "Traditional values with progressive outlook" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <img src="https://st2.indiarailinfo.com/kjfdsuiemjvcya0/0/3/5/6/794356/0/1045084603638013004255674469035n.jpg" alt="Barakar Railway Station" className="w-full h-48 object-cover rounded-lg shadow-lg" />
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Temple in Barakar" className="w-full h-48 object-cover rounded-lg shadow-lg" />
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Dishergath Area" className="w-full h-48 object-cover rounded-lg shadow-lg" />
              <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Development Plan" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                PRIME LOCATION
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-yellow-300" />
                  Located At Begunia Disherghar Road near new petrol pump
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-yellow-300" />
                  Just 5 minutes from Begunia More
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-yellow-300" />
                  Only 15 minutes from Barakar Railway Station
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-yellow-300" />
                  10 minutes from Barakar Bus Stand & Sabji Market
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              {['Premium location with excellent connectivity', 'Future-ready infrastructure and amenities', 'Fast-developing smart city project'].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-lg mb-8">
              <div className="text-3xl font-bold mb-2 flex items-center gap-2">
                <IndianRupee className="w-8 h-8" />
                10 Lakhs Only
              </div>
              <div className="text-gray-300 mb-4">for 5 Katha Premium Plot</div>
              <div className="text-yellow-400 font-semibold">
                PRE-LAUNCH OFFER LIMITED TO 20 PLOTS ONLY!
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                Why Invest in Barakar Smart City?
              </h3>
              <ul className="space-y-4">
                {[
                  'Prime location with rapid appreciation potential',
                  'Developed by trusted builders with proven track record',
                  'All modern amenities and infrastructure',
                  'Clear titles and hassle-free documentation',
                  'Flexible payment options available'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-lg text-xl font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg">
              BOOK YOUR PLOT TODAY!
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" rows={4}></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p>Begunia Disherghar Road, Near New Petrol Pump, Barakar, West Bengal</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <p>+91 98765 43210, +91 87654 32109</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <p>info@barakarsmartcity.com</p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Office Hours</h4>
                <p>Monday - Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: By Appointment Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>Barakar Smart City Development | © 2025 All Rights Reserved</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <Share2 className="w-5 h-5" /> Share:
              </span>
              <FacebookShareButton url={shareUrl} quote={shareTitle}>
                <Facebook className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={shareTitle}>
                <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={shareTitle}>
                <Linkedin className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl} title={shareTitle}>
                <WhatsApp className="w-6 h-6 hover:text-green-400 cursor-pointer" />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;