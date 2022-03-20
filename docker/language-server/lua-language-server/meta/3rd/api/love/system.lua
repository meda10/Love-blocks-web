---Provides access to information about the user's system.
local system = {}


-- functions

---Gets text from the clipboard.
---@return string text @ The text currently held in the system's clipboard.
function system.getClipboardText() end

---Gets the current operating system. In general, LÖVE abstracts away the need to know the current operating system, but there are a few cases where it can be useful (especially in combination with os.execute.)
---In LÖVE version 0.8.0, the '''love._os''' string contains the current operating system.
---@return string osString @ The current operating system. 'OS X', 'Windows', 'Linux', 'Android' or 'iOS'.
function system.getOS() end

---Gets information about the system's power supply.
---@return PowerState state @ The basic state of the power supply.
---@return number percent @ Percentage of battery life left, between 0 and 100. nil if the value can't be determined or there's no battery.
---@return number seconds @ Seconds of battery life left. nil if the value can't be determined or there's no battery.
function system.getPowerInfo() end

---Gets the amount of logical processor in the system.
---The number includes the threads reported if technologies such as Intel's Hyper-threading are enabled. For example, on a 4-core CPU with Hyper-threading, this function will return 8.
---@return number processorCount @ Amount of logical processors.
function system.getProcessorCount() end

---Gets whether another application on the system is playing music in the background.
---
---Currently this is implemented on iOS and Android, and will always return false on other operating systems. The t.audio.mixwithsystem flag in love.conf can be used to configure whether background audio / music from other apps should play while LÖVE is open.
---@return boolean backgroundmusic @ True if the user is playing music in the background via another app, false otherwise.
function system.hasBackgroundMusic() end

---Opens a URL with the user's web or file browser.
---Passing file:// scheme in Android 7.0 (Nougat) and later always result in failure. Prior to 11.2, this will crash LÖVE instead of returning false.
---@param url string @ The URL to open. Must be formatted as a proper URL.
---@return boolean success @ Whether the URL was opened successfully.
function system.openURL(url) end

---Puts text in the clipboard.
---@param text string @ The new text to hold in the system's clipboard.
function system.setClipboardText(text) end

---Causes the device to vibrate, if possible. Currently this will only work on Android and iOS devices that have a built-in vibration motor.
---@param seconds? number @ (default: `0.5`) The duration to vibrate for. If called on an iOS device, it will always vibrate for 0.5 seconds due to limitations in the iOS system APIs.
function system.vibrate(seconds) end


-- enums
---The basic state of the system's power supply.
---@alias PowerState
---Cannot determine power status.
---| "'unknown'"
---Not plugged in, running on a battery.
---| "'battery'"
---Plugged in, no battery available.
---| "'nobattery'"
---Plugged in, charging battery.
---| "'charging'"
---Plugged in, battery is fully charged.
---| "'charged'"


return system