'use strict';

require('dotenv').config();

global.expect = require('expect.js');

global.yummly = require('../lib/yummly');

global.credentials = {
  id: process.env.YUMMLY_ID || '3cbb14d1',
  key: process.env.YUMMLY_API_KEY || '6eed2ccd0ec397588fa29dfbe3becd78'
};
