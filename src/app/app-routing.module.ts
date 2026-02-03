import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/tasks/task-list/task-list.module').then( m => m.TaskListPageModule)
  },
  {
    path: 'tasks/:id',
    loadChildren: () => import('./pages/tasks/task-detail/task-detail.module').then( m => m.TaskDetailPageModule)
  },
  {
    path: 'new-task',
    loadChildren: () => import('./pages/tasks/task-new/task-new.module').then( m => m.TaskNewPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
