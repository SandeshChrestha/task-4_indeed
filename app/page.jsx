import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center h-16">
          {/* Left Side: Logo and Navigation Links */}
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="/1.png"
                alt="Company Logo"
              />
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-900 hover:text-blue-600">
                Home
              </a>
              <a href="/company-review" className="text-gray-900 hover:text-blue-600">
                Company Review
              </a>
              <a href="/find-salaries" className="text-gray-900 hover:text-blue-600">
                Find Salaries
              </a>
            </div>
          </div>

          {/* Right Side: Sign In and Post Job */}
          <div className="ml-auto flex items-center  space-x-4">
            <a href="/sign-in" className="text-blue-600 hover:text-blue-600">
              Sign In
            </a>
            <span className="hidden md:block">|</span>
            <a href="/post-job" className="text-gray-900 hover:text-blue-600">
              Employers / Post Job
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="block text-gray-900 hover:text-blue-600">
            Home
          </a>
          <a href="/company-review" className="block text-gray-900 hover:text-blue-600">
            Company Review
          </a>
          <a href="/find-salaries" className="block text-gray-900 hover:text-blue-600">
            Find Salaries
          </a>
          <a href="/sign-in" className="block text-gray-900 hover:text-blue-600">
            Sign In
          </a>
          <a href="/post-job" className="block text-gray-900 hover:text-blue-600">
            Employers / Post Job
          </a>
        </div>
      </div>
    </nav>
  );
}
