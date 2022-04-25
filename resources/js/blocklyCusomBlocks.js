'use strict'
import Blockly from 'blockly'
import 'blockly/lua'
import blocks from '@/blocks.json'

const registerBlocks = () => {
  Blockly.common.defineBlocksWithJsonArray(blocks)

  Blockly.Lua.math_atan2 = function (block) {
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const code = 'math.atan2 (' + valueY + ', ' + valueX + ')'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.math_sin = function (block) {
    const valueValue = Blockly.Lua.valueToCode(block, 'value', Blockly.Lua.ORDER_ATOMIC)
    const code = 'math.sin(' + valueValue + ')'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.math_cos = function (block) {
    const valueVal = Blockly.Lua.valueToCode(block, 'val', Blockly.Lua.ORDER_ATOMIC)
    const code = 'math.cos(' + valueVal + ')'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.for_index_item = function (block) {
    const variableIndex = Blockly.Lua.nameDB_.getName(block.getFieldValue('index'), 'VARIABLE')
    const variableItem = Blockly.Lua.nameDB_.getName(block.getFieldValue('item'), 'VARIABLE')
    const valueArray = Blockly.Lua.valueToCode(block, 'array', Blockly.Lua.ORDER_ATOMIC)
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'for ' + variableIndex + ', ' + variableItem + ' in ipairs(' + valueArray + ') do\n' + statementsInput + 'end\n'
  }

  Blockly.Lua.teble_remove = function (block) {
    const valueTable = Blockly.Lua.valueToCode(block, 'table', Blockly.Lua.ORDER_ATOMIC)
    const valueIndex = Blockly.Lua.valueToCode(block, 'index', Blockly.Lua.ORDER_ATOMIC)
    return 'table.remove(' + valueTable + ', ' + valueIndex + ')\n'
  }

  Blockly.Lua.graphics_setnewfont = function (block) {
    const valueSize = Blockly.Lua.valueToCode(block, 'size', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.setNewFont( ' + valueSize + ' )\n'
  }

  Blockly.Lua.love_mousereleased = function (block) {
    const variableX = Blockly.Lua.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = Blockly.Lua.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableButton = Blockly.Lua.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const variableIstouchy = Blockly.Lua.nameDB_.getName(block.getFieldValue('istouchy'), 'VARIABLE')
    const variablePresses = Blockly.Lua.nameDB_.getName(block.getFieldValue('presses'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.mousereleased( ' + variableX + ', ' + variableY + ', ' + variableButton + ', ' + variableIstouchy + ', ' + variablePresses + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_keypressed = function (block) {
    const variableKey = Blockly.Lua.nameDB_.getName(block.getFieldValue('key'), 'VARIABLE')
    const variableScancode = Blockly.Lua.nameDB_.getName(block.getFieldValue('scancode'), 'VARIABLE')
    const variableIsrepeat = Blockly.Lua.nameDB_.getName(block.getFieldValue('isrepeat'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.keypressed( ' + variableKey + ', ' + variableScancode + ', ' + variableIsrepeat + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_keyreleased = function (block) {
    const variableKey = Blockly.Lua.nameDB_.getName(block.getFieldValue('key'), 'VARIABLE')
    const variableScancode = Blockly.Lua.nameDB_.getName(block.getFieldValue('scancode'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.keyreleased( ' + variableKey + ', ' + variableScancode + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_directorydropped = function (block) {
    const variablePath = Blockly.Lua.nameDB_.getName(block.getFieldValue('path'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.directorydropped( ' + variablePath + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_displayrotated = function (block) {
    const variableIndex = Blockly.Lua.nameDB_.getName(block.getFieldValue('index'), 'VARIABLE')
    const variableOrientation = Blockly.Lua.nameDB_.getName(block.getFieldValue('orientation'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.displayrotated( ' + variableIndex + ', ' + variableOrientation + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_draw = function (block) {
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.draw() \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_errorhandler = function (block) {
    const variableMsg = Blockly.Lua.nameDB_.getName(block.getFieldValue('msg'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.errorhandler( ' + variableMsg + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_filedropped = function (block) {
    const variableFile = Blockly.Lua.nameDB_.getName(block.getFieldValue('file'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.filedropped( ' + variableFile + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_focus = function (block) {
    const variableFocus = Blockly.Lua.nameDB_.getName(block.getFieldValue('focus'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.focus( ' + variableFocus + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_gamepadaxis = function (block) {
    const variableJoystick = Blockly.Lua.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableAxis = Blockly.Lua.nameDB_.getName(block.getFieldValue('axis'), 'VARIABLE')
    const variableValue = Blockly.Lua.nameDB_.getName(block.getFieldValue('value'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.gamepadaxis( ' + variableJoystick + ', ' + variableAxis + ', ' + variableValue + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_gamepadpressed = function (block) {
    const variableJoystick = Blockly.Lua.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableButton = Blockly.Lua.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.gamepadpressed( ' + variableJoystick + ', ' + variableButton + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_gamepadreleased = function (block) {
    const variableJoystick = Blockly.Lua.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableButton = Blockly.Lua.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.gamepadreleased( ' + variableJoystick + ', ' + variableButton + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_joystickadded = function (block) {
    const variableJoystick = Blockly.Lua.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.joystickadded( ' + variableJoystick + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_joystickaxis = function (block) {
    const variableJoystick = Blockly.Lua.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableAxis = Blockly.Lua.nameDB_.getName(block.getFieldValue('axis'), 'VARIABLE')
    const variableValue = Blockly.Lua.nameDB_.getName(block.getFieldValue('value'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.joystickaxis( ' + variableJoystick + ', ' + variableAxis + ', ' + variableValue + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_joystickhat = function (block) {
    const variableJoystick = Blockly.Lua.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableHat = Blockly.Lua.nameDB_.getName(block.getFieldValue('hat'), 'VARIABLE')
    const variableDirection = Blockly.Lua.nameDB_.getName(block.getFieldValue('direction'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.joystickhat( ' + variableJoystick + ', ' + variableHat + ', ' + variableDirection + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_joystickpressed = function (block) {
    const variableJoystick = Blockly.Lua.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableButton = Blockly.Lua.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.joystickpressed( ' + variableJoystick + ', ' + variableButton + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_joystickreleased = function (block) {
    const variableJoystick = Blockly.Lua.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const variableButton = Blockly.Lua.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.joystickreleased( ' + variableJoystick + ', ' + variableButton + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_joystickremoved = function (block) {
    const variableJoystick = Blockly.Lua.nameDB_.getName(block.getFieldValue('joystick'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.joystickremoved( ' + variableJoystick + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_load = function (block) {
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.load() \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_lowmemory = function (block) {
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.lowmemory() \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_mousefocus = function (block) {
    const variableFocus = Blockly.Lua.nameDB_.getName(block.getFieldValue('focus'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.mousefocus( ' + variableFocus + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_mousemoved = function (block) {
    const variableX = Blockly.Lua.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = Blockly.Lua.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableDx = Blockly.Lua.nameDB_.getName(block.getFieldValue('dx'), 'VARIABLE')
    const variableDy = Blockly.Lua.nameDB_.getName(block.getFieldValue('dy'), 'VARIABLE')
    const variableIstouch = Blockly.Lua.nameDB_.getName(block.getFieldValue('istouch'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.mousemoved( ' + variableX + ', ' + variableY + ', ' + variableDx + ', ' + variableDy + ', ' + variableIstouch + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_mousepressed = function (block) {
    const variableX = Blockly.Lua.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = Blockly.Lua.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableButton = Blockly.Lua.nameDB_.getName(block.getFieldValue('button'), 'VARIABLE')
    const variableIstouch = Blockly.Lua.nameDB_.getName(block.getFieldValue('istouch'), 'VARIABLE')
    const variablePresses = Blockly.Lua.nameDB_.getName(block.getFieldValue('presses'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.mousepressed( ' + variableX + ', ' + variableY + ', ' + variableButton + ', ' + variableIstouch + ', ' + variablePresses + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_quit = function (block) {
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.quit() \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_resize = function (block) {
    const variableWidth = Blockly.Lua.nameDB_.getName(block.getFieldValue('width'), 'VARIABLE')
    const variableHeight = Blockly.Lua.nameDB_.getName(block.getFieldValue('height'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.resize( ' + variableWidth + ', ' + variableHeight + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_run = function (block) {
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.run() \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_textedited = function (block) {
    const variableText = Blockly.Lua.nameDB_.getName(block.getFieldValue('text'), 'VARIABLE')
    const variableStart = Blockly.Lua.nameDB_.getName(block.getFieldValue('start'), 'VARIABLE')
    const variableLength = Blockly.Lua.nameDB_.getName(block.getFieldValue('length'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.textedited( ' + variableText + ', ' + variableStart + ', ' + variableLength + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_textinput = function (block) {
    const variableText = Blockly.Lua.nameDB_.getName(block.getFieldValue('text'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.textinput( ' + variableText + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_threaderror = function (block) {
    const variableThread = Blockly.Lua.nameDB_.getName(block.getFieldValue('thread'), 'VARIABLE')
    const variableErrorstr = Blockly.Lua.nameDB_.getName(block.getFieldValue('errorstr'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.threaderror( ' + variableThread + ', ' + variableErrorstr + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_touchmoved = function (block) {
    const variableId = Blockly.Lua.nameDB_.getName(block.getFieldValue('id'), 'VARIABLE')
    const variableX = Blockly.Lua.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = Blockly.Lua.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableDx = Blockly.Lua.nameDB_.getName(block.getFieldValue('dx'), 'VARIABLE')
    const variableDy = Blockly.Lua.nameDB_.getName(block.getFieldValue('dy'), 'VARIABLE')
    const variablePressure = Blockly.Lua.nameDB_.getName(block.getFieldValue('pressure'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.touchmoved( ' + variableId + ', ' + variableX + ', ' + variableY + ', ' + variableDx + ', ' + variableDy + ', ' + variablePressure + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_touchpressed = function (block) {
    const variableId = Blockly.Lua.nameDB_.getName(block.getFieldValue('id'), 'VARIABLE')
    const variableX = Blockly.Lua.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = Blockly.Lua.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableDx = Blockly.Lua.nameDB_.getName(block.getFieldValue('dx'), 'VARIABLE')
    const variableDy = Blockly.Lua.nameDB_.getName(block.getFieldValue('dy'), 'VARIABLE')
    const variablePressure = Blockly.Lua.nameDB_.getName(block.getFieldValue('pressure'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.touchpressed( ' + variableId + ', ' + variableX + ', ' + variableY + ', ' + variableDx + ', ' + variableDy + ', ' + variablePressure + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_touchreleased = function (block) {
    const variableId = Blockly.Lua.nameDB_.getName(block.getFieldValue('id'), 'VARIABLE')
    const variableX = Blockly.Lua.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = Blockly.Lua.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const variableDx = Blockly.Lua.nameDB_.getName(block.getFieldValue('dx'), 'VARIABLE')
    const variableDy = Blockly.Lua.nameDB_.getName(block.getFieldValue('dy'), 'VARIABLE')
    const variablePressure = Blockly.Lua.nameDB_.getName(block.getFieldValue('pressure'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.touchreleased( ' + variableId + ', ' + variableX + ', ' + variableY + ', ' + variableDx + ', ' + variableDy + ', ' + variablePressure + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_update = function (block) {
    const variableDt = Blockly.Lua.nameDB_.getName(block.getFieldValue('dt'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.update( ' + variableDt + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_visible = function (block) {
    const variableVisible = Blockly.Lua.nameDB_.getName(block.getFieldValue('visible'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.visible( ' + variableVisible + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.love_wheelmoved = function (block) {
    const variableX = Blockly.Lua.nameDB_.getName(block.getFieldValue('x'), 'VARIABLE')
    const variableY = Blockly.Lua.nameDB_.getName(block.getFieldValue('y'), 'VARIABLE')
    const statementsInput = Blockly.Lua.statementToCode(block, 'input')
    return 'function love.wheelmoved( ' + variableX + ', ' + variableY + ' ) \n' + statementsInput + 'end\n'
  }

  Blockly.Lua.graphics_stencil = function (block) {
    const textStencilfunction = block.getFieldValue('stencilfunction')
    const dropdownAction = block.getFieldValue('action')
    const numberValue = block.getFieldValue('value')
    const valueKeepvalues = Blockly.Lua.valueToCode(block, 'keepvalues', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.stencil( ' + textStencilfunction + ', "' + dropdownAction + '", ' + numberValue + ', ' + valueKeepvalues + ' )\n'
  }

  Blockly.Lua.graphics_rectangle = function (block) {
    const dropdownMode = block.getFieldValue('mode')
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const valueWidth = Blockly.Lua.valueToCode(block, 'width', Blockly.Lua.ORDER_ATOMIC)
    const valueHeight = Blockly.Lua.valueToCode(block, 'height', Blockly.Lua.ORDER_ATOMIC)
    const valueRx = Blockly.Lua.valueToCode(block, 'rx', Blockly.Lua.ORDER_ATOMIC)
    const valueRy = Blockly.Lua.valueToCode(block, 'ry', Blockly.Lua.ORDER_ATOMIC)
    const valueSegments = Blockly.Lua.valueToCode(block, 'segments', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.rectangle("' + dropdownMode + '", ' + valueX + ', ' + valueY + ', ' + valueWidth + ', ' + valueHeight + ', ' + valueRx + ', ' + valueRy + ', ' + valueSegments + ')\n'
  }

  Blockly.Lua.graphics_printf = function (block) {
    const valueText = Blockly.Lua.valueToCode(block, 'text', Blockly.Lua.ORDER_ATOMIC)
    const numberX = block.getFieldValue('x')
    const numberY = block.getFieldValue('y')
    const numberLimit = block.getFieldValue('limit')
    const dropdownAlignmode = block.getFieldValue('AlignMode')
    const numberR = block.getFieldValue('r')
    const numberSx = block.getFieldValue('sx')
    const numberSy = block.getFieldValue('sy')
    const numberOx = block.getFieldValue('ox')
    const numberOy = block.getFieldValue('oy')
    const numberKx = block.getFieldValue('kx')
    const numberKy = block.getFieldValue('ky')
    return 'love.graphics.printf(' + valueText + ', ' + numberX + ', ' + numberY + ', ' + numberLimit + ', "' + dropdownAlignmode + '", ' + numberR + ', ' + numberSx + ', ' + numberSy + ' , ' + numberOx + ', ' + numberOy + ', ' + numberKx + ', ' + numberKy + ')\n'
  }

  Blockly.Lua.graphics_print = function (block) {
    const valueText = Blockly.Lua.valueToCode(block, 'text', Blockly.Lua.ORDER_ATOMIC)
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const valueR = Blockly.Lua.valueToCode(block, 'r', Blockly.Lua.ORDER_ATOMIC)
    const valueSx = Blockly.Lua.valueToCode(block, 'sx', Blockly.Lua.ORDER_ATOMIC)
    const valueSy = Blockly.Lua.valueToCode(block, 'sy', Blockly.Lua.ORDER_ATOMIC)
    const valueOx = Blockly.Lua.valueToCode(block, 'ox', Blockly.Lua.ORDER_ATOMIC)
    const valueOy = Blockly.Lua.valueToCode(block, 'oy', Blockly.Lua.ORDER_ATOMIC)
    const valueKx = Blockly.Lua.valueToCode(block, 'kx', Blockly.Lua.ORDER_ATOMIC)
    const valueKy = Blockly.Lua.valueToCode(block, 'ky', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.print(' + valueText + ', ' + valueX + ', ' + valueY + ', ' + valueR + ', ' + valueSx + ', ' + valueSy + ' , ' + valueOx + ', ' + valueOy + ', ' + valueKx + ', ' + valueKy + ')\n'
  }

  Blockly.Lua.graphics_present = function () {
    return 'love.graphics.present()\n'
  }

  Blockly.Lua.graphics_polygon = function (block) {
    const dropdownDrawmode = block.getFieldValue('DrawMode')
    const valueVertices = Blockly.Lua.valueToCode(block, 'vertices', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.polygon("' + dropdownDrawmode + '", ' + valueVertices + ')\n'
  }

  Blockly.Lua.graphics_points = function (block) {
    const valuePoints = Blockly.Lua.valueToCode(block, 'points', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.points( ' + valuePoints + ' )\n'
  }

  Blockly.Lua.graphics_line = function (block) {
    const valuePoints = Blockly.Lua.valueToCode(block, 'points', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.line( ' + valuePoints + ' )\n'
  }

  Blockly.Lua.graphics_flushbatch = function () {
    return 'love.graphics.flushBatch()\n'
  }

  Blockly.Lua.graphics_ellipse = function (block) {
    const dropdownDrawmode = block.getFieldValue('DrawMode')
    const numberX = block.getFieldValue('x')
    const numberY = block.getFieldValue('y')
    const numberRadiusx = block.getFieldValue('radiusx')
    const numberRadiusy = block.getFieldValue('radiusy')
    const numberSegments = block.getFieldValue('segments')
    return 'love.graphics.ellipse("' + dropdownDrawmode + '", ' + numberX + ', ' + numberY + ', ' + numberRadiusx + ', ' + numberRadiusy + ', ' + numberSegments + ' )\n'
  }

  Blockly.Lua.graphics_drawlayer = function (block) {
    const valueTexture = Blockly.Lua.valueToCode(block, 'texture', Blockly.Lua.ORDER_ATOMIC)
    const numberLayerindex = block.getFieldValue('layerindex')
    const numberX = block.getFieldValue('x')
    const numberY = block.getFieldValue('y')
    const numberR = block.getFieldValue('r')
    const numberSx = block.getFieldValue('sx')
    const numberSy = block.getFieldValue('sy')
    const numberOx = block.getFieldValue('ox')
    const numberOy = block.getFieldValue('oy')
    const numberKx = block.getFieldValue('kx')
    const numberKy = block.getFieldValue('ky')
    return 'love.graphics.drawLayer(' + valueTexture + ', ' + numberLayerindex + ', ' + numberX + ', ' + numberY + ', ' + numberR + ', ' + numberSx + ', ' + numberSy + ' , ' + numberOx + ', ' + numberOy + ', ' + numberKx + ', ' + numberKy + ')\n'
  }

  Blockly.Lua.graphics_draw = function (block) {
    const valueDrawable = Blockly.Lua.valueToCode(block, 'drawable', Blockly.Lua.ORDER_ATOMIC)
    const numberX = block.getFieldValue('x')
    const numberY = block.getFieldValue('y')
    const numberR = block.getFieldValue('r')
    const numberSx = block.getFieldValue('sx')
    const numberSy = block.getFieldValue('sy')
    const numberOx = block.getFieldValue('ox')
    const numberOy = block.getFieldValue('oy')
    const numberKx = block.getFieldValue('kx')
    const numberKy = block.getFieldValue('ky')
    return 'love.graphics.draw(' + valueDrawable + ', ' + numberX + ', ' + numberY + ', ' + numberR + ', ' + numberSx + ', ' + numberSy + ' , ' + numberOx + ', ' + numberOy + ', ' + numberKx + ', ' + numberKy + ')\n'
  }

  Blockly.Lua.graphics_discard = function (block) {
    const valueDiscardcolor = Blockly.Lua.valueToCode(block, 'discardcolor', Blockly.Lua.ORDER_ATOMIC)
    const valueDiscardstencil = Blockly.Lua.valueToCode(block, 'discardstencil', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.discard(' + valueDiscardcolor + ', ' + valueDiscardstencil + ' )\n'
  }

  Blockly.Lua.graphics_clear = function () {
    return 'love.graphics.clear()\n'
  }

  Blockly.Lua.graphics_circle = function (block) {
    const dropdownMode = block.getFieldValue('mode')
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const valueRadius = Blockly.Lua.valueToCode(block, 'radius', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.circle("' + dropdownMode + '", ' + valueX + ', ' + valueY + ', ' + valueRadius + ')\n'
  }

  Blockly.Lua.graphics_arc = function (block) {
    const dropdownDrawmode = block.getFieldValue('drawmode')
    const numberX = block.getFieldValue('x')
    const numberY = block.getFieldValue('y')
    const numberRadius = block.getFieldValue('radius')
    const angleAngle1 = block.getFieldValue('angle1')
    const angleAngle2 = block.getFieldValue('angle2')
    const numberSegments = block.getFieldValue('segments')
    return 'love.graphics.arc("' + dropdownDrawmode + '", ' + numberX + ', ' + numberY + ', ' + numberRadius + ', ' + angleAngle1 + ', ' + angleAngle2 + ' , ' + numberSegments + ')\n'
  }

  Blockly.Lua.graphics_translate = function (block) {
    const valueDx = Blockly.Lua.valueToCode(block, 'dx', Blockly.Lua.ORDER_ATOMIC)
    const valueDy = Blockly.Lua.valueToCode(block, 'dy', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.translate( ' + valueDx + ', ' + valueDy + ' )\n'
  }

  Blockly.Lua.graphics_transformpoint = function (block) {
    const valueGlobalx = Blockly.Lua.valueToCode(block, 'globalX', Blockly.Lua.ORDER_ATOMIC)
    const valueGlobaly = Blockly.Lua.valueToCode(block, 'globalY', Blockly.Lua.ORDER_ATOMIC)
    const code = '{ love.graphics.transformPoint( ' + valueGlobalx + ', ' + valueGlobaly + ' ) }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_shear = function (block) {
    const valueKx = Blockly.Lua.valueToCode(block, 'kx', Blockly.Lua.ORDER_ATOMIC)
    const valueKy = Blockly.Lua.valueToCode(block, 'ky', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.shear( ' + valueKx + ', ' + valueKy + ' )\n'
  }

  Blockly.Lua.graphics_scale = function (block) {
    const valueSx = Blockly.Lua.valueToCode(block, 'sx', Blockly.Lua.ORDER_ATOMIC)
    const valueSy = Blockly.Lua.valueToCode(block, 'sy', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.scale( ' + valueSx + ', ' + valueSy + ' )\n'
  }

  Blockly.Lua.graphics_rotate = function (block) {
    const valueAngle = Blockly.Lua.valueToCode(block, 'angle', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.rotate( ' + valueAngle + ' )\n'
  }

  Blockly.Lua.graphics_push = function () {
    return 'love.graphics.push()\n'
  }

  Blockly.Lua.graphics_pop = function () {
    return 'love.graphics.pop()\n'
  }

  Blockly.Lua.graphics_origin = function () {
    return 'love.graphics.origin()\n'
  }

  Blockly.Lua.graphics_inversetransformpoint = function (block) {
    const valueScreenx = Blockly.Lua.valueToCode(block, 'screenX', Blockly.Lua.ORDER_ATOMIC)
    const valueScreeny = Blockly.Lua.valueToCode(block, 'screenY', Blockly.Lua.ORDER_ATOMIC)
    const code = '{ love.graphics.inverseTransformPoint( ' + valueScreenx + ', ' + valueScreeny + ' ) }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_validateshader = function (block) {
    const valueGles = Blockly.Lua.valueToCode(block, 'gles', Blockly.Lua.ORDER_ATOMIC)
    const valueCode = Blockly.Lua.valueToCode(block, 'code', Blockly.Lua.ORDER_ATOMIC)
    const code = '{ love.graphics.validateShader( ' + valueGles + ', ' + valueCode + ' ) }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_newimage = function (block) {
    const textFilename = block.getFieldValue('filename')
    const code = 'love.graphics.newImage( "' + textFilename + '" )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_getwidth = function () {
    const code = 'love.graphics.getWidth()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_getpixelwidth = function () {
    const code = 'love.graphics.getPixelWidth()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_getpixelheight = function () {
    const code = 'love.graphics.getPixelHeight()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_getpixeldimensions = function () {
    const code = '{ love.graphics.getPixelDimensions() }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_getheight = function () {
    const code = 'love.graphics.getHeight()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_getdimensions = function () {
    const code = '{ love.graphics.getDimensions() }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_getdpiscale = function () {
    const code = 'love.graphics.getDPIScale()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_getbackgroundcolor = function () {
    const code = '{ love.graphics.getBackgroundColor() }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_getcolor = function () {
    const code = '{ love.graphics.getColor() }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_isgammacorrect = function () {
    const code = 'love.graphics.isGammaCorrect()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_isactive = function () {
    const code = 'love.graphics.isActive()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_reset = function () {
    return 'love.graphics.reset()\n'
  }

  Blockly.Lua.graphics_iswireframe = function () {
    const code = 'love.graphics.isWireframe()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_setbackgroundcolor = function (block) {
    const numberRed = block.getFieldValue('red')
    const numberGreen = block.getFieldValue('green')
    const numberBlue = block.getFieldValue('blue')
    const numberAlpha = block.getFieldValue('alpha')
    return 'love.graphics.setBackgroundColor(' + numberRed + ', ' + numberGreen + ', ' + numberBlue + ', ' + numberAlpha + ')\n'
  }

  Blockly.Lua.graphics_setcolor = function (block) {
    const numberRed = block.getFieldValue('red')
    const numberGreen = block.getFieldValue('green')
    const numberBlue = block.getFieldValue('blue')
    const numberAlpha = block.getFieldValue('alpha')
    return 'love.graphics.setColor(' + numberRed + ', ' + numberGreen + ', ' + numberBlue + ', ' + numberAlpha + ')\n'
  }

  Blockly.Lua.graphics_setwireframe = function (block) {
    const valueEnable = Blockly.Lua.valueToCode(block, 'enable', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.setWireframe(' + valueEnable + ')\n'
  }

  Blockly.Lua.graphics_setscissor = function (block) {
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const valueWidth = Blockly.Lua.valueToCode(block, 'width', Blockly.Lua.ORDER_ATOMIC)
    const valueHeight = Blockly.Lua.valueToCode(block, 'height', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.setScissor(' + valueX + ', ' + valueY + ', ' + valueWidth + ', ' + valueHeight + ')\n'
  }

  Blockly.Lua.graphics_getpointsize = function () {
    const code = 'love.graphics.getPointSize()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_setpointsize = function (block) {
    const valueSize = Blockly.Lua.valueToCode(block, 'size', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.setPointSize(' + valueSize + ')\n'
  }

  Blockly.Lua.graphics_getlinewidth = function () {
    const code = 'love.graphics.getLineWidth()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.graphics_setlinewidth = function (block) {
    const valueWidth = Blockly.Lua.valueToCode(block, 'width', Blockly.Lua.ORDER_ATOMIC)
    return 'love.graphics.setLineWidth(' + valueWidth + ')\n'
  }

  Blockly.Lua.graphics_setlinestyle = function (block) {
    const dropdownStyle = block.getFieldValue('style')
    return 'love.graphics.setLineStyle("' + dropdownStyle + '")\n'
  }

  Blockly.Lua.graphics_setlinejoin = function (block) {
    const dropdownJoin = block.getFieldValue('join')
    return 'love.graphics.setLineJoin("' + dropdownJoin + '")\n'
  }

  Blockly.Lua.keyboard_settextinput = function (block) {
    const valueEnable = Blockly.Lua.valueToCode(block, 'enable', Blockly.Lua.ORDER_ATOMIC)
    return 'love.keyboard.setTextInput(' + valueEnable + ')\n'
  }

  Blockly.Lua.keyboard_setkeyrepeat = function (block) {
    const valueEnable = Blockly.Lua.valueToCode(block, 'enable', Blockly.Lua.ORDER_ATOMIC)
    return 'love.keyboard.setKeyRepeat(' + valueEnable + ')\n'
  }

  Blockly.Lua.keyboard_isscancodedown = function (block) {
    const textScancode = block.getFieldValue('scancode')
    const code = 'love.keyboard.isScancodeDown(' + textScancode + ')'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.keyboard_isdown = function (block) {
    const textKey = block.getFieldValue('key')
    const code = 'love.keyboard.isDown("' + textKey + '")'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.keyboard_hastextinput = function () {
    const code = 'love.keyboard.hasTextInput()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.keyboard_hasscreenkeyboard = function () {
    const code = 'love.keyboard.hasScreenKeyboard()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.keyboard_haskeyrepeat = function () {
    const code = 'love.keyboard.hasKeyRepeat()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.keyboard_getscancodefromkey = function (block) {
    const textKey = block.getFieldValue('key')
    const code = 'love.keyboard.getScancodeFromKey(' + textKey + ')'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.keyboard_getkeyfromscancode = function (block) {
    const textScancode = block.getFieldValue('scancode')
    const code = 'love.keyboard.getKeyFromScancode(' + textScancode + ')'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.touch_gettouches = function () {
    const code = 'love.touch.getTouches()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.touch_getpressure = function (block) {
    const valueId = Blockly.Lua.valueToCode(block, 'id', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.touch.getPressure(' + valueId + ')'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.touch_getposition = function (block) {
    const valueId = Blockly.Lua.valueToCode(block, 'id', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.touch.getPosition(' + valueId + ')'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_close = function () {
    return 'love.window.close()\n'
  }

  Blockly.Lua.window_getdpiscale = function () {
    const code = 'love.window.getDPIScale()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_getfullscreen = function () {
    const code = 'love.window.getFullscreen()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_getdisplayname = function (block) {
    const valueDisplayindex = Blockly.Lua.valueToCode(block, 'displayindex', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.window.getDisplayName(' + valueDisplayindex + ')'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_getdisplayorientation = function (block) {
    const valueDisplayindex = Blockly.Lua.valueToCode(block, 'displayindex', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.window.getDisplayOrientation( ' + valueDisplayindex + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_hasfocus = function () {
    const code = 'love.window.hasFocus()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_gettitle = function () {
    const code = 'love.window.getTitle()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_getposition = function () {
    const code = '{ love.window.getPosition( ) }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_settitle = function (block) {
    const valueTitle = Blockly.Lua.valueToCode(block, 'title', Blockly.Lua.ORDER_ATOMIC)
    return 'love.window.setTitle( ' + valueTitle + ' )\n'
  }

  Blockly.Lua.window_setposition = function (block) {
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const numberDisplayindex = block.getFieldValue('displayindex')
    return 'love.window.setPosition( ' + valueX + ', ' + valueY + ', ' + numberDisplayindex + ' )\n'
  }

  Blockly.Lua.window_setmode = function (block) {
    const valueWidth = Blockly.Lua.valueToCode(block, 'width', Blockly.Lua.ORDER_ATOMIC)
    const valueHeight = Blockly.Lua.valueToCode(block, 'height', Blockly.Lua.ORDER_ATOMIC)
    const valueFlags = Blockly.Lua.valueToCode(block, 'flags', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.window.setMode( ' + valueWidth + ', ' + valueHeight + ', ' + valueFlags + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_setfullscreen = function (block) {
    const valueFullscreen = Blockly.Lua.valueToCode(block, 'fullscreen', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.window.setFullscreen( ' + valueFullscreen + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_restore = function () {
    return 'love.window.restore()\n'
  }

  Blockly.Lua.window_minimize = function () {
    return 'love.window.minimize()\n'
  }

  Blockly.Lua.window_maximize = function () {
    return 'love.window.maximize()\n'
  }

  Blockly.Lua.window_isvisible = function () {
    const code = 'love.window.isVisible()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_isopen = function () {
    const code = 'love.window.isOpen()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_isminimized = function () {
    const code = 'love.window.isMinimized()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_ismaximized = function () {
    const code = 'love.window.isMaximized()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_hasmousefocus = function () {
    const code = 'love.window.hasMouseFocus()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.window_getdisplaycount = function () {
    const code = 'love.window.getDisplayCount()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.system_vibrate = function (block) {
    const valueSeconds = Blockly.Lua.valueToCode(block, 'seconds', Blockly.Lua.ORDER_ATOMIC)
    return 'love.system.vibrate( ' + valueSeconds + ' )\n'
  }

  Blockly.Lua.system_setclipboardtext = function (block) {
    const valueText = Blockly.Lua.valueToCode(block, 'text', Blockly.Lua.ORDER_ATOMIC)
    return 'love.system.setClipboardText( ' + valueText + ' )\n'
  }

  Blockly.Lua.system_openurl = function (block) {
    const valueUrl = Blockly.Lua.valueToCode(block, 'url', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.system.openURL( ' + valueUrl + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.system_getprocessorcount = function () {
    const code = 'love.system.getProcessorCount()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.system_getos = function () {
    const code = 'love.system.getOS()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.system_getclipboardtext = function () {
    const code = 'love.system.getClipboardText()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.system_hasbackgroundmusic = function () {
    const code = 'love.system.hasBackgroundMusic()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.timer_step = function () {
    const code = 'love.timer.step()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.timer_sleep = function (block) {
    const valueS = Blockly.Lua.valueToCode(block, 's', Blockly.Lua.ORDER_ATOMIC)
    return 'love.timer.sleep( ' + valueS + ' )\n\n'
  }

  Blockly.Lua.timer_gettime = function () {
    const code = 'love.timer.getTime()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.timer_getfps = function () {
    const code = 'love.timer.getFPS()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.timer_getdelta = function () {
    const code = 'love.timer.getDelta()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.timer_getaveragedelta = function () {
    const code = 'love.timer.getAverageDelta()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.math_triangulate = function (block) {
    const valuePolygon = Blockly.Lua.valueToCode(block, 'polygon', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.math.triangulate( ' + valuePolygon + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.math_setrandomstate = function (block) {
    const valueState = Blockly.Lua.valueToCode(block, 'state', Blockly.Lua.ORDER_ATOMIC)
    return 'love.math.setRandomState( ' + valueState + ' )\n'
  }

  Blockly.Lua.math_setrandomseed = function (block) {
    const valueSeed = Blockly.Lua.valueToCode(block, 'seed', Blockly.Lua.ORDER_ATOMIC)
    return 'love.math.setRandomSeed( ' + valueSeed + ' )\n'
  }

  Blockly.Lua.math_randomnormal = function (block) {
    const valueStddev = Blockly.Lua.valueToCode(block, 'stddev', Blockly.Lua.ORDER_ATOMIC)
    const valueMean = Blockly.Lua.valueToCode(block, 'mean', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.math.randomNormal( ' + valueStddev + ', ' + valueMean + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.math_random = function (block) {
    const valueMin = Blockly.Lua.valueToCode(block, 'min', Blockly.Lua.ORDER_ATOMIC)
    const valueMax = Blockly.Lua.valueToCode(block, 'max', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.math.random(' + valueMin + ', ' + valueMax + ')'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.math_noise = function (block) {
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.math.noise( ' + valueX + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.math_isconvex = function (block) {
    const valueVertices = Blockly.Lua.valueToCode(block, 'vertices', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.math.isConvex( ' + valueVertices + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.math_getrandomstate = function () {
    const code = 'love.math.getRandomState()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.math_getrandomseed = function () {
    const code = '{ love.math.getRandomSeed( ) }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.math_newrandomgenerator = function () {
    const code = 'love.math.newRandomGenerator()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.mouse_sety = function (block) {
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    return 'love.mouse.setY( ' + valueY + ' )\n'
  }

  Blockly.Lua.mouse_setx = function (block) {
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    return 'love.mouse.setX( ' + valueX + ' )\n'
  }

  Blockly.Lua.mouse_setvisible = function (block) {
    const valueVisible = Blockly.Lua.valueToCode(block, 'visible', Blockly.Lua.ORDER_ATOMIC)
    return 'love.mouse.setVisible( ' + valueVisible + ' )\n'
  }

  Blockly.Lua.mouse_setrelativemode = function (block) {
    const valueEnable = Blockly.Lua.valueToCode(block, 'enable', Blockly.Lua.ORDER_ATOMIC)
    return 'love.mouse.setRelativeMode( ' + valueEnable + ' )\n'
  }

  Blockly.Lua.mouse_setposition = function (block) {
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    return 'love.mouse.setPosition( ' + valueX + ', ' + valueY + ' )\n'
  }

  Blockly.Lua.mouse_setgrabbed = function (block) {
    const valueGrab = Blockly.Lua.valueToCode(block, 'grab', Blockly.Lua.ORDER_ATOMIC)
    return 'love.mouse.setGrabbed( ' + valueGrab + ' )\n'
  }

  Blockly.Lua.mouse_setcursor = function (block) {
    const valueCursor = Blockly.Lua.valueToCode(block, 'cursor', Blockly.Lua.ORDER_ATOMIC)
    return 'love.mouse.setCursor( ' + valueCursor + ' )\n'
  }

  Blockly.Lua.mouse_newcursor = function (block) {
    const valueImagedata = Blockly.Lua.valueToCode(block, 'imageData', Blockly.Lua.ORDER_ATOMIC)
    const valueHotx = Blockly.Lua.valueToCode(block, 'hotx', Blockly.Lua.ORDER_ATOMIC)
    const valueHoty = Blockly.Lua.valueToCode(block, 'hoty', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.mouse.newCursor( ' + valueImagedata + ', ' + valueHotx + ', ' + valueHoty + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.mouse_isvisible = function () {
    const code = 'love.mouse.isVisible()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.mouse_isgrabbed = function () {
    const code = 'love.mouse.isGrabbed()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.mouse_isdown = function (block) {
    const valueButton = Blockly.Lua.valueToCode(block, 'button', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.mouse.isDown( ' + valueButton + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.mouse_gety = function () {
    const code = 'love.mouse.getY()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.mouse_getx = function () {
    const code = 'love.mouse.getX()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.mouse_getsystemcursor = function (block) {
    const valueCtype = Blockly.Lua.valueToCode(block, 'ctype', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.mouse.getSystemCursor( ' + valueCtype + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.mouse_getrelativemode = function () {
    const code = 'love.mouse.getRelativeMode()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.mouse_getposition = function () {
    const code = '{ love.mouse.getPosition() }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.mouse_getcursor = function () {
    const code = 'love.mouse.getCursor()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_setmeter = function (block) {
    const valueScale = Blockly.Lua.valueToCode(block, 'scale', Blockly.Lua.ORDER_ATOMIC)
    return 'love.physics.setMeter( ' + valueScale + ' )\n'
  }

  Blockly.Lua.physics_newworld = function (block) {
    const valueXg = Blockly.Lua.valueToCode(block, 'xg', Blockly.Lua.ORDER_ATOMIC)
    const valueYg = Blockly.Lua.valueToCode(block, 'yg', Blockly.Lua.ORDER_ATOMIC)
    const valueSleep = Blockly.Lua.valueToCode(block, 'sleep', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.physics.newWorld( ' + valueXg + ', ' + valueYg + ', ' + valueSleep + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_newwheeljoint = function (block) {
    const valueBody1 = Blockly.Lua.valueToCode(block, 'body1', Blockly.Lua.ORDER_ATOMIC)
    const valueBody2 = Blockly.Lua.valueToCode(block, 'body2', Blockly.Lua.ORDER_ATOMIC)
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const valueAx = Blockly.Lua.valueToCode(block, 'ax', Blockly.Lua.ORDER_ATOMIC)
    const valueAy = Blockly.Lua.valueToCode(block, 'ay', Blockly.Lua.ORDER_ATOMIC)
    const valueCollideconnected = Blockly.Lua.valueToCode(block, 'collideConnected', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.physics.newWheelJoint( ' + valueBody1 + ', ' + valueBody2 + ', ' + valueX + ', ' + valueY + ', ' + valueAx + ', ' + valueAy + ', ' + valueCollideconnected + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_newweldjoint = function (block) {
    const valueBody1 = Blockly.Lua.valueToCode(block, 'body1', Blockly.Lua.ORDER_ATOMIC)
    const valueBody2 = Blockly.Lua.valueToCode(block, 'body2', Blockly.Lua.ORDER_ATOMIC)
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const valueCollideconnected = Blockly.Lua.valueToCode(block, 'collideConnected', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.physics.newWeldJoint( ' + valueBody1 + ', ' + valueBody2 + ', ' + valueX + ', ' + valueY + ', ' + valueCollideconnected + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_newrectangleshape = function (block) {
    const valueWidth = Blockly.Lua.valueToCode(block, 'width', Blockly.Lua.ORDER_ATOMIC)
    const valueHeight = Blockly.Lua.valueToCode(block, 'height', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.physics.newRectangleShape( ' + valueWidth + ', ' + valueHeight + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_newpolygonshape = function (block) {
    const valueVertices = Blockly.Lua.valueToCode(block, 'vertices', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.physics.newPolygonShape( ' + valueVertices + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_newmousejoint = function (block) {
    const valueBody = Blockly.Lua.valueToCode(block, 'body', Blockly.Lua.ORDER_ATOMIC)
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.physics.newMouseJoint( ' + valueBody + ', ' + valueX + ', ' + valueY + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_getdistance = function (block) {
    const valueFixture1 = Blockly.Lua.valueToCode(block, 'fixture1', Blockly.Lua.ORDER_ATOMIC)
    const valueFixture2 = Blockly.Lua.valueToCode(block, 'fixture2', Blockly.Lua.ORDER_ATOMIC)
    const code = '{ love.physics.getDistance( ' + valueFixture1 + ', ' + valueFixture2 + ' ) }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_getmeter = function () {
    const code = 'love.physics.getMeter()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_newbody = function (block) {
    const valueWorld = Blockly.Lua.valueToCode(block, 'world', Blockly.Lua.ORDER_ATOMIC)
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const dropdownType = block.getFieldValue('type')
    const code = 'love.physics.newBody( ' + valueWorld + ', ' + valueX + ', ' + valueY + ', "' + dropdownType + '" )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_newcircleshape = function (block) {
    const valueRadius = Blockly.Lua.valueToCode(block, 'radius', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.physics.newCircleShape( ' + valueRadius + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_newchainshape = function (block) {
    const valueLoop = Blockly.Lua.valueToCode(block, 'loop', Blockly.Lua.ORDER_ATOMIC)
    const valuePoints = Blockly.Lua.valueToCode(block, 'points', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.physics.newChainShape( ' + valueLoop + ', ' + valuePoints + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_newedgeshape = function (block) {
    const valueX1 = Blockly.Lua.valueToCode(block, 'x1', Blockly.Lua.ORDER_ATOMIC)
    const valueX2 = Blockly.Lua.valueToCode(block, 'x2', Blockly.Lua.ORDER_ATOMIC)
    const valueX3 = Blockly.Lua.valueToCode(block, 'x3', Blockly.Lua.ORDER_ATOMIC)
    const valueX4 = Blockly.Lua.valueToCode(block, 'x4', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.physics.newEdgeShape( ' + valueX1 + ', ' + valueX2 + ', ' + valueX3 + ', ' + valueX4 + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.physics_newfixture = function (block) {
    const valueBody = Blockly.Lua.valueToCode(block, 'body', Blockly.Lua.ORDER_ATOMIC)
    const valueShape = Blockly.Lua.valueToCode(block, 'shape', Blockly.Lua.ORDER_ATOMIC)
    const valueDensity = Blockly.Lua.valueToCode(block, 'density', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.physics.newFixture( ' + valueBody + ', ' + valueShape + ', ' + valueDensity + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_setdistancemodel = function (block) {
    const dropdownModel = block.getFieldValue('model')
    return 'love.audio.setDistanceModel( "' + dropdownModel + '" )\n'
  }

  Blockly.Lua.audio_getdistancemodel = function () {
    const code = 'love.audio.getDistanceModel()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_setdopplerscale = function (block) {
    const valueScale = Blockly.Lua.valueToCode(block, 'scale', Blockly.Lua.ORDER_ATOMIC)
    return 'love.audio.setDopplerScale( ' + valueScale + ' )\n'
  }

  Blockly.Lua.audio_seteffect = function (block) {
    const valueName = Blockly.Lua.valueToCode(block, 'name', Blockly.Lua.ORDER_ATOMIC)
    const valueSettings = Blockly.Lua.valueToCode(block, 'settings', Blockly.Lua.ORDER_ATOMIC)
    return 'love.audio.setEffect(' + valueName + ', ' + valueSettings + ')\n'
  }

  Blockly.Lua.audio_setmixwithsystem = function (block) {
    const valueMix = Blockly.Lua.valueToCode(block, 'mix', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.audio.setMixWithSystem( ' + valueMix + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_setorientation = function (block) {
    const valueFx = Blockly.Lua.valueToCode(block, 'fx', Blockly.Lua.ORDER_ATOMIC)
    const valueFy = Blockly.Lua.valueToCode(block, 'fy', Blockly.Lua.ORDER_ATOMIC)
    const valueFz = Blockly.Lua.valueToCode(block, 'fz', Blockly.Lua.ORDER_ATOMIC)
    const valueUx = Blockly.Lua.valueToCode(block, 'ux', Blockly.Lua.ORDER_ATOMIC)
    const valueUy = Blockly.Lua.valueToCode(block, 'uy', Blockly.Lua.ORDER_ATOMIC)
    const valueUz = Blockly.Lua.valueToCode(block, 'uz', Blockly.Lua.ORDER_ATOMIC)
    return 'love.audio.setOrientation( ' + valueFx + ', ' + valueFy + ', ' + valueFz + ', ' + valueUx + ', ' + valueUy + ', ' + valueUz + ' )\n'
  }

  Blockly.Lua.audio_setposition = function (block) {
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const valueZ = Blockly.Lua.valueToCode(block, 'z', Blockly.Lua.ORDER_ATOMIC)
    return 'love.audio.setPosition( ' + valueX + ', ' + valueY + ', ' + valueZ + ' )\n'
  }

  Blockly.Lua.audio_setvelocity = function (block) {
    const valueX = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC)
    const valueY = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC)
    const valueZ = Blockly.Lua.valueToCode(block, 'z', Blockly.Lua.ORDER_ATOMIC)
    return 'love.audio.setVelocity( ' + valueX + ', ' + valueY + ', ' + valueZ + ' )\n'
  }

  Blockly.Lua.audio_setvolume = function (block) {
    const numberVolume = block.getFieldValue('volume')
    return 'love.audio.setVolume( ' + numberVolume + ' )\n'
  }

  Blockly.Lua.audio_stop = function () {
    return 'love.audio.stop()\n'
  }

  Blockly.Lua.audio_pause = function () {
    const code = 'love.audio.pause()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_newsource = function (block) {
    const textFilename = block.getFieldValue('filename')
    const dropdownType = block.getFieldValue('type')
    const code = 'love.audio.newSource( ' + textFilename + ', "' + dropdownType + '" )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_iseffectssupported = function () {
    const code = 'love.audio.isEffectsSupported()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_getvolume = function () {
    const code = 'love.audio.getVolume()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_getvelocity = function () {
    const code = '{ love.audio.getVelocity() }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_getrecordingdevices = function () {
    const code = 'love.audio.getRecordingDevices()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_getposition = function () {
    const code = '{ love.audio.getPosition() }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_getorientation = function () {
    const code = '{ love.audio.getOrientation() }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_getmaxsourceeffects = function () {
    const code = 'love.audio.getMaxSourceEffects()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_getmaxsceneeffects = function () {
    const code = 'love.audio.getMaxSceneEffects()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_geteffect = function (block) {
    const valueName = Blockly.Lua.valueToCode(block, 'name', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.audio.getEffect(' + valueName + ')'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_getdopplerscale = function () {
    const code = 'love.audio.getDopplerScale()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_getactivesourcecount = function () {
    const code = 'love.audio.getActiveSourceCount()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.audio_getactiveeffects = function () {
    const code = 'love.audio.getActiveEffects()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_append = function (block) {
    const valueName = Blockly.Lua.valueToCode(block, 'name', Blockly.Lua.ORDER_ATOMIC)
    const valueData = Blockly.Lua.valueToCode(block, 'data', Blockly.Lua.ORDER_ATOMIC)
    const valueSize = Blockly.Lua.valueToCode(block, 'size', Blockly.Lua.ORDER_ATOMIC)
    const code = '{ love.filesystem.append( ' + valueName + ', ' + valueData + ', ' + valueSize + ' ) }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_aresymlinksenabled = function () {
    const code = 'love.filesystem.areSymlinksEnabled()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_createdirectory = function (block) {
    const valueName = Blockly.Lua.valueToCode(block, 'name', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.filesystem.createDirectory( ' + valueName + ' )\n'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_getdirectoryitems = function (block) {
    const valueName = Blockly.Lua.valueToCode(block, 'name', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.filesystem.getDirectoryItems( ' + valueName + ' )\n'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_getidentity = function () {
    const code = 'love.filesystem.getIdentity()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_getinfo = function (block) {
    const textPath = block.getFieldValue('path')
    const dropdownFiltertype = block.getFieldValue('filtertype')
    const code = 'love.filesystem.getInfo( ' + textPath + ', "' + dropdownFiltertype + '" )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_getrequirepath = function () {
    const code = 'love.filesystem.getRequirePath()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_getrealdirectory = function (block) {
    const textFilepath = block.getFieldValue('filepath')
    const code = 'love.filesystem.getRealDirectory( ' + textFilepath + ' )\n'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_getsavedirectory = function () {
    const code = 'love.filesystem.getSaveDirectory()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_getsource = function () {
    const code = 'love.filesystem.getSource()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_getuserdirectory = function () {
    const code = 'love.filesystem.getUserDirectory()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_getworkingdirectory = function () {
    const code = 'love.filesystem.getWorkingDirectory()'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_init = function (block) {
    const valueAppname = Blockly.Lua.valueToCode(block, 'appname', Blockly.Lua.ORDER_ATOMIC)
    return 'love.filesystem.init( ' + valueAppname + ' )\n'
  }

  Blockly.Lua.filesystem_lines = function (block) {
    const textName = block.getFieldValue('name')
    const code = 'love.filesystem.lines( ' + textName + ' )\n'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_load = function (block) {
    const textName = block.getFieldValue('name')
    const code = '{ love.filesystem.load( ' + textName + ' ) }'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_mount = function (block) {
    const valueArchive = Blockly.Lua.valueToCode(block, 'archive', Blockly.Lua.ORDER_ATOMIC)
    const valueMountpoint = Blockly.Lua.valueToCode(block, 'mountpoint', Blockly.Lua.ORDER_ATOMIC)
    const valueAppendtopath = Blockly.Lua.valueToCode(block, 'appendToPath', Blockly.Lua.ORDER_ATOMIC)
    const code = 'love.filesystem.mount( ' + valueArchive + ', ' + valueMountpoint + ', ' + valueAppendtopath + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_newfile = function (block) {
    const textName = block.getFieldValue('name')
    const code = 'love.filesystem.newFile( ' + textName + ' )\n'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_read = function (block) {
    const textName = block.getFieldValue('name')
    const valueSize = Blockly.Lua.valueToCode(block, 'size', Blockly.Lua.ORDER_ATOMIC)
    const code = '{ love.filesystem.read( ' + textName + ', ' + valueSize + ' ) }\n'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_remove = function (block) {
    const textName = block.getFieldValue('name')
    const code = 'love.filesystem.remove( ' + textName + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_setidentity = function (block) {
    const textName = block.getFieldValue('name')
    const valueAppendtopath = Blockly.Lua.valueToCode(block, 'appendToPath', Blockly.Lua.ORDER_ATOMIC)
    return 'love.filesystem.setIdentity( ' + textName + ', ' + valueAppendtopath + ' )\n'
  }

  Blockly.Lua.filesystem_setrequirepath = function (block) {
    const textPaths = block.getFieldValue('paths')
    return 'love.filesystem.setRequirePath( ' + textPaths + ' )\n'
  }

  Blockly.Lua.filesystem_setsource = function (block) {
    const textPath = block.getFieldValue('path')
    return 'love.filesystem.setSource( ' + textPath + ' )\n'
  }

  Blockly.Lua.filesystem_setsymlinksenabled = function (block) {
    const valueEnable = Blockly.Lua.valueToCode(block, 'enable', Blockly.Lua.ORDER_ATOMIC)
    return 'love.filesystem.setSymlinksEnabled( ' + valueEnable + ' )\n'
  }

  Blockly.Lua.filesystem_unmount = function (block) {
    const textArchive = block.getFieldValue('archive')
    const code = 'love.filesystem.unmount( ' + textArchive + ' )'
    return [code, Blockly.Lua.ORDER_NONE]
  }

  Blockly.Lua.filesystem_write = function (block) {
    const textName = block.getFieldValue('name')
    const valueData = Blockly.Lua.valueToCode(block, 'data', Blockly.Lua.ORDER_ATOMIC)
    const valueSize = Blockly.Lua.valueToCode(block, 'size', Blockly.Lua.ORDER_ATOMIC)
    const code = '{ love.filesystem.write( ' + textName + ', ' + valueData + ', ' + valueSize + ' ) }'
    return [code, Blockly.Lua.ORDER_NONE]
  }
}

export default registerBlocks
