import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AddAmbulanceComponent } from 'src/app/pages/add-ambulance/add-ambulance.component';
import { EditAmbulanceComponent } from 'src/app/pages/edit-ambulance/edit-ambulance.component';
import { DeleteAmbulanceComponent } from 'src/app/pages/delete-ambulance/delete-ambulance.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'add-ambulance',  component: AddAmbulanceComponent},
    { path: 'ambulance/edit/:ambulancesid', component: EditAmbulanceComponent},
    { path: 'ambulance/delete/:ambulancesid', component: DeleteAmbulanceComponent}

];
