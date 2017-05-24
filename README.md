## Problem description
When running in simulator (Genymotion or Android - API 23), following error is shown: https://ibb.co/cxGq8F

But if we use remote JS debugging, no error is shown at all. It looks like some problem in Expo or react-native itself. Problems is happening after upgrading from 15.0.0 to 17.0.0. Any idea of what could went wrong?

## Installation
After npm install, it the following should be done to avoid warnings, but it is not needed:

1. Copy symbolicate.js file in root into node_modules/react-native/packager/src/Server/symbolicate/ - overwrite. It contains following fix: https://github.com/facebook/react-native/commit/074fd33725626530c68d897150413a13715280a1 solving this issue: https://github.com/facebook/react-native/issues/12885
