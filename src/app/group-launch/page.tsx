const PHONE_NUMBER = '9152276803';
const CONTACT_BODY = "Hi Juan, I'm interested in joining the Breakfast Club!";

function onContactUs() {
  return `sms://${PHONE_NUMBER};?&body=${encodeURIComponent(CONTACT_BODY)}`;
}

export const metadata = {
  title: 'The Breakfast Club | Group Launch',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-between relative">
      {/* eslint-disable-next-line */}
      <img alt="Breakfast Club Group Launch" className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20" src="/breakfast_club.png" />

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center px-6 mt-12 max-w-3xl">
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Brotherhood. Scripture. Transformation.</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          This group exists to create a safe and encouraging space for men to encounter God through friendship, Scripture, and meaningful conversation.
        </p>
        <a
          href={onContactUs()}
          className="px-6 py-3 text-lg font-semibold rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg hover:opacity-90"
        >
          Get Involved
        </a>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl px-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Friendship</h3>
          <p className="text-gray-600 dark:text-gray-300">Build lasting relationships with men who encourage, challenge, and walk with you in faith.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Scripture</h3>
          <p className="text-gray-600 dark:text-gray-300">Dig deep into God&apos;s Word and apply its truth to real-life challenges and opportunities.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Conversation</h3>
          <p className="text-gray-600 dark:text-gray-300">Engage in meaningful discussions that sharpen character and strengthen spiritual growth.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Volunteering</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Faith in action matters. Together, we serve our community through regular volunteer opportunities that make a real impact.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Monthly Socials</h3>
          <p className="text-gray-600 dark:text-gray-300">
            At least once a month, we gather outside of our regular study for social events—building friendships, sharing stories, and having fun.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center text-center mt-6">
        <a href="/" className="px-6 py-3 text-lg font-semibold rounded-2xl bg-gradient-to-r from-rose-400 to-red-500 text-white shadow-lg hover:opacity-90">
          See Previous Studies
        </a>
      </section>

      {/* Testimonial / Impact Section */}
      <section className="mt-20 max-w-4xl text-center px-6">
        <blockquote className="italic text-xl text-gray-700 dark:text-gray-300">
          &quot;Joining the mens breakfast group gave me brothers who actually push me to grow - whether its fitness goals, personal challenges, or just showing
          up as a better man. What started as weekly meetup became the foundation for real change in my life.&quot;
        </blockquote>
        <p className="mt-4 text-gray-500 dark:text-gray-400">— A Member of The Breakfast Club</p>
      </section>

      {/* Call to Action */}
      <section id="join" className="text-center mt-20 mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Meeting Spot</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">Every Friday at Rudys BBQ at 7am</p>
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
      <section id="join" className="text-center mt-10 mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to take the next step?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Whether you&apos;re looking for deeper friendships, stronger faith, or a place to belong, The Breakfast Club is here for you. Join us this season and
          discover the strength of brotherhood.
        </p>
        <a
          href={onContactUs()}
          className="px-6 py-3 text-lg font-semibold rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:opacity-90"
        >
          Join the Journey
        </a>
      </section>
    </div>
  );
}
