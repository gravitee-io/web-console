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
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'org-settings-identity-provider',
  styles: [require('./org-settings-identity-provider.component.scss')],
  template: require('./org-settings-identity-provider.component.html'),
})
export class OrgSettingsIdentityProviderComponent implements OnInit {
  identityProviderSettings: FormGroup;

  ngOnInit() {
    this.identityProviderSettings = new FormGroup({
      type: new FormControl('GRAVITEEIO_AM'),
      enabled: new FormControl(),
      name: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
      description: new FormControl(),
      tokenExchangeEndpoint: new FormControl(),
      emailRequired: new FormControl(),
      syncMappings: new FormControl(),
    });
  }
}
