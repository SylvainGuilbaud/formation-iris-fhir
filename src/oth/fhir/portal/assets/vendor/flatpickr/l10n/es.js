(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.es = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Spanish = {
      weekdays: {
          shorthand: ["Dom", "Lun", "Mar", "MiÃ©", "Jue", "Vie", "SÃ¡b"],
          longhand: [
              "Domingo",
              "Lunes",
              "Martes",
              "MiÃ©rcoles",
              "Jueves",
              "Viernes",
              "SÃ¡bado",
          ]
      },
      months: {
          shorthand: [
              "Ene",
              "Feb",
              "Mar",
              "Abr",
              "May",
              "Jun",
              "Jul",
              "Ago",
              "Sep",
              "Oct",
              "Nov",
              "Dic",
          ],
          longhand: [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre",
          ]
      },
      ordinal: function () {
          return "Âº";
      },
      firstDayOfWeek: 1,
      rangeSeparator: " a ",
      time_24hr: true
  };
  fp.l10ns.es = Spanish;
  var es = fp.l10ns;

  exports.Spanish = Spanish;
  exports.default = es;

  Object.defineProperty(exports, '__esModule', { value: true });

}));