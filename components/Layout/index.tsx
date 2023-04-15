import Navbar from '@components/Navbar'
import Footer from '@components/Footer/Footer'
import { Container } from 'semantic-ui-react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Container as="main" text>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
