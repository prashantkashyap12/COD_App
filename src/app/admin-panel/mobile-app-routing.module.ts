import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { AppForgetOtpComponent } from './app-forget-otp/app-forget-otp.component';
import { AppForgetComponent } from './app-forget/app-forget.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppSignupComponent } from './app-signup/app-signup.component';
import { CommissionComponent } from './commission/commission.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { HelpComponent } from './help/help.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HowPlayComponent } from './how-play/how-play.component';
import { MyGameComponent } from './my-game/my-game.component';
import { MyGameSelectComponent } from './my-game-select/my-game-select.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OldResultComponent } from './old-result/old-result.component';
import { TermCondiComponent } from './term-condi/term-condi.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  { path: '', component: AppLoginComponent },
  { path: 'signup', component: AppSignupComponent },
  { path: 'user-profile', component: ProfileUserComponent },
  { path: 'forget-otp', component: AppForgetOtpComponent },
  { path: 'forget', component: AppForgetComponent },
  { path: 'login', component: AppLoginComponent },
  { path: 'mygame', component: MyGameComponent },
  { path: 'game-select', component: MyGameSelectComponent },
  { path: 'commission', component: CommissionComponent },
  { path: 'howtoplay', component: HowPlayComponent },
  { path: 'mywallet', component: MyWalletComponent },
  { path: 'help', component: HelpComponent },
  { path: 'deshboard', component: GameDashboardComponent },
  { path: 'mainhome', component: HomepageComponent },
  { path: 'oldresult', component: OldResultComponent },
  { path: 'myterms', component: TermCondiComponent },
  { path: 'profile-edit', component: ProfileEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class mobileAppRoutingModule {}
