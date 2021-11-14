import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

//material
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule} from '@angular/material/progress-bar';

import { WeatherListComponent } from './weather/weather.component'
import { WeatherService } from './weather/weather.service';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HttpClientModule,
    //material
    MatButtonModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  declarations: [Tab1Page, WeatherListComponent],
  providers: [WeatherService],
})
export class Tab1PageModule {}
