import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 items-center justify-center p-4 bg-gray-800">
      <Link href="/" className="text-white">
        <Image
          src="/stackline_logo.svg"
          alt="Vercel Logo"
          width={200}
          height={200}
        />
      </Link>
      <div className="text-white text-sm">
        &copy; {new Date().getFullYear()} Stackline Inc.
      </div>
    </footer>
  );
};

export default Footer;
