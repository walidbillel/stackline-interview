import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <Link href="/" className="text-white">
        <Image
          src="/stackline_logo.svg"
          alt="Vercel Logo"
          width={200}
          height={200}
        />
      </Link>

      <nav className="flex items-center justify-center space-x-4">
        <Link href="/products" className="text-white">
          Products
        </Link>
      </nav>
    </header>
  );
};

export default Header;
