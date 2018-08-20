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
const beneficariesRoutes = {
  index: createUrl('/beneficiaries'),
  show: createUrl('/beneficiaries'),
  store: createUrl('/beneficiaries'),
  update: createUrl('/beneficiaries'),
  destroy: createUrl('/beneficiaries')
};
const createCustomForms = {
  index: createUrl('/forms'),
  show: createUrl('/forms'),
  store: createUrl('/forms'),
  update: createUrl('/forms'),
  destroy: createUrl('/forms')
};

const createFormSections = {
  index: createUrl('/form-sections'),
  show: createUrl('/form-sections'),
  store: createUrl('/form-sections'),
  update: createUrl('/form-sections'),
  destroy: createUrl('/form-sections')
};

const createFormColumns = {
  index: createUrl('/form-columns'),
  show: createUrl('/form-columns'),
  store: createUrl('/form-columns'),
  update: createUrl('/form-columns'),
  destroy: createUrl('/form-columns')
};

const createGeneratedForm = {
  index: createUrl('/generated-forms'),
  show: createUrl('/generated-forms'),
  store: createUrl('/generated-forms'),
  update: createUrl('/generated-forms'),
  destroy: createUrl('/generated-forms')
};

const createFormsData = {
  index: createUrl('/form-datas'),
  show: createUrl('/form-datas'),
  store: createUrl('/form-datas'),
  update: createUrl('/form-datas'),
  destroy: createUrl('/form-datas')
};

const createFormsDataFile = {
  index: createUrl('/form-data-files'),
  show: createUrl('/form-data-files'),
  store: createUrl('/form-data-files'),
  update: createUrl('/form-data-files'),
  destroy: createUrl('/form-data-files')
};

const createUsers = {
  index: createUrl('/users'),
  show: createUrl('/users'),
  store: createUrl('/users'),
  update: createUrl('/users'),
  destroy: createUrl('/users')
};

const createRoles = {
  index: createUrl('/roles'),
  show: createUrl('/roles'),
  store: createUrl('/roles'),
  update: createUrl('/roles'),
  destroy: createUrl('/roles')
};

const createModels = {
  index: createUrl('/models'),
  show: createUrl('/models'),
  store: createUrl('/models'),
  update: createUrl('/models'),
  destroy: createUrl('/models')
};

const createOuter = {
  index: createUrl('/outer'),
  show: createUrl('/outer'),
  store: createUrl('/outer'),
  update: createUrl('/outer'),
  destroy: createUrl('/outer')
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
  customForms:createCustomForms,
  formSections:createFormSections,
  formColumn:createFormColumns,
  generatedForm:createGeneratedForm,
  formsData:createFormsData,
  formsDataFile:createFormsDataFile,
  users:createUsers,
  roles:createRoles,
  models:createModels,
  outer:createOuter
};


