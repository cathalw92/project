import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { Device1Component } from 'src/app/modules/device1/device1.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FlexModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';

const config: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {}
};


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    Device1Component,
  ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        MatSidenavModule,
        MatDividerModule,
        MatCardModule,
        SocketIoModule.forRoot(config),
        MatTableModule,
        MatSortModule,
        MatExpansionModule,
        MatPaginatorModule,
        FlexModule
    ]
})
export class DefaultModule { }
