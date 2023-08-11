(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.pt = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Portuguese = {
      weekdays: {
          shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b"],
          longhand: [
              "Domingo",
              "Segunda-feira",
              "TerÃ§a-feira",
              "Quarta-feira",
              "Quinta-feira",
              "Sexta-feira",
              "SÃ¡bado",
          ]
      },
      months: {
          shorthand: [
              "Jan",
              "Fev",
              "Mar",
              "Abr",
              "Mai",
              "Jun",
              "Jul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dez",
          ],
          longhand: [
              "Janeiro",
              "Fevereiro",
              "MarÃ§o",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
          ]
      },
      rangeSeparator: " atÃ© ",
      time_24hr: true
  };
  fp.l10ns.pt = Portuguese;
  var pt = fp.l10ns;

  exports.Portuguese = Portuguese;
  exports.default = pt;

  Object.defineProperty(exports, '__esModule', { value: true });

}));