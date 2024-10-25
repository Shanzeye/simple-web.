import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    

<header class="text-gray-600 body-font">
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

    <img src="https://img.icons8.com/?size=50&id=lMK80N2QxxpY&format=png" alt="pic"/>
    <span class="ml-3 text-2xl">THE PHOTOGRAPHY</span>
  
  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <Link to="/" class="mr-5 text-2xl font-medium hover:text-gray-900">Home </Link>
    <Link to="/about" class="mr-5 text-2xl font-medium hover:text-gray-900">About </Link>
    <Link to="/contact" class="mr-5 text-2xl font-medium hover:text-gray-900">Contact</Link>
  </nav>
  
</div>
</header>
  );
};

export default Navbar;
