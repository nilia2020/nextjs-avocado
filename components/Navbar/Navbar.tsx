import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul
          style={{ display: "flex", justifyContent: "space-evenly", margin: 0 }}
        >
          {/* igual uso el <a></a> para el SEO. */}
          <li style={{ listStyle: "none" }}>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
