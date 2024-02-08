Blockly.defineBlocksWithJsonArray([
  {
    "type": "microdriver_servo",
    "message0": "Servo %1 %2 degree %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "index",
        "options": [
          [
            "S1",
            "S1"
          ],
          [
            "S2",
            "S2"
          ],
          [
            "S3",
            "S3"
          ],
          [
            "S4",
            "S4"
          ],
          [
            "S5",
            "S5"
          ],
          [
            "S6",
            "S6"
          ],
          [
            "S7",
            "S7"
          ],
          [
            "S8",
            "S8"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "degree",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "microdriver_motor",
    "message0": "Motor %1 dir %2 %3 speed %4",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "index",
        "options": [
          [
            "M1",
            "M1"
          ],
          [
            "M2",
            "M2"
          ],
          [
            "M3",
            "M3"
          ],
          [
            "M4",
            "M4"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "dir",
        "options": [
          [
            "CW",
            "CW"
          ],
          [
            "CCW",
            "CCW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "speed",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "microdriver_stepper_degree_42",
    "message0": "Stepper 42 %1 dir %2 %3 degree %4",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "index",
        "options": [
          [
            "M1_M2",
            "M1_M2"
          ],
          [
            "M3_M4",
            "M3_M4"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "dir",
        "options": [
          [
            "CW",
            "CW"
          ],
          [
            "CCW",
            "CCW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "degree",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "microdriver_stepper_degree_28",
    "message0": "Stepper 28 %1 dir %2 %3 degree %4",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "index",
        "options": [
          [
            "M1_M2",
            "M1_M2"
          ],
          [
            "M3_M4",
            "M3_M4"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "dir",
        "options": [
          [
            "CW",
            "CW"
          ],
          [
            "CCW",
            "CCW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "degree",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "microdriver_stepper_turn_42",
    "message0": "Stepper 42 %1 dir %2 %3 turn %4",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "index",
        "options": [
          [
            "M1_M2",
            "M1_M2"
          ],
          [
            "M3_M4",
            "M3_M4"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "dir",
        "options": [
          [
            "CW",
            "CW"
          ],
          [
            "CCW",
            "CCW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "turn",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "microdriver_stepper_turn_28",
    "message0": "Stepper 28 %1 dir %2 %3 turn %4",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "index",
        "options": [
          [
            "M1_M2",
            "M1_M2"
          ],
          [
            "M3_M4",
            "M3_M4"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "dir",
        "options": [
          [
            "CW",
            "CW"
          ],
          [
            "CCW",
            "CCW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "turn",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "microdriver_stepper_degree_dual_42",
    "message0": "Dual Stepper 28 %1 %2 M1_M2 dir %3 %4 degree %5 M3_M4 dir %6 %7 degree %8",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "stepper",
        "options": [
          [
            "42",
            "Ste1"
          ],
          [
            "28",
            "Ste2"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "direction1",
        "options": [
          [
            "CW",
            "CW"
          ],
          [
            "CCW",
            "CCW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "degree1",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "direction2",
        "options": [
          [
            "CW",
            "CW"
          ],
          [
            "CCW",
            "CCW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "degree2",
        "check": "Number"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "microdriver_stepper_turn_dual_42",
    "message0": "Dual Stepper 28 %1 %2 M1_M2 dir %3 %4 turn %5 M3_M4 dir %6 %7 turn %8",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "stepper",
        "options": [
          [
            "42",
            "1"
          ],
          [
            "28",
            "2"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "direction1",
        "options": [
          [
            "CW",
            "CW"
          ],
          [
            "CCW",
            "CCW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "turn1",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "direction2",
        "options": [
          [
            "CW",
            "CW"
          ],
          [
            "CCW",
            "CCW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "turn2",
        "check": "Number"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "microdriver_motor_stop",
    "message0": "Motor stop %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "index",
        "options": [
          [
            "M1",
            "M1"
          ],
          [
            "M2",
            "M2"
          ],
          [
            "M3",
            "M3"
          ],
          [
            "M4",
            "M4"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "microdriver_motor_stop_all",
    "message0": "Motor Stop All",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  }
]);
