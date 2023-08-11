(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ar = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Arabic = {
      weekdays: {
          shorthand: ["Ø£Ø­Ø¯", "Ø§Ø«ÙÙÙ", "Ø«ÙØ§Ø«Ø§Ø¡", "Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø®ÙÙØ³", "Ø¬ÙØ¹Ø©", "Ø³Ø¨Øª"],
          longhand: [
              "Ø§ÙØ£Ø­Ø¯",
              "Ø§ÙØ§Ø«ÙÙÙ",
              "Ø§ÙØ«ÙØ§Ø«Ø§Ø¡",
              "Ø§ÙØ£Ø±Ø¨Ø¹Ø§Ø¡",
              "Ø§ÙØ®ÙÙØ³",
              "Ø§ÙØ¬ÙØ¹Ø©",
              "Ø§ÙØ³Ø¨Øª",
          ]
      },
      months: {
          shorthand: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          longhand: [
              "ÙÙØ§ÙØ±",
              "ÙØ¨Ø±Ø§ÙØ±",
              "ÙØ§Ø±Ø³",
              "Ø£Ø¨Ø±ÙÙ",
              "ÙØ§ÙÙ",
              "ÙÙÙÙÙ",
              "ÙÙÙÙÙ",
              "Ø£ØºØ³Ø·Ø³",
              "Ø³Ø¨ØªÙØ¨Ø±",
              "Ø£ÙØªÙØ¨Ø±",
              "ÙÙÙÙØ¨Ø±",
              "Ø¯ÙØ³ÙØ¨Ø±",
          ]
      },
      rangeSeparator: ' - '
  };
  fp.l10ns.ar = Arabic;
  var ar = fp.l10ns;

  exports.Arabic = Arabic;
  exports.default = ar;

  Object.defineProperty(exports, '__esModule', { value: true });

}));