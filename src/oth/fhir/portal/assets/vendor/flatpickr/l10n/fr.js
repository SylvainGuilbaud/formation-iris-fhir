(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.fr = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var French = {
      firstDayOfWeek: 1,
      weekdays: {
          shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
          longhand: [
              "dimanche",
              "lundi",
              "mardi",
              "mercredi",
              "jeudi",
              "vendredi",
              "samedi",
          ]
      },
      months: {
          shorthand: [
              "janv",
              "fÃ©vr",
              "mars",
              "avr",
              "mai",
              "juin",
              "juil",
              "aoÃ»t",
              "sept",
              "oct",
              "nov",
              "dÃ©c",
          ],
          longhand: [
              "janvier",
              "fÃ©vrier",
              "mars",
              "avril",
              "mai",
              "juin",
              "juillet",
              "aoÃ»t",
              "septembre",
              "octobre",
              "novembre",
              "dÃ©cembre",
          ]
      },
      ordinal: function (nth) {
          if (nth > 1)
              return "";
          return "er";
      },
      rangeSeparator: " au ",
      weekAbbreviation: "Sem",
      scrollTitle: "DÃ©filer pour augmenter la valeur",
      toggleTitle: "Cliquer pour basculer",
      time_24hr: true
  };
  fp.l10ns.fr = French;
  var fr = fp.l10ns;

  exports.French = French;
  exports.default = fr;

  Object.defineProperty(exports, '__esModule', { value: true });

}));