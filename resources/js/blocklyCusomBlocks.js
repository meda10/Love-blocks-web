'use strict'
import Blockly from 'blockly'
import callbackFunctions from '@/callback.json'

const registerBlocks = () => {
  Blockly.common.defineBlocksWithJsonArray(callbackFunctions)

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
}

export default registerBlocks
