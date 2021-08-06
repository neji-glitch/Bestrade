import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { IndexFoodFactoryComponent } from './index-food-factory/index-food-factory.component';
import { IndexSteelPlantComponent } from './index-steel-plant/index-steel-plant.component';
import { IndexSolarPlantComponent } from './index-solar-plant/index-solar-plant.component';
import { IndexAgricultureComponent } from './index-agriculture/index-agriculture.component';
import { BlogListOneComponent } from './inner-pages/blog-list-one/blog-list-one.component';
import { BlogListTwoComponent } from './inner-pages/blog-list-two/blog-list-two.component';
import { BlogSingleComponent } from './inner-pages/blog-single/blog-single.component';
import { ContactPageComponent } from './inner-pages/contact-page/contact-page.component';
import { MissionPageComponent } from './inner-pages/mission-page/mission-page.component';



const routes: Routes = [
	{path: '', component: IndexComponent},
	{path: 'index-food-factory', component: IndexFoodFactoryComponent},
	{path: 'index-steel-plant', component: IndexSteelPlantComponent},
	{path: 'index-solar-plant', component: IndexSolarPlantComponent},
	{path: 'index-agriculture', component: IndexAgricultureComponent},
	{path: 'blog-list-one', component: BlogListOneComponent},
	{path: 'blog-list-two', component: BlogListTwoComponent},
	{path: 'blog-single', component: BlogSingleComponent},
	{path: 'contact-page', component: ContactPageComponent},
	{path: 'mission-page', component: MissionPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
