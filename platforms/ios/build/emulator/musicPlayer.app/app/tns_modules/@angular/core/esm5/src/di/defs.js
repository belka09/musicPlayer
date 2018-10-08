/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Construct an `InjectableDef` which defines how a token will be constructed by the DI system, and
 * in which injectors (if any) it will be available.
 *
 * This should be assigned to a static `ngInjectableDef` field on a type, which will then be an
 * `InjectableType`.
 *
 * Options:
 * * `providedIn` determines which injectors will include the injectable, by either associating it
 *   with an `@NgModule` or other `InjectorType`, or by specifying that this injectable should be
 *   provided in the `'root'` injector, which will be the application-level injector in most apps.
 * * `factory` gives the zero argument function which will create an instance of the injectable.
 *   The factory can call `inject` to access the `Injector` and request injection of dependencies.
 *
 * @experimental
 */
export function defineInjectable(opts) {
    return {
        providedIn: opts.providedIn || null, factory: opts.factory, value: undefined,
    };
}
/**
 * Construct an `InjectorDef` which configures an injector.
 *
 * This should be assigned to a static `ngInjectorDef` field on a type, which will then be an
 * `InjectorType`.
 *
 * Options:
 *
 * * `factory`: an `InjectorType` is an instantiable type, so a zero argument `factory` function to
 *   create the type must be provided. If that factory function needs to inject arguments, it can
 *   use the `inject` function.
 * * `providers`: an optional array of providers to add to the injector. Each provider must
 *   either have a factory or point to a type which has an `ngInjectableDef` static property (the
 *   type must be an `InjectableType`).
 * * `imports`: an optional array of imports of other `InjectorType`s or `InjectorTypeWithModule`s
 *   whose providers will also be added to the injector. Locally provided types will override
 *   providers from imports.
 *
 * @experimental
 */
export function defineInjector(options) {
    return {
        factory: options.factory, providers: options.providers || [], imports: options.imports || [],
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2RlZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBeUdIOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILE1BQU0sMkJBQThCLElBR25DO0lBQ0MsT0FBUTtRQUNOLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBaUIsSUFBSSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVM7S0FDdEQsQ0FBQztBQUNsQyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxNQUFNLHlCQUF5QixPQUFpRTtJQUU5RixPQUFRO1FBQ04sT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUU7S0FDL0QsQ0FBQztBQUNsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL3R5cGUnO1xuXG5pbXBvcnQge0NsYXNzUHJvdmlkZXIsIENsYXNzU2Fuc1Byb3ZpZGVyLCBDb25zdHJ1Y3RvclByb3ZpZGVyLCBDb25zdHJ1Y3RvclNhbnNQcm92aWRlciwgRXhpc3RpbmdQcm92aWRlciwgRXhpc3RpbmdTYW5zUHJvdmlkZXIsIEZhY3RvcnlQcm92aWRlciwgRmFjdG9yeVNhbnNQcm92aWRlciwgU3RhdGljQ2xhc3NQcm92aWRlciwgU3RhdGljQ2xhc3NTYW5zUHJvdmlkZXIsIFZhbHVlUHJvdmlkZXIsIFZhbHVlU2Fuc1Byb3ZpZGVyfSBmcm9tICcuL3Byb3ZpZGVyJztcblxuLyoqXG4gKiBJbmZvcm1hdGlvbiBhYm91dCBob3cgYSB0eXBlIG9yIGBJbmplY3Rpb25Ub2tlbmAgaW50ZXJmYWNlcyB3aXRoIHRoZSBESSBzeXN0ZW0uXG4gKlxuICogQXQgYSBtaW5pbXVtLCB0aGlzIGluY2x1ZGVzIGEgYGZhY3RvcnlgIHdoaWNoIGRlZmluZXMgaG93IHRvIGNyZWF0ZSB0aGUgZ2l2ZW4gdHlwZSBgVGAsIHBvc3NpYmx5XG4gKiByZXF1ZXN0aW5nIGluamVjdGlvbiBvZiBvdGhlciB0eXBlcyBpZiBuZWNlc3NhcnkuXG4gKlxuICogT3B0aW9uYWxseSwgYSBgcHJvdmlkZWRJbmAgcGFyYW1ldGVyIHNwZWNpZmllcyB0aGF0IHRoZSBnaXZlbiB0eXBlIGJlbG9uZ3MgdG8gYSBwYXJ0aWN1bGFyXG4gKiBgSW5qZWN0b3JEZWZgLCBgTmdNb2R1bGVgLCBvciBhIHNwZWNpYWwgc2NvcGUgKGUuZy4gYCdyb290J2ApLiBBIHZhbHVlIG9mIGBudWxsYCBpbmRpY2F0ZXNcbiAqIHRoYXQgdGhlIGluamVjdGFibGUgZG9lcyBub3QgYmVsb25nIHRvIGFueSBzY29wZS5cbiAqXG4gKiBOT1RFOiBUaGlzIGlzIGEgcHJpdmF0ZSB0eXBlIGFuZCBzaG91bGQgbm90IGJlIGV4cG9ydGVkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5qZWN0YWJsZURlZjxUPiB7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhhdCB0aGUgZ2l2ZW4gdHlwZSBiZWxvbmdzIHRvIGEgcGFydGljdWxhciBpbmplY3RvcjpcbiAgICogLSBgSW5qZWN0b3JUeXBlYCBzdWNoIGFzIGBOZ01vZHVsZWAsXG4gICAqIC0gYCdyb290J2AgdGhlIHJvb3QgaW5qZWN0b3JcbiAgICogLSBgJ2FueSdgIGFsbCBpbmplY3RvcnMuXG4gICAqIC0gYG51bGxgLCBkb2VzIG5vdCBiZWxvbmcgdG8gYW55IGluamVjdG9yLiBNdXN0IGJlIGV4cGxpY2l0bHkgbGlzdGVkIGluIHRoZSBpbmplY3RvclxuICAgKiAgIGBwcm92aWRlcnNgLlxuICAgKi9cbiAgcHJvdmlkZWRJbjogSW5qZWN0b3JUeXBlPGFueT58J3Jvb3QnfCdhbnknfG51bGw7XG5cbiAgLyoqXG4gICAqIEZhY3RvcnkgbWV0aG9kIHRvIGV4ZWN1dGUgdG8gY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBpbmplY3RhYmxlLlxuICAgKi9cbiAgZmFjdG9yeTogKCkgPT4gVDtcblxuICAvKipcbiAgICogSW4gYSBjYXNlIG9mIG5vIGV4cGxpY2l0IGluamVjdG9yLCBhIGxvY2F0aW9uIHdoZXJlIHRoZSBpbnN0YW5jZSBvZiB0aGUgaW5qZWN0YWJsZSBpcyBzdG9yZWQuXG4gICAqL1xuICB2YWx1ZTogVHx1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogSW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb3ZpZGVycyB0byBiZSBpbmNsdWRlZCBpbiBhbiBgSW5qZWN0b3JgIGFzIHdlbGwgYXMgaG93IHRoZSBnaXZlbiB0eXBlXG4gKiB3aGljaCBjYXJyaWVzIHRoZSBpbmZvcm1hdGlvbiBzaG91bGQgYmUgY3JlYXRlZCBieSB0aGUgREkgc3lzdGVtLlxuICpcbiAqIEFuIGBJbmplY3RvckRlZmAgY2FuIGltcG9ydCBvdGhlciB0eXBlcyB3aGljaCBoYXZlIGBJbmplY3RvckRlZnNgLCBmb3JtaW5nIGEgZGVlcCBuZXN0ZWRcbiAqIHN0cnVjdHVyZSBvZiBwcm92aWRlcnMgd2l0aCBhIGRlZmluZWQgcHJpb3JpdHkgKGlkZW50aWNhbGx5IHRvIGhvdyBgTmdNb2R1bGVgcyBhbHNvIGhhdmVcbiAqIGFuIGltcG9ydC9kZXBlbmRlbmN5IHN0cnVjdHVyZSkuXG4gKlxuICogTk9URTogVGhpcyBpcyBhIHByaXZhdGUgdHlwZSBhbmQgc2hvdWxkIG5vdCBiZSBleHBvcnRlZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdG9yRGVmPFQ+IHtcbiAgZmFjdG9yeTogKCkgPT4gVDtcblxuICAvLyBUT0RPKGFseGh1Yik6IE5hcnJvdyBkb3duIHRoZSB0eXBlIGhlcmUgb25jZSBkZWNvcmF0b3JzIHByb3Blcmx5IGNoYW5nZSB0aGUgcmV0dXJuIHR5cGUgb2YgdGhlXG4gIC8vIGNsYXNzIHRoZXkgYXJlIGRlY29yYXRpbmcgKHRvIGFkZCB0aGUgbmdJbmplY3RhYmxlRGVmIHByb3BlcnR5IGZvciBleGFtcGxlKS5cbiAgcHJvdmlkZXJzOiAoVHlwZTxhbnk+fFZhbHVlUHJvdmlkZXJ8RXhpc3RpbmdQcm92aWRlcnxGYWN0b3J5UHJvdmlkZXJ8Q29uc3RydWN0b3JQcm92aWRlcnxcbiAgICAgICAgICAgICAgU3RhdGljQ2xhc3NQcm92aWRlcnxDbGFzc1Byb3ZpZGVyfGFueVtdKVtdO1xuXG4gIGltcG9ydHM6IChJbmplY3RvclR5cGU8YW55PnxJbmplY3RvclR5cGVXaXRoUHJvdmlkZXJzPGFueT4pW107XG59XG5cbi8qKlxuICogQSBgVHlwZWAgd2hpY2ggaGFzIGFuIGBJbmplY3RhYmxlRGVmYCBzdGF0aWMgZmllbGQuXG4gKlxuICogYEluamVjdGFibGVEZWZUeXBlYHMgY29udGFpbiB0aGVpciBvd24gRGVwZW5kZW5jeSBJbmplY3Rpb24gbWV0YWRhdGEgYW5kIGFyZSB1c2FibGUgaW4gYW5cbiAqIGBJbmplY3RvckRlZmAtYmFzZWQgYFN0YXRpY0luamVjdG9yLlxuICpcbiAqIEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmplY3RhYmxlVHlwZTxUPiBleHRlbmRzIFR5cGU8VD4ge1xuICAvKipcbiAgICogT3BhcXVlIHR5cGUgd2hvc2Ugc3RydWN0dXJlIGlzIGhpZ2hseSB2ZXJzaW9uIGRlcGVuZGVudC4gRG8gbm90IHJlbHkgb24gYW55IHByb3BlcnRpZXMuXG4gICAqL1xuICBuZ0luamVjdGFibGVEZWY6IG5ldmVyO1xufVxuXG4vKipcbiAqIEEgdHlwZSB3aGljaCBoYXMgYW4gYEluamVjdG9yRGVmYCBzdGF0aWMgZmllbGQuXG4gKlxuICogYEluamVjdG9yRGVmVHlwZXNgIGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSBhIGBTdGF0aWNJbmplY3RvcmAuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdG9yVHlwZTxUPiBleHRlbmRzIFR5cGU8VD4ge1xuICAvKipcbiAgICogT3BhcXVlIHR5cGUgd2hvc2Ugc3RydWN0dXJlIGlzIGhpZ2hseSB2ZXJzaW9uIGRlcGVuZGVudC4gRG8gbm90IHJlbHkgb24gYW55IHByb3BlcnRpZXMuXG4gICAqL1xuICBuZ0luamVjdG9yRGVmOiBuZXZlcjtcbn1cblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIGBJbmplY3RvckRlZmAgZXF1aXZhbGVudCBvZiBhIGBNb2R1bGVXaXRoUHJvdmlkZXJzYCwgYW4gYEluamVjdG9yRGVmVHlwZWAgd2l0aCBhblxuICogYXNzb2NpYXRlZCBhcnJheSBvZiBwcm92aWRlcnMuXG4gKlxuICogT2JqZWN0cyBvZiB0aGlzIHR5cGUgY2FuIGJlIGxpc3RlZCBpbiB0aGUgaW1wb3J0cyBzZWN0aW9uIG9mIGFuIGBJbmplY3RvckRlZmAuXG4gKlxuICogTk9URTogVGhpcyBpcyBhIHByaXZhdGUgdHlwZSBhbmQgc2hvdWxkIG5vdCBiZSBleHBvcnRlZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdG9yVHlwZVdpdGhQcm92aWRlcnM8VD4ge1xuICBuZ01vZHVsZTogSW5qZWN0b3JUeXBlPFQ+O1xuICBwcm92aWRlcnM/OiAoVHlwZTxhbnk+fFZhbHVlUHJvdmlkZXJ8RXhpc3RpbmdQcm92aWRlcnxGYWN0b3J5UHJvdmlkZXJ8Q29uc3RydWN0b3JQcm92aWRlcnxcbiAgICAgICAgICAgICAgIFN0YXRpY0NsYXNzUHJvdmlkZXJ8Q2xhc3NQcm92aWRlcnxhbnlbXSlbXTtcbn1cblxuXG4vKipcbiAqIENvbnN0cnVjdCBhbiBgSW5qZWN0YWJsZURlZmAgd2hpY2ggZGVmaW5lcyBob3cgYSB0b2tlbiB3aWxsIGJlIGNvbnN0cnVjdGVkIGJ5IHRoZSBESSBzeXN0ZW0sIGFuZFxuICogaW4gd2hpY2ggaW5qZWN0b3JzIChpZiBhbnkpIGl0IHdpbGwgYmUgYXZhaWxhYmxlLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIGFzc2lnbmVkIHRvIGEgc3RhdGljIGBuZ0luamVjdGFibGVEZWZgIGZpZWxkIG9uIGEgdHlwZSwgd2hpY2ggd2lsbCB0aGVuIGJlIGFuXG4gKiBgSW5qZWN0YWJsZVR5cGVgLlxuICpcbiAqIE9wdGlvbnM6XG4gKiAqIGBwcm92aWRlZEluYCBkZXRlcm1pbmVzIHdoaWNoIGluamVjdG9ycyB3aWxsIGluY2x1ZGUgdGhlIGluamVjdGFibGUsIGJ5IGVpdGhlciBhc3NvY2lhdGluZyBpdFxuICogICB3aXRoIGFuIGBATmdNb2R1bGVgIG9yIG90aGVyIGBJbmplY3RvclR5cGVgLCBvciBieSBzcGVjaWZ5aW5nIHRoYXQgdGhpcyBpbmplY3RhYmxlIHNob3VsZCBiZVxuICogICBwcm92aWRlZCBpbiB0aGUgYCdyb290J2AgaW5qZWN0b3IsIHdoaWNoIHdpbGwgYmUgdGhlIGFwcGxpY2F0aW9uLWxldmVsIGluamVjdG9yIGluIG1vc3QgYXBwcy5cbiAqICogYGZhY3RvcnlgIGdpdmVzIHRoZSB6ZXJvIGFyZ3VtZW50IGZ1bmN0aW9uIHdoaWNoIHdpbGwgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBpbmplY3RhYmxlLlxuICogICBUaGUgZmFjdG9yeSBjYW4gY2FsbCBgaW5qZWN0YCB0byBhY2Nlc3MgdGhlIGBJbmplY3RvcmAgYW5kIHJlcXVlc3QgaW5qZWN0aW9uIG9mIGRlcGVuZGVuY2llcy5cbiAqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVJbmplY3RhYmxlPFQ+KG9wdHM6IHtcbiAgcHJvdmlkZWRJbj86IFR5cGU8YW55PnwgJ3Jvb3QnIHwgJ2FueScgfCBudWxsLFxuICBmYWN0b3J5OiAoKSA9PiBULFxufSk6IG5ldmVyIHtcbiAgcmV0dXJuICh7XG4gICAgcHJvdmlkZWRJbjogb3B0cy5wcm92aWRlZEluIGFzIGFueSB8fCBudWxsLCBmYWN0b3J5OiBvcHRzLmZhY3RvcnksIHZhbHVlOiB1bmRlZmluZWQsXG4gIH0gYXMgSW5qZWN0YWJsZURlZjxUPikgYXMgbmV2ZXI7XG59XG5cbi8qKlxuICogQ29uc3RydWN0IGFuIGBJbmplY3RvckRlZmAgd2hpY2ggY29uZmlndXJlcyBhbiBpbmplY3Rvci5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSBhc3NpZ25lZCB0byBhIHN0YXRpYyBgbmdJbmplY3RvckRlZmAgZmllbGQgb24gYSB0eXBlLCB3aGljaCB3aWxsIHRoZW4gYmUgYW5cbiAqIGBJbmplY3RvclR5cGVgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogKiBgZmFjdG9yeWA6IGFuIGBJbmplY3RvclR5cGVgIGlzIGFuIGluc3RhbnRpYWJsZSB0eXBlLCBzbyBhIHplcm8gYXJndW1lbnQgYGZhY3RvcnlgIGZ1bmN0aW9uIHRvXG4gKiAgIGNyZWF0ZSB0aGUgdHlwZSBtdXN0IGJlIHByb3ZpZGVkLiBJZiB0aGF0IGZhY3RvcnkgZnVuY3Rpb24gbmVlZHMgdG8gaW5qZWN0IGFyZ3VtZW50cywgaXQgY2FuXG4gKiAgIHVzZSB0aGUgYGluamVjdGAgZnVuY3Rpb24uXG4gKiAqIGBwcm92aWRlcnNgOiBhbiBvcHRpb25hbCBhcnJheSBvZiBwcm92aWRlcnMgdG8gYWRkIHRvIHRoZSBpbmplY3Rvci4gRWFjaCBwcm92aWRlciBtdXN0XG4gKiAgIGVpdGhlciBoYXZlIGEgZmFjdG9yeSBvciBwb2ludCB0byBhIHR5cGUgd2hpY2ggaGFzIGFuIGBuZ0luamVjdGFibGVEZWZgIHN0YXRpYyBwcm9wZXJ0eSAodGhlXG4gKiAgIHR5cGUgbXVzdCBiZSBhbiBgSW5qZWN0YWJsZVR5cGVgKS5cbiAqICogYGltcG9ydHNgOiBhbiBvcHRpb25hbCBhcnJheSBvZiBpbXBvcnRzIG9mIG90aGVyIGBJbmplY3RvclR5cGVgcyBvciBgSW5qZWN0b3JUeXBlV2l0aE1vZHVsZWBzXG4gKiAgIHdob3NlIHByb3ZpZGVycyB3aWxsIGFsc28gYmUgYWRkZWQgdG8gdGhlIGluamVjdG9yLiBMb2NhbGx5IHByb3ZpZGVkIHR5cGVzIHdpbGwgb3ZlcnJpZGVcbiAqICAgcHJvdmlkZXJzIGZyb20gaW1wb3J0cy5cbiAqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVJbmplY3RvcihvcHRpb25zOiB7ZmFjdG9yeTogKCkgPT4gYW55LCBwcm92aWRlcnM/OiBhbnlbXSwgaW1wb3J0cz86IGFueVtdfSk6XG4gICAgbmV2ZXIge1xuICByZXR1cm4gKHtcbiAgICBmYWN0b3J5OiBvcHRpb25zLmZhY3RvcnksIHByb3ZpZGVyczogb3B0aW9ucy5wcm92aWRlcnMgfHwgW10sIGltcG9ydHM6IG9wdGlvbnMuaW1wb3J0cyB8fCBbXSxcbiAgfSBhcyBJbmplY3RvckRlZjxhbnk+KSBhcyBuZXZlcjtcbn1cbiJdfQ==