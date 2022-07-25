import { ReactNode } from "react";
import Link from "next/link";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/characters">
                <a>characters</a>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
        }

        nav ul {
          display: flex;
          list-style: none;
        }

        nav ul li {
          margin-right: 1rem;
        }

        nav ul li a {
          text-decoration: none;
          color: #333;
        }

        main {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}

export default Layout;
