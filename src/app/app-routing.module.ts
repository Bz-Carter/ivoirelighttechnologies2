import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DevWebComponent } from './pages/dev-web/dev-web.component';
import { DevMobileComponent } from './pages/dev-mobile/dev-mobile.component';
import { DesignGraphiqueComponent } from './pages/design-graphique/design-graphique.component';
import { SoftwaresComponent } from './pages/softwares/softwares.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurWorksComponent } from './pages/our-works/our-works.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageNoteFoundComponent } from './pages/page-note-found/page-note-found.component';
import { FaqComponent } from './pages/faq/faq.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dev-web', component: DevWebComponent },
  { path: 'dev-mobile', component: DevMobileComponent },
  { path: 'design-graphique', component: DesignGraphiqueComponent},
  { path: 'softwares', component: SoftwaresComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-works', component: OurWorksComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'news', component: BlogComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: PageNoteFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

