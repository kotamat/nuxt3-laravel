/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class Service {

    /**
     * /api/job
     * /api/job
     * @returns any
     * @throws ApiError
     */
    public static apiJobGet({
        contentType,
        accept,
    }: {
        /** application/json **/
        contentType?: string,
        /** application/json **/
        accept?: string,
    }): CancelablePromise<Array<{
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        user_id: number;
    }>> {
        return __request({
            method: 'GET',
            path: `/api/job`,
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
        });
    }

    /**
     * /api/job
     * /api/job
     * @returns any
     * @throws ApiError
     */
    public static apiJobPost({
        contentType,
        accept,
        requestBody,
    }: {
        /** application/json **/
        contentType?: string,
        /** application/json **/
        accept?: string,
        requestBody?: {
            name: string;
            user_id: number;
        },
    }): CancelablePromise<{
        user_id: number;
        name: string;
    }> {
        return __request({
            method: 'POST',
            path: `/api/job`,
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * /api/job/{job}
     * /api/job/{job}
     * @returns any
     * @throws ApiError
     */
    public static apiJobJobDelete({
        job,
        contentType,
        accept,
    }: {
        /** 57 **/
        job: number,
        /** application/json **/
        contentType?: string,
        /** application/json **/
        accept?: string,
    }): CancelablePromise<{
        message: string;
    }> {
        return __request({
            method: 'DELETE',
            path: `/api/job/${job}`,
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
        });
    }

    /**
     * /api/job/{job}
     * /api/job/{job}
     * @returns any
     * @throws ApiError
     */
    public static apiJobJobGet({
        job,
        contentType,
        accept,
    }: {
        /** 56 **/
        job: number,
        /** application/json **/
        contentType?: string,
        /** application/json **/
        accept?: string,
    }): CancelablePromise<{
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        user_id: number;
    }> {
        return __request({
            method: 'GET',
            path: `/api/job/${job}`,
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
        });
    }

    /**
     * /api/job/{job}
     * /api/job/{job}
     * @returns any
     * @throws ApiError
     */
    public static apiJobJobPut({
        job,
        contentType,
        accept,
        requestBody,
    }: {
        /** 58 **/
        job: number,
        /** application/json **/
        contentType?: string,
        /** application/json **/
        accept?: string,
        requestBody?: {
            name: string;
            user_id: number;
        },
    }): CancelablePromise<{
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
        user_id: number;
    }> {
        return __request({
            method: 'PUT',
            path: `/api/job/${job}`,
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}