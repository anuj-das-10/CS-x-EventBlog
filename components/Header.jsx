import React from 'react';

import Link from 'next/link';

const Header = () => (
  <div className="container mx-auto px-10 mb-8">
    <div className="border-b w-full inline-block border-blue-400 py-8">
      <div className="block">
        <Link href="/">
          <h3 className="cursor-pointer text-center font-bold text-5xl text-white">CS <span className="text-red-600">x</span> EventBlog</h3>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
