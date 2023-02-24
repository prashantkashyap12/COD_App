import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OldResultComponent } from './old-result/old-result.component';
import { CommissionComponent } from './commission/commission.component';
import { HelpComponent } from './help/help.component';
import { TermCondiComponent } from './term-condi/term-condi.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppSignupComponent } from './app-signup/app-signup.component';
import { AppForgetComponent } from './app-forget/app-forget.component';
import { AppForgetOtpComponent } from './app-forget-otp/app-forget-otp.component';
import { HowPlayComponent } from './how-play/how-play.component';
import { MyGameComponent } from './my-game/my-game.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { RouterModule } from '@angular/router';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { FormsModule } from '@angular/forms';
import { MyGameSelectComponent } from './my-game-select/my-game-select.component';
import { RefferEarnComponent } from './reffer-earn/reffer-earn.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HomepageComponent,
    OldResultComponent,
    CommissionComponent,
    HelpComponent,
    TermCondiComponent,
    AppLoginComponent,
    AppSignupComponent,
    AppForgetComponent,
    AppForgetOtpComponent,
    HowPlayComponent,
    MyGameComponent,
    GameDashboardComponent,
    MyWalletComponent,
    ProfileEditComponent,
    ProfileUserComponent,
    MyGameSelectComponent,
    RefferEarnComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    // mobileAppRoutingModule
  ],
  exports: [
    NavBarComponent,
    HomepageComponent,
    OldResultComponent,
    CommissionComponent,
    HelpComponent,
    TermCondiComponent,
    AppLoginComponent,
    AppSignupComponent,
    AppForgetComponent,
    AppForgetOtpComponent,
    HowPlayComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class AdminPanelModule {}
