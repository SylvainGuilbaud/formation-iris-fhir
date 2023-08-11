(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.gr = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Greek = {
      weekdays: {
          shorthand: ["ÎÏ", "ÎÎµ", "Î¤Ï", "Î¤Îµ", "Î Î­", "Î Î±", "Î£Î¬"],
          longhand: [
              "ÎÏÏÎ¹Î±ÎºÎ®",
              "ÎÎµÏÏÎ­ÏÎ±",
              "Î¤ÏÎ¯ÏÎ·",
              "Î¤ÎµÏÎ¬ÏÏÎ·",
              "Î Î­Î¼ÏÏÎ·",
              "Î Î±ÏÎ±ÏÎºÎµÏÎ®",
              "Î£Î¬Î²Î²Î±ÏÎ¿",
          ]
      },
      months: {
          shorthand: [
              "ÎÎ±Î½",
              "Î¦ÎµÎ²",
              "ÎÎ¬Ï",
              "ÎÏÏ",
              "ÎÎ¬Î¹",
              "ÎÎ¿Ï",
              "ÎÎ¿Ï",
              "ÎÏÎ³",
              "Î£ÎµÏ",
              "ÎÎºÏ",
              "ÎÎ¿Î­",
              "ÎÎµÎº",
          ],
          longhand: [
              "ÎÎ±Î½Î¿ÏÎ¬ÏÎ¹Î¿Ï",
              "Î¦ÎµÎ²ÏÎ¿ÏÎ¬ÏÎ¹Î¿Ï",
              "ÎÎ¬ÏÏÎ¹Î¿Ï",
              "ÎÏÏÎ¯Î»Î¹Î¿Ï",
              "ÎÎ¬Î¹Î¿Ï",
              "ÎÎ¿ÏÎ½Î¹Î¿Ï",
              "ÎÎ¿ÏÎ»Î¹Î¿Ï",
              "ÎÏÎ³Î¿ÏÏÏÎ¿Ï",
              "Î£ÎµÏÏÎ­Î¼Î²ÏÎ¹Î¿Ï",
              "ÎÎºÏÏÎ²ÏÎ¹Î¿Ï",
              "ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï",
              "ÎÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return "";
      },
      weekAbbreviation: "ÎÎ²Î´",
      rangeSeparator: " Î­ÏÏ ",
      scrollTitle: "ÎÎµÏÎ±ÎºÏÎ»Î®ÏÏÎµ Î³Î¹Î± ÏÏÎ¿ÏÎ±ÏÎ¾Î·ÏÎ·",
      toggleTitle: "ÎÎ¬Î½ÏÎµ ÎºÎ»Î¹Îº Î³Î¹Î± Î±Î»Î»Î±Î³Î®",
      amPM: ["Î Î", "ÎÎ"]
  };
  fp.l10ns.gr = Greek;
  var gr = fp.l10ns;

  exports.Greek = Greek;
  exports.default = gr;

  Object.defineProperty(exports, '__esModule', { value: true });

}));