/**
 * @Author: Vivek Kumar
 */

/*
 * Log Types
 */
export enum LogType {
    INFO = 'info',
    ERROR = 'error',
    WARN = 'warn'
}

export class Logger {
    private LOG_PREFIX: string = '';

    /**
     * Create new logger instance
     * @param logPrefix string
     */
    constructor(logPrefix: string) {
        this.LOG_PREFIX = logPrefix;
    }

    /**
     * Log info, error or warning
     */
    log(message: string, logType: LogType = LogType.INFO): void {
        console[logType](`${this.LOG_PREFIX}: ${message}`);
    }
}