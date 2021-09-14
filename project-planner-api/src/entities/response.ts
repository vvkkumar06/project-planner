import { StatusCodes } from "http-status-codes";
import { errorMessages } from "../config/constants";

export default class ResponseEntity<T> {
    public data?: T;
    public error?: any;
    public message?: string;
    public status?: number
    constructor(data?: T, message?: string, error?: any, status: number = 200) {
        this.data = data;
        this.message = message;
        this.error = error;
        this.status = status;
    }

    sendBadRequest() {
        this.error = errorMessages.BAD_REQUEST;
        this.status = StatusCodes.BAD_REQUEST
        return {error: this.error, status: this.status} as ResponseEntity<T> 
    }

    sendInternalError() {
        this.error = errorMessages.INTERNAL_SERVER_ERROR;
        this.status =StatusCodes.INTERNAL_SERVER_ERROR;
        return {error: this.error, status: this.status} as ResponseEntity<T> 
    }
}