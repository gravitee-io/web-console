/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as jQuery from 'jquery';

(<any>window).jQuery = jQuery;

import angular = require('angular');
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-sanitize';
import 'angular-local-storage';

import * as traverse from 'traverse';

(<any>window).traverse = traverse;

import * as RAML from 'raml-1-parser';

(<any>window).RAML = {Parser: RAML};

import * as marked from 'marked';

(<any>window).marked = marked;

import * as hljs from 'highlight.js';

(<any>window).hljs = hljs;

// Codemirror
import * as CodeMirror from 'codemirror';

(<any>window).CodeMirror = CodeMirror;

require('satellizer');

require('angular-marked');
require('angular-highlightjs');

require('codemirror/mode/xml/xml.js');
require('codemirror/addon/edit/closetag.js');
require('codemirror/addon/fold/xml-fold.js');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/groovy/groovy.js');
require('codemirror/mode/gfm/gfm.js');
require('codemirror/addon/search/search.js');
require('codemirror/addon/search/searchcursor.js');
require('codemirror/addon/search/jump-to-line.js');
require('codemirror/addon/dialog/dialog.js');
require('codemirror/addon/lint/lint.js');
require('codemirror/addon/lint/json-lint.js');
require('codemirror/addon/lint/yaml-lint.js');
require('codemirror/addon/display/placeholder.js');

(<any>window).resolveUrl = function (url) {
  return url.startsWith('http') ? url : (<any>window).location.origin + url;
};

require('api-console/dist/scripts/api-console.js');

require('angular-material-icons');
require('angular-material-data-table');
require('angular-cookies');
require('angular-messages');

require('dragular');
require('v-accordion');

require('angular-schema-form');
require('../libraries/angular-schema-form/boostrap-decorator');
require('../libraries/angular-schema-form/codemirror-decorator');
require('../libraries/angular-ui-codemirror/ui-codemirror');

require('swagger-ui-dist');
require('../libraries/showdown-extension/DocHelper-extension.js');

require('ngclipboard');
require('angular-ui-validate');
require('read-more/js/directives/readmore.js');
require('angular-timeline');
require('angular-utf8-base64');
require('ng-file-upload');
require('md-steppers');
require('angular-ui-tree');
require('angular-jwt');
require('ng-showdown');
require('showdown-prettify');
require('showdown-highlightjs-extension');

require('angular-gridster');
require('angular-scroll');
require('diff/dist/diff.min.js');
require('angular-loading-bar');
require('angular-loading-bar/build/loading-bar.css');

// Highcharts

const Highcharts = require('highcharts');
const HighchartsMore = require('../../node_modules/highcharts/js/highcharts-more.js');
const SolidGauge = require('../../node_modules/highcharts/js/modules/solid-gauge.js');
const NoDataToDisplay = require('../../node_modules/highcharts/js/modules/no-data-to-display.js');

HighchartsMore(Highcharts);
SolidGauge(Highcharts);
NoDataToDisplay(Highcharts);

import * as jsyaml from 'js-yaml';

(<any>window).jsyaml = jsyaml;

import * as moment from 'moment';

import FormDirective from '../components/form/form.directive';
import AutofocusDirective from '../components/autofocus/autofocus.directive';
import ApiService from '../services/api.service';
import ApisController from '../management/api/apis.controller';
import ApiPortalController from '../management/api/portal/general/apiPortal.controller';
import ApiAdminController from '../management/api/apiAdmin.controller';
import ApiAnalyticsController from '../management/api/analytics/overview/analytics.controller';
import ApiMembersController from '../management/api/portal/userGroupAccess/members/members.controller';
import ApiTransferOwnershipController from '../management/api/portal/userGroupAccess/transferOwnership/transferOwnership.controller';
import ApiPoliciesController from '../management/api/design/policies/policies.controller';
import ApiEndpointController from '../management/api/proxy/backend/endpoint/endpointConfiguration.controller';
import ApiEndpointGroupController from '../management/api/proxy/backend/endpoint/group.controller';
import AddPoliciesPathController from '../management/api/design/policies/addPoliciesPath.controller';
import ApiResourcesController from '../management/api/design/resources/resources.controller';
import NewApiController from '../management/api/creation/newApi.controller';
import ApiPropertiesController from '../management/api/design/properties/properties.controller';
import ApiEventsController from '../management/api/audit/events/apiEvents.controller';
import ApiHistoryController from '../management/api/audit/history/apiHistory.controller';
import DialogAddPropertyController from '../management/api/design/properties/add-property.dialog.controller';
import DialogAddMemberApiController from '../management/api/portal/userGroupAccess/members/addMemberDialog.controller';
import DialogTransferApiController from '../management/api/portal/userGroupAccess/transferOwnership/transferAPIDialog.controller';
import DialogApiKeyExpirationController from '../management/api/portal/subscriptions/apikey.expiration.dialog.controller';
import DialogEditPolicyController from '../management/api/design/policies/dialog/policyDialog.controller';
import DocumentationDirective from '../management/api/portal/documentation/pages/apiDocumentation.directive';
import DocumentationController from '../management/api/portal/documentation/pages/apiDocumentation.controller';
import DocumentationService from '../services/apiDocumentation.service';
import NotificationService from '../services/notification.service';

import PageController from '../management/api/portal/documentation/pages/page/apiPage.controller';
import PolicyService from '../services/policy.service';
import ResourceService from '../services/resource.service';
import FetcherService from '../services/fetcher.service';
import LoginController from '../user/login/login.controller';
import DiffDirective from '../components/diff/diff.directive';
import DialogApiImportController from '../management/api/portal/general/dialog/apiImportDialog.controller';
import DialogApiExportController from '../management/api/portal/general/dialog/apiExportDialog.controller';

// Sidenav
import SidenavService from '../components/sidenav/sidenav.service';
import {SidenavComponent} from '../components/sidenav/sidenav.component';
import {SubmenuComponent} from '../components/sidenav/submenu.component';

//Api
import ApiHeaderComponent from '../management/api/header/api-header.component';
import ApiCreationComponent from '../management/api/creation/steps/api-creation.component';
import ApiCreationController from '../management/api/creation/steps/api-creation.controller';
import ApiCreationStep1Component from '../management/api/creation/steps/api-creation-step1.component';
import ApiCreationStep2Component from '../management/api/creation/steps/api-creation-step2.component';
import ApiCreationStep3Component from '../management/api/creation/steps/api-creation-step3.component';
import ApiCreationStep4Component from '../management/api/creation/steps/api-creation-step4.component';
import ApiCreationStep5Component from '../management/api/creation/steps/api-creation-step5.component';

// API Plan
import ApiPlanComponent from '../management/api/api-plan.component';
import ApiEditPlanController from '../management/api/portal/plans/plan/edit-plan.controller';
import ApiEditPlanComponent from '../management/api/portal/plans/plan/edit-plan.component';
import ApiListPlansComponent from '../management/api/portal/plans/list-plans.component';
import ApiListPlansController from '../management/api/portal/plans/list-plans.controller';
import ApiEditPlanWizardGeneralComponent from '../management/api/portal/plans/plan/plan-wizard-general.component';
import ApiEditPlanWizardSecurityComponent from '../management/api/portal/plans/plan/plan-wizard-security.component';
import ApiEditPlanWizardPoliciesComponent from '../management/api/portal/plans/plan/plan-wizard-policies.component';

// API Subscription
import ApiSubscriptionsComponent from '../management/api/portal/subscriptions/subscriptions.component';
import ApiSubscriptionComponent from '../management/api/portal/subscriptions/subscription.component';

// Applications
import ApplicationService from '../services/applications.service';
import ApplicationsComponent from './application/applications.component';
import ApplicationsController from './application/applications.controller';
import CreateApplicationsComponent from './application/create-application.component';
import ApplicationComponent from './application/details/application.component';
import ApplicationHeaderComponent from './application/details/header/application-header.component';
import ApplicationGeneralController from './application/details/general/application-general.controller';
import ApplicationGeneralComponent from './application/details/general/application-general.component';
import ApplicationMembersController from './application/details/members/application-members.controller';
import ApplicationMembersComponent from './application/details/members/application-members.component';
import ApplicationSubscriptionsController from './application/details/subscriptions/application-subscriptions.controller';
import ApplicationSubscriptionsComponent from './application/details/subscriptions/application-subscriptions.component';
import ApplicationSubscriptionComponent from './application/details/subscriptions/application-subscription.component';
import ApplicationAnalyticsController from './application/details/analytics/application-analytics.controller';
import ApplicationAnalyticsComponent from './application/details/analytics/application-analytics.component';
import ApplicationLogsController from './application/details/logs/application-logs.controller';
import ApplicationLogsComponent from './application/details/logs/application-logs.component';
import ApplicationLogComponent from './application/details/logs/application-log.component';
import DialogAddMemberController from './application/details/members/addMemberDialog.controller';
import DialogTransferApplicationController from './application/details/members/transferApplicationDialog.controller';

// Instances
import InstancesService from '../services/instances.service';
import InstancesController from '../management/instances/instances.controller';
import InstanceHeaderComponent from '../management/instances/details/header/instance-header.component';
import InstanceEnvironmentController from '../management/instances/details/environment/instance-environment.controller';
import InstanceEnvironmentComponent from '../management/instances/details/environment/instance-environment.component';
import InstanceMonitoringComponent from '../management/instances/details/monitoring/instance-monitoring.component';
import InstanceMonitoringController from '../management/instances/details/monitoring/instance-monitoring.controller';
import InstancesComponent from '../management/instances/instances.component';
import InstanceComponent from '../management/instances/details/instance.component';

// Analytics / widgets
import WidgetComponent from '../components/widget/widget.component';
import WidgetDataTableComponent from '../components/widget/widget-data-table.component';
import WidgetChartLineComponent from '../components/widget/widget-chart-line.component';
import WidgetChartPieComponent from '../components/widget/widget-chart-pie.component';
import DashboardComponent from '../components/dashboard/dashboard.component';
import DashboardFilterComponent from '../components/dashboard/dashboard-filter.component';
import DashboardFilterController from '../components/dashboard/dashboard-filter.controller';
import DashboardTimeframeComponent from '../components/dashboard/dashboard-timeframe.component';
import DashboardTimeframeController from '../components/dashboard/dashboard-timeframe.controller';
import ContextualDocComponent from '../components/contextual/contextual-doc.component';
import ContextualDocController from '../components/contextual/contextual-doc.controller';

// Logs
import ApiLogsController from '../management/api/analytics/logs/logs.controller';
import LogsTimeframeComponent from '../management/api/analytics/logs/components/logs-timeframe.component';
import LogsTimeframeController from '../management/api/analytics/logs/components/logs-timeframe.controller';
import LogComponent from '../management/api/analytics/logs/log.component';
import LogsFiltersComponent from '../management/api/analytics/logs/components/logs-filters.component';
import LogsFiltersController from '../management/api/analytics/logs/components/logs-filters.controller';

// Others
import ImageDirective from '../components/image/image.directive';
import EventsService from '../services/events.service';
import AnalyticsService from '../services/analytics.service';
import DashboardController from '../management/platform/dashboard/dashboard.controller';
import ViewsController from '../management/configuration/views/views.controller';
import ViewController from './configuration/views/view/view.controller';
import ViewService from '../services/view.service';
import DeleteViewDialogController from '../management/configuration/views/delete.view.dialog.controller';
import DeleteAPIViewDialogController from './configuration/views/view/delete-api-view.dialog.controller';
import DialogAddGroupController from '../management/configuration/groups/add-group.dialog.controller';
import DialogAddGroupMemberController from '../management/configuration/group/addMemberDialog.controller';
import RegistrationController from '../user/registration/registration.controller';
import ConfirmController from '../user/registration/confirm/confirm.controller';
import ResetPasswordController from '../user/resetPassword/resetPassword.controller';
import SubscriptionService from '../services/subscription.service';
import DialogSubscriptionRejectController from '../management/api/portal/subscriptions/subscription.reject.dialog.controller';
import DialogSubscriptionAcceptController from '../management/api/portal/subscriptions/subscription.accept.dialog.controller';
import DialogSubscriptionCreateController from '../management/api/portal/subscriptions/subscription.create.dialog.controller';
import EmptyStateDirective from '../components/emptystate/emptystate.directive';
import DialogClosePlanController from '../management/api/portal/plans/closePlanDialog.controller';
import DialogPublishPlanController from '../management/api/portal/plans/publishPlanDialog.controller';
import TagsController from '../management/configuration/tags/tags.controller';
import TagService from '../services/tag.service';
import MetadataController from '../management/configuration/metadata/metadata.controller';
import MetadataService from '../services/metadata.service';
import DeleteTagDialogController from '../management/configuration/tags/delete.tag.dialog.controller';
import DeleteMetadataDialogController from '../management/configuration/metadata/dialog/delete.metadata.dialog.controller';
import NewMetadataDialogController from '../management/configuration/metadata/dialog/new.metadata.dialog.controller';
import UpdateMetadataDialogController from '../management/configuration/metadata/dialog/update.metadata.dialog.controller';
import ChartDirective from '../components/chart/chart.directive';
import UserAvatarDirective from '../components/avatar/user-avatar.directive';
import DialogConfirmController from '../components/dialog/confirmDialog.controller';
import DialogDynamicProviderHttpController from '../management/api/design/properties/dynamic-provider-http-dialog.controller';
import TenantsController from '../management/configuration/tenants/tenants.controller';
import TenantService from '../services/tenant.service';
import DeleteTenantDialogController from '../management/configuration/tenants/delete.tenant.dialog.controller';

import ViewsComponent from '../management/configuration/views/views.component';
import ViewComponent from './configuration/views/view/view.component';
import TenantsComponent from '../management/configuration/tenants/tenants.component';
import TagsComponent from '../management/configuration/tags/tags.component';
import MetadataComponent from '../management/configuration/metadata/metadata.component';
import MetadataValidatorDirective from '../components/metadata/metadata.validator.directive';

import ApiMetadataController from '../management/api/portal/documentation/metadata/apiMetadata.controller';
import ApiMetadataComponent from '../management/api/portal/documentation/metadata/apiMetadata.component';
import UpdateApiMetadataDialogController from './api/portal/documentation/metadata/dialog/update.api.metadata.dialog.controller';
import DeleteApiMetadataDialogController from './api/portal/documentation/metadata/dialog/delete.api.metadata.dialog.controller';
import NewApiMetadataDialogController from './api/portal/documentation/metadata/dialog/new.api.metadata.dialog.controller';

import PortalPagesComponent from '../management/configuration/pages/portalPages.component';
import PortalPagesController from '../management/configuration/pages/portalPages.controller';
import NewPageController from '../management/configuration/pages/page/newPage.controller';
import PortalPagesService from '../services/portalPages.service';

import RoleComponent from './configuration/roles/role/role.components';
import RoleMembersComponent from './configuration/roles/role/role.members.component';
import RolesComponent from '../management/configuration/roles/roles.component';
import RoleService from '../services/role.service';
import DialogAddUserRoleController from '../management/configuration/roles/role/add.user.dialog.controller';

import applicationRouterConfig from './application/applications.route';
import apisRouterConfig from './api/apis.route';
import apisAnalyticsRouterConfig from './api/analytics/apis.analytics.route';
import apisAuditRouterConfig from './api/audit/apis.audit.route';
import apisDesignRouterConfig from './api/design/apis.design.route';
import apisProxyRouterConfig from './api/proxy/apis.proxy.route';
import apisPortalRouterConfig from './api/portal/apis.portal.route';
import apisNotificationsRouterConfig from './api/notifications/apis.notifications.route';
import configurationRouterConfig from './configuration/configuration.route';

// User
import UserService from '../services/user.service';
import UserController from '../user/user.controller';
import UserComponent from '../user/user.component';
import {submenuFilter} from '../components/sidenav/submenu.filter';

// User Tasks
import TasksComponent from '../management/tasks/tasks.component';
import TaskService from "../services/task.service";

// Portal notifications
import PortalNotificationsComponent from './portalnotifications/portalnotifications.component';
import UserNotificationService from "../services/userNotification.service";

// Notification Settings
import NotificationSettingsComponent from '../components/notificationsettings/notificationsettings.component';
import NotificationSettingsService from "../services/notificationSettings.service";

// Documentation
import PageComponent from '../components/documentation/page.component';
import PageSwaggerComponent from '../components/documentation/page-swagger.component';
import PageRamlComponent from '../components/documentation/page-raml.component';
import PageMarkdownComponent from '../components/documentation/page-markdown.component';
import PageSidenavDirective from '../components/documentation/page-sidenav.directive';

// Healthcheck
import ApiHealthCheckConfigureController from '../management/api/proxy/backend/healthcheck/healthcheck-configure.controller';
import DialogAssertionInformationController from '../management/api/proxy/backend/healthcheck/healthcheck-assertion-dialog.controller';
import ApiHealthCheckController from '../management/api/proxy/backend/healthcheck/healthcheck.controller';
import ProgressBarComponent from '../components/progressbar/progress-bar.component';
import ApiHealthCheckLogController from '../management/api/proxy/backend/healthcheck/healthcheck-log.controller';

// Ticket
import TicketService from '../services/ticket.service';
import SupportTicketController from '../support/ticket.controller';

// Audit
import AuditService from '../services/audit.service';
import AuditController from '../management/audit/audit.controller';
import ApiAuditController from '../management/api/audit/general/audit.controller';
import AuditComponent from '../components/audit/audit.component';

// Configuration
import SettingsComponent from '../management/configuration/settings.component';
import PortalConfigService from '../services/portalConfig.service';

// Users
import UsersComponent from '../management/configuration/users/users.component';
import UserDetailComponent from '../management/configuration/user/userdetail.component';
import DialogAddUserGroupController from '../management/configuration/user/dialog/addusergroup.dialog.controller';

// Groups
import GroupsComponent from '../management/configuration/groups/groups.component';
import GroupComponent from '../management/configuration/group/group.component';
import GroupService from '../services/group.service';

// Others
import StringService from '../services/string.service';
import AuthenticationService from '../services/authentication.service';

import config from './management.config';
import routerConfig from '../index.route';
import managementRouterConfig from './management.route';
import interceptorConfig from './management.interceptor';
import delegatorConfig from './management.delegator';
import runBlock from './management.run';

import uiRouter from 'angular-ui-router';
import {permission, uiPermission} from 'angular-permission';
import ApiHeaderController from './api/header/api-header.controller';

import ChartService from '../services/chart.service';

import ngInfiniteScroll = require('ng-infinite-scroll');
import DialogAddNotificationSettingsController from "../components/notificationsettings/addnotificationsettings.dialog.controller";

import TopApisController from "./configuration/top-apis/top-apis.controller";
import TopApiService from "../services/top-api.service";
import TopApisComponent from '../management/configuration/top-apis/top-apis.component';
import AddTopApiDialogController from '../management/configuration/top-apis/dialog/add.top-api.dialog.controller';
import DeleteTopApiDialogController from '../management/configuration/top-apis/dialog/delete.top-api.dialog.controller';
import ApiProxyController from "./api/proxy/apiProxy.controller";
import PortalSettingsComponent from "./configuration/portal/portal.component";

angular.module('gravitee-management', [uiRouter, permission, uiPermission, 'ngMaterial', 'ramlConsoleApp', 'ng-showdown',
  'ngMdIcons', 'ui.codemirror', 'md.data.table', 'ngCookies', 'dragularModule', 'readMore',
  'ngMessages', 'vAccordion', 'schemaForm', 'ngclipboard', 'ui.validate', 'angular-timeline',
  'utf8-base64', 'ngFileUpload', 'md-steppers', 'ui.tree', 'angular-jwt', 'gridster', 'angular-loading-bar',
  'ngAnimate', 'LocalStorageModule', 'satellizer', ngInfiniteScroll])
  .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])
  .config((localStorageServiceProvider: angular.local.storage.ILocalStorageServiceProvider) => {
    'ngInject';
    localStorageServiceProvider.setPrefix('gravitee');
  })
  .config(config)
  .config(routerConfig)
  .config(managementRouterConfig)
  .config(applicationRouterConfig)
  .config(apisRouterConfig)
  .config(apisPortalRouterConfig)
  .config(apisProxyRouterConfig)
  .config(apisDesignRouterConfig)
  .config(apisAnalyticsRouterConfig)
  .config(apisAuditRouterConfig)
  .config(apisNotificationsRouterConfig)
  .config(configurationRouterConfig)
  .config(interceptorConfig)
  .config(delegatorConfig)
  .config(function ($mdThemingProvider: angular.material.IThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('blue');

    $mdThemingProvider.theme('sidenav')
      .backgroundPalette('grey', {
        'default': '50'
      });

    $mdThemingProvider.theme('toast-success');
    $mdThemingProvider.theme('toast-error');
  })
  .config(function ($showdownProvider) {
    $showdownProvider.setOption('tables', true);
    $showdownProvider.loadExtension('highlightjs');
    $showdownProvider.loadExtension('prettify');
    $showdownProvider.loadExtension('docHelper');
  })
  .run(runBlock)
  .controller('ApisController', ApisController)
  .controller('ApiAdminController', ApiAdminController)
  .controller('ApiHeaderController', ApiHeaderController)
  .controller('ApiAnalyticsController', ApiAnalyticsController)
  .controller('ApiPoliciesController', ApiPoliciesController)
  .controller('AddPoliciesPathController', AddPoliciesPathController)
  .controller('ApiMembersController', ApiMembersController)
  .controller('ApiTransferOwnershipController', ApiTransferOwnershipController)
  .controller('ApiPortalController', ApiPortalController)
  .controller('ApiProxyController', ApiProxyController)
  .controller('ApiHealthCheckController', ApiHealthCheckController)
  .controller('ApiEndpointController', ApiEndpointController)
  .controller('ApiEndpointGroupController', ApiEndpointGroupController)
  .controller('DialogAssertionInformationController', DialogAssertionInformationController)
  .controller('ApiPropertiesController', ApiPropertiesController)
  .controller('ApiEventsController', ApiEventsController)
  .controller('ApiHistoryController', ApiHistoryController)
  .controller('ApiResourcesController', ApiResourcesController)
  .controller('NewApiController', NewApiController)
  .controller('DialogAddPropertyController', DialogAddPropertyController)
  .controller('DialogAddMemberApiController', DialogAddMemberApiController)
  .controller('DialogTransferApiController', DialogTransferApiController)
  .controller('DialogApiKeyExpirationController', DialogApiKeyExpirationController)
  .controller('UserController', UserController)
  .controller('DocumentationController', DocumentationController)
  .controller('DialogApiImportController', DialogApiImportController)
  .controller('DialogApiExportController', DialogApiExportController)
  .controller('DialogEditPolicyController', DialogEditPolicyController)
  .controller('PageController', PageController)
  .controller('LoginController', LoginController)
  .controller('InstancesController', InstancesController)
  .controller('InstanceEnvironmentController', InstanceEnvironmentController)
  .controller('InstanceMonitoringController', InstanceMonitoringController)
  .controller('DashboardController', DashboardController)
  .controller('ViewsController', ViewsController)
  .controller('ViewController', ViewController)
  .controller('TenantsController', TenantsController)
  .controller('DeleteViewDialogController', DeleteViewDialogController)
  .controller('DeleteAPIViewDialogController', DeleteAPIViewDialogController)
  .controller('DeleteTenantDialogController', DeleteTenantDialogController)
  .component('groups', GroupsComponent)
  .component('group', GroupComponent)
  .controller('DialogAddGroupController', DialogAddGroupController)
  .controller('DialogAddGroupMemberController', DialogAddGroupMemberController)
  .controller('RegistrationController', RegistrationController)
  .controller('ConfirmController', ConfirmController)
  .controller('ResetPasswordController', ResetPasswordController)
  .controller('DialogSubscriptionRejectController', DialogSubscriptionRejectController)
  .controller('DialogSubscriptionAcceptController', DialogSubscriptionAcceptController)
  .controller('DialogSubscriptionCreateController', DialogSubscriptionCreateController)
  .controller('DialogClosePlanController', DialogClosePlanController)
  .controller('DialogPublishPlanController', DialogPublishPlanController)
  .controller('TagsController', TagsController)
  .controller('MetadataController', MetadataController)
  .controller('ApiMetadataController', ApiMetadataController)
  .controller('DeleteTagDialogController', DeleteTagDialogController)
  .controller('DeleteMetadataDialogController', DeleteMetadataDialogController)
  .controller('NewMetadataDialogController', NewMetadataDialogController)
  .controller('UpdateMetadataDialogController', UpdateMetadataDialogController)
  .controller('NewApiMetadataDialogController', NewApiMetadataDialogController)
  .controller('UpdateApiMetadataDialogController', UpdateApiMetadataDialogController)
  .controller('DeleteApiMetadataDialogController', DeleteApiMetadataDialogController)
  .controller('DialogConfirmController', DialogConfirmController)
  .controller('DialogDynamicProviderHttpController', DialogDynamicProviderHttpController)
  .controller('DialogAddUserRoleController', DialogAddUserRoleController)
  .controller('PortalPagesController', PortalPagesController)
  .controller('NewPageController', NewPageController)
  .controller('SupportTicketController', SupportTicketController)
  .controller('AuditController', AuditController)
  .controller('ApiAuditController', ApiAuditController)
  .controller('TopApisController', TopApisController)
  .controller('AddTopApiDialogController', AddTopApiDialogController)
  .controller('DeleteTopApiDialogController', DeleteTopApiDialogController)
  .service('ApplicationService', ApplicationService)
  .service('ApiService', ApiService)
  .service('DocumentationService', DocumentationService)
  .service('InstancesService', InstancesService)
  .service('NotificationService', NotificationService)
  .service('PolicyService', PolicyService)
  .service('UserService', UserService)
  .service('ResourceService', ResourceService)
  .service('FetcherService', FetcherService)
  .service('EventsService', EventsService)
  .service('AnalyticsService', AnalyticsService)
  .service('ViewService', ViewService)
  .service('GroupService', GroupService)
  .service('SubscriptionService', SubscriptionService)
  .service('TagService', TagService)
  .service('MetadataService', MetadataService)
  .service('TenantService', TenantService)
  .service('PortalPagesService', PortalPagesService)
  .service('StringService', StringService)
  .service('AuthenticationService', AuthenticationService)
  .service('RoleService', RoleService)
  .service('TicketService', TicketService)
  .service('AuditService', AuditService)
  .service('ChartService', ChartService)
  .service('TopApiService', TopApiService)
  .directive('filecontent', () => DocumentationDirective)
  .directive('noDirtyCheck', () => new FormDirective())
  .directive('autofocus', () => new AutofocusDirective())
  .directive('graviteeDiff', () => DiffDirective)
  .directive('graviteeImage', () => new ImageDirective())
  .directive('graviteeEmptyState', () => new EmptyStateDirective())
  .directive('graviteeChart', () => new ChartDirective())
  .directive('graviteeUserAvatar', () => new UserAvatarDirective())

  .component('gvWidget', WidgetComponent)
  .component('gvWidgetDataTable', WidgetDataTableComponent)
  .component('gvWidgetChartPie', WidgetChartPieComponent)
  .component('gvWidgetChartLine', WidgetChartLineComponent)

  .component('views', ViewsComponent)
  .component('view', ViewComponent)
  .component('tenants', TenantsComponent)
  .component('tags', TagsComponent)
  .component('portalPages', PortalPagesComponent)
  .component('metadata', MetadataComponent)
  .component('roles', RolesComponent)
  .component('role', RoleComponent)
  .component('roleMembers', RoleMembersComponent)
  .component('topApis', TopApisComponent)
  .component('portalSettings', PortalSettingsComponent)
  .directive('gvMetadataValidator', () => MetadataValidatorDirective)

  .component('instances', InstancesComponent)
  .component('instance', InstanceComponent)
  .component('instanceHeader', InstanceHeaderComponent)
  .component('instanceEnvironment', InstanceEnvironmentComponent)
  .component('instanceMonitoring', InstanceMonitoringComponent)

  .component('apiHeader', ApiHeaderComponent)
  .component('apiCreation', ApiCreationComponent)
  .controller('ApiCreationController', ApiCreationController)
  .component('apiCreationStep1', ApiCreationStep1Component)
  .component('apiCreationStep2', ApiCreationStep2Component)
  .component('apiCreationStep3', ApiCreationStep3Component)
  .component('apiCreationStep4', ApiCreationStep4Component)
  .component('apiCreationStep5', ApiCreationStep5Component)
  .component('apiMetadata', ApiMetadataComponent)
  .component('gvDashboard', DashboardComponent)
  .component('gvDashboardFilter', DashboardFilterComponent)
  .controller('DashboardFilterController', DashboardFilterController)
  .component('gvDashboardTimeframe', DashboardTimeframeComponent)
  .controller('DashboardTimeframeController', DashboardTimeframeController)

  // Plan
  .component('apiPlan', ApiPlanComponent)
  .component('editPlan', ApiEditPlanComponent)
  .controller('ApiEditPlanController', ApiEditPlanController)
  .component('listPlans', ApiListPlansComponent)
  .controller('ApiListPlansController', ApiListPlansController)
  .component('planWizardGeneral', ApiEditPlanWizardGeneralComponent)
  .component('planWizardSecurity', ApiEditPlanWizardSecurityComponent)
  .component('planWizardPolicies', ApiEditPlanWizardPoliciesComponent)

  // API subscriptions
  .component('apiSubscriptions', ApiSubscriptionsComponent)
  .component('apiSubscription', ApiSubscriptionComponent)

  .component('applications', ApplicationsComponent)
  .component('application', ApplicationComponent)
  .component('createApplication', CreateApplicationsComponent)
  .component('applicationHeader', ApplicationHeaderComponent)
  .component('applicationGeneral', ApplicationGeneralComponent)
  .component('applicationSubscriptions', ApplicationSubscriptionsComponent)
  .component('applicationSubscription', ApplicationSubscriptionComponent)
  .component('applicationMembers', ApplicationMembersComponent)
  .component('applicationAnalytics', ApplicationAnalyticsComponent)
  .component('applicationLogs', ApplicationLogsComponent)
  .component('applicationLog', ApplicationLogComponent)
  .controller('DialogAddMemberController', DialogAddMemberController)
  .controller('ApplicationsController', ApplicationsController)
  .controller('ApplicationGeneralController', ApplicationGeneralController)
  .controller('ApplicationMembersController', ApplicationMembersController)
  .controller('ApplicationSubscriptionsController', ApplicationSubscriptionsController)
  .controller('ApplicationAnalyticsController', ApplicationAnalyticsController)
  .controller('ApplicationLogsController', ApplicationLogsController)
  .controller('DialogTransferApplicationController', DialogTransferApplicationController)

  .component('user', UserComponent)

  .component('tasks', TasksComponent)
  .service('TaskService', TaskService)

  .component('portalNotifications', PortalNotificationsComponent)
  .service('UserNotificationService', UserNotificationService)
  .service('NotificationSettingsService', NotificationSettingsService)
  .controller('DialogAddNotificationSettingsController', DialogAddNotificationSettingsController)
  .component('notificationSettingsComponent', NotificationSettingsComponent)

  .component('gvPage', PageComponent)
  .component('gvPageMarkdown', PageMarkdownComponent)
  .component('gvPageSwagger', PageSwaggerComponent)
  .component('gvPageRaml', PageRamlComponent)
  .directive('gvPageSidenav', () => PageSidenavDirective)

  .component('gvSidenav', SidenavComponent)
  .component('gvSubmenu', SubmenuComponent)

  .filter('currentSubmenus', submenuFilter)
  .service('SidenavService', SidenavService)

  .controller('ApiLogsController', ApiLogsController)
  .component('gvLogsTimeframe', LogsTimeframeComponent)
  .controller('LogsTimeframeController', LogsTimeframeController)
  .component('log', LogComponent)
  .component('gvLogsFilters', LogsFiltersComponent)
  .controller('LogsFiltersController', LogsFiltersController)

  .component("gvAudit", AuditComponent)
  .component('gvContextualDoc', ContextualDocComponent)
  .controller('ContextualDocController', ContextualDocController)

  // Healthcheck
  .controller('ApiHealthCheckConfigureController', ApiHealthCheckConfigureController)
  .controller('ApiHealthCheckLogController', ApiHealthCheckLogController)
  .component('progressBar', ProgressBarComponent)

  // Configuration
  .component('settings', SettingsComponent)
  .service("PortalConfigService", PortalConfigService)

  // Users
  .component('users', UsersComponent)
  .component('userDetail', UserDetailComponent)
  .controller('DialogAddUserGroupController', DialogAddUserGroupController)

  .filter('humanDateFilter', function () {
    return function (input) {
      if (!moment().subtract(1, 'weeks').isAfter(input)) {
        return moment(input).fromNow();
      } else {
        return moment(input).format('ll');
      }
    };
  })
  .filter('humanDatetimeFilter', function () {
    return function (input) {
      if (!moment().subtract(1, 'weeks').isAfter(input)) {
        return moment(input).fromNow();
      } else {
        return moment(input).format('D MMM YYYY HH:mm:ss');
      }
    };
  })
  .filter('apiKeyFilter', function () {
    return function (keys) {
      return keys;
    };
  });
