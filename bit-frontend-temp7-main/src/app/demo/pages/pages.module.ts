import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TestComponent } from './test/test.component';
import { MaterialModule } from 'src/app/material.module';
// icons

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, FormsModule, NgApexchartsModule, RouterModule.forChild(PagesRoutes), MaterialModule],
  exports: []
})
export class PagesModule {}
