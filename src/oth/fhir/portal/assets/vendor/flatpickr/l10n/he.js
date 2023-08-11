(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.he = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Hebrew = {
      weekdays: {
          shorthand: ["×", "×", "×", "×", "×", "×", "×©"],
          longhand: ["×¨××©××", "×©× ×", "×©×××©×", "×¨×××¢×", "××××©×", "×©××©×", "×©××ª"]
      },
      months: {
          shorthand: [
              "×× ××³",
              "×¤××¨×³",
              "××¨×¥",
              "××¤×¨×³",
              "×××",
              "××× ×",
              "××××",
              "××××³",
              "×¡×¤××³",
              "×××§×³",
              "× ×××³",
              "××¦××³",
          ],
          longhand: [
              "×× ×××¨",
              "×¤××¨×××¨",
              "××¨×¥",
              "××¤×¨××",
              "×××",
              "××× ×",
              "××××",
              "×××××¡×",
              "×¡×¤××××¨",
              "×××§××××¨",
              "× ×××××¨",
              "××¦×××¨",
          ]
      },
      rangeSeparator: " ×× ",
      time_24hr: true
  };
  fp.l10ns.he = Hebrew;
  var he = fp.l10ns;

  exports.Hebrew = Hebrew;
  exports.default = he;

  Object.defineProperty(exports, '__esModule', { value: true });

}));