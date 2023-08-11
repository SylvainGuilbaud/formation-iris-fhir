(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.my = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Burmese = {
      weekdays: {
          shorthand: ["áá½á±", "áá¬", "áá«", "áá°á¸", "áá¼á¬", "áá±á¬", "áá±"],
          longhand: [
              "ááááºá¹ááá½á±",
              "ááááºá¹áá¬",
              "á¡ááºá¹áá«",
              "áá¯áá¹ááá°á¸",
              "áá¼á¬áááá±á¸",
              "áá±á¬áá¼á¬",
              "ááá±",
          ]
      },
      months: {
          shorthand: [
              "áááº",
              "áá±",
              "áááº",
              "áá¼á®",
              "áá±",
              "áá½ááº",
              "áá­á¯ááº",
              "áá¼",
              "áááº",
              "á¡á±á¬ááº",
              "áá­á¯",
              "áá®",
          ],
          longhand: [
              "áááºááá«áá®",
              "áá±áá±á¬áºáá«áá®",
              "áááº",
              "á§áá¼á®",
              "áá±",
              "áá½ááº",
              "áá°áá­á¯ááº",
              "áá¼áá¯ááº",
              "áááºáááºáá¬",
              "á¡á±á¬ááºáá­á¯áá¬",
              "áá­á¯áááºáá¬",
              "áá®áááºáá¬",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return "";
      },
      time_24hr: true
  };
  fp.l10ns.my = Burmese;
  var my = fp.l10ns;

  exports.Burmese = Burmese;
  exports.default = my;

  Object.defineProperty(exports, '__esModule', { value: true });

}));