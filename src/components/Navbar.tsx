import { NavLink } from './NavLink'

export function Navbar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8 text-white">
        <li className="list-item">
          <NavLink to="home">Home</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="programs">Programs</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="reasons">Why us</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="plans">Plans</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="testimonials">Testimonials</NavLink>
        </li>
      </ul>
    </nav>
  )
}
