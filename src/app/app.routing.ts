import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from "./currency/currency.component";
import { WeatherComponent } from "./weather/weather.component";
import { MovieComponent } from "./movie/movie.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { animation: 'tiger' } },
    { path: 'movie', component: MovieComponent, data: { animation: 'dolphin' } },
    { path: 'login', component: LoginComponent, data: { animation: 'dolphin' } },
    { path: 'home', component: HomeComponent, data: { animation: 'dolphin' } },
    { path: 'currency', component: CurrencyComponent, data: { animation: 'dolphin' } }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
