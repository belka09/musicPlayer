import { Observable } from '../Observable';
import { ObservableInput, OperatorFunction } from '../types';
export declare function onErrorResumeNext<T, R>(v: ObservableInput<R>): OperatorFunction<T, R>;
export declare function onErrorResumeNext<T, T2, T3, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>): OperatorFunction<T, R>;
export declare function onErrorResumeNext<T, T2, T3, T4, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): OperatorFunction<T, R>;
export declare function onErrorResumeNext<T, T2, T3, T4, T5, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): OperatorFunction<T, R>;
export declare function onErrorResumeNext<T, T2, T3, T4, T5, T6, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): OperatorFunction<T, R>;
export declare function onErrorResumeNext<T, R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): OperatorFunction<T, R>;
export declare function onErrorResumeNext<T, R>(array: ObservableInput<any>[]): OperatorFunction<T, R>;
export declare function onErrorResumeNextStatic<R>(v: ObservableInput<R>): Observable<R>;
export declare function onErrorResumeNextStatic<T2, T3, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>): Observable<R>;
export declare function onErrorResumeNextStatic<T2, T3, T4, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): Observable<R>;
export declare function onErrorResumeNextStatic<T2, T3, T4, T5, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): Observable<R>;
export declare function onErrorResumeNextStatic<T2, T3, T4, T5, T6, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): Observable<R>;
export declare function onErrorResumeNextStatic<R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): Observable<R>;
export declare function onErrorResumeNextStatic<R>(array: ObservableInput<any>[]): Observable<R>;
