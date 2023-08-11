(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.th = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Thai = {
      weekdays: {
          shorthand: ["à¸­à¸²", "à¸", "à¸­", "à¸", "à¸à¸¤", "à¸¨", "à¸ª"],
          longhand: [
              "à¸­à¸²à¸à¸´à¸à¸¢à¹",
              "à¸à¸±à¸à¸à¸£à¹",
              "à¸­à¸±à¸à¸à¸²à¸£",
              "à¸à¸¸à¸",
              "à¸à¸¤à¸«à¸±à¸ªà¸à¸à¸µ",
              "à¸¨à¸¸à¸à¸£à¹",
              "à¹à¸ªà¸²à¸£à¹",
          ]
      },
      months: {
          shorthand: [
              "à¸¡.à¸.",
              "à¸.à¸.",
              "à¸¡à¸µ.à¸.",
              "à¹à¸¡.à¸¢.",
              "à¸.à¸.",
              "à¸¡à¸´.à¸¢.",
              "à¸.à¸.",
              "à¸ª.à¸.",
              "à¸.à¸¢.",
              "à¸.à¸.",
              "à¸.à¸¢.",
              "à¸.à¸.",
          ],
          longhand: [
              "à¸¡à¸à¸£à¸²à¸à¸¡",
              "à¸à¸¸à¸¡à¸ à¸²à¸à¸±à¸à¸à¹",
              "à¸¡à¸µà¸à¸²à¸à¸¡",
              "à¹à¸¡à¸©à¸²à¸¢à¸",
              "à¸à¸¤à¸©à¸ à¸²à¸à¸¡",
              "à¸¡à¸´à¸à¸¸à¸à¸²à¸¢à¸",
              "à¸à¸£à¸à¸à¸²à¸à¸¡",
              "à¸ªà¸´à¸à¸«à¸²à¸à¸¡",
              "à¸à¸±à¸à¸¢à¸²à¸¢à¸",
              "à¸à¸¸à¸¥à¸²à¸à¸¡",
              "à¸à¸¤à¸¨à¸à¸´à¸à¸²à¸¢à¸",
              "à¸à¸±à¸à¸§à¸²à¸à¸¡",
          ]
      },
      firstDayOfWeek: 1,
      rangeSeparator: " à¸à¸¶à¸ ",
      scrollTitle: "à¹à¸¥à¸·à¹à¸­à¸à¹à¸à¸·à¹à¸­à¹à¸à¸´à¹à¸¡à¸«à¸£à¸·à¸­à¸¥à¸",
      toggleTitle: "à¸à¸¥à¸´à¸à¹à¸à¸·à¹à¸­à¹à¸à¸¥à¸µà¹à¸¢à¸",
      time_24hr: true,
      ordinal: function () {
          return "";
      }
  };
  fp.l10ns.th = Thai;
  var th = fp.l10ns;

  exports.Thai = Thai;
  exports.default = th;

  Object.defineProperty(exports, '__esModule', { value: true });

}));