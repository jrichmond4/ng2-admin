import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { MongoComponent } from './mongo.component';
import { routing } from './mongo.routing';
import { FeedComponent} from './feed.component';
import { NgaModule } from '../../theme/nga.module';
import { FeedService} from './feed.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule
  ],
  declarations: [
    MongoComponent,
    FeedComponent
  ],
  providers: [
    FeedService
  ]
})
export default class MongoModule {}