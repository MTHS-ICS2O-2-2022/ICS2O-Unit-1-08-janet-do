// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-1-08-JANET-DO/sw.js", {
    scope: "/ICS2O-UNIT-1-08-JANET-DO/",
  })
}
function myButtonClicked() {
  alert("Hello, World!")
}
