import { BrowserModule } from '@angular/platform-browser';

import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { NgModule } from '@angular/core';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pan': { direction: Hammer.DIRECTION_All },
    'swipe': { direction: Hammer.DIRECTION_VERTICAL },
  };

  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'auto',
          inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
          recognizers: [
            [Hammer.Swipe, {
              direction: Hammer.DIRECTION_HORIZONTAL
            }]
          ]
    });
    return mc;
  }
}

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule, ToastService } from '../../projects/ng-uikit-pro-standard/src/lib/pro/alerts';
import { MDBBootstrapModulesPro } from '../../projects/ng-uikit-pro-standard/src/lib/mdb.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurWorksComponent } from './pages/our-works/our-works.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { DevWebComponent } from './pages/dev-web/dev-web.component';
import { DevMobileComponent } from './pages/dev-mobile/dev-mobile.component';
import { AppRoutingModule } from './app-routing.module';
import { SoftwaresComponent } from './pages/softwares/softwares.component';
import { PageNoteFoundComponent } from './pages/page-note-found/page-note-found.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DesignGraphiqueComponent } from './pages/design-graphique/design-graphique.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { DomainComponent } from './pages/domain/domain.component';
import { WebsiteComponent } from './pages/dev-web/website/website.component';
import { EShopComponent } from './pages/dev-web/e-shop/e-shop.component';
import { AppWebComponent } from './pages/dev-web/app-web/app-web.component';
import { MarketingDigitalComponent } from './pages/dev-web/marketing-digital/marketing-digital.component';
import { SocialManagementComponent } from './pages/dev-web/social-management/social-management.component';
import { MarketingDigitalModule } from './pages/dev-web/marketing-digital/marketing-digital.module';
import { WebsiteModule } from './pages/dev-web/website/website.module';
import { SocialManagementModule } from './pages/dev-web/social-management/social-management.module';
import { HomeModule } from './pages/home/home.module';
import { OurTeamModule } from './pages/our-team/our-team.module';
import { OurWorksModule } from './pages/our-works/our-works.module';
import { SoftwaresModule } from './pages/softwares/softwares.module';
import { FaqModule } from './pages/faq/faq.module';
import { DomainModule } from './pages/domain/domain.module';
import { DevWebModule } from './pages/dev-web/dev-web.module';
import { DevMobileModule } from './pages/dev-mobile/dev-mobile.module';
import { DesignGraphiqueModule } from './pages/design-graphique/design-graphique.module';
import { ContactUsModule } from './pages/contact-us/contact-us.module';
import { BlogModule } from './pages/blog/blog.module';
import { AboutUsModule } from './pages/about-us/about-us.module';

@NgModule({
  declarations: [AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    HomeComponent, 
    AboutUsComponent, 
    OurWorksComponent, 
    ContactUsComponent, 
    CarouselComponent, 
    DevWebComponent, 
    DevMobileComponent, 
    SoftwaresComponent, 
    PageNoteFoundComponent, 
    BlogComponent, 
    DesignGraphiqueComponent, 
    FaqComponent, 
    OurTeamComponent, 
    DomainComponent, WebsiteComponent, EShopComponent, AppWebComponent, MarketingDigitalComponent, SocialManagementComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MarketingDigitalModule,
    WebsiteModule,
    SocialManagementModule,
    HomeModule,
    OurTeamModule,
    OurWorksModule,
    SoftwaresModule,
    FaqModule,
    DomainModule,
    DevWebModule,
    DevMobileModule,
    DesignGraphiqueModule,
    ContactUsModule,
    BlogModule,
    AboutUsModule,
  ],
  providers: [MDBSpinningPreloader, ToastService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
