import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { Device2Component } from './modules/device2/device2.component';
import { Device3Component } from './modules/device3/device3.component';
import { Device4Component } from './modules/device4/device4.component';
import { Device5Component } from './modules/device5/device5.component';
import {FormsModule} from '@angular/forms';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {MatTableModule} from '@angular/material/table';
import { NotificationsComponent } from './modules/notifications/notifications.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SupportComponent } from './modules/support/support.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';



const config: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    Device2Component,
    Device3Component,
    Device4Component,
    Device5Component,
    NotificationsComponent,
    SupportComponent,
    PagenotfoundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        DefaultModule,
        FormsModule,
        SocketIoModule.forRoot(config),
        MatTableModule,
        MatCardModule,
        MatExpansionModule,
        MatListModule,
        FlexLayoutModule,
        MatIconModule,
        MatTooltipModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
