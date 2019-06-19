import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importação do modal
import { TarefaModalPageModule } from './tarefa-modal/tarefa-modal.module';
// Importação do Storage
import { IonicStorageModule } from '@ionic/storage';
// Importação do modal
import { PerfilModalPageModule } from './perfil-modal/perfil-modal.module';
// Importação da camera
import { Camera } from '@ionic-native/camera/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    TarefaModalPageModule,
    IonicStorageModule.forRoot(),
    PerfilModalPageModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
