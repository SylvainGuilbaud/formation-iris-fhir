(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.zh = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Mandarin = {
      weekdays: {
          shorthand: ["å¨æ¥", "å¨ä¸", "å¨äº", "å¨ä¸", "å¨å", "å¨äº", "å¨å­"],
          longhand: [
              "æææ¥",
              "ææä¸",
              "ææäº",
              "ææä¸",
              "ææå",
              "ææäº",
              "ææå­",
          ]
      },
      months: {
          shorthand: [
              "ä¸æ",
              "äºæ",
              "ä¸æ",
              "åæ",
              "äºæ",
              "å­æ",
              "ä¸æ",
              "å«æ",
              "ä¹æ",
              "åæ",
              "åä¸æ",
              "åäºæ",
          ],
          longhand: [
              "ä¸æ",
              "äºæ",
              "ä¸æ",
              "åæ",
              "äºæ",
              "å­æ",
              "ä¸æ",
              "å«æ",
              "ä¹æ",
              "åæ",
              "åä¸æ",
              "åäºæ",
          ]
      },
      rangeSeparator: " è³ ",
      weekAbbreviation: "å¨",
      scrollTitle: "æ»å¨åæ¢",
      toggleTitle: "ç¹å»åæ¢ 12/24 å°æ¶æ¶å¶"
  };
  fp.l10ns.zh = Mandarin;
  var zh = fp.l10ns;

  exports.Mandarin = Mandarin;
  exports.default = zh;

  Object.defineProperty(exports, '__esModule', { value: true });

}));