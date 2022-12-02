/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Request, Response } from "express";
declare class AuthServices {
    private static encode;
    static createNewUser(req: Request, res: Response, data: any): Promise<"User exist" | {
        message: string;
        newUser: import("mongoose").Document<unknown, any, {
            name?: string;
            age?: string;
            address?: string;
            email?: string;
            passworld?: string;
        }> & {
            name?: string;
            age?: string;
            address?: string;
            email?: string;
            passworld?: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    static signIn(req: Request, res: Response, data: any): Promise<"Incorrect password" | {
        message: string;
        location?: undefined;
    } | {
        message: string;
        location: string;
    }>;
    static changePassWorld(data: any): Promise<{
        message: string;
        newPassWorld: any;
    } | {
        message: string;
        newPassWorld?: undefined;
    }>;
    static removeCustomer(email: string): Promise<{
        message: string;
    }>;
}
export default AuthServices;
