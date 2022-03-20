---Manages events, like keypresses.
local event = {}



-- functions


---Clears the event queue.
function event.clear() end


---Returns an iterator for messages in the event queue.
---@return function i @ Iterator function usable in a for loop.
function event.poll() end


---Pump events into the event queue.
---
---This is a low-level function, and is usually not called by the user, but by love.run.
---
---Note that this does need to be called for any OS to think you're still running,
---
---and if you want to handle OS-generated events at all (think callbacks).
function event.pump() end


---Adds an event to the event queue.
---
---From 0.10.0 onwards, you may pass an arbitrary amount of arguments with this function, though the default callbacks don't ever use more than six.
---@param n Event @ The name of the event.
---@param a? Variant @ (default: `nil`) First event argument.
---@param b? Variant @ (default: `nil`) Second event argument.
---@param c? Variant @ (default: `nil`) Third event argument.
---@param d? Variant @ (default: `nil`) Fourth event argument.
---@param e? Variant @ (default: `nil`) Fifth event argument.
---@param f? Variant @ (default: `nil`) Sixth event argument.
---@vararg Variant @ (default: `nil`) Further event arguments may follow.
function event.push(n, a, b, c, d, e, f, ...) end


---Adds the quit event to the queue.
---
---The quit event is a signal for the event handler to close LÖVE. It's possible to abort the exit process with the love.quit callback.
---@param exitstatus? number @ (default: `0`) The program exit status to use when closing the application.
function event.quit(exitstatus) end

---Adds the quit event to the queue.
---
---The quit event is a signal for the event handler to close LÖVE. It's possible to abort the exit process with the love.quit callback.
---Restarts the game without relaunching the executable. This cleanly shuts down the main Lua state instance and creates a brand new one.
---@param restart "'restart'" @ Tells the default love.run to exit and restart the game without relaunching the executable.
function event.quit(restart) end


---Like love.event.poll(), but blocks until there is an event in the queue.
---@return Event n @ The name of event.
---@return Variant a @ First event argument.
---@return Variant b @ Second event argument.
---@return Variant c @ Third event argument.
---@return Variant d @ Fourth event argument.
---@return Variant e @ Fifth event argument.
---@return Variant f @ Sixth event argument.
---@return ... @ Further event arguments may follow.
function event.wait() end



-- enums
---Arguments to love.event.push() and the like.
---
---Since 0.8.0, event names are no longer abbreviated.
---@alias Event
---Window focus gained or lost
---| "'focus'"
---Joystick pressed
---| "'joystickpressed'"
---Joystick released
---| "'joystickreleased'"
---Key pressed
---| "'keypressed'"
---Key released
---| "'keyreleased'"
---Mouse pressed
---| "'mousepressed'"
---Mouse released
---| "'mousereleased'"
---Quit
---| "'quit'"
---Window size changed by the user
---| "'resize'"
---Window is minimized or un-minimized by the user
---| "'visible'"
---Window mouse focus gained or lost
---| "'mousefocus'"
---A Lua error has occurred in a thread
---| "'threaderror'"
---Joystick connected
---| "'joystickadded'"
---Joystick disconnected
---| "'joystickremoved'"
---Joystick axis motion
---| "'joystickaxis'"
---Joystick hat pressed
---| "'joystickhat'"
---Joystick's virtual gamepad button pressed
---| "'gamepadpressed'"
---Joystick's virtual gamepad button released
---| "'gamepadreleased'"
---Joystick's virtual gamepad axis moved
---| "'gamepadaxis'"
---User entered text
---| "'textinput'"
---Mouse position changed
---| "'mousemoved'"
---Running out of memory on mobile devices system
---| "'lowmemory'"
---Candidate text for an IME changed
---| "'textedited'"
---Mouse wheel moved
---| "'wheelmoved'"
---Touch screen touched
---| "'touchpressed'"
---Touch screen stop touching
---| "'touchreleased'"
---Touch press moved inside touch screen
---| "'touchmoved'"
---Directory is dragged and dropped onto the window
---| "'directorydropped'"
---File is dragged and dropped onto the window.
---| "'filedropped'"
---Joystick pressed
---| "'jp'"
---Joystick released
---| "'jr'"
---Key pressed
---| "'kp'"
---Key released
---| "'kr'"
---Mouse pressed
---| "'mp'"
---Mouse released
---| "'mr'"
---Quit
---| "'q'"
---Window focus gained or lost
---| "'f'"



return event