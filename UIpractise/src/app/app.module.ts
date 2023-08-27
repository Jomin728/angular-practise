import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomtooltipDirective } from './customtooltip.directive';
import { TooltipCompComponent } from './tooltip-comp/tooltip-comp.component';
import { TagComponent } from './tag/tag.component';
import { ButtontagComponent } from './buttontag/buttontag.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from './playlist/playlist.component';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomtooltipDirective,
    TooltipCompComponent,
    TagComponent,
    ButtontagComponent,
    PlaylistComponent,
    AudioplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
