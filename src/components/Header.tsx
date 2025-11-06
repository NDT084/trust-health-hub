import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/doctors', label: 'Find a Doctor' },
  { to: '/services', label: 'Services' },
  { to: '/appointments', label: 'Appointments' },
  { to: '/blog', label: 'Health Blog' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-teal-600 dark:text-teal-400">
            Afya Health
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${isActive ? 'font-semibold text-teal-600 dark:text-teal-400' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild>
              <Link to="/appointments">Book Now</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 p-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `text-lg text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 ${isActive ? 'font-bold text-teal-600 dark:text-teal-400' : ''}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <Button asChild className="mt-4">
                    <Link to="/appointments">Book Now</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;