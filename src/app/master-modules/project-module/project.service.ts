import { Injectable } from '@angular/core';
import {AppService} from '../../services/app.service';
import {Observable} from 'rxjs';
import {Project} from '../../models/project';
import { apiRoutes } from '../../app.constants';

@Injectable()
export class ProjectService {

  constructor(private appservice: AppService) { }
  getProjectCategories() {
    return this.appservice.get(apiRoutes.projectCategory.index);
  }
  addProjectCategory(form) {
    const formValues = JSON.stringify({
      name: form.value.name,
      description: form.value.description
    });
    return this.appservice.post(apiRoutes.projectCategory.store, formValues);
  }
  index() {
    return this.appservice.get(apiRoutes.project.index);
  }
  update(id: number, body: any) {
    return this.appservice.put(apiRoutes.project.update, id, body);
  }
  show(id: number) {
    return this.appservice.show(apiRoutes.project.show, id);
  }
  addKebele(form) {
    const data = JSON.stringify({
      woreda_id: form.value.woreda,
      name: form.value.name
    });
    return this.appservice.post(apiRoutes.kebele.store, data);
  }
  addCluster(form) {
    const data = JSON.stringify({
      name: form.value.name
    });
     this.appservice.post(apiRoutes.cluster.store, data).subscribe(response => {
          console.log(response);
         return this.addClusterMember(form, response['data']['id']).subscribe(res => {
           form.resetForm();
         });
     });
  }
  addClusterMember(form, id) {
    const data =  JSON.stringify({
      cluster_id: id,
      kebele_id: form.value.kebele
    });
    return this.appservice.post(apiRoutes.clusterMemeber.store, data);
  }
  getClusters() {
    return this.appservice.get(apiRoutes.cluster.index);
  }
  getZones() {
    return this.appservice.get(apiRoutes.zone.index);
  }
  getWoredas() {
    return this.appservice.get(apiRoutes.woreda.index);
  }
  getImplementers() {
    return this.appservice.get(apiRoutes.implementer.index);
  }
  getBeneficaries() {
    return this.appservice.get(apiRoutes.beneficaries.index);
  }
  getManagers() {
    return this.appservice.get(apiRoutes.user.users);
  }
  getFrequencies() {
    return this.appservice.get(apiRoutes.frequencies.index);
  }
  addProject(form) {
    const projectValue = JSON.stringify({
      program_id: form.value.program,
      project_category_id: form.value.category,
      name: form.value.name,
      description: form.value.description,
      featured: false,
      status_id: 2
    });
    this.appservice.post(apiRoutes.project.store, projectValue).subscribe(project => {
        this.addProjectDetail(form, project['data']['id']).subscribe(detail => {
          this.addProjectFrequencies(form, detail['data']['project_id']).subscribe(frequency => {
            this.addProjectImplementers(form, frequency['data']['project_id']).subscribe(implementer => {
              this.addProjectBeneficaries(form, implementer['data']['project_id']).subscribe(beneficary => {
                form.resetForm();
              });
            });
          });
        });
    });
  }
  getOutputsByOutcome(id) {
    return this.appservice.show(apiRoutes.outcomes.outcome_outputs, id);
  }
  getIndicatorsByOutcome(id){
    return this.appservice.show(apiRoutes.outcomeIndicator.show, id);
  }
  getIndicatorsByOutput(id){
    return this.appservice.show(apiRoutes.output_indicator.show, id);
  }
  addProjectDetail(form, id) {
    const projectDetail = JSON.stringify({
      project_id: id,
      cluster_id: form.value.cluster,
      budget: form.value.budget,
      goal: form.value.goal,
      objective: form.value.objective,
      mng_1: form.value.manager1,
      mng_2: form.value.manager2,
      starting_date: form.value.start,
      ending_date: form.value.end
    });
    return this.appservice.post(apiRoutes.project_detail.store, projectDetail);
  }
  addProjectFrequencies(form, id) {
    const frequencyValue = JSON.stringify({
        project_id: id,
        frequency_id: form.value.frequency
    });
    return this.appservice.post(apiRoutes.project_frequency.store, frequencyValue);
  }
  addProjectImplementers(form, id) {
    const implementerValue = JSON.stringify({
      project_id: id,
      implementer_id: form.value.implementer
  });
  return this.appservice.post(apiRoutes.project_implementers.store, implementerValue);
  }

  addProjectBeneficaries(form, id) {
    const beneficariesValue = JSON.stringify({
      project_id: id,
      beneficiary_id: form.value.beneficary
  });
  return this.appservice.post(apiRoutes.project_beneficiaries.store, beneficariesValue);
  }

  getOutcomes(id) {
   return this.appservice.show(apiRoutes.outcomes.show, id);
  }
  getOutputs(id) {
    return this.appservice.show(apiRoutes.outputs.show, id);
  }
}
