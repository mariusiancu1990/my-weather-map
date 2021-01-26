import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppState } from './app.state';
import { CoreModule } from './modules/core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    CoreModule, 
    NgxsModule.forRoot([AppState],{
      developmentMode: !environment.production
    }),
    NgxsDispatchPluginModule.forRoot()
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {}
