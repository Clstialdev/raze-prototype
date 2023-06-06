import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-lime-400">
      <div className="flex h-72 w-full items-center justify-around">
        <div className="flex flex-col gap-2">
          <Image width={90} height={26} src={"/images/LogoLime.png"} alt={""} />
          <p className="w-[380px] ">
            Address Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Officia, aspernatur
          </p>

          <p>+18447859654</p>
          <p>me@raze.com</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="font-bold">Facebook</div>
          <div className="font-bold">Twitter</div>
          <div className="font-bold">Instagram</div>
          <div className="font-bold">Tiktok</div>
        </div>
      </div>
      <div className="w-full bg-lime-500 py-2 text-center font-mono font-bold text-black">
        Made with love from Annaba ~ © {new Date().getFullYear()}, Raze
      </div>
    </div>
  );
};

export default Footer;
