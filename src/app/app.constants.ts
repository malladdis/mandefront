import {HttpHeaders} from '@angular/common/http';

const API_URL = 'http://localhost:8000/api';
const programCategoryRoutes = {
  index: createUrl('/program_categories'),
  show: createUrl('/program_categories'),
  store: createUrl('/program_categories'),
  update: createUrl('/program_categories'),
  destroy: createUrl('/program_categories')
};
const programRoutes = {
  index: createUrl('/programs'),
  show: createUrl('/programs'),
  store: createUrl('/programs'),
  update: createUrl('/programs'),
  destroy: createUrl('/programs')
};
const programDetailRoutes = {
  index: createUrl('/program_details'),
  show: createUrl('/program_details'),
  store: createUrl('/program_details'),
  update: createUrl('/program_details'),
  destroy: createUrl('/program_details')
};
const projectRoutes = {
  index: createUrl('/projects'),
  show: createUrl('/projects'),
  store: createUrl('/projects'),
  update: createUrl('/projects'),
  destroy: createUrl('/projects')
};
const projectCategoryRoutes = {
  index: createUrl('/project_categories'),
  show: createUrl('/project_categories'),
  store: createUrl('/project_categories'),
  update: createUrl('/project_categories'),
  destroy: createUrl('/project_categories')
};
const regionRoutes = {
  index: createUrl('/regions'),
  show: createUrl('/regions'),
  store: createUrl('/regions'),
  update: createUrl('/regions'),
  destroy: createUrl('/regions')
};
const zoneRoutes = {
  index: createUrl('/zones'),
  show: createUrl('/zones'),
  store: createUrl('/zones'),
  update: createUrl('/zones'),
  destroy: createUrl('/zones')
};
const woredaRoutes = {
  index: createUrl('/woredas'),
  show: createUrl('/woredas'),
  store: createUrl('/woredas'),
  update: createUrl('/woredas'),
  destroy: createUrl('/woredas')
};
const kebeleRoutes = {
  index: createUrl('/kebeles'),
  show: createUrl('/kebeles'),
  store: createUrl('/kebeles'),
  update: createUrl('/kebeles'),
  destroy: createUrl('/kebeles')
};
const clusterRoutes = {
  index: createUrl('/clusters'),
  show: createUrl('/clusters'),
  store: createUrl('/clusters'),
  update: createUrl('/clusters'),
  destroy: createUrl('/clusters')
};
const clusterMemberRoutes = {
  index: createUrl('/cluster_members'),
  show: createUrl('/cluster_members'),
  store: createUrl('/cluster_members'),
  update: createUrl('/cluster_members'),
  destroy: createUrl('/cluster_members')
};
const implementerRoutes = {
  index: createUrl('/implementers'),
  show: createUrl('/implementers'),
  store: createUrl('/implementers'),
  update: createUrl('/implementers'),
  destroy: createUrl('/implementers')
};
const projectImplementerRoutes = {
  index: createUrl('/project_implementers'),
  show: createUrl('/project_implementers'),
  store: createUrl('/project_implementers'),
  update: createUrl('/project_implementers'),
  destroy: createUrl('/project_implementers')
};
const beneficariesRoutes = {
  index: createUrl('/beneficiaries'),
  show: createUrl('/beneficiaries'),
  store: createUrl('/beneficiaries'),
  update: createUrl('/beneficiaries'),
  destroy: createUrl('/beneficiaries')
};
const frequenciesRoutes = {
  index: createUrl('/frequencies'),
  show: createUrl('/frequencies'),
  store: createUrl('/frequencies'),
  update: createUrl('/frequencies'),
  destroy: createUrl('/frequencies')
};
const projectFrequenciesRoutes = {
  index: createUrl('/project_frequencies'),
  show: createUrl('/project_frequencies'),
  store: createUrl('/project_frequencies'),
  update: createUrl('/project_frequencies'),
  destroy: createUrl('/project_frequencies')
};
const projectBeneficiariesRoutes = {
  index: createUrl('/project_beneficiaries'),
  show: createUrl('/project_beneficiaries'),
  store: createUrl('/project_beneficiaries'),
  update: createUrl('/project_beneficiaries'),
  destroy: createUrl('/project_beneficiaries')
};
const projectDetailRoutes = {
  index: createUrl('/project_details'),
  show: createUrl('/project_details'),
  store: createUrl('/project_details'),
  update: createUrl('/project_details'),
  destroy: createUrl('/project_details')
};
const outputRoutes = {
  index: createUrl('/outputs'),
  show: createUrl('/outputs'),
  store: createUrl('/outputs'),
  update: createUrl('/outputs'),
  destroy: createUrl('/outputs')
};
const outputIndicatorRoutes = {
  index: createUrl('/output_indicators'),
  show: createUrl('/output_indicators'),
  store: createUrl('/output_indicators'),
  update: createUrl('/output_indicators'),
  destroy: createUrl('/output_indicators')
};
const outcomeRoutes = {
  index: createUrl('/outcomes'),
  show: createUrl('/outcomes'),
  store: createUrl('/outcomes'),
  update: createUrl('/outcomes'),
  destroy: createUrl('/outcomes'),
  outcome_outputs: createUrl('/outcome_outputs')
};
const outcomeIndicatorsRoutes = {
  index: createUrl('/outcome_indicators'),
  show: createUrl('/outcome_indicators'),
  store: createUrl('/outcome_indicators'),
  update: createUrl('/outcome_indicators'),
  destroy: createUrl('/outcome_indicators'),
  outcome_outputs: createUrl('/outcome_outputs')
};

const userRoutes = {
  me: createAuthUrl('/me'),
  users: createAuthUrl('/users')
};
function createUrl (route: string) {
  return `${API_URL}${route}`;
}
function createAuthUrl (route: string) {
  return  `${API_URL}/auth${route}`;
}
export const apiRoutes = {
  programCategory: programCategoryRoutes,
  program: programRoutes,
  program_detail: programDetailRoutes,
  project: projectRoutes,
  projectCategory: projectCategoryRoutes,
  region: regionRoutes,
  zone: zoneRoutes,
  woreda: woredaRoutes,
  kebele: kebeleRoutes,
  cluster: clusterRoutes,
  clusterMemeber: clusterMemberRoutes,
  implementer: implementerRoutes,
  beneficaries: beneficariesRoutes,
  user: userRoutes,
  frequencies: frequenciesRoutes,
  project_frequency: projectFrequenciesRoutes,
  project_implementers: projectImplementerRoutes,
  project_detail: projectDetailRoutes,
  project_beneficiaries: projectBeneficiariesRoutes,
  outputs: outputRoutes,
  output_indicator: outputIndicatorRoutes,
  outcomes: outcomeRoutes,
  outcomeIndicator: outcomeIndicatorsRoutes
};


