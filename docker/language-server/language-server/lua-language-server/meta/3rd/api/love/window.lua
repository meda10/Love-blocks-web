---Provides an interface for modifying and retrieving information about the program's window.
local window = {}



-- functions


---Closes the window. It can be reopened with love.window.setMode.
function window.close() end


---Converts a number from pixels to density-independent units.
---
---The pixel density inside the window might be greater (or smaller) than the 'size' of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.window.fromPixels(1600) would return 800 in that case.
---
---This function converts coordinates from pixels to the size users are expecting them to display at onscreen. love.window.toPixels does the opposite. The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled.
---
---Most LÖVE functions return values and expect arguments in terms of pixels rather than density-independent units.
---@param pixelvalue number @ A number in pixels to convert to density-independent units.
---@return number value @ The converted number, in density-independent units.
function window.fromPixels(pixelvalue) end

---Converts a number from pixels to density-independent units.
---
---The pixel density inside the window might be greater (or smaller) than the 'size' of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.window.fromPixels(1600) would return 800 in that case.
---
---This function converts coordinates from pixels to the size users are expecting them to display at onscreen. love.window.toPixels does the opposite. The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled.
---
---Most LÖVE functions return values and expect arguments in terms of pixels rather than density-independent units.
---The units of love.graphics.getWidth, love.graphics.getHeight, love.mouse.getPosition, mouse events, love.touch.getPosition, and touch events are always in terms of pixels.
---@param px number @ The x-axis value of a coordinate in pixels.
---@param py number @ The y-axis value of a coordinate in pixels.
---@return number x @ The converted x-axis value of the coordinate, in density-independent units.
---@return number y @ The converted y-axis value of the coordinate, in density-independent units.
function window.fromPixels(px, py) end


---Gets the DPI scale factor associated with the window.
---
---The pixel density inside the window might be greater (or smaller) than the 'size' of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.window.getDPIScale() would return 2.0 in that case.
---
---The love.window.fromPixels and love.window.toPixels functions can also be used to convert between units.
---
---The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled.
---The units of love.graphics.getWidth, love.graphics.getHeight, love.mouse.getPosition, mouse events, love.touch.getPosition, and touch events are always in terms of pixels.
---@return number scale @ The pixel scale factor associated with the window.
function window.getDPIScale() end


---Gets the name of a display.
---@param displayindex? number @ (default: `1`) The index of the display to get the name of.
---@return string name @ The name of the specified display.
function window.getDisplayName(displayindex) end


---Gets current device display orientation.
---@param index? number @ (default: `nil`) Display index to get its display orientation, or nil for default display index.
---@return DisplayOrientation orientation @ Current device display orientation.
function window.getDisplayOrientation(index) end


---Gets whether the window is fullscreen.
---@return boolean fullscreen @ True if the window is fullscreen, false otherwise.
---@return FullscreenType fstype @ The type of fullscreen mode used.
function window.getFullscreen() end


---Gets a list of supported fullscreen modes.
---@param display? number @ (default: `1`) The index of the display, if multiple monitors are available.
---@return table modes @ A table of width/height pairs. (Note that this may not be in order.)
function window.getFullscreenModes(display) end


---Gets the window icon.
---@return ImageData imagedata @ The window icon imagedata, or nil if no icon has been set with love.window.setIcon.
function window.getIcon() end


---Gets the display mode and properties of the window.
---@return number width @ Window width.
---@return number height @ Window height.
---@return window-getMode-1 flags @ Table with the window properties:
function window.getMode() end


---Gets the position of the window on the screen.
---
---The window position is in the coordinate space of the display it is currently in.
---@return number x @ The x-coordinate of the window's position.
---@return number y @ The y-coordinate of the window's position.
---@return number display @ The index of the display that the window is in.
function window.getPosition() end


---Gets area inside the window which is known to be unobstructed by a system title bar, the iPhone X notch, etc. Useful for making sure UI elements can be seen by the user.
---Values returned are in DPI-scaled units (the same coordinate system as most other window-related APIs), not in pixels.
---@return number x @ Starting position of safe area (x-axis).
---@return number y @ Starting position of safe area (y-axis).
---@return number w @ Width of safe area.
---@return number h @ Height of safe area.
function window.getSafeArea() end


---Gets the window title.
---@return string title @ The current window title.
function window.getTitle() end


---Gets current vertical synchronization (vsync).
---This can be less expensive alternative to love.window.getMode if you want to get current vsync status.
---@return number vsync @ Current vsync status. 1 if enabled, 0 if disabled, and -1 for adaptive vsync.
function window.getVSync() end


---Checks if the game window has keyboard focus.
---@return boolean focus @ True if the window has the focus or false if not.
function window.hasFocus() end


---Checks if the game window has mouse focus.
---@return boolean focus @ True if the window has mouse focus or false if not.
function window.hasMouseFocus() end


---Gets whether the display is allowed to sleep while the program is running.
---
---Display sleep is disabled by default. Some types of input (e.g. joystick button presses) might not prevent the display from sleeping, if display sleep is allowed.
---@return boolean enabled @ True if system display sleep is enabled / allowed, false otherwise.
function window.isDisplaySleepEnabled() end


---Gets whether the Window is currently maximized.
---
---The window can be maximized if it is not fullscreen and is resizable, and either the user has pressed the window's Maximize button or love.window.maximize has been called.
---@return boolean maximized @ True if the window is currently maximized in windowed mode, false otherwise.
function window.isMaximized() end


---Gets whether the Window is currently minimized.
---@return boolean minimized @ True if the window is currently minimized, false otherwise.
function window.isMinimized() end


---Checks if the window is open.
---@return boolean open @ True if the window is open, false otherwise.
function window.isOpen() end


---Checks if the game window is visible.
---
---The window is considered visible if it's not minimized and the program isn't hidden.
---@return boolean visible @ True if the window is visible or false if not.
function window.isVisible() end


---Makes the window as large as possible.
---
---This function has no effect if the window isn't resizable, since it essentially programmatically presses the window's 'maximize' button.
function window.maximize() end


---Minimizes the window to the system's task bar / dock.
function window.minimize() end


---Causes the window to request the attention of the user if it is not in the foreground.
---
---In Windows the taskbar icon will flash, and in OS X the dock icon will bounce.
---@param continuous? boolean @ (default: `false`) Whether to continuously request attention until the window becomes active, or to do it only once.
function window.requestAttention(continuous) end


---Restores the size and position of the window if it was minimized or maximized.
function window.restore() end


---Sets whether the display is allowed to sleep while the program is running.
---
---Display sleep is disabled by default. Some types of input (e.g. joystick button presses) might not prevent the display from sleeping, if display sleep is allowed.
---@param enable boolean @ True to enable system display sleep, false to disable it.
function window.setDisplaySleepEnabled(enable) end


---Enters or exits fullscreen. The display to use when entering fullscreen is chosen based on which display the window is currently in, if multiple monitors are connected.
---@param fullscreen boolean @ Whether to enter or exit fullscreen mode.
---@return boolean success @ True if an attempt to enter fullscreen was successful, false otherwise.
function window.setFullscreen(fullscreen) end

---Enters or exits fullscreen. The display to use when entering fullscreen is chosen based on which display the window is currently in, if multiple monitors are connected.
---If fullscreen mode is entered and the window size doesn't match one of the monitor's display modes (in normal fullscreen mode) or the window size doesn't match the desktop size (in 'desktop' fullscreen mode), the window will be resized appropriately. The window will revert back to its original size again when fullscreen mode is exited using this function.
---@param fullscreen boolean @ Whether to enter or exit fullscreen mode.
---@param fstype FullscreenType @ The type of fullscreen mode to use.
---@return boolean success @ True if an attempt to enter fullscreen was successful, false otherwise.
function window.setFullscreen(fullscreen, fstype) end


---Sets the window icon until the game is quit. Not all operating systems support very large icon images.
---@param imagedata ImageData @ The window icon image.
---@return boolean success @ Whether the icon has been set successfully.
function window.setIcon(imagedata) end


---Sets the display mode and properties of the window.
---
---If width or height is 0, setMode will use the width and height of the desktop. 
---
---Changing the display mode may have side effects: for example, canvases will be cleared and values sent to shaders with canvases beforehand or re-draw to them afterward if you need to.
---* If fullscreen is enabled and the width or height is not supported (see resize event will be triggered.
---
---* If the fullscreen type is 'desktop', then the window will be automatically resized to the desktop resolution.
---
---* If the width and height is bigger than or equal to the desktop dimensions (this includes setting both to 0) and fullscreen is set to false, it will appear 'visually' fullscreen, but it's not true fullscreen and conf.lua (i.e. t.window = false) and use this function to manually create the window, then you must not call any other love.graphics.* function before this one. Doing so will result in undefined behavior and/or crashes because OpenGL cannot function properly without a window.
---
---* Transparent backgrounds are currently not supported.
---@param width number @ Display width.
---@param height number @ Display height.
---@param flags window-setMode-1 @ The flags table with the options:
---@return boolean success @ True if successful, false otherwise.
function window.setMode(width, height, flags) end


---Sets the position of the window on the screen.
---
---The window position is in the coordinate space of the specified display.
---@param x number @ The x-coordinate of the window's position.
---@param y number @ The y-coordinate of the window's position.
---@param display? number @ (default: `1`) The index of the display that the new window position is relative to.
function window.setPosition(x, y, display) end


---Sets the window title.
---@param title string @ The new window title.
function window.setTitle(title) end


---Sets vertical synchronization mode.
---* Not all graphics drivers support adaptive vsync (-1 value). In that case, it will be automatically set to 1.
---
---* It is recommended to keep vsync activated if you don't know about the possible implications of turning it off.
---
---* This function doesn't recreate the window, unlike love.window.setMode and love.window.updateMode.
---@param vsync number @ VSync number: 1 to enable, 0 to disable, and -1 for adaptive vsync.
function window.setVSync(vsync) end


---Displays a message box dialog above the love window. The message box contains a title, optional text, and buttons.
---Displays a simple message box with a single 'OK' button.
---@param title string @ The title of the message box.
---@param message string @ The text inside the message box.
---@param type? MessageBoxType @ (default: `'info'`) The type of the message box.
---@param attachtowindow? boolean @ (default: `true`) Whether the message box should be attached to the love window or free-floating.
---@return boolean success @ Whether the message box was successfully displayed.
function window.showMessageBox(title, message, type, attachtowindow) end

---Displays a message box dialog above the love window. The message box contains a title, optional text, and buttons.
---Displays a message box with a customized list of buttons.
---@param title string @ The title of the message box.
---@param message string @ The text inside the message box.
---@param buttonlist table @ A table containing a list of button names to show. The table can also contain the fields enterbutton and escapebutton, which should be the index of the default button to use when the user presses 'enter' or 'escape', respectively.
---@param type? MessageBoxType @ (default: `'info'`) The type of the message box.
---@param attachtowindow? boolean @ (default: `true`) Whether the message box should be attached to the love window or free-floating.
---@return number pressedbutton @ The index of the button pressed by the user. May be 0 if the message box dialog was closed without pressing a button.
function window.showMessageBox(title, message, buttonlist, type, attachtowindow) end


---Converts a number from density-independent units to pixels.
---
---The pixel density inside the window might be greater (or smaller) than the 'size' of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.window.toPixels(800) would return 1600 in that case.
---
---This is used to convert coordinates from the size users are expecting them to display at onscreen to pixels. love.window.fromPixels does the opposite. The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled.
---
---Most LÖVE functions return values and expect arguments in terms of pixels rather than density-independent units.
---@param value number @ A number in density-independent units to convert to pixels.
---@return number pixelvalue @ The converted number, in pixels.
function window.toPixels(value) end

---Converts a number from density-independent units to pixels.
---
---The pixel density inside the window might be greater (or smaller) than the 'size' of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.window.toPixels(800) would return 1600 in that case.
---
---This is used to convert coordinates from the size users are expecting them to display at onscreen to pixels. love.window.fromPixels does the opposite. The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled.
---
---Most LÖVE functions return values and expect arguments in terms of pixels rather than density-independent units.
---The units of love.graphics.getWidth, love.graphics.getHeight, love.mouse.getPosition, mouse events, love.touch.getPosition, and touch events are always in terms of pixels.
---@param x number @ The x-axis value of a coordinate in density-independent units to convert to pixels.
---@param y number @ The y-axis value of a coordinate in density-independent units to convert to pixels.
---@return number px @ The converted x-axis value of the coordinate, in pixels.
---@return number py @ The converted y-axis value of the coordinate, in pixels.
function window.toPixels(x, y) end


---Sets the display mode and properties of the window, without modifying unspecified properties.
---
---If width or height is 0, updateMode will use the width and height of the desktop. 
---
---Changing the display mode may have side effects: for example, canvases will be cleared. Make sure to save the contents of canvases beforehand or re-draw to them afterward if you need to.
---If fullscreen is enabled and the width or height is not supported (see resize event will be triggered.
---
---If the fullscreen type is 'desktop', then the window will be automatically resized to the desktop resolution.
---
---Transparent backgrounds are currently not supported.
---@param width number @ Window width.
---@param height number @ Window height.
---@param settings window-updateMode-1 @ The settings table with the following optional fields. Any field not filled in will use the current value that would be returned by love.window.getMode.
---@return boolean success @ True if successful, false otherwise.
function window.updateMode(width, height, settings) end



-- enums

---Types of device display orientation.
---@alias DisplayOrientation
---Orientation cannot be determined.
---| "'unknown'"
---Landscape orientation.
---| "'landscape'"
---Landscape orientation (flipped).
---| "'landscapeflipped'"
---Portrait orientation.
---| "'portrait'"
---Portrait orientation (flipped).
---| "'portraitflipped'"

---Types of fullscreen modes.
---@alias FullscreenType
---Sometimes known as borderless fullscreen windowed mode. A borderless screen-sized window is created which sits on top of all desktop UI elements. The window is automatically resized to match the dimensions of the desktop, and its size cannot be changed.
---| "'desktop'"
---Standard exclusive-fullscreen mode. Changes the display mode (actual resolution) of the monitor.
---| "'exclusive'"
---Standard exclusive-fullscreen mode. Changes the display mode (actual resolution) of the monitor.
---| "'normal'"

---Types of message box dialogs. Different types may have slightly different looks.
---@alias MessageBoxType
---Informational dialog.
---| "'info'"
---Warning dialog.
---| "'warning'"
---Error dialog.
---| "'error'"



-- preludes

---@class window-setMode-1
---@field fullscreen? boolean # (default: `false`) Fullscreen (true), or windowed (false).
---@field fullscreentype? FullscreenType # (default: `'desktop'`) The type of fullscreen to use. This defaults to 'normal' in 0.9.0 through 0.9.2 and to 'desktop' in 0.10.0 and older.
---@field vsync? boolean # (default: `true`) True if LÖVE should wait for vsync, false otherwise.
---@field msaa? number # (default: `0`) The number of antialiasing samples.
---@field stencil? boolean # (default: `true`) Whether a stencil buffer should be allocated. If true, the stencil buffer will have 8 bits.
---@field depth? number # (default: `0`) The number of bits in the depth buffer.
---@field resizable? boolean # (default: `false`) True if the window should be resizable in windowed mode, false otherwise.
---@field borderless? boolean # (default: `false`) True if the window should be borderless in windowed mode, false otherwise.
---@field centered? boolean # (default: `true`) True if the window should be centered in windowed mode, false otherwise.
---@field display? number # (default: `1`) The index of the display to show the window in, if multiple monitors are available.
---@field minwidth? number # (default: `1`) The minimum width of the window, if it's resizable. Cannot be less than 1.
---@field minheight? number # (default: `1`) The minimum height of the window, if it's resizable. Cannot be less than 1.
---@field highdpi? boolean # (default: `false`) True if high-dpi mode should be used on Retina displays in macOS and iOS. Does nothing on non-Retina displays.
---@field x? number # (default: `nil`) The x-coordinate of the window's position in the specified display.
---@field y? number # (default: `nil`) The y-coordinate of the window's position in the specified display.
---@field usedpiscale? boolean # (default: `true`) Disables automatic DPI scaling when false.
---@field srgb? boolean # (default: `false`) Removed in 0.10.0 (set t.gammacorrect in conf.lua instead). True if sRGB gamma correction should be applied when drawing to the screen.

---@class window-getMode-1
---@field fullscreen boolean # Fullscreen (true), or windowed (false).
---@field fullscreentype FullscreenType # The type of fullscreen mode used.
---@field vsync boolean # True if the graphics framerate is synchronized with the monitor's refresh rate, false otherwise.
---@field msaa number # The number of antialiasing samples used (0 if MSAA is disabled).
---@field resizable boolean # True if the window is resizable in windowed mode, false otherwise.
---@field borderless boolean # True if the window is borderless in windowed mode, false otherwise.
---@field centered boolean # True if the window is centered in windowed mode, false otherwise.
---@field display number # The index of the display the window is currently in, if multiple monitors are available.
---@field minwidth number # The minimum width of the window, if it's resizable.
---@field minheight number # The minimum height of the window, if it's resizable.
---@field highdpi boolean # True if high-dpi mode is allowed on Retina displays in OS X. Does nothing on non-Retina displays.
---@field refreshrate number # The refresh rate of the screen's current display mode, in Hz. May be 0 if the value can't be determined.
---@field x number # The x-coordinate of the window's position in its current display.
---@field y number # The y-coordinate of the window's position in its current display.
---@field srgb boolean # Removed in 0.10.0 (use love.graphics.isGammaCorrect instead). True if sRGB gamma correction is applied when drawing to the screen.

---@class window-updateMode-1
---@field fullscreen boolean # Fullscreen (true), or windowed (false).
---@field fullscreentype FullscreenType # The type of fullscreen to use.
---@field vsync boolean # True if LÖVE should wait for vsync, false otherwise.
---@field msaa number # The number of antialiasing samples.
---@field resizable boolean # True if the window should be resizable in windowed mode, false otherwise.
---@field borderless boolean # True if the window should be borderless in windowed mode, false otherwise.
---@field centered boolean # True if the window should be centered in windowed mode, false otherwise.
---@field display number # The index of the display to show the window in, if multiple monitors are available.
---@field minwidth number # The minimum width of the window, if it's resizable. Cannot be less than 1.
---@field minheight number # The minimum height of the window, if it's resizable. Cannot be less than 1.
---@field highdpi boolean # True if high-dpi mode should be used on Retina displays in macOS and iOS. Does nothing on non-Retina displays.
---@field x number # The x-coordinate of the window's position in the specified display.
---@field y number # The y-coordinate of the window's position in the specified display.



return window