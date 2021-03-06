/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { Injector } from '../di/injector';
import { NgModuleFactory } from '../linker/ng_module_factory';
import { initServicesIfNeeded } from './services';
import { Services } from './types';
import { resolveDefinition } from './util';
export function overrideProvider(override) {
    initServicesIfNeeded();
    return Services.overrideProvider(override);
}
export function overrideComponentView(comp, componentFactory) {
    initServicesIfNeeded();
    return Services.overrideComponentView(comp, componentFactory);
}
export function clearOverrides() {
    initServicesIfNeeded();
    return Services.clearOverrides();
}
// Attention: this function is called as top level function.
// Putting any logic in here will destroy closure tree shaking!
export function createNgModuleFactory(ngModuleType, bootstrapComponents, defFactory) {
    return new NgModuleFactory_(ngModuleType, bootstrapComponents, defFactory);
}
function cloneNgModuleDefinition(def) {
    var providers = Array.from(def.providers);
    var modules = Array.from(def.modules);
    var providersByKey = {};
    for (var key in def.providersByKey) {
        providersByKey[key] = def.providersByKey[key];
    }
    return {
        factory: def.factory,
        isRoot: def.isRoot, providers: providers, modules: modules, providersByKey: providersByKey,
    };
}
var NgModuleFactory_ = /** @class */ (function (_super) {
    tslib_1.__extends(NgModuleFactory_, _super);
    function NgModuleFactory_(moduleType, _bootstrapComponents, _ngModuleDefFactory) {
        var _this = 
        // Attention: this ctor is called as top level function.
        // Putting any logic in here will destroy closure tree shaking!
        _super.call(this) || this;
        _this.moduleType = moduleType;
        _this._bootstrapComponents = _bootstrapComponents;
        _this._ngModuleDefFactory = _ngModuleDefFactory;
        return _this;
    }
    NgModuleFactory_.prototype.create = function (parentInjector) {
        initServicesIfNeeded();
        // Clone the NgModuleDefinition so that any tree shakeable provider definition
        // added to this instance of the NgModuleRef doesn't affect the cached copy.
        // See https://github.com/angular/angular/issues/25018.
        var def = cloneNgModuleDefinition(resolveDefinition(this._ngModuleDefFactory));
        return Services.createNgModuleRef(this.moduleType, parentInjector || Injector.NULL, this._bootstrapComponents, def);
    };
    return NgModuleFactory_;
}(NgModuleFactory));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlwb2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3ZpZXcvZW50cnlwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBQyxlQUFlLEVBQWMsTUFBTSw2QkFBNkIsQ0FBQztBQUd6RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEQsT0FBTyxFQUF1RixRQUFRLEVBQWlCLE1BQU0sU0FBUyxDQUFDO0FBQ3ZJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUV6QyxNQUFNLDJCQUEyQixRQUEwQjtJQUN6RCxvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLE9BQU8sUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFFRCxNQUFNLGdDQUFnQyxJQUFlLEVBQUUsZ0JBQXVDO0lBQzVGLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsT0FBTyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUVELE1BQU07SUFDSixvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLE9BQU8sUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25DLENBQUM7QUFFRCw0REFBNEQ7QUFDNUQsK0RBQStEO0FBQy9ELE1BQU0sZ0NBQ0YsWUFBdUIsRUFBRSxtQkFBZ0MsRUFDekQsVUFBcUM7SUFDdkMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBRUQsaUNBQWlDLEdBQXVCO0lBQ3RELElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLElBQU0sY0FBYyxHQUE4QyxFQUFFLENBQUM7SUFDckUsS0FBSyxJQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsY0FBYyxFQUFFO1FBQ3BDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQy9DO0lBRUQsT0FBTztRQUNMLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztRQUNwQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLFdBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxjQUFjLGdCQUFBO0tBQ3ZELENBQUM7QUFDSixDQUFDO0FBRUQ7SUFBK0IsNENBQW9CO0lBQ2pELDBCQUNvQixVQUFxQixFQUFVLG9CQUFpQyxFQUN4RSxtQkFBOEM7UUFGMUQ7UUFHRSx3REFBd0Q7UUFDeEQsK0RBQStEO1FBQy9ELGlCQUFPLFNBQ1I7UUFMbUIsZ0JBQVUsR0FBVixVQUFVLENBQVc7UUFBVSwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQWE7UUFDeEUseUJBQW1CLEdBQW5CLG1CQUFtQixDQUEyQjs7SUFJMUQsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxjQUE2QjtRQUNsQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3ZCLDhFQUE4RTtRQUM5RSw0RUFBNEU7UUFDNUUsdURBQXVEO1FBQ3ZELElBQU0sR0FBRyxHQUFHLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDakYsT0FBTyxRQUFRLENBQUMsaUJBQWlCLENBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBYyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFsQkQsQ0FBK0IsZUFBZSxHQWtCN0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJy4uL2RpL2luamVjdG9yJztcbmltcG9ydCB7Q29tcG9uZW50RmFjdG9yeX0gZnJvbSAnLi4vbGlua2VyL2NvbXBvbmVudF9mYWN0b3J5JztcbmltcG9ydCB7TmdNb2R1bGVGYWN0b3J5LCBOZ01vZHVsZVJlZn0gZnJvbSAnLi4vbGlua2VyL25nX21vZHVsZV9mYWN0b3J5JztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vdHlwZSc7XG5cbmltcG9ydCB7aW5pdFNlcnZpY2VzSWZOZWVkZWR9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHtOZ01vZHVsZURlZmluaXRpb24sIE5nTW9kdWxlRGVmaW5pdGlvbkZhY3RvcnksIE5nTW9kdWxlUHJvdmlkZXJEZWYsIFByb3ZpZGVyT3ZlcnJpZGUsIFNlcnZpY2VzLCBWaWV3RGVmaW5pdGlvbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3Jlc29sdmVEZWZpbml0aW9ufSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcnJpZGVQcm92aWRlcihvdmVycmlkZTogUHJvdmlkZXJPdmVycmlkZSkge1xuICBpbml0U2VydmljZXNJZk5lZWRlZCgpO1xuICByZXR1cm4gU2VydmljZXMub3ZlcnJpZGVQcm92aWRlcihvdmVycmlkZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVycmlkZUNvbXBvbmVudFZpZXcoY29tcDogVHlwZTxhbnk+LCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PGFueT4pIHtcbiAgaW5pdFNlcnZpY2VzSWZOZWVkZWQoKTtcbiAgcmV0dXJuIFNlcnZpY2VzLm92ZXJyaWRlQ29tcG9uZW50Vmlldyhjb21wLCBjb21wb25lbnRGYWN0b3J5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyT3ZlcnJpZGVzKCkge1xuICBpbml0U2VydmljZXNJZk5lZWRlZCgpO1xuICByZXR1cm4gU2VydmljZXMuY2xlYXJPdmVycmlkZXMoKTtcbn1cblxuLy8gQXR0ZW50aW9uOiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhcyB0b3AgbGV2ZWwgZnVuY3Rpb24uXG4vLyBQdXR0aW5nIGFueSBsb2dpYyBpbiBoZXJlIHdpbGwgZGVzdHJveSBjbG9zdXJlIHRyZWUgc2hha2luZyFcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZ01vZHVsZUZhY3RvcnkoXG4gICAgbmdNb2R1bGVUeXBlOiBUeXBlPGFueT4sIGJvb3RzdHJhcENvbXBvbmVudHM6IFR5cGU8YW55PltdLFxuICAgIGRlZkZhY3Rvcnk6IE5nTW9kdWxlRGVmaW5pdGlvbkZhY3RvcnkpOiBOZ01vZHVsZUZhY3Rvcnk8YW55PiB7XG4gIHJldHVybiBuZXcgTmdNb2R1bGVGYWN0b3J5XyhuZ01vZHVsZVR5cGUsIGJvb3RzdHJhcENvbXBvbmVudHMsIGRlZkZhY3RvcnkpO1xufVxuXG5mdW5jdGlvbiBjbG9uZU5nTW9kdWxlRGVmaW5pdGlvbihkZWY6IE5nTW9kdWxlRGVmaW5pdGlvbik6IE5nTW9kdWxlRGVmaW5pdGlvbiB7XG4gIGNvbnN0IHByb3ZpZGVycyA9IEFycmF5LmZyb20oZGVmLnByb3ZpZGVycyk7XG4gIGNvbnN0IG1vZHVsZXMgPSBBcnJheS5mcm9tKGRlZi5tb2R1bGVzKTtcbiAgY29uc3QgcHJvdmlkZXJzQnlLZXk6IHtbdG9rZW5LZXk6IHN0cmluZ106IE5nTW9kdWxlUHJvdmlkZXJEZWZ9ID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGRlZi5wcm92aWRlcnNCeUtleSkge1xuICAgIHByb3ZpZGVyc0J5S2V5W2tleV0gPSBkZWYucHJvdmlkZXJzQnlLZXlba2V5XTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmFjdG9yeTogZGVmLmZhY3RvcnksXG4gICAgaXNSb290OiBkZWYuaXNSb290LCBwcm92aWRlcnMsIG1vZHVsZXMsIHByb3ZpZGVyc0J5S2V5LFxuICB9O1xufVxuXG5jbGFzcyBOZ01vZHVsZUZhY3RvcnlfIGV4dGVuZHMgTmdNb2R1bGVGYWN0b3J5PGFueT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyByZWFkb25seSBtb2R1bGVUeXBlOiBUeXBlPGFueT4sIHByaXZhdGUgX2Jvb3RzdHJhcENvbXBvbmVudHM6IFR5cGU8YW55PltdLFxuICAgICAgcHJpdmF0ZSBfbmdNb2R1bGVEZWZGYWN0b3J5OiBOZ01vZHVsZURlZmluaXRpb25GYWN0b3J5KSB7XG4gICAgLy8gQXR0ZW50aW9uOiB0aGlzIGN0b3IgaXMgY2FsbGVkIGFzIHRvcCBsZXZlbCBmdW5jdGlvbi5cbiAgICAvLyBQdXR0aW5nIGFueSBsb2dpYyBpbiBoZXJlIHdpbGwgZGVzdHJveSBjbG9zdXJlIHRyZWUgc2hha2luZyFcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY3JlYXRlKHBhcmVudEluamVjdG9yOiBJbmplY3RvcnxudWxsKTogTmdNb2R1bGVSZWY8YW55PiB7XG4gICAgaW5pdFNlcnZpY2VzSWZOZWVkZWQoKTtcbiAgICAvLyBDbG9uZSB0aGUgTmdNb2R1bGVEZWZpbml0aW9uIHNvIHRoYXQgYW55IHRyZWUgc2hha2VhYmxlIHByb3ZpZGVyIGRlZmluaXRpb25cbiAgICAvLyBhZGRlZCB0byB0aGlzIGluc3RhbmNlIG9mIHRoZSBOZ01vZHVsZVJlZiBkb2Vzbid0IGFmZmVjdCB0aGUgY2FjaGVkIGNvcHkuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzI1MDE4LlxuICAgIGNvbnN0IGRlZiA9IGNsb25lTmdNb2R1bGVEZWZpbml0aW9uKHJlc29sdmVEZWZpbml0aW9uKHRoaXMuX25nTW9kdWxlRGVmRmFjdG9yeSkpO1xuICAgIHJldHVybiBTZXJ2aWNlcy5jcmVhdGVOZ01vZHVsZVJlZihcbiAgICAgICAgdGhpcy5tb2R1bGVUeXBlLCBwYXJlbnRJbmplY3RvciB8fCBJbmplY3Rvci5OVUxMLCB0aGlzLl9ib290c3RyYXBDb21wb25lbnRzLCBkZWYpO1xuICB9XG59XG4iXX0=