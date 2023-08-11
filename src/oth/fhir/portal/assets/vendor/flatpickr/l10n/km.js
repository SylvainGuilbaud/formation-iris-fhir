(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.km = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Khmer = {
      weekdays: {
          shorthand: ["á¢á¶áá·ááá", "áááá", "á¢áááá¶á", "áá»á", "áááá á.", "áá»ááá", "áááá"],
          longhand: [
              "á¢á¶áá·ááá",
              "áááá",
              "á¢áááá¶á",
              "áá»á",
              "áááá ááááá·á",
              "áá»ááá",
              "áááá",
          ]
      },
      months: {
          shorthand: [
              "áááá¶",
              "áá»áááá",
              "áá¸áá¶",
              "áááá¶",
              "á§ááá¶",
              "áá·áá»áá¶",
              "áááááá¶",
              "áá¸á á¶",
              "ááááá¶",
              "áá»áá¶",
              "áá·áááá·áá¶",
              "áááá¼",
          ],
          longhand: [
              "áááá¶",
              "áá»áááá",
              "áá¸áá¶",
              "áááá¶",
              "á§ááá¶",
              "áá·áá»áá¶",
              "áááááá¶",
              "áá¸á á¶",
              "ááááá¶",
              "áá»áá¶",
              "áá·áááá·áá¶",
              "áááá¼",
          ]
      },
      ordinal: function () {
          return "";
      },
      firstDayOfWeek: 1,
      rangeSeparator: " ááá ",
      weekAbbreviation: "ááááá¶á á",
      scrollTitle: "áááá·ááá¾áááá¸ááááá¾á",
      toggleTitle: "áá»ááá¾áááá¸áááá¶áááááá¼á",
      yearAriaLabel: "áááá¶á",
      time_24hr: true
  };
  fp.l10ns.km = Khmer;
  var km = fp.l10ns;

  exports.Khmer = Khmer;
  exports.default = km;

  Object.defineProperty(exports, '__esModule', { value: true });

}));