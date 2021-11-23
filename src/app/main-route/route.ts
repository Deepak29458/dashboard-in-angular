import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path :"dashboard",
        loadChildren: ()=> import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule),
    }
];