/**
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

class Context {
    constructor(parent) {
        this.parent = parent;
        this.variables = {};
        this.used = {};
    }

    set(name, loc) {
        if (this.used[name]) {
            return;
        }
        this.variables[name] = loc;
    }

    get(name) {
        const val = this.variables[name];
        if (val) {
            return val;
        }
        if (!this.parent) {
            return;
        }
        return this.parent.get(name);
    }

    remove(name) {
        this.used[name] = true;
        if (this.variables[name]) {
            delete this.variables[name];
        } else if (this.parent) {
            this.parent.remove(name);
        }
    }

    unused() {
        return Object.values(this.variables);
    }
}

module.exports = Context;
