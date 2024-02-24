import Logo from "/public/logo.svg";
import Image from "next/image";

const LogoIcon = () => {
  return (
    <div>
      <Image
        alt="logo"
        src={Logo}
        height={0}
        width={0}
        sizes="100vw"
        className="w-72"
      />
    </div>
  );
};

export default LogoIcon;
