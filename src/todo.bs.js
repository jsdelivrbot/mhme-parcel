// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List        = require("bs-platform/lib/js/list.js");
var $$Array     = require("bs-platform/lib/js/array.js");
var Block       = require("bs-platform/lib/js/block.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var React       = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

function valueFromEvent(evt) {
  return evt.target.value;
}

function str(prim) {
  return prim;
}

var component = ReasonReact.statelessComponent("TodoItem");

function make(todo, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("li", {
                  className: "item"
                }, todo[/* title */0]);
    });
  return newrecord;
}

var TodoItem = /* module */[
  /* component */component,
  /* make */make
];

var component$1 = ReasonReact.reducerComponent("Todo");

function make$1() {
  var newrecord = component$1.slice();
  newrecord[/* render */9] = (function (self) {
      var value = self[/* state */2][/* value */0];
      return React.createElement("div", undefined, React.createElement("input", {
                      value: value,
                      onChange: (function ($$event) {
                          return Curry._1(self[/* send */4], /* Update */[$$event.target.value]);
                        })
                    }), React.createElement("button", {
                      onClick: (function () {
                          return Curry._1(self[/* send */4], /* Add */0);
                        })
                    }, "Add Todo"), React.createElement("ul", undefined, $$Array.of_list(List.map((function (todo) {
                                return ReasonReact.element(/* None */0, /* None */0, make(todo, /* array */[]));
                              }), self[/* state */2][/* todos */1]))));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* value */"",
              /* todos : :: */[
                /* record */[
                  /* title */"Finish this component",
                  /* completed : false */0
                ],
                /* [] */0
              ]
            ];
    });
  newrecord[/* reducer */12] = (function (action, state) {
      if (action) {
        return /* Update */Block.__(0, [/* record */[
                    /* value */action[0],
                    /* todos */state[/* todos */1]
                  ]]);
      } else {
        return /* Update */Block.__(0, [/* record */[
                    /* value */"",
                    /* todos : :: */[
                      /* record */[
                        /* title */state[/* value */0],
                        /* completed : false */0
                      ],
                      state[/* todos */1]
                    ]
                  ]]);
      }
    });
  return newrecord;
}

var todo = ReasonReact.wrapReasonForJs(component$1, (function () {
        return make$1(/* array */[]);
      }));

exports.valueFromEvent = valueFromEvent;
exports.str            = str;
exports.TodoItem       = TodoItem;
exports.component      = component$1;
exports.make           = make$1;
exports.todo           = todo;
/* component Not a pure module */
