import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';
import {MatRippleModule} from '@angular/material/core';

import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question/question.component';
import { ProfileComponent } from './profile/profile.component';
import { StartAppComponent } from './start-app/start-app.component';
import { QuestionService } from './question.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    QuestionListComponent,
    QuestionComponent,
    ProfileComponent,
    StartAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    ChartsModule,
    MatRippleModule
  ],
  providers: [
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
