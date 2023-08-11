(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.hi = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Hindi = {
      weekdays: {
          shorthand: ["à¤°à¤µà¤¿", "à¤¸à¥à¤®", "à¤®à¤à¤à¤²", "à¤¬à¥à¤§", "à¤à¥à¤°à¥", "à¤¶à¥à¤à¥à¤°", "à¤¶à¤¨à¤¿"],
          longhand: [
              "à¤°à¤µà¤¿à¤µà¤¾à¤°",
              "à¤¸à¥à¤®à¤µà¤¾à¤°",
              "à¤®à¤à¤à¤²à¤µà¤¾à¤°",
              "à¤¬à¥à¤§à¤µà¤¾à¤°",
              "à¤à¥à¤°à¥à¤µà¤¾à¤°",
              "à¤¶à¥à¤à¥à¤°à¤µà¤¾à¤°",
              "à¤¶à¤¨à¤¿à¤µà¤¾à¤°",
          ]
      },
      months: {
          shorthand: [
              "à¤à¤¨",
              "à¤«à¤°",
              "à¤®à¤¾à¤°à¥à¤",
              "à¤à¤ªà¥à¤°à¥à¤²",
              "à¤®à¤",
              "à¤à¥à¤¨",
              "à¤à¥à¤²à¤¾à¤",
              "à¤à¤",
              "à¤¸à¤¿à¤¤",
              "à¤à¤à¥à¤",
              "à¤¨à¤µ",
              "à¤¦à¤¿",
          ],
          longhand: [
              "à¤à¤¨à¤µà¤°à¥ ",
              "à¤«à¤°à¤µà¤°à¥",
              "à¤®à¤¾à¤°à¥à¤",
              "à¤à¤ªà¥à¤°à¥à¤²",
              "à¤®à¤",
              "à¤à¥à¤¨",
              "à¤à¥à¤²à¤¾à¤",
              "à¤à¤à¤¸à¥à¤¤ ",
              "à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°",
              "à¤à¤à¥à¤à¥à¤¬à¤°",
              "à¤¨à¤µà¤®à¥à¤¬à¤°",
              "à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°",
          ]
      }
  };
  fp.l10ns.hi = Hindi;
  var hi = fp.l10ns;

  exports.Hindi = Hindi;
  exports.default = hi;

  Object.defineProperty(exports, '__esModule', { value: true });

}));