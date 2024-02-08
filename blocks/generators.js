Blockly.Python['microdriver_servo'] = function (block) {
  Blockly.Python.definitions_['import_microDriver'] = 'import microDriver';
  
  var dropdown_index = block.getFieldValue('index');
  var value_degree = Blockly.Python.valueToCode(block, 'degree', python.Order.ATOMIC);

  var code = `microDriver.servo(microDriver.${dropdown_index}, ${value_degree})\n`;
  return code;
};

Blockly.Python['microdriver_motor'] = function (block) {
  Blockly.Python.definitions_['import_microDriver'] = 'import microDriver';

  var dropdown_index = block.getFieldValue('index');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', python.Order.ATOMIC);

  var code = `microDriver.MotorRun(microDriver.${dropdown_index}, microDriver.${dropdown_dir}, ${value_speed})\n`;
  return code;
};

Blockly.Python['microdriver_stepper_degree_42'] = function (block) {
  Blockly.Python.definitions_['import_microDriver'] = 'import microDriver';

  var dropdown_index = block.getFieldValue('index');
  var dropdown_dir = block.getFieldValue('dir');
  var value_degree = Blockly.Python.valueToCode(block, 'degree', python.Order.ATOMIC);

  var code = `microDriver.stepperDegree_42(microDriver.${dropdown_index}, microDriver.${dropdown_dir}, ${value_degree})\n`;
  return code;
};

Blockly.Python['microdriver_stepper_degree_28'] = function (block) {
  Blockly.Python.definitions_['import_microDriver'] = 'import microDriver';

  var dropdown_index = block.getFieldValue('index');
  var dropdown_dir = block.getFieldValue('dir');
  var value_degree = Blockly.Python.valueToCode(block, 'degree', python.Order.ATOMIC);

  var code = `microDriver.stepperDegree_28(microDriver.${dropdown_index}, microDriver.${dropdown_dir}, ${value_degree})\n`;
  return code;
};

Blockly.Python['microdriver_stepper_turn_42'] = function (block) {
  Blockly.Python.definitions_['import_microDriver'] = 'import microDriver';

  var dropdown_index = block.getFieldValue('index');
  var dropdown_dir = block.getFieldValue('dir');
  var value_turn = Blockly.Python.valueToCode(block, 'turn', python.Order.ATOMIC);
  
  var code = `microDriver.stepperTurn_42(microDriver.${dropdown_index}, microDriver.${dropdown_dir}, ${value_turn})\n`;
  return code;
};

Blockly.Python['microdriver_stepper_turn_28'] = function (block) {
  Blockly.Python.definitions_['import_microDriver'] = 'import microDriver';

  var dropdown_index = block.getFieldValue('index');
  var dropdown_dir = block.getFieldValue('dir');
  var value_turn = Blockly.Python.valueToCode(block, 'turn', python.Order.ATOMIC);
  
  var code = `microDriver.stepperTurn_28(microDriver.${dropdown_index}, microDriver.${dropdown_dir}, ${value_turn})\n`;
  return code;
};

Blockly.Python['microdriver_stepper_degree_dual_42'] = function (block) {
  Blockly.Python.definitions_['import_microDriver'] = 'import microDriver';

  var dropdown_stepper = block.getFieldValue('stepper');
  var dropdown_direction1 = block.getFieldValue('direction1');
  var value_degree1 = Blockly.Python.valueToCode(block, 'degree1', python.Order.ATOMIC);
  var dropdown_direction2 = block.getFieldValue('direction2');
  var value_degree2 = Blockly.Python.valueToCode(block, 'degree2', python.Order.ATOMIC);
  
  var code = `microDriver.stepperDegreeDual_42(microDriver.${dropdown_stepper}, microDriver.${dropdown_direction1}, ${value_degree1}, microDriver.${dropdown_direction2}, ${value_degree2})\n`;
  return code;
};

Blockly.Python['microdriver_stepper_turn_dual_42'] = function (block) {
  Blockly.Python.definitions_['import_microDriver'] = 'import microDriver';

  var dropdown_stepper = block.getFieldValue('stepper');
  var dropdown_direction1 = block.getFieldValue('direction1');
  var value_turn1 = Blockly.Python.valueToCode(block, 'turn1', python.Order.ATOMIC);
  var dropdown_direction2 = block.getFieldValue('direction2');
  var value_turn2 = Blockly.Python.valueToCode(block, 'turn2', python.Order.ATOMIC);
  
  var code = `microDriver.stepperTurnDual_42(microDriver.${dropdown_stepper}, microDriver.${dropdown_direction1}, ${value_turn1}, microDriver.${dropdown_direction2}, ${value_turn2})\n`;
  return code;
};

Blockly.Python['microdriver_motor_stop'] = function (block) {
  Blockly.Python.definitions_['import_microDriver'] = 'import microDriver';

  var dropdown_index = block.getFieldValue('index');

  var code = `microDriver.motorStop(${dropdown_index})\n`;
  return code;
};

Blockly.Python['microdriver_motor_stop_all'] = function (block) {
  Blockly.Python.definitions_['import_microDriver'] = 'import microDriver';
  
  var code = 'microDriver.motorStopAll()\n';
  return code;
};
