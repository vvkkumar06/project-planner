/**
 * @Author: Vivek Kumar
 * @File: App.js
 */
import app from './app';
import { Logger } from './utils/logger';

const LOG_PREFIX = 'index';
const logger = new Logger(LOG_PREFIX);
const PORT = process.env.PORT || 3000;

import './config/db';
import { NodeDIManager } from 'node-di-manager';
import path from 'path';

async function configure() {
    let map = new Map();
    map.set(path.join(__dirname, 'repositories/project-repository'), 'ProjectRepository');
    map.set(path.join(__dirname, 'services/project-service.js'), 'ProjectService');
    return await NodeDIManager.register(map);
}

configure().then((data) => {
    app.listen(PORT, () => {
        logger.log(`Server is running on port: ${PORT}`);
    })
}).catch(err => {
    throw err;
})

