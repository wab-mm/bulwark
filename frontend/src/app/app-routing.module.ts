import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { AssessmentsComponent } from '../app/assessments/assessments.component';

import { AppService } from '../app/app.service';
import { OrganizationComponent } from './organization/organization.component';
import { VulnerabilityComponent } from './vulnerability/vulnerability.component';

@Injectable()
export class AssetResolver implements Resolve<any> {
  constructor(private apiService: AppService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getOrganizationAssets(route.params.id);
  }
}

@Injectable()
export class AssessmentResolver implements Resolve<any> {
  constructor(private apiService: AppService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getAssessments(route.params.id);
  }
}

@Injectable()
export class VulnerabilityResolver implements Resolve<any> {
  constructor(private apiService: AppService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getVulnerabilities(route.params.id);
  }
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard/organization/:id',
    component: DashboardComponent
  },
  {
    path: 'assessment/:id',
    component: AssessmentsComponent,
    resolve: { assessments: AssessmentResolver }
  },
  {
    path: 'organization/:id',
    component: OrganizationComponent,
    resolve: { assets: AssetResolver }
  },
  {
    path: 'vulnerabilities/:id',
    component: VulnerabilityComponent,
    resolve: { vulnerabilities: VulnerabilityResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AssetResolver, AssessmentResolver, VulnerabilityResolver]
})
export class AppRoutingModule {}