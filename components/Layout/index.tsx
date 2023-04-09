import Navbar from '@components/Navbar'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
      <style jsx>
        {`
          div {
            background-color: rgb(188, 251, 231);
          }
        `}
      </style>
    </div>
  )
}

export default Layout
