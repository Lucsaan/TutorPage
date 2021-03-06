import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { VideoPageComponent } from './video-page/video-page.component';


const appRoutes : Routes = [
  { path: 'MainPage', component: MainPageComponent },
  { path: 'Videos', component: VideoPageComponent },
  { path: '', 
    redirectTo: '/TutorPage',
    pathMatch: 'full'
  },
  { path: '**', component: MainPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    VideoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Steps:
// ng generate component test-page-2
//  { path: 'Test 2', component: TestPageComponent }, in app.module.ts
// 
//     <a routerLink="/Test 2" routerLinkActive="active">
//      <button md-button routerlink="/Test 2" routerLinkActive="active" class="toolbar">
//      Test 2
//    </button>
