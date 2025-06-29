import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { OverviewPage } from './pages/overview.page';
import { CoreModule } from 'src/app/core/core.module';
import { TeamsPage } from './pages/teams.page';
import { TasksPage } from './pages/tasks.page';
import { FormsModule } from '@angular/forms';
import { BoardPage } from './pages/board/board.page';


@NgModule({
  declarations: [
    OverviewPage,
    TeamsPage,
    TasksPage,
    BoardPage
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class DashboardModule { }
