import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from "./currency/currency.component";
import { WeatherComponent } from "./weather/weather.component";
import { MovieComponent } from "./movie/movie.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './signup/signup.component';
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'signup', component: SignUpComponent, data: { animation: 'tiger' } },
    { path: 'movie', component: MovieComponent, data: { animation: 'tiger' } },
    { path: 'login', component: LoginComponent, data: { animation: 'tiger' } },
    { path: 'home', component: HomeComponent, data: { animation: 'tiger' } },
    { path: 'currency', component: CurrencyComponent, data: { animation: 'tiger' } }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
