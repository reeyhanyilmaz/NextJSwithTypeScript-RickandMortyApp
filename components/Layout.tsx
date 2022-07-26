import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
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

            <li>
              <button type="button" className="btn" onClick={() => router.reload()}>
                Click here to reload
              </button>
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
          position:fixed; top:0px; left:0px; right:0px; 
          height: 100px; 
          background: white; 
          z-index:1; //overlay ile üstte görünür
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

        .btn {
          border: none;
          color: blue;
          background-color: white;
          cursor: pointer;
          text-decoration: underline;
        }
        
        .btn:hover {
          color: #ff0000;
        }

        @media (max-width: 767px) {
          .btn {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;
