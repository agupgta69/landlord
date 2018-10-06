import { RouterModule, Routes } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Dashboard} from './components/dashboard/dashboard.component';
const routes: Routes = [
    { path: 'dashboard', component: Dashboard }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);