(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['zh-tw'] = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var MandarinTraditional = {
      weekdays: {
          shorthand: ["é±æ¥", "é±ä¸", "é±äº", "é±ä¸", "é±å", "é±äº", "é±å­"],
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
      weekAbbreviation: "é±",
      scrollTitle: "æ»¾ååæ",
      toggleTitle: "é»æåæ 12/24 å°ææå¶"
  };
  fp.l10ns.zh_tw = MandarinTraditional;
  var zhTw = fp.l10ns;

  exports.MandarinTraditional = MandarinTraditional;
  exports.default = zhTw;

  Object.defineProperty(exports, '__esModule', { value: true });

}));