import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import Logo from '../../assets/logo.svg'
import Effects from '../../assets/effect.svg'

export function DefaultLayout() {
  return(
    <div className="font-sans w-screen h-72 bg-gradient-to-t from-base-border to-base-profile flex flex-col justify-center items-center pt-16 max-sm:h-64">
      <img src={Effects} alt="Linhas horizontais azul" className="absolute right-0 top-6 max-sm:right-0 max-sm:w-40 max-sm:top-16"/>
      <img src={Effects} alt="Linhas horizontais azul" className="absolute left-0 top-6 rotate-180 max-sm:right-0 max-sm:w-40 max-sm:top-16"/>
      <img src={Logo} />
      <Header />
      <Outlet />
    </div>
  )
}