<<<<<<< HEAD
# React native client for Joyner

## Problem description
When running in simulator (Genymotion or Android - API 23), following error is shown: https://ibb.co/cxGq8F

But if we use remote JS debugging, no error is shown at all. It looks like some problem in Expo or react-native itself. Problems is happening after upgrading from 15.0.0 to 17.0.0. Any idea of what could went wrong?

## Installation
After npm install, it is needed to do the following:

1. Delete the following file in node_modules: node_modules/intl/.babelrc - solving this issue: https://github.com/facebook/react-native/issues/12683
2. Copy symbolicate.js file in root into node_modules/react-native/packager/src/Server/symbolicate/ - overwrite. It contains following fix: https://github.com/facebook/react-native/commit/074fd33725626530c68d897150413a13715280a1 solving this issue: https://github.com/facebook/react-native/issues/12885
=======
# error-test
Just a test to show problem with Expo
>>>>>>> 8c1c81bf9d4b66d131a76df9ddf8106236b31fc8
