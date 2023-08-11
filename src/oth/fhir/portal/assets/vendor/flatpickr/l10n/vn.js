(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.vn = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Vietnamese = {
      weekdays: {
          shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
          longhand: [
              "Chá»§ nháº­t",
              "Thá»© hai",
              "Thá»© ba",
              "Thá»© tÆ°",
              "Thá»© nÄm",
              "Thá»© sÃ¡u",
              "Thá»© báº£y",
          ]
      },
      months: {
          shorthand: [
              "Th1",
              "Th2",
              "Th3",
              "Th4",
              "Th5",
              "Th6",
              "Th7",
              "Th8",
              "Th9",
              "Th10",
              "Th11",
              "Th12",
          ],
          longhand: [
              "ThÃ¡ng má»t",
              "ThÃ¡ng hai",
              "ThÃ¡ng ba",
              "ThÃ¡ng tÆ°",
              "ThÃ¡ng nÄm",
              "ThÃ¡ng sÃ¡u",
              "ThÃ¡ng báº£y",
              "ThÃ¡ng tÃ¡m",
              "ThÃ¡ng chÃ­n",
              "ThÃ¡ng mÆ°á»i",
              "ThÃ¡ng 11",
              "ThÃ¡ng 12",
          ]
      },
      firstDayOfWeek: 1,
      rangeSeparator: ' Äáº¿n '
  };
  fp.l10ns.vn = Vietnamese;
  var vn = fp.l10ns;

  exports.Vietnamese = Vietnamese;
  exports.default = vn;

  Object.defineProperty(exports, '__esModule', { value: true });

}));