import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from './../pages';



const LazyLayout = () => {
  return (
    <div>
        <h1> LazyLayout Page</h1>
        <h2>Header</h2>

        {/* Rutas hijas hijas iran aqui, ha esta pagina se llega por ejemplo luego del login */}
        <ul className="menu">
            <li> Menu </li>
            <li> <NavLink to="lazy1">Lazy 1</NavLink> </li>
            <li> <NavLink to="lazy2">Lazy 2</NavLink> </li>
            <li> <NavLink to="lazy3">Lazy 3</NavLink> </li>
        </ul>


    {/* Al ser un modulo perezoso cargara todas estas rutas en conjunto al estar el path 
        de finico con comodin -> path: '/lazyload/*'.
        Si se quisiera tambien estos componentes se prodrian cargar cada uno con un lazy load por separada en vez de caragar todos juntos como un modulo*/}
        <Routes>
            <Route path="lazy1" element={<LazyPage1 />}/>
            <Route path="lazy2" element={<LazyPage2 />}/>
            <Route path="lazy3" element={<LazyPage3 />}/>

            {/* <Route path="*" element={<div>Not Found</div>}/> componente que aparecera por defecto, sin coincide con ninguna de las rutas anteriores */}
            <Route path="*" element={<Navigate replace to="lazy1" />}/> {/* componente que aparecera por defecto, sin coincide con ninguna de las rutas anteriores */}
        </Routes>
  
       <h2>Footer</h2>
    </div>
  )
}

export default LazyLayout