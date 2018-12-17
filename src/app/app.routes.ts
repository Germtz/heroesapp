import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { constants } from 'os';


const app_routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/id', component: HeroeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes' },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export const APP_ROUTING = RouterModule.forRoot(app_routes);
