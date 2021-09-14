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

app.listen(PORT, () => {
    logger.log(`Server is running on port: ${PORT}`);
})