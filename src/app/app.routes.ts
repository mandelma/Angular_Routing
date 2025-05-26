import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
    {path: '', component: AboutComponent, pathMatch: 'full'},
    {path: 'skills', component: SkillsComponent},
    {path: 'experience', component: ExperienceComponent}
];
