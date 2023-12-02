import React, { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="text-center p-4 bg-gray-800 text-white">
      <p>&copy; Samuel Mary @ {currentYear}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
