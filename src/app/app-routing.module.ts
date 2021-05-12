import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {Device1Component} from './modules/device1/device1.component';
import {Device2Component} from './modules/device2/device2.component';
import {Device3Component} from './modules/device3/device3.component';
import {Device4Component} from './modules/device4/device4.component';
import {Device5Component} from './modules/device5/device5.component';
import {NotificationsComponent} from './modules/notifications/notifications.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {SupportComponent} from './modules/support/support.component';

// Creating routes to components that can be linked to in html files
const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{path: '', component: DashboardComponent},
    {path: 'device1', component: Device1Component},
    {path: 'device2', component: Device2Component},
    {path: 'device3', component: Device3Component},
    {path: 'device4', component: Device4Component},
    {path: 'device5', component: Device5Component},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'support', component: SupportComponent}
]
}, {path: '**',  component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
