const Footer = () => {
  return (
    <div className="bg-yellow-500 flex flex-col items-center justify-center w-full h-fit">
      <div className="link flex items-center justify-center gap-40 mb-40 mt-40">
        <div className="logo">
          <h1 className="text-black text-4xl font-semibold">Model name</h1>
          <p className="text-black w-60">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="linksContainer flex items-start justify-center gap-36">
          <div className="links">
            <h1 className="text-black font-semibold mb-10">Links</h1>
            <ul className="text-black flex flex-col gap-5">
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="company">
            <h1 className="text-black font-semibold mb-10">Company</h1>
            <ul className="text-black flex flex-col gap-5">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="getintouch">
            <h1 className="text-black font-semibold mb-10">Get in touch</h1>
            <ul className="text-black flex flex-col gap-5">
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright mb-10">
        <p className="text-black">© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
