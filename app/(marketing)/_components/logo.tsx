import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image width={40} height={40} src="/logo.svg" alt="Logo" className="dark:hidden"/>
      <Image width={40} height={40} src="/logo-dark.svg" alt="Logo" className="hidden dark:block"/>
    </div>
  );
}

export default Logo;