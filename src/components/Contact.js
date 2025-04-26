const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-8 text-center max-w-md">
        We'd love to hear from you! Whether you have a question about our food,
        feedback, or anything else, our team is ready to answer all your
        questions.
      </p>
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
