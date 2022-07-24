import { ReactNode } from "react";


function Layout({children}:{children:ReactNode}) {
  return (
    <div>
    <nav>
        <li>Home</li>
        <li>Characters </li>
    </nav>
    {children}
    </div>
  )
}

export default Layout;