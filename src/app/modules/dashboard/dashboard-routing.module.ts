import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewPage } from './pages/overview.page';
import { DashboardLayoutComponent } from 'src/app/core/components/dashboard-layout/dashboard-layout.component';
import { TeamsPage } from './pages/teams.page';
import { TasksPage } from './pages/tasks.page';
import { BoardPage } from './pages/board/board.page';

const routes: Routes = [
  { path: '', 
    component: DashboardLayoutComponent,
    children: [
      { path: 'overview', component: OverviewPage },
      { path: 'teams', component: TeamsPage },
      { path: 'tasks', component: TasksPage },
      { path: 'board', component: BoardPage },
      { path: '', redirectTo: 'overview', pathMatch: 'full' }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
