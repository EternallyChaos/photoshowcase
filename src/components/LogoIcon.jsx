import Logo from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const LogoIcon = () => {
  return (
    <Link href="/">
      <Image
        alt="logo"
        src={Logo}
        height={0}
        width={0}
        sizes="100vw"
        className="w-40 md:w-44 lg:w-64"
      />
    </Link>
  );
};

export default LogoIcon;
