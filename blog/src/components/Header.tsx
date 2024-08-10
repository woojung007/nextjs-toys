import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between h-20 items-center p-4">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">{`yiwoojung's Blog`}</h1>
      </Link>

      <nav className="flex gap-4">
        {["home", "about", "posts", "contact"].map((menu) => (
          <Link href={`/${menu === "home" ? "" : menu}`} key={menu}>
            {menu}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
