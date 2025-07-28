import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { Error404 } from './error404/error404';

export const routes: Routes = [
    {path:'', component:Home , title:'Home'},
    {path:'About', component:About, title:'About'},
    {path:'Portfolio' , component:Portfolio, title:'Portfolio'},
    {path:'Contact', component:Contact, title:'Contact'},
    {path:'**', component:Error404, title:'404'}
];

