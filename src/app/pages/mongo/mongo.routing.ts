import { Routes, RouterModule }  from '@angular/router';
import { MongoComponent } from './mongo.component';

const routes: Routes = [
  {
    path: '',
    component: MongoComponent
  }
];

export const routing = RouterModule.forChild(routes);