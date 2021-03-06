import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';

import { DataGuard } from "./services/data.guard";
import { PListComponent } from './components/home/playlist/p-list/p-list.component';
import { MusicsComponent } from './components/home/musics/musics.component';
import { PlaylistdetailsComponent } from './components/home/playlist/p-list/playlistdetails/playlistdetails.component';
import { ArtistsComponent } from './components/home/artists/artists.component';
import { ArtistprofileComponent } from './components/home/artistprofile/artistprofile.component';
import { TracksComponent } from './components/home/tracks/tracks.component';
import { PlaytracksComponent } from './components/home/playtracks/playtracks.component';
const routes: Routes = [
  {path:'', redirectTo: 'landing', pathMatch:'full'},
  {path:'landing',component:LandingComponent},
  {path:'home',component:HomeComponent,canActivate:[DataGuard],children:[
  {path:'featured-playlists',component:PListComponent,children:[
  {path:':id',component:PlaylistdetailsComponent}
   ]},
  {path:'songs',component:MusicsComponent},
  {path:'artists',component:ArtistsComponent},
  {path:'sign-in',component:SigninComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'artists/:id',component:ArtistprofileComponent},
  {path:'artists/:id/albums/:id/tracks',component:TracksComponent},
  {path:'artists/:id/albums/:id/tracks/:id',component:PlaytracksComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
