import Head from "next/head";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Head>
        <title>CryptoSphere</title>
        <meta
          name="description"
          content="Your Gateway to the Future of Cryptocurrency"
        />
      </Head>
      <main className="bg-black text-white min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-gradient-to-r from-black via-neonBlue/50 to-black backdrop-blur-md p-6 flex justify-between items-center border-b border-neonGreen transition-all duration-300">
          <h1 className="text-4xl font-bold text-neonGreen hover:text-neonPurple transition duration-300 tracking-widest">
            CryptoSphere
          </h1>
          <nav>
            <ul className="flex space-x-8 text-lg font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-neonPurple transition duration-300 transform hover:scale-105"
                >
                  Home
                </a>
              </li>
              {/* Additional Navigation Items */}
            </ul>
          </nav>
        </header>

        {/* Home Section */}
        <section
          id="home"
          className="h-screen flex items-center justify-center text-center px-6 bg-black relative overflow-hidden"
        >
          <div className="animate-fade-in">
            <h2 className="text-5xl sm:text-7xl font-bold text-neonGreen">
              Step Into the Future
            </h2>
            <p className="text-lg sm:text-xl mt-6">
              Join the revolution with CryptoSphere - the ultimate
              cryptocurrency experience.
            </p>
            <div className="mt-8 flex space-x-6 justify-center">
              <button className="px-8 py-4 bg-neonGreen text-black font-semibold rounded-full hover:bg-neonBlue transition transform hover:scale-105 border-2 border-neonGreen shadow-lg shadow-neonGreen">
                Get Started
              </button>
              <button className="px-8 py-4 bg-gray-800 text-neonGreen font-semibold rounded-full hover:bg-neonBlue transition transform hover:scale-105 border-2 border-neonBlue shadow-lg shadow-neonBlue">
                Learn More
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neonGreen/20 to-transparent animate-gradient-move" />
          <div className="absolute top-10 left-10 w-24 h-24 bg-neonBlue rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-neonPurple rounded-full blur-xl opacity-50 animate-pulse"></div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black border-t-4 border-neonBlue"
        >
          <h3 className="text-4xl font-bold text-center text-neonBlue">
            About Us
          </h3>
          <p className="mt-6 text-center max-w-4xl mx-auto text-lg">
            CryptoSphere is a cutting-edge platform designed to bring you closer
            to the ever-evolving world of cryptocurrency. From seamless
            transactions to real-time analytics, we are your one-stop solution
            for everything crypto.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-4 bg-neonGreen text-black font-semibold rounded-full hover:bg-neonBlue transition transform hover:scale-105 border-2 border-neonGreen shadow-lg shadow-neonGreen">
              Read More
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-black">
          <h3 className="text-4xl font-bold text-center text-neonGreen">
            Features
          </h3>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {["Real-Time Analytics", "Secure Transactions", "Low Fees"].map(
              (feature) => (
                <div
                  key={feature}
                  className="p-8 bg-gray-800 rounded-xl shadow-xl border-2 border-neonBlue transition-transform hover:scale-105"
                >
                  <h4 className="text-2xl font-semibold text-neonBlue">
                    {feature}
                  </h4>
                  <p className="mt-4 text-lg">
                    {feature === "Real-Time Analytics"
                      ? "Track the latest market trends with our state-of-the-art analytics tools."
                      : feature === "Secure Transactions"
                      ? "Your security is our priority. Experience the safest way to trade."
                      : "Save money with our minimal transaction fees and transparent pricing."}
                  </p>
                  <button className="mt-6 px-6 py-3 bg-neonGreen text-black font-semibold rounded-full hover:bg-neonBlue transition transform hover:scale-105 border-2 border-neonGreen shadow-lg shadow-neonGreen">
                    Learn More
                  </button>
                </div>
              )
            )}
          </div>
        </section>

        {/* Reviews Section */}
        <section
          id="reviews"
          className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black border-t-4 border-neonGreen"
        >
          <h3 className="text-4xl font-bold text-center text-neonBlue">
            What Our Users Say
          </h3>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {["Alex D.", "Maria K.", "John P."].map((user, index) => (
              <div
                key={user}
                className="p-8 bg-gray-800 rounded-xl shadow-xl border-2 border-neonBlue transition-transform hover:scale-105"
              >
                <p className="italic">
                  {index === 0
                    ? '"CryptoSphere has changed the way I trade. It’s fast, reliable, and secure!"'
                    : index === 1
                    ? '"A must-have platform for any crypto enthusiast."'
                    : '"Seamless transactions and amazing features!"'}
                </p>
                <h5 className="mt-6 font-bold text-neonGreen">{user}</h5>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-4 bg-neonGreen text-black font-semibold rounded-full hover:bg-neonBlue transition transform hover:scale-105 border-2 border-neonGreen shadow-lg shadow-neonGreen">
              Leave a Review
            </button>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-20 px-6 bg-black">
          <h3 className="text-4xl font-bold text-center text-neonGreen">
            Why Choose CryptoSphere?
          </h3>
          <ul className="mt-12 max-w-3xl mx-auto space-y-6 text-lg">
            {[
              "Cutting-edge technology tailored for speed and reliability.",
              "A user-friendly interface for all experience levels.",
              "24/7 customer support to assist you every step of the way.",
            ].map((item) => (
              <li key={item} className="flex items-center">
                <span className="text-neonBlue text-xl mr-6">✓</span> {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-4 bg-neonGreen text-black font-semibold rounded-full hover:bg-neonBlue transition transform hover:scale-105 border-2 border-neonGreen shadow-lg shadow-neonGreen">
              Get Started
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black border-t-4 border-neonPurple"
        >
          <h3 className="text-4xl font-bold text-center text-neonBlue">
            Contact Us
          </h3>
          <p className="mt-6 text-center max-w-3xl mx-auto text-lg">
            Have questions or need support? Reach out to our team and we’ll get
            back to you as soon as possible.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <button className="px-8 py-4 bg-neonGreen text-black font-semibold rounded-full hover:bg-neonBlue transition transform hover:scale-105 border-2 border-neonGreen shadow-lg shadow-neonGreen">
              Email Us
            </button>
            <button className="px-8 py-4 bg-neonPurple text-black font-semibold rounded-full hover:bg-neonBlue transition transform hover:scale-105 border-2 border-neonPurple shadow-lg shadow-neonPurple">
              Live Chat
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-8 mt-8 border-t-8 border-neonBlue">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* About Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neonGreen">
                  About Us
                </h3>
                <p className="text-sm text-gray-400">
                  We are a creative team passionate about technology, design,
                  and making the web a better place.
                </p>
              </div>

              {/* Links Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neonBlue">
                  Quick Links
                </h3>
                <ul className="text-sm text-gray-400">
                  <li>
                    <a
                      href="/"
                      className="hover:text-neonGreen transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:text-neonGreen transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="hover:text-neonGreen transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-neonGreen transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neonPurple">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    className="text-gray-400 hover:text-neonGreen transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="text-gray-400 hover:text-neonBlue transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="text-gray-400 hover:text-neonPurple transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="text-gray-400 hover:text-neonGreen transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neonGreen">
                  Newsletter
                </h3>
                <p className="text-sm text-gray-400">
                  Subscribe to our newsletter for updates and news.
                </p>
                <form className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-l-md text-black focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-neonGreen text-white rounded-r-md hover:bg-neonBlue transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center py-6 text-sm text-gray-400 mt-8">
            <p>© 2025 Your Company. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
