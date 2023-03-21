import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg'

export const Navigation = () => {
    return (
        // <Suspense> es para el lazy Loading que envuelve todo el <BrowserRouter>
        // sirve para decir que mientras carga el modulo espere y mientras haga los siguiente que es el  fallback que es mostrar el span-loading:
        <Suspense fallback={ <span>Loading...</span> }> 

            <BrowserRouter>
                <div className="main-layout">
                    {/* *** Menu lateral: **** */}
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>   
                            {/* Cuando se usa un map para interaccione shay que poner un "key"     */}
                            { 
                                routes.map(({ to, name }) => (
                                    <li key={ to }>
                                        <NavLink 
                                            to={ to } 
                                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                            { name }
                                        </NavLink>
                                    </li>
                                ))             
                            }         
                        </ul>
                    </nav>


                      {/* sin desestructurar <route.Component /> */}
                    <Routes>       
                        {
                            routes.map( ({ path, Component  }) => (
                                <Route 
                                    key={ path }
                                    path={ path }
                                    element={ <Component /> }   
                                />
                            ))
                        }       
                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}


/* significado de  "replace" dentro de  <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
Cuando se establece en true, esta propiedad reemplazará la entrada más reciente en el historial 
de navegación en lugar de agregar una nueva entrada al historial. En otras palabras, si el 
usuario hace clic en el botón A para ir de una página a otra y "replace" está establecido en true, 
el botón A se reemplazará en lugar de agregar una nueva entrada al historial de navegación.

La propiedad "replace" es útil en situaciones donde no desea que el usuario pueda regresar a 
la página anterior utilizando el botón A. En su lugar, el usuario tendrá que navegar hacia atrás
 a través del historial del navegador o utilizar una función de navegación diferente para volver
  a la página anterior.
  */