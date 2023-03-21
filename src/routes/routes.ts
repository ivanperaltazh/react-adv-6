import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { LazyPage1 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element; // definimos un tipo personalizado de tipo () => JSX.Element


// Interfaz solo para tipado de routes aqui en Typescript.
// NOTA: Ests interfaces equivale a cero lineas de codigo en Javascript.
interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent; //  Al definir el tipo JSXComponent personalizado, de este modo tenemos mas flexibilida ya que ahora los Compnente puede aceptar un lazy() "Component: Lazy1)"" o un component normal como "Component:LazyPage1" que cargaria sin lazy loading
    name: string;
}

// Definimos componentes que van a ser cargados bajo demanda es decir con lazy Loading
// y reemmplazmos con estos lazy() los Component de las routes: 
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

// ! NOTA IMPORTANTE: al hacer import { LazyLayout } from './../01-lazyload/layout/LazyLayout'; debe esta exportado por defecto
// al carga los elementosimport { NoLazy } from './../01-lazyload/pages/NoLazy';

/* webpackChunkName: "LazyPage1" -> sirva para cambiar el nombre a los chunk bas con poner ese comentario
   Que es simplemente el nombre que pararece en consola cuando se carga un modulo por lazy loading cuando se usa webpack
   y sirve para desarrollo para idificar cara modulo lazy loading y ver tiempo de cargar, tmaño etc.*/



// '/lazyload/* : significa todo lo que venga con el path "/lazyload" pasara por este path
export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLayout, // Component con mayuscula la primera porque es componente y van con mayuscula
        name: 'LazyLayout' // nombre para el link
    },
    {
        path: 'no-lazy',
        to: '/no-lazy',
        Component: NoLazy, // Este componente se cargara sin lazy load
        name: 'No Lazy'
    },
];
