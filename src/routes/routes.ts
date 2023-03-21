import { lazy, LazyExoticComponent } from 'react';
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
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));
// ! NOTA IMPORTANTE: para carga los elementos por lazy loding estos tienen que estar exportados por defecto
/* webpackChunkName: "LazyPage1" -> sirva para cambiar el nombre a los chunk bas con poner ese comentario
   Que es simplemente el nombre que pararece en consola cuando se carga un modulo por lazy loading cuando se usa webpack
   y sirve para desarrollo para idificar cara modulo lazy loading y ver tiempo de cargar, tmaño etc.*/

   
export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1, // Component con mayuscula la primera porque es componente y van con mayuscula
        name: 'Lazy-1' // nombre para el link
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2, //TIP : PARA SABER EL TIPO DE DATO QUE ES COMPONEN PONER EL CURSOR ENCIMA Y COPIARLO  () => JSX.Element
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    },
];
