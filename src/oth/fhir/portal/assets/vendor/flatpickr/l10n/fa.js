(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.fa = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Persian = {
      weekdays: {
          shorthand: ["ÛÚ©", "Ø¯Ù", "Ø³Ù", "ÚÙØ§Ø±", "Ù¾ÙØ¬", "Ø¬ÙØ¹Ù", "Ø´ÙØ¨Ù"],
          longhand: [
              "ÛÚ©âØ´ÙØ¨Ù",
              "Ø¯ÙØ´ÙØ¨Ù",
              "Ø³ÙâØ´ÙØ¨Ù",
              "ÚÙØ§Ø±Ø´ÙØ¨Ù",
              "Ù¾ÙÚâØ´ÙØ¨Ù",
              "Ø¬ÙØ¹Ù",
              "Ø´ÙØ¨Ù",
          ]
      },
      months: {
          shorthand: [
              "ÚØ§ÙÙÛÙ",
              "ÙÙØ±ÛÙ",
              "ÙØ§Ø±Ø³",
              "Ø¢ÙØ±ÛÙ",
              "ÙÙ",
              "ÚÙØ¦Ù",
              "ÚÙØ¦ÛÙ",
              "Ø§ÙØª",
              "Ø³Ù¾ØªØ§ÙØ¨Ø±",
              "Ø§Ú©ØªØ¨Ø±",
              "ÙÙØ§ÙØ¨Ø±",
              "Ø¯Ø³Ø§ÙØ¨Ø±",
          ],
          longhand: [
              "ÚØ§ÙÙÛÙ",
              "ÙÙØ±ÛÙ",
              "ÙØ§Ø±Ø³",
              "Ø¢ÙØ±ÛÙ",
              "ÙÙ",
              "ÚÙØ¦Ù",
              "ÚÙØ¦ÛÙ",
              "Ø§ÙØª",
              "Ø³Ù¾ØªØ§ÙØ¨Ø±",
              "Ø§Ú©ØªØ¨Ø±",
              "ÙÙØ§ÙØ¨Ø±",
              "Ø¯Ø³Ø§ÙØ¨Ø±",
          ]
      },
      firstDayOfWeek: 6,
      ordinal: function () {
          return "";
      }
  };
  fp.l10ns.fa = Persian;
  var fa = fp.l10ns;

  exports.Persian = Persian;
  exports.default = fa;

  Object.defineProperty(exports, '__esModule', { value: true });

}));