import { Routes } from "@angular/router";
import { DashboardPanelComponent } from "../dashboard/dashboard-panel/dashboard-panel.component";

export const routes: Routes = [
    {
        path:"",
        component:DashboardPanelComponent,
    },
    {
        path :"dashboard",
        loadChildren: ()=> import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule),
    }
];