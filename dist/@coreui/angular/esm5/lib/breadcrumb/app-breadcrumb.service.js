/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs/index';
import { filter } from 'rxjs/operators';
var AppBreadcrumbService = /** @class */ (function () {
    function AppBreadcrumbService(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._breadcrumbs = new BehaviorSubject(new Array());
        this.breadcrumbs = this._breadcrumbs.asObservable();
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; })).subscribe(function (event) {
            var /** @type {?} */ breadcrumbs = [];
            var /** @type {?} */ currentRoute = _this.route.root, /** @type {?} */
            url = '';
            do {
                var /** @type {?} */ childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var /** @type {?} */ routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            _this._breadcrumbs.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        });
    }
    AppBreadcrumbService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppBreadcrumbService.ctorParameters = function () { return [
        { type: Router, },
        { type: ActivatedRoute, },
    ]; };
    return AppBreadcrumbService;
}());
export { AppBreadcrumbService };
function AppBreadcrumbService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppBreadcrumbService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppBreadcrumbService.ctorParameters;
    /** @type {?} */
    AppBreadcrumbService.prototype.breadcrumbs;
    /** @type {?} */
    AppBreadcrumbService.prototype._breadcrumbs;
    /** @type {?} */
    AppBreadcrumbService.prototype.router;
    /** @type {?} */
    AppBreadcrumbService.prototype.route;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLFlBQVksQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBU3RDLDhCQUFvQixNQUFjLEVBQVUsS0FBcUI7UUFBakUsaUJBK0JDO1FBL0JtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFFL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBVyxJQUFJLEtBQUssRUFBVSxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVksYUFBYSxFQUE5QixDQUE4QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO1lBQ3ZGLHFCQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdkIscUJBQUksWUFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUNsQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ1QsR0FBRyxDQUFDO2dCQUNGLHFCQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUM3QyxZQUFZLEdBQUcsSUFBSSxDQUFDOztnQkFFcEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7b0JBQzFCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDL0IscUJBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7d0JBQ3JDLEdBQUcsSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFaLENBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdEUsV0FBVyxDQUFDLElBQUksQ0FBQzs0QkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJOzRCQUMxQixHQUFHLEVBQUksR0FBRzt5QkFDWCxDQUFDLENBQUM7d0JBQ0gsWUFBWSxHQUFHLEtBQUssQ0FBQztxQkFDdEI7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0osUUFBUSxZQUFZLEVBQUU7WUFFdkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUV2RCxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQ3BCLENBQUMsQ0FBQztLQUNKOztnQkF0Q0YsVUFBVTs7OztnQkFKRixNQUFNO2dCQUFFLGNBQWM7OytCQUQvQjs7U0FNYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9pbmRleCc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcEJyZWFkY3J1bWJTZXJ2aWNlIHtcclxuXHJcbiAgYnJlYWRjcnVtYnM6IE9ic2VydmFibGU8QXJyYXk8T2JqZWN0Pj47XHJcblxyXG4gIHByaXZhdGUgX2JyZWFkY3J1bWJzOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8T2JqZWN0Pj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblxyXG4gICAgdGhpcy5fYnJlYWRjcnVtYnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE9iamVjdFtdPihuZXcgQXJyYXk8T2JqZWN0PigpKTtcclxuXHJcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5fYnJlYWRjcnVtYnMuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcclxuICAgICAgbGV0IGN1cnJlbnRSb3V0ZSA9IHRoaXMucm91dGUucm9vdCxcclxuICAgICAgdXJsID0gJyc7XHJcbiAgICAgIGRvIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlblJvdXRlcyA9IGN1cnJlbnRSb3V0ZS5jaGlsZHJlbjtcclxuICAgICAgICBjdXJyZW50Um91dGUgPSBudWxsO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICAgIGNoaWxkcmVuUm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xyXG4gICAgICAgICAgaWYgKHJvdXRlLm91dGxldCA9PT0gJ3ByaW1hcnknKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlU25hcHNob3QgPSByb3V0ZS5zbmFwc2hvdDtcclxuICAgICAgICAgICAgdXJsICs9ICcvJyArIHJvdXRlU25hcHNob3QudXJsLm1hcChzZWdtZW50ID0+IHNlZ21lbnQucGF0aCkuam9pbignLycpO1xyXG4gICAgICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcclxuICAgICAgICAgICAgICBsYWJlbDogcm91dGUuc25hcHNob3QuZGF0YSxcclxuICAgICAgICAgICAgICB1cmw6ICAgdXJsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjdXJyZW50Um91dGUgPSByb3V0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSB3aGlsZSAoY3VycmVudFJvdXRlKTtcclxuXHJcbiAgICAgIHRoaXMuX2JyZWFkY3J1bWJzLm5leHQoT2JqZWN0LmFzc2lnbihbXSwgYnJlYWRjcnVtYnMpKTtcclxuXHJcbiAgICAgIHJldHVybiBicmVhZGNydW1icztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=