'use strict';

/**
 * plitka service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::plitka.plitka');
