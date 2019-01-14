import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { AccomdationsComponent } from './accomdations/accomdations.component';
import { RoomsComponent } from './accomdations/rooms/rooms.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { RestaurantsComponent } from './food-beverage/restaurants/restaurants.component';
import { BarComponent } from './food-beverage/bar/bar.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  declarations: [AppComponent, 
    AccomdationsComponent, 
    RoomsComponent, 
    FoodBeverageComponent, 
    RestaurantsComponent, 
    BarComponent, 
    LifestyleComponent, 
    WellnessAndSpaComponent, 
    ResortActivitiesComponent, 
    ExperiencesComponent, 
    ExcursionsComponent, 
    WeddingsComponent, 
    ThaiWeddingsComponent, 
    WesternWeddingsComponent, 
    CelebrationsComponent, 
    OffersComponent, 
    AuthComponent, 
    SignupComponent, 
    SigninComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
