import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-amber-400">
      <div className="flex h-96 w-full flex-col justify-around p-4 sm:h-72 sm:flex-row sm:items-center sm:p-0">
        <div className="pp flex flex-col gap-2">
          {/* <Image width={90} height={26} src={"/images/LogoLime.png"} alt={""} /> */}
          <h1 className="text-5xl uppercase">Raze</h1>
          <p className="w-[380px]">
            Elevate your English journey with Raze, where language meets
            culture, and connections ignite.
          </p>
          <p>+213010010101</p>
          <p>me@raze.com</p>
        </div>
        <div className="inter flex flex-col items-start justify-start tracking-wider">
          <div className="font-bold">Facebook</div>
          <div className="font-bold">Twitter</div>
          <div className="font-bold">Instagram</div>
          <div className="font-bold">Tiktok</div>
        </div>
      </div>
      <div className="w-full bg-amber-500 py-2 text-center font-mono font-bold text-black">
        Made with love from Annaba ~ © {new Date().getFullYear()}, Raze
      </div>
    </div>
  );
};

export default Footer;
