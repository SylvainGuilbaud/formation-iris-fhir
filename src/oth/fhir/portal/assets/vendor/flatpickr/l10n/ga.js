(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.ga = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Irish = {
      firstDayOfWeek: 1,
      weekdays: {
          shorthand: ["Dom", "Lua", "MÃ¡i", "CÃ©a", "DÃ©a", "Aoi", "Sat"],
          longhand: [
              "DÃ© Domhnaigh",
              "DÃ© Luain",
              "DÃ© MÃ¡irt",
              "DÃ© CÃ©adaoin",
              "DÃ©ardaoin",
              "DÃ© hAoine",
              "DÃ© Sathairn",
          ]
      },
      months: {
          shorthand: [
              "Ean",
              "Fea",
              "MÃ¡r",
              "Aib",
              "Bea",
              "Mei",
              "IÃºi",
              "LÃºn",
              "MFo",
              "DFo",
              "Sam",
              "Nol",
          ],
          longhand: [
              "EanÃ¡ir",
              "Feabhra",
              "MÃ¡rta",
              "AibreÃ¡n",
              "Bealtaine",
              "Meitheamh",
              "IÃºil",
              "LÃºnasa",
              "MeÃ¡n FÃ³mhair",
              "Deireadh FÃ³mhair",
              "Samhain",
              "Nollaig",
          ]
      },
      time_24hr: true
  };
  fp.l10ns.hr = Irish;
  var ga = fp.l10ns;

  exports.Irish = Irish;
  exports.default = ga;

  Object.defineProperty(exports, '__esModule', { value: true });

}));