import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed.component';

const routes: Routes = [
    {
        path: '',
        component: FeedComponent
    }
];

export const routing = RouterModule.forChild(routes);