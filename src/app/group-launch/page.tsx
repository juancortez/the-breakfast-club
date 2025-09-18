export default function LandingPage() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-between">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center px-6 mt-12 max-w-3xl">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Brotherhood. Scripture. Transformation.</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          This group exists to create a safe and encouraging space for men to encounter God through friendship, Scripture, and meaningful conversation.
        </p>
        <a
          href="#join"
          className="px-6 py-3 text-lg font-semibold rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg hover:opacity-90"
        >
          Get Involved
        </a>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl px-6">
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Friendship</h3>
          <p className="text-gray-600">Build lasting relationships with men who encourage, challenge, and walk with you in faith.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Scripture</h3>
          <p className="text-gray-600">Dig deep into God’s Word and apply its truth to real-life challenges and opportunities.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Conversation</h3>
          <p className="text-gray-600">Engage in meaningful discussions that sharpen character and strengthen spiritual growth.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Volunteering</h3>
          <p className="text-gray-600">
            Faith in action matters. Together, we serve our community through regular volunteer opportunities that make a real impact.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Monthly Socials</h3>
          <p className="text-gray-600">
            At least once a month, we gather outside of our regular study for social events—building friendships, sharing stories, and having fun.
          </p>
        </div>
      </section>
      {/* Testimonial / Impact Section */}
      <section className="mt-20 max-w-4xl text-center px-6">
        <blockquote className="italic text-xl text-gray-700">
          “Joining the mens breakfast group gave me brothers who actually push me to grow - whether its fitness goals, personal challenges, or just showing up
          as a better man. What started as weekly meetup became the foundation for real change in my life.”
        </blockquote>
        <p className="mt-4 text-gray-500">— A Member of The Breakfast Club</p>
      </section>

      {/* Call to Action */}
      <section id="join" className="text-center mt-20 mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Meeting Spot</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Every Friday at Rudys BBQ at 7am</p>
        <div className="w-full max-w-3xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.4573230101155!2d-97.696309872787!3d30.536380774679767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d17ea7393dc5%3A0x6ecc8d71235d940e!2s2400%20N%20Interstate%20Hwy%2035%2C%20Round%20Rock%2C%20TX%2078681!5e0!3m2!1sen!2sus!4v1758224517425!5m2!1sen!2sus"
            width="300"
            height="400"
            className="block sm:hidden rounded-lg"
            loading="lazy"
          ></iframe>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.4573230101155!2d-97.696309872787!3d30.536380774679767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d17ea7393dc5%3A0x6ecc8d71235d940e!2s2400%20N%20Interstate%20Hwy%2035%2C%20Round%20Rock%2C%20TX%2078681!5e0!3m2!1sen!2sus!4v1758224517425!5m2!1sen!2sus"
            width="600"
            height="450"
            className="hidden sm:block rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join" className="text-center mt-20 mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to take the next step?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Whether you’re looking for deeper friendships, stronger faith, or a place to belong, The Breakfast Club is here for you. Join us this season and
          discover the strength of brotherhood.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 text-lg font-semibold rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:opacity-90"
        >
          Join the Journey
        </a>
      </section>
    </div>
  );
}
