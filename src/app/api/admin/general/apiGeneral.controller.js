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
class ApiAdminController {
  constructor(ApiService, NotificationService, UserService, $scope, $mdDialog, $mdEditDialog, $rootScope, resolvedApi,
              base64, $state, ViewService, GroupService, TagService) {
    'ngInject';

    if ('apis.admin.general' === $state.current.name) {
      $state.go('apis.admin.general.main');
    }

    this.ApiService = ApiService;
    this.NotificationService = NotificationService;
    this.UserService = UserService;
    this.GroupService = GroupService;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$mdEditDialog = $mdEditDialog;
    this.$mdDialog = $mdDialog;
    this.initialApi = _.cloneDeep(resolvedApi.data);
    this.api = resolvedApi.data;
    this.$scope.selected = [];
    this.base64 = base64;
    this.$state = $state;
    if (!this.api.group) {
      this.api.group = GroupService.getEmptyGroup();
    }
    this.groups = [this.api.group];

    this.$scope.lbs = [
      {
        name: 'Round-Robin',
        value: 'ROUND_ROBIN'
      }, {
        name: 'Random',
        value: 'RANDOM'
      }, {
        name: 'Weighted Round-Robin',
        value: 'WEIGHTED_ROUND_ROBIN'
      }, {
        name: 'Weighted Random',
        value: 'WEIGHTED_RANDOM'
      }];

    this.initState();

    var that = this;
    ViewService.list().then(function(response) {
      that.views = response.data;
    });
    TagService.list().then(function(response) {
      that.tags = response.data;
    });
  }

  toggleVisibility() {
    if( this.api.visibility === "public") {
      this.api.visibility = "private";
    } else {
      this.api.visibility = "public";
    }
    this.$scope.formApi.$setDirty();
  }

  initState() {
    this.$scope.apiEnabled = (this.$scope.$parent.apiCtrl.api.state === 'started');

    // Failover
    this.failoverEnabled = (this.api.proxy.failover !== undefined);

    // Context-path editable
    this.contextPathEditable = (this.api.permission === 'primary_owner') || this.UserService.isUserInRoles(['ADMIN']);

    var self = this;
    this.$scope.$on("apiChangeSucceed", function () {
      self.initialApi = _.cloneDeep(self.$scope.$parent.apiCtrl.api);
      self.api = self.$scope.$parent.apiCtrl.api;
    });
  }

  loadApplicationGroups() {
    this.GroupService.list("API").then((groups) => {
      this.groups = _.union(
        [this.GroupService.getEmptyGroup()],
        groups.data);
    });
  }

  changeLifecycle(id) {
    var started = this.api.state === 'started';
    let that = this;
    this.$mdDialog.show({
      controller: 'DialogConfirmController',
      controllerAs: 'ctrl',
      templateUrl: 'app/components/dialog/confirmWarning.dialog.html',
      clickOutsideToClose: true,
      title: 'Are you sure you want to ' + (started ? 'stop' : 'start') + ' the API ?',
      msg: "",
      confirmButton: (started ? 'stop' : 'start')
    }).then(function (response) {
      if (response) {
        if (started) {
          that.ApiService.stop(id).then(function () {
            that.api.state = 'stopped';
            that.$scope.apiEnabled = false;
            that.NotificationService.show('API ' + that.initialApi.name + ' has been stopped!');
          });
        } else {
          that.ApiService.start(id).then(function () {
            that.api.state = 'started';
            that.$scope.apiEnabled = true;
            that.NotificationService.show('API ' + that.initialApi.name + ' has been started!');
          });
        }
      }
    }).catch(function () {
      that.initState();
    });
  }

  editWeight(event, endpoint) {
    event.stopPropagation(); // in case autoselect is enabled
    var _that = this;

    var editDialog = {
      modelValue: endpoint.weight,
      placeholder: 'Weight',
      save: function (input) {
        endpoint.weight = input.$modelValue;
        _that.$scope.formApi.$setDirty();
      },
      targetEvent: event,
      title: 'Endpoint weight',
      type: 'number',
      validators: {
        'ng-required': 'true',
        'min': 1,
        'max': 99
      }
    };

    var promise = this.$mdEditDialog.large(editDialog);
    promise.then(function (ctrl) {
      var input = ctrl.getInput();

      input.$viewChangeListeners.push(function () {
        input.$setValidity('test', input.$modelValue !== 'test');
      });
    });
  }

  removeEndpoints() {
    var _that = this;
    let that = this;
    this.$mdDialog.show({
      controller: 'DialogConfirmController',
      controllerAs: 'ctrl',
      templateUrl: 'app/components/dialog/confirmWarning.dialog.html',
      clickOutsideToClose: true,
      title: 'Are you sure you want to delete endpoint(s) ?',
      msg: "",
      confirmButton: "Delete"
    }).then(function (response) {
      if (response) {
        _(_that.$scope.selected).forEach(function (endpoint) {
          _(_that.api.proxy.endpoints).forEach(function (endpoint2, index, object) {
            if (endpoint2 !== undefined && endpoint2.name === endpoint.name) {
              object.splice(index, 1);
            }
          });
        });

        that.update(that.api);
      }
    });
  }

  reset() {
    this.api = _.cloneDeep(this.initialApi);
    this.$scope.$parent.apiCtrl.api = this.api;
    this.$scope.formApi.$setPristine();
  }

  delete(id) {
    let that = this;
    this.$mdDialog.show({
      controller: 'DialogConfirmController',
      controllerAs: 'ctrl',
      templateUrl: 'app/components/dialog/confirmWarning.dialog.html',
      clickOutsideToClose: true,
      title: 'Are you sure you want to delete \'' + this.api.name + '\' API ?',
      msg: "",
      confirmButton: "Delete"
    }).then(function (response) {
      if (response) {
        that.ApiService.delete(id).then(() => {
          that.NotificationService.show('API \'' + that.initialApi.name + '\' has been removed');
          that.$state.go('apis.list', {}, {reload: true});
        });
      }
    });
  }

  onApiUpdate(updatedApi) {
    this.api = updatedApi;
    this.initState();
    this.$scope.formApi.$setPristine();
    this.$rootScope.$broadcast("apiChangeSuccess");
    this.NotificationService.show('API \'' + this.initialApi.name + '\' saved');
    this.$rootScope.currentResource = this.api.name;
  }

  update(api) {
    if (!this.failoverEnabled) {
      delete api.proxy.failover;
    }

    this.ApiService.update(api).then(updatedApi => {
      this.onApiUpdate(updatedApi.data);
    });
  }

  showImportDialog() {
    var that = this;
    this.$mdDialog.show({
      controller: 'DialogApiImportController',
      controllerAs: 'dialogApiImportCtrl',
      templateUrl: 'app/api/admin/general/dialog/apiImport.dialog.html',
      clickOutsideToClose: true,
      apiId: this.$scope.$parent.apiCtrl.api.id
    }).then(function (response) {
      if (response) {
        that.onApiUpdate(response.data);
      }
    });
  }

  showExportDialog() {
    this.$mdDialog.show({
      controller: 'DialogApiExportController',
      controllerAs: 'dialogApiExportCtrl',
      templateUrl: 'app/api/admin/general/dialog/apiExport.dialog.html',
      clickOutsideToClose: true,
      apiId: this.$scope.$parent.apiCtrl.api.id
    });
  }

}

export default ApiAdminController;
