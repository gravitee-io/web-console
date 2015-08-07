/**
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
package io.gravitee.repository.api;

import io.gravitee.repository.model.Api;

import java.util.Optional;
import java.util.Set;

/**
 * @author David BRASSELY (brasseld at gmail.com)
 */
public interface ApiRepository {

    Optional<Api> findByName(String apiName);

    Set<Api> findAll();

    Set<Api> findByTeam(String teamName);

    Set<Api> findByUser(String username);

    Api create(Api api);

    Api update(Api api);

    void delete(String apiName);

    int countByUser(String username);

    int countByTeam(String teamName);
}
