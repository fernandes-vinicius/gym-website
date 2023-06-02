export function Navbar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8 text-white">
        <li className="list-item">
          <a href="/">Home</a>
        </li>
        <li className="list-item">
          <a href="/">Programs</a>
        </li>
        <li className="list-item">
          <a href="/">Why us</a>
        </li>
        <li className="list-item">
          <a href="/">Plans</a>
        </li>
        <li className="list-item">
          <a href="/">Testimonials</a>
        </li>
      </ul>
    </nav>
  )
}
