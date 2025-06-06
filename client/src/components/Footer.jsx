import {
  FaBolt,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram
} from "react-icons/fa";
import logo from "../images/logo.png";

const Footer = () => {
  const links = {
    company: [
      { name: "About Us", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Case Studies", url: "/case-studies" },
      { name: "Blog", url: "/blog" }
    ],
    services: [
      { name: "Web Development", url: "/services/web" },
      { name: "App Development", url: "/services/app" }
    ],
    contact: [
      { name: "hello@boltlabs.in", url: "mailto:hello@boltlabs.in" },
      { name: "+91-96466xxxxx", url: "tel:+9196466xxxxx" },
      { name: "Visit Us", url: "/contact" },
      { name: "Support", url: "/support" }
    ]
  };

  const socialLinks = [
    { icon: FaTwitter, url: "https://twitter.com/yourprofile" },
    { icon: FaLinkedinIn, url: "https://linkedin.com/company/yourpage" },
    { icon: FaFacebookF, url: "https://facebook.com/yourpage" },
    { icon: FaInstagram, url: "https://instagram.com/yourprofile" }
  ];

  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="footer-about">
          <div className="flex items-center text-2xl font-bold">
            <img src={logo} alt="BoltLab Logo" className="h-32 w-32 -mt-14" />
          </div>
          <p className="mb-6 text-gray-400">
            Empowering local businesses with cutting-edge technology solutions
            since 2025.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent text-dark flex items-center justify-center hover:shadow-glow transition-all"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title} className="footer-links">
            <h3 className="text-lg font-bold mb-6 capitalize">{title}</h3>
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-400 hover:text-accent transition-colors"
                    target={item.url.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 mt-16 pt-6 border-t border-gray-800 text-center text-gray-500">
        &copy; 2025 Bolt Labs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
