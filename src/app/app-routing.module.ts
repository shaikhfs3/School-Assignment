import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponent } from './sections/sections';
import { SectionDetailsComponent } from './section-details/section-details.component';

const routes: Routes = [
  {path: '', component: SectionsComponent },
  {path: 'sectionDetails', component: SectionDetailsComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
