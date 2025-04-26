const Footer = () => {
  return (
    <footer className="bg-green-100 text-black py-6 mt-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-lg mb-4">
          Created By <i>Swati Tanu</i> ♡ | All rights reserved. &copy;{" "}
          {new Date().getFullYear()} Yummy Bites.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
