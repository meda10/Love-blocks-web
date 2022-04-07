---Provides an interface to the user's filesystem.
local filesystem = {}




-- types



--region DroppedFile

---Represents a file dropped onto the window.
---
---Note that the DroppedFile type can only be obtained from love.filedropped callback, and can't be constructed manually by the user.
---@class DroppedFile: File, Object
local DroppedFile = {}

--endregion DroppedFile



--region File


---Represents a file on the filesystem. A function that takes a file path can also take a File.
---@class File: Object
local File = {}


---Closes a File.
---@return boolean success @ Whether closing was successful.
function File:close() end


---Flushes any buffered written data in the file to the disk.
---@return boolean success @ Whether the file successfully flushed any buffered data to the disk.
---@return string err @ The error string, if an error occurred and the file could not be flushed.
function File:flush() end


---Gets the buffer mode of a file.
---@return BufferMode mode @ The current buffer mode of the file.
---@return number size @ The maximum size in bytes of the file's buffer.
function File:getBuffer() end


---Gets the filename that the File object was created with. If the file object originated from the love.filedropped callback, the filename will be the full platform-dependent file path.
---@return string filename @ The filename of the File.
function File:getFilename() end


---Gets the FileMode the file has been opened with.
---@return FileMode mode @ The mode this file has been opened with.
function File:getMode() end


---Returns the file size.
---@return number size @ The file size in bytes.
function File:getSize() end


---Gets whether end-of-file has been reached.
---@return boolean eof @ Whether EOF has been reached.
function File:isEOF() end


---Gets whether the file is open.
---@return boolean open @ True if the file is currently open, false otherwise.
function File:isOpen() end


---Iterate over all the lines in a file.
---@return function iterator @ The iterator (can be used in for loops).
function File:lines() end


---Open the file for write, read or append.
---If you are getting the error message 'Could not set write directory', try setting the save directory. This is done either with love.filesystem.setIdentity or by setting the identity field in love.conf (only available with love 0.7 or higher).
---@param mode FileMode @ The mode to open the file in.
---@return boolean ok @ True on success, false otherwise.
---@return string err @ The error string if an error occurred.
function File:open(mode) end


---Read a number of bytes from a file.
---@param bytes? number @ (default: `all`) The number of bytes to read.
---@return string contents @ The contents of the read bytes.
---@return number size @ How many bytes have been read.
function File:read(bytes) end

---Read a number of bytes from a file.
---Reads the contents of a file into either a string or a FileData object.
---@param container ContainerType @ What type to return the file's contents as.
---@param bytes? number @ (default: `all`) The number of bytes to read.
---@return FileData|string contents @ FileData or string containing the read bytes.
---@return number size @ How many bytes have been read.
function File:read(container, bytes) end


---Seek to a position in a file
---@param pos number @ The position to seek to
---@return boolean success @ Whether the operation was successful
function File:seek(pos) end


---Sets the buffer mode for a file opened for writing or appending. Files with buffering enabled will not write data to the disk until the buffer size limit is reached, depending on the buffer mode.
---
---File:flush will force any buffered data to be written to the disk.
---@param mode BufferMode @ The buffer mode to use.
---@param size? number @ (default: `0`) The maximum size in bytes of the file's buffer.
---@return boolean success @ Whether the buffer mode was successfully set.
---@return string errorstr @ The error string, if the buffer mode could not be set and an error occurred.
function File:setBuffer(mode, size) end


---Returns the position in the file.
---@return number pos @ The current position.
function File:tell() end


---Write data to a file.
---@param data string @ The string data to write.
---@param size? number @ (default: `all`) How many bytes to write.
---@return boolean success @ Whether the operation was successful.
---@return string err @ The error string if an error occurred.
function File:write(data, size) end

---Write data to a file.
---'''Writing to multiple lines''': In Windows, some text editors (e.g. Notepad before Windows 10 1809) only treat CRLF ('\r\n') as a new line.
---
-----example
---
---f = love.filesystem.newFile('note.txt')
---
---f:open('w')
---
---for i = 1, 10 do
---
---    f:write('This is line '..i..'!\r\n')
---
---end
---
---f:close()
---@param data Data @ The Data object to write.
---@param size? number @ (default: `all`) How many bytes to write.
---@return boolean success @ Whether the operation was successful.
---@return string errorstr @ The error string if an error occurred.
function File:write(data, size) end


--endregion File



--region FileData

---Data representing the contents of a file.
---@class FileData: Data, Object
local FileData = {}

---Gets the extension of the FileData.
---@return string ext @ The extension of the file the FileData represents.
function FileData:getExtension() end

---Gets the filename of the FileData.
---@return string name @ The name of the file the FileData represents.
function FileData:getFilename() end

--endregion FileData




-- functions


---Append data to an existing file.
---@param name string @ The name (and path) of the file.
---@param data string @ The string data to append to the file.
---@param size? number @ (default: `all`) How many bytes to write.
---@return boolean success @ True if the operation was successful, or nil if there was an error.
---@return string errormsg @ The error message on failure.
function filesystem.append(name, data, size) end

---Append data to an existing file.
---@param name string @ The name (and path) of the file.
---@param data Data @ The Data object to append to the file.
---@param size? number @ (default: `all`) How many bytes to write.
---@return boolean success @ True if the operation was successful, or nil if there was an error.
---@return string errormsg @ The error message on failure.
function filesystem.append(name, data, size) end


---Gets whether love.filesystem follows symbolic links.
---@return boolean enable @ Whether love.filesystem follows symbolic links.
function filesystem.areSymlinksEnabled() end


---Recursively creates a directory.
---
---When called with 'a/b' it creates both 'a' and 'a/b', if they don't exist already.
---@param name string @ The directory to create.
---@return boolean success @ True if the directory was created, false if not.
function filesystem.createDirectory(name) end


---Returns the application data directory (could be the same as getUserDirectory)
---@return string path @ The path of the application data directory
function filesystem.getAppdataDirectory() end


---Gets the filesystem paths that will be searched for c libraries when require is called.
---
---The paths string returned by this function is a sequence of path templates separated by semicolons. The argument passed to ''require'' will be inserted in place of any question mark ('?') character in each template (after the dot characters in the argument passed to ''require'' are replaced by directory separators.) Additionally, any occurrence of a double question mark ('??') will be replaced by the name passed to require and the default library extension for the platform.
---
---The paths are relative to the game's source and save directories, as well as any paths mounted with love.filesystem.mount.
---The default paths string is '??', which makes require('cool') try to load cool.dll, or cool.so depending on the platform.
---@return string paths @ The paths that the ''require'' function will check for c libraries in love's filesystem.
function filesystem.getCRequirePath() end


---Returns a table with the names of files and subdirectories in the specified path. The table is not sorted in any way; the order is undefined.
---
---If the path passed to the function exists in the game and the save directory, it will list the files and directories from both places.
---@param dir string @ The directory.
---@return table files @ A sequence with the names of all files and subdirectories as strings.
function filesystem.getDirectoryItems(dir) end

---Returns a table with the names of files and subdirectories in the specified path. The table is not sorted in any way; the order is undefined.
---
---If the path passed to the function exists in the game and the save directory, it will list the files and directories from both places.
---@param dir string @ The directory.
---@param callback function @ A function which is called for each file and folder in the directory. The filename is passed to the function as an argument.
---@return table files @ A sequence with the names of all files and subdirectories as strings.
function filesystem.getDirectoryItems(dir, callback) end


---Gets the write directory name for your game. 
---
---Note that this only returns the name of the folder to store your files in, not the full path.
---@return string name @ The identity that is used as write directory.
function filesystem.getIdentity() end


---Gets information about the specified file or directory.
---@param path string @ The file or directory path to check.
---@param filtertype? FileType @ (default: `nil`) If supplied, this parameter causes getInfo to only return the info table if the item at the given path matches the specified file type.
---@return filesystem-getInfo-1 info @ A table containing information about the specified path, or nil if nothing exists at the path. The table contains the following fields:
function filesystem.getInfo(path, filtertype) end

---Gets information about the specified file or directory.
---This variant accepts an existing table to fill in, instead of creating a new one.
---@param path string @ The file or directory path to check.
---@param info table @ A table which will be filled in with info about the specified path.
---@return filesystem-getInfo-1 info @ The table given as an argument, or nil if nothing exists at the path. The table will be filled in with the following fields:
function filesystem.getInfo(path, info) end

---Gets information about the specified file or directory.
---This variant only returns info if the item at the given path is the same file type as specified in the filtertype argument, and accepts an existing table to fill in, instead of creating a new one.
---@param path string @ The file or directory path to check.
---@param filtertype FileType @ Causes getInfo to only return the info table if the item at the given path matches the specified file type.
---@param info table @ A table which will be filled in with info about the specified path.
---@return filesystem-getInfo-1 info @ The table given as an argument, or nil if nothing exists at the path. The table will be filled in with the following fields:
function filesystem.getInfo(path, filtertype, info) end


---Gets the platform-specific absolute path of the directory containing a filepath.
---
---This can be used to determine whether a file is inside the save directory or the game's source .love.
---This function returns the directory containing the given ''file path'', rather than file. For example, if the file screenshot1.png exists in a directory called screenshots in the game's save directory, love.filesystem.getRealDirectory('screenshots/screenshot1.png') will return the same value as love.filesystem.getSaveDirectory.
---@param filepath string @ The filepath to get the directory of.
---@return string realdir @ The platform-specific full path of the directory containing the filepath.
function filesystem.getRealDirectory(filepath) end


---Gets the filesystem paths that will be searched when require is called.
---
---The paths string returned by this function is a sequence of path templates separated by semicolons. The argument passed to ''require'' will be inserted in place of any question mark ('?') character in each template (after the dot characters in the argument passed to ''require'' are replaced by directory separators.)
---
---The paths are relative to the game's source and save directories, as well as any paths mounted with love.filesystem.mount.
---The default paths string is '?.lua;?/init.lua', which makes require('cool') try to load cool.lua and then try cool/init.lua if cool.lua doesn't exist.
---@return string paths @ The paths that the ''require'' function will check in love's filesystem.
function filesystem.getRequirePath() end


---Gets the full path to the designated save directory.
---
---This can be useful if you want to use the standard io library (or something else) to
---
---read or write in the save directory.
---@return string dir @ The absolute path to the save directory.
function filesystem.getSaveDirectory() end


---Returns the full path to the the .love file or directory. If the game is fused to the LÖVE executable, then the executable is returned.
---@return string path @ The full platform-dependent path of the .love file or directory.
function filesystem.getSource() end


---Returns the full path to the directory containing the .love file. If the game is fused to the LÖVE executable, then the directory containing the executable is returned.
---
---If love.filesystem.isFused is true, the path returned by this function can be passed to love.filesystem.mount, which will make the directory containing the main game (e.g. C:\Program Files\coolgame\) readable by love.filesystem.
---@return string path @ The full platform-dependent path of the directory containing the .love file.
function filesystem.getSourceBaseDirectory() end


---Returns the path of the user's directory
---@return string path @ The path of the user's directory
function filesystem.getUserDirectory() end


---Gets the current working directory.
---@return string cwd @ The current working directory.
function filesystem.getWorkingDirectory() end


---Initializes love.filesystem, will be called internally, so should not be used explicitly.
---@param appname string @ The name of the application binary, typically love.
function filesystem.init(appname) end


---Gets whether the game is in fused mode or not.
---
---If a game is in fused mode, its save directory will be directly in the Appdata directory instead of Appdata/LOVE/. The game will also be able to load C Lua dynamic libraries which are located in the save directory.
---
---A game is in fused mode if the source .love has been fused to the executable (see Game Distribution), or if '--fused' has been given as a command-line argument when starting the game.
---@return boolean fused @ True if the game is in fused mode, false otherwise.
function filesystem.isFused() end


---Iterate over the lines in a file.
---@param name string @ The name (and path) of the file
---@return function iterator @ A function that iterates over all the lines in the file
function filesystem.lines(name) end


---Loads a Lua file (but does not run it).
---@param name string @ The name (and path) of the file.
---@return function chunk @ The loaded chunk.
---@return string errormsg @ The error message if file could not be opened.
function filesystem.load(name) end


---Mounts a zip file or folder in the game's save directory for reading.
---
---It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.
---@param archive string @ The folder or zip file in the game's save directory to mount.
---@param mountpoint string @ The new path the archive will be mounted to.
---@param appendToPath? boolean @ (default: `false`) Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.
---@return boolean success @ True if the archive was successfully mounted, false otherwise.
function filesystem.mount(archive, mountpoint, appendToPath) end

---Mounts a zip file or folder in the game's save directory for reading.
---
---It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.
---Mounts the contents of the given FileData in memory. The FileData's data must contain a zipped directory structure.
---@param filedata FileData @ The FileData object in memory to mount.
---@param mountpoint string @ The new path the archive will be mounted to.
---@param appendToPath? boolean @ (default: `false`) Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.
---@return boolean success @ True if the archive was successfully mounted, false otherwise.
function filesystem.mount(filedata, mountpoint, appendToPath) end

---Mounts a zip file or folder in the game's save directory for reading.
---
---It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.
---Mounts the contents of the given Data object in memory. The data must contain a zipped directory structure.
---@param data Data @ The Data object in memory to mount.
---@param archivename string @ The name to associate the mounted data with, for use with love.filesystem.unmount. Must be unique compared to other mounted data.
---@param mountpoint string @ The new path the archive will be mounted to.
---@param appendToPath? boolean @ (default: `false`) Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.
---@return boolean success @ True if the archive was successfully mounted, false otherwise.
function filesystem.mount(data, archivename, mountpoint, appendToPath) end


---Creates a new File object. 
---
---It needs to be opened before it can be accessed.
---Please note that this function will not return any error message (e.g. if you use an invalid filename) because it just creates the File Object. You can still check if the file is valid by using File:open which returns a boolean and an error message if something goes wrong while opening the file.
---@param filename string @ The filename of the file.
---@return File file @ The new File object.
function filesystem.newFile(filename) end

---Creates a new File object. 
---
---It needs to be opened before it can be accessed.
---Creates a File object and opens it for reading, writing, or appending.
---@param filename string @ The filename of the file.
---@param mode FileMode @ The mode to open the file in.
---@return File file @ The new File object, or nil if an error occurred.
---@return string errorstr @ The error string if an error occurred.
function filesystem.newFile(filename, mode) end


---Creates a new FileData object.
---@param contents string @ The contents of the file.
---@param name string @ The name of the file.
---@return FileData data @ Your new FileData.
function filesystem.newFileData(contents, name) end

---Creates a new FileData object.
---Creates a new FileData from a file on the storage device.
---@param filepath string @ Path to the file.
---@return FileData data @ The new FileData, or nil if an error occurred.
---@return string err @ The error string, if an error occurred.
function filesystem.newFileData(filepath) end


---Read the contents of a file.
---@param name string @ The name (and path) of the file.
---@param size? number @ (default: `all`) How many bytes to read.
---@return string contents @ The file contents.
---@return number size @ How many bytes have been read.
---@return nil contents @ returns nil as content.
---@return string error @ returns an error message.
function filesystem.read(name, size) end

---Read the contents of a file.
---Reads the contents of a file into either a string or a FileData object.
---@param container ContainerType @ What type to return the file's contents as.
---@param name string @ The name (and path) of the file
---@param size? number @ (default: `all`) How many bytes to read
---@return FileData|string contents @ FileData or string containing the file contents.
---@return number size @ How many bytes have been read.
---@return nil contents @ returns nil as content.
---@return string error @ returns an error message.
function filesystem.read(container, name, size) end


---Removes a file or empty directory.
---The directory must be empty before removal or else it will fail. Simply remove all files and folders in the directory beforehand.
---
---If the file exists in the .love but not in the save directory, it returns false as well.
---
---An opened File prevents removal of the underlying file. Simply close the File to remove it.
---@param name string @ The file or directory to remove.
---@return boolean success @ True if the file/directory was removed, false otherwise.
function filesystem.remove(name) end


---Sets the filesystem paths that will be searched for c libraries when require is called.
---
---The paths string returned by this function is a sequence of path templates separated by semicolons. The argument passed to ''require'' will be inserted in place of any question mark ('?') character in each template (after the dot characters in the argument passed to ''require'' are replaced by directory separators.) Additionally, any occurrence of a double question mark ('??') will be replaced by the name passed to require and the default library extension for the platform.
---
---The paths are relative to the game's source and save directories, as well as any paths mounted with love.filesystem.mount.
---The default paths string is '??', which makes require('cool') try to load cool.dll, or cool.so depending on the platform.
---@param paths string @ The paths that the ''require'' function will check in love's filesystem.
function filesystem.setCRequirePath(paths) end


---Sets the write directory for your game. 
---
---Note that you can only set the name of the folder to store your files in, not the location.
---@param name string @ The new identity that will be used as write directory.
function filesystem.setIdentity(name) end

---Sets the write directory for your game. 
---
---Note that you can only set the name of the folder to store your files in, not the location.
---@param name string @ The new identity that will be used as write directory.
function filesystem.setIdentity(name) end


---Sets the filesystem paths that will be searched when require is called.
---
---The paths string given to this function is a sequence of path templates separated by semicolons. The argument passed to ''require'' will be inserted in place of any question mark ('?') character in each template (after the dot characters in the argument passed to ''require'' are replaced by directory separators.)
---
---The paths are relative to the game's source and save directories, as well as any paths mounted with love.filesystem.mount.
---The default paths string is '?.lua;?/init.lua', which makes require('cool') try to load cool.lua and then try cool/init.lua if cool.lua doesn't exist.
---@param paths string @ The paths that the ''require'' function will check in love's filesystem.
function filesystem.setRequirePath(paths) end


---Sets the source of the game, where the code is present. This function can only be called once, and is normally automatically done by LÖVE.
---@param path string @ Absolute path to the game's source folder.
function filesystem.setSource(path) end


---Sets whether love.filesystem follows symbolic links. It is enabled by default in version 0.10.0 and newer, and disabled by default in 0.9.2.
---@param enable boolean @ Whether love.filesystem should follow symbolic links.
function filesystem.setSymlinksEnabled(enable) end


---Unmounts a zip file or folder previously mounted for reading with love.filesystem.mount.
---@param archive string @ The folder or zip file in the game's save directory which is currently mounted.
---@return boolean success @ True if the archive was successfully unmounted, false otherwise.
function filesystem.unmount(archive) end


---Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
---@param name string @ The name (and path) of the file.
---@param data string @ The string data to write to the file.
---@param size? number @ (default: `all`) How many bytes to write.
---@return boolean success @ If the operation was successful.
---@return string message @ Error message if operation was unsuccessful.
function filesystem.write(name, data, size) end

---Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
---If you are getting the error message 'Could not set write directory', try setting the save directory. This is done either with love.filesystem.setIdentity or by setting the identity field in love.conf.
---
---'''Writing to multiple lines''': In Windows, some text editors (e.g. Notepad) only treat CRLF ('\r\n') as a new line.
---@param name string @ The name (and path) of the file.
---@param data Data @ The Data object to write to the file.
---@param size? number @ (default: `all`) How many bytes to write.
---@return boolean success @ If the operation was successful.
---@return string message @ Error message if operation was unsuccessful.
function filesystem.write(name, data, size) end




-- enums

---Buffer modes for File objects.
---@alias BufferMode
---No buffering. The result of write and append operations appears immediately.
---| "'none'"
---Line buffering. Write and append operations are buffered until a newline is output or the buffer size limit is reached.
---| "'line'"
---Full buffering. Write and append operations are always buffered until the buffer size limit is reached.
---| "'full'"

---How to decode a given FileData.
---@alias FileDecoder
---The data is unencoded.
---| "'file'"
---The data is base64-encoded.
---| "'base64'"

---The different modes you can open a File in.
---@alias FileMode
---Open a file for read.
---| "'r'"
---Open a file for write.
---| "'w'"
---Open a file for append.
---| "'a'"
---Do not open a file (represents a closed file.)
---| "'c'"

---The type of a file.
---@alias FileType
---Regular file.
---| "'file'"
---Directory.
---| "'directory'"
---Symbolic link.
---| "'symlink'"
---Something completely different like a device.
---| "'other'"




-- preludes

---@class filesystem-getInfo-1
---@field type FileType # The type of the object at the path (file, directory, symlink, etc.)
---@field size number # The size in bytes of the file, or nil if it can't be determined.
---@field modtime number # The file's last modification time in seconds since the unix epoch, or nil if it can't be determined.




return filesystem