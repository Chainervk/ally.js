define(function defineDemoFocusableIOS8(require) {
  'use strict';

  // The contents of this file have been collected by running focusable/index.html

  return {
    "platform": {
      "description": "Safari 8.0 on Apple iPad (iOS 8.1.3)",
      "layout": "WebKit",
      "manufacturer": "Apple",
      "name": "Safari",
      "prerelease": null,
      "product": "iPad",
      "ua": "Mozilla/5.0 (iPad; CPU OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4",
      "version": "8.0",
      "os": {
        "architecture": 32,
        "family": "iOS",
        "version": "8.1.3"
      }
    },
    "focusable": [
      "BODY",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=reset]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "a[href][tabindex=-1]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "a:has([ismap])",
      "iframe",
      "audio[controls]",
      "video[controls]",
      "keygen",
      "details summary",
      "details[open] summary",
      "details[open] a[href]",
      "object[src=swf]",
      "object[src=swf][height=0]",
      "object[src=svg]",
      "object[src=svg][height=0]",
      "svg a[xlink|href]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[contenteditable][tabindex=-1]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "fieldset[tabindex=0][disabled]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "a{flexbox}",
      "[tabindex=\"-1\"]{flexbox}",
      "span{user-modify}",
      "canvas > input",
      "canvas > a",
      "canvas > [tabindex=0]",
      "canvas > [tabindex=-1]"
    ],
    "focusEvents": [
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=reset]",
      "select",
      "textarea",
      "button[type=button]",
      "input[type=text]",
      "a[href]",
      "a[href=\"\"]",
      "a[href][tabindex=-1]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "a:has([ismap])",
      "iframe",
      "audio[controls]",
      "video[controls]",
      "keygen",
      "details summary",
      "details[open] summary",
      "details[open] a[href]",
      "object[src=swf]",
      "object[src=swf][height=0]",
      "object[src=svg]",
      "object[src=svg][height=0]",
      "svg",
      "svg a[xlink|href]",
      "svg a[xlink|href] text",
      "svg text",
      "svg rect",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[contenteditable][tabindex=-1]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "fieldset[tabindex=0][disabled]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "a{flexbox}",
      "[tabindex=\"-1\"]{flexbox}",
      "span{user-modify}",
      "canvas > input",
      "canvas > a",
      "canvas > [tabindex=0]",
      "canvas > [tabindex=-1]"
    ],
    "focusRedirection": [
      "label[for=\"label-target\"] --- input[type=text]",
      "fieldset legend --- fieldset input"
    ],
    "noFocusMethod": [],
    "tabOrder": [
      "input[type=text]",
      "input[type=password]",
      "select",
      "textarea",
      "[contenteditable]:empty",
      "[contenteditable]",
      "fieldset input",
      "span{user-modify}",
      "canvas > input",
      "span{user-modify}",
      "canvas > input"
    ],
    "ally": {
      "focusable": [
        "BODY",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "a[href][tabindex=-1]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "iframe",
        "audio[controls]",
        "video[controls]",
        "embed",
        "keygen",
        "details summary",
        "details[open] summary",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "svg a[xlink|href]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[contenteditable][tabindex=-1]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "[tabindex=\"-1\"]{flexbox}"
      ],
      "tabOrder": [
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=3 ]",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "iframe",
        "audio[controls]",
        "video[controls]",
        "keygen",
        "details summary",
        "details[open] summary",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "svg a[xlink|href]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[tabindex=0]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}"
      ],
      "focusableStrict": []
    },
    "jquery": {
      "focusable": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "a[href][tabindex=-1]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "object[usemap]",
        "[contenteditable][tabindex=-1]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "fieldset[disabled] input",
        "table tbody tr td a",
        "table tbody tr{collapse} td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "[tabindex=\"-1\"]{flexbox}"
      ],
      "tabOrder": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "object[usemap]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "fieldset[disabled] input",
        "table tbody tr td a",
        "table tbody tr{collapse} td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}"
      ]
    }
  };
});