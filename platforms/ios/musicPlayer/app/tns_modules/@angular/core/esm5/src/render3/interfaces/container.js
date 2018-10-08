/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NEXT, PARENT, QUERIES } from './view';
/**
 * Below are constants for LContainer indices to help us look up LContainer members
 * without having to remember the specific indices.
 * Uglify will inline these when minifying so there shouldn't be a cost.
 */
export var ACTIVE_INDEX = 0;
// PARENT, NEXT, and QUERIES are indices 1, 2, and 3.
// As we already have these constants in LViewData, we don't need to re-create them.
export var VIEWS = 4;
export var RENDER_PARENT = 5;
// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
export var unusedValueExportToPlacateAjd = 1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9pbnRlcmZhY2VzL2NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFJSCxPQUFPLEVBQVksSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFeEQ7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxJQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDOUIscURBQXFEO0FBQ3JELG9GQUFvRjtBQUNwRixNQUFNLENBQUMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFzRS9CLGlGQUFpRjtBQUNqRiwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0xFbGVtZW50Tm9kZSwgTFZpZXdOb2RlfSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHtMUXVlcmllc30gZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQge0xWaWV3RGF0YSwgTkVYVCwgUEFSRU5ULCBRVUVSSUVTfSBmcm9tICcuL3ZpZXcnO1xuXG4vKipcbiAqIEJlbG93IGFyZSBjb25zdGFudHMgZm9yIExDb250YWluZXIgaW5kaWNlcyB0byBoZWxwIHVzIGxvb2sgdXAgTENvbnRhaW5lciBtZW1iZXJzXG4gKiB3aXRob3V0IGhhdmluZyB0byByZW1lbWJlciB0aGUgc3BlY2lmaWMgaW5kaWNlcy5cbiAqIFVnbGlmeSB3aWxsIGlubGluZSB0aGVzZSB3aGVuIG1pbmlmeWluZyBzbyB0aGVyZSBzaG91bGRuJ3QgYmUgYSBjb3N0LlxuICovXG5leHBvcnQgY29uc3QgQUNUSVZFX0lOREVYID0gMDtcbi8vIFBBUkVOVCwgTkVYVCwgYW5kIFFVRVJJRVMgYXJlIGluZGljZXMgMSwgMiwgYW5kIDMuXG4vLyBBcyB3ZSBhbHJlYWR5IGhhdmUgdGhlc2UgY29uc3RhbnRzIGluIExWaWV3RGF0YSwgd2UgZG9uJ3QgbmVlZCB0byByZS1jcmVhdGUgdGhlbS5cbmV4cG9ydCBjb25zdCBWSUVXUyA9IDQ7XG5leHBvcnQgY29uc3QgUkVOREVSX1BBUkVOVCA9IDU7XG5cbi8qKlxuICogVGhlIHN0YXRlIGFzc29jaWF0ZWQgd2l0aCBhbiBMQ29udGFpbmVyTm9kZS5cbiAqXG4gKiBUaGlzIGlzIGFuIGFycmF5IHNvIHRoYXQgaXRzIHN0cnVjdHVyZSBpcyBjbG9zZXIgdG8gTFZpZXdEYXRhLiBUaGlzIGhlbHBzXG4gKiB3aGVuIHRyYXZlcnNpbmcgdGhlIHZpZXcgdHJlZSAod2hpY2ggaXMgYSBtaXggb2YgY29udGFpbmVycyBhbmQgY29tcG9uZW50XG4gKiB2aWV3cyksIHNvIHdlIGNhbiBqdW1wIHRvIHZpZXdPckNvbnRhaW5lcltORVhUXSBpbiB0aGUgc2FtZSB3YXkgcmVnYXJkbGVzc1xuICogb2YgdHlwZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMQ29udGFpbmVyIGV4dGVuZHMgQXJyYXk8YW55PiB7XG4gIC8qKlxuICAgKiBUaGUgbmV4dCBhY3RpdmUgaW5kZXggaW4gdGhlIHZpZXdzIGFycmF5IHRvIHJlYWQgb3Igd3JpdGUgdG8uIFRoaXMgaGVscHMgdXNcbiAgICoga2VlcCB0cmFjayBvZiB3aGVyZSB3ZSBhcmUgaW4gdGhlIHZpZXdzIGFycmF5LlxuICAgKiBJbiB0aGUgY2FzZSB0aGUgTENvbnRhaW5lciBpcyBjcmVhdGVkIGZvciBhIFZpZXdDb250YWluZXJSZWYsXG4gICAqIGl0IGlzIHNldCB0byBudWxsIHRvIGlkZW50aWZ5IHRoaXMgc2NlbmFyaW8sIGFzIGluZGljZXMgYXJlIFwiYWJzb2x1dGVcIiBpbiB0aGF0IGNhc2UsXG4gICAqIGkuZS4gcHJvdmlkZWQgZGlyZWN0bHkgYnkgdGhlIHVzZXIgb2YgdGhlIFZpZXdDb250YWluZXJSZWYgQVBJLlxuICAgKi9cbiAgW0FDVElWRV9JTkRFWF06IG51bWJlcnxudWxsO1xuXG4gIC8qKlxuICAgKiBBY2Nlc3MgdG8gdGhlIHBhcmVudCB2aWV3IGlzIG5lY2Vzc2FyeSBzbyB3ZSBjYW4gcHJvcGFnYXRlIGJhY2tcbiAgICogdXAgZnJvbSBpbnNpZGUgYSBjb250YWluZXIgdG8gcGFyZW50W05FWFRdLlxuICAgKi9cbiAgW1BBUkVOVF06IExWaWV3RGF0YXxudWxsO1xuXG4gIC8qKlxuICAgKiBUaGlzIGFsbG93cyB1cyB0byBqdW1wIGZyb20gYSBjb250YWluZXIgdG8gYSBzaWJsaW5nIGNvbnRhaW5lciBvciBjb21wb25lbnRcbiAgICogdmlldyB3aXRoIHRoZSBzYW1lIHBhcmVudCwgc28gd2UgY2FuIHJlbW92ZSBsaXN0ZW5lcnMgZWZmaWNpZW50bHkuXG4gICAqL1xuICBbTkVYVF06IExWaWV3RGF0YXxMQ29udGFpbmVyfG51bGw7XG5cbiAgLyoqXG4gICAqIFF1ZXJpZXMgYWN0aXZlIGZvciB0aGlzIGNvbnRhaW5lciAtIGFsbCB0aGUgdmlld3MgaW5zZXJ0ZWQgdG8gLyByZW1vdmVkIGZyb21cbiAgICogdGhpcyBjb250YWluZXIgYXJlIHJlcG9ydGVkIHRvIHF1ZXJpZXMgcmVmZXJlbmNlZCBoZXJlLlxuICAgKi9cbiAgW1FVRVJJRVNdOiBMUXVlcmllc3xudWxsO1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgdGhlIGNvbnRhaW5lcidzIGN1cnJlbnRseSBhY3RpdmUgY2hpbGQgdmlld3MuIFZpZXdzIHdpbGwgYmUgaW5zZXJ0ZWRcbiAgICogaGVyZSBhcyB0aGV5IGFyZSBhZGRlZCBhbmQgc3BsaWNlZCBmcm9tIGhlcmUgd2hlbiB0aGV5IGFyZSByZW1vdmVkLiBXZSBuZWVkXG4gICAqIHRvIGtlZXAgYSByZWNvcmQgb2YgY3VycmVudCB2aWV3cyBzbyB3ZSBrbm93IHdoaWNoIHZpZXdzIGFyZSBhbHJlYWR5IGluIHRoZSBET01cbiAgICogKGFuZCBkb24ndCBuZWVkIHRvIGJlIHJlLWFkZGVkKSBhbmQgc28gd2UgY2FuIHJlbW92ZSB2aWV3cyBmcm9tIHRoZSBET00gd2hlbiB0aGV5XG4gICAqIGFyZSBubyBsb25nZXIgcmVxdWlyZWQuXG4gICAqL1xuICBbVklFV1NdOiBMVmlld05vZGVbXTtcblxuICAvKipcbiAgICogUGFyZW50IEVsZW1lbnQgd2hpY2ggd2lsbCBjb250YWluIHRoZSBsb2NhdGlvbiB3aGVyZSBhbGwgb2YgdGhlIFZpZXdzIHdpbGwgYmVcbiAgICogaW5zZXJ0ZWQgaW50byB0by5cbiAgICpcbiAgICogSWYgYHJlbmRlclBhcmVudGAgaXMgYG51bGxgIGl0IGlzIGhlYWRsZXNzLiBUaGlzIG1lYW5zIHRoYXQgaXQgaXMgY29udGFpbmVkXG4gICAqIGluIGFub3RoZXIgYExWaWV3Tm9kZWAgd2hpY2ggaW4gdHVybiBpcyBjb250YWluZWQgaW4gYW5vdGhlciBgTENvbnRhaW5lck5vZGVgIGFuZFxuICAgKiB0aGVyZWZvcmUgaXQgZG9lcyBub3QgeWV0IGhhdmUgaXRzIG93biBwYXJlbnQuXG4gICAqXG4gICAqIElmIGByZW5kZXJQYXJlbnRgIGlzIG5vdCBgbnVsbGAgdGhlbiBpdCBtYXkgYmU6XG4gICAqIC0gc2FtZSBhcyBgTENvbnRhaW5lck5vZGUucGFyZW50YCBpbiB3aGljaCBjYXNlIGl0IGlzIGp1c3QgYSBub3JtYWwgY29udGFpbmVyLlxuICAgKiAtIGRpZmZlcmVudCBmcm9tIGBMQ29udGFpbmVyTm9kZS5wYXJlbnRgIGluIHdoaWNoIGNhc2UgaXQgaGFzIGJlZW4gcmUtcHJvamVjdGVkLlxuICAgKiAgIEluIG90aGVyIHdvcmRzIGBMQ29udGFpbmVyTm9kZS5wYXJlbnRgIGlzIGxvZ2ljYWwgcGFyZW50IHdoZXJlIGFzXG4gICAqICAgYExDb250YWluZXIucHJvamVjdGVkUGFyZW50YCBpcyByZW5kZXIgcGFyZW50LlxuICAgKlxuICAgKiBXaGVuIHZpZXdzIGFyZSBpbnNlcnRlZCBpbnRvIGBMQ29udGFpbmVyTm9kZWAgdGhlbiBgcmVuZGVyUGFyZW50YCBpczpcbiAgICogLSBgbnVsbGAsIHdlIGFyZSBpbiBgTFZpZXdOb2RlYCBrZWVwIGdvaW5nIHVwIGEgaGllcmFyY2h5IHVudGlsIGFjdHVhbFxuICAgKiAgIGByZW5kZXJQYXJlbnRgIGlzIGZvdW5kLlxuICAgKiAtIG5vdCBgbnVsbGAsIHRoZW4gdXNlIHRoZSBgcHJvamVjdGVkUGFyZW50Lm5hdGl2ZWAgYXMgdGhlIGBSRWxlbWVudGAgdG8gaW5zZXJ0XG4gICAqICAgYExWaWV3Tm9kZWBzIGludG8uXG4gICAqL1xuICBbUkVOREVSX1BBUkVOVF06IExFbGVtZW50Tm9kZXxudWxsO1xufVxuXG4vLyBOb3RlOiBUaGlzIGhhY2sgaXMgbmVjZXNzYXJ5IHNvIHdlIGRvbid0IGVycm9uZW91c2x5IGdldCBhIGNpcmN1bGFyIGRlcGVuZGVuY3lcbi8vIGZhaWx1cmUgYmFzZWQgb24gdHlwZXMuXG5leHBvcnQgY29uc3QgdW51c2VkVmFsdWVFeHBvcnRUb1BsYWNhdGVBamQgPSAxO1xuIl19