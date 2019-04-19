/*
 * Copyright 2019 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 *
 * By using this code you agree to the Phenix Terms of Service found online here:
 * http://phenixrts.com/terms-of-service.html
 */

module.exports = {
  transformer: {
    getTransformOptions: async() => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
};