import { Routes } from "@angular/router";
import { DashboardContentComponent } from "../dashboard-panel/dashboard-content/dashboard-content.component";
import { DashboardPanelComponent } from "../dashboard-panel/dashboard-panel.component";

export const dashboardRoutes: Routes = [
    {
        path:"",
        component:DashboardPanelComponent,
    },
    {
        path:"main",
        component: DashboardContentComponent,
    }
];