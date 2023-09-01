import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import { useGlobalContext } from '../../context'
const Home = () => {
  const { token } = useGlobalContext()
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default Home