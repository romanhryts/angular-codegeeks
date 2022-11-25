import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/meeting', pathMatch: 'full' },
  { path: 'meeting', loadChildren: () => import('./features/meeting/meeting.module').then(m => m.MeetingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
