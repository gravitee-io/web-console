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
import moment = require('moment');
import _ = require('lodash');
import angular = require('angular');

class ApiHealthCheckConfigureController {
  private api: any;
  private healthcheck: any;
  private timeUnits: string[];
  private httpMethods: string[];
  private endpoint: any;

  constructor (
    private ApiService,
    private NotificationService,
    private $mdDialog,
    private $scope,
    private $state,
    private $stateParams,
    private $rootScope
  ) {
    'ngInject';

    this.api = this.$scope.$parent.apiCtrl.api;

    if (this.$stateParams.endpointName !== undefined) {
      // Health-check for specific endpoint
      this.endpoint = _.find(this.api.proxy.endpoints, { 'name': $stateParams.endpointName });
      this.healthcheck = this.endpoint.healthcheck;
    } else {
      this.healthcheck = this.api.services && this.api.services['health-check'];
    }

    this.healthcheck = this.healthcheck || {enabled: true, trigger: {}};
    let inherit = (this.endpoint !== undefined) && (this.healthcheck.inherit || this.healthcheck.inherit === undefined);
    let enabled = this.healthcheck.enabled;

    if (inherit) {
      this.healthcheck = _.cloneDeep((this.api.services && this.api.services['health-check']) || {enabled: true, trigger: {}});
    }

    this.healthcheck.inherit = inherit;
    this.healthcheck.enabled = enabled;

    this.timeUnits = [ 'SECONDS', 'MINUTES', 'HOURS', 'DAYS' ];
    this.httpMethods = [ 'GET', 'POST', 'PUT' ];

    this.initState();
  }

  initState() {
    if (this.healthcheck.steps === undefined) {
      this.healthcheck.steps = [];
    }

    if (this.healthcheck.steps[0] === undefined) {
      this.healthcheck.steps[0] = {
        request: {
          headers: []
        },
        response: {
          assertions: []
        }
      };
    }
  }

  openMenu($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  }

  addHTTPHeader() {
    if (this.healthcheck.steps[0].request.headers === undefined) {
      this.healthcheck.steps[0].request.headers = [];
    }

    this.healthcheck.steps[0].request.headers.push({name: '', value: ''});
  }

  removeHTTPHeader(idx) {
    if (this.healthcheck.steps[0].request.headers !== undefined) {
      this.healthcheck.steps[0].request.headers.splice(idx, 1);
    }
  }

  addAssertion() {
    if (this.healthcheck.steps[0].response === undefined) {
      this.healthcheck.response = {
        assertions: ['']
      };
    } else {
      this.healthcheck.steps[0].response.assertions.push('');
    }
  }

  removeAssertion(idx) {
    if (this.healthcheck.steps[0].response !== undefined) {
      this.healthcheck.steps[0].response.assertions.splice(idx, 1);
    }
  }

  buildTrigger() {
    let trigger = "Health-check is running each ";

    trigger += this.healthcheck.trigger.rate|| "{rate}";
    trigger += " " + (this.healthcheck.trigger.unit|| "{unit}");

    return trigger;
  }

  buildRequest() {
    let request = "";

    request += this.healthcheck.steps[0].request.method|| "{method}";
    request += " " + ((this.endpoint) ? this.endpoint.target : "{endpoint}");
    request += this.healthcheck.steps[0].request.path ||  "{path}";

    return request;
  }

  showAssertionInformation() {
    this.$mdDialog.show({
        controller: 'DialogAssertionInformationController',
        controllerAs: 'ctrl',
        template: require('./assertion.dialog.html'),
        parent: angular.element(document.body),
        clickOutsideToClose:true
      });
  }

  backToEndpointConfiguration() {
    this.$state.go('management.apis.detail.general.endpoint', {endpointName: this.endpoint.name});
  }

  backToHealthcheck() {
    this.$state.go('management.apis.detail.healthcheck.visualize');
  }

  update() {
    if (this.endpoint !== undefined) {
      this.endpoint['healthcheck'] = this.healthcheck;
    } else {
      this.api.services['health-check'] = this.healthcheck;
    }
    this.ApiService.update(this.api).then((updatedApi) => {
      this.api = updatedApi.data;
      this.$scope.formApiHealthCheckTrigger.$setPristine();
      this.$scope.formApiHealthCheckRequest.$setPristine();
      this.$scope.formApiHealthCheckResponse.$setPristine();
      this.$rootScope.$broadcast('apiChangeSuccess', {api: this.api});

      if (this.endpoint !== undefined) {
        this.NotificationService.show('Health-check configuration for endpoint [' + this.endpoint.name+ '] has been updated');
      } else {
        this.NotificationService.show('Global health-check configuration  has been updated');
      }
    });
  }
}

export default ApiHealthCheckConfigureController;
