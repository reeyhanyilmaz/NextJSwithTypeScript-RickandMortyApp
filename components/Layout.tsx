import { ReactNode } from "react";
import Link from "next/link";
import {ReactElement} from "react";

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
                <a>Characters</a>
              </Link>
            </li>

            <li>
              <Link href="/episodes">
                <a>Episodes</a>
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
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          margin-bottom: 1rem;
        }

        nav ul {
          display: flex;
          list-style: none;
        }

        nav ul li {
          margin-right: 1rem;
        }

        nav ul li:hover {
          cursor: pointer;
           
          color: #ff0000;
        }
      `}</style>
    </div>
  );
}

export default Layout;
