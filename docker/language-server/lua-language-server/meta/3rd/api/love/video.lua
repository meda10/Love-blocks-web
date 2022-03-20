---This module is responsible for decoding, controlling, and streaming video files.
---
---It can't draw the videos, see love.graphics.newVideo and Video objects for that.
local video = {}


-- types

--region VideoStream

---An object which decodes, streams, and controls Videos.
---@class VideoStream: Object
local VideoStream = {}

--endregion VideoStream


-- functions

---Creates a new VideoStream. Currently only Ogg Theora video files are supported. VideoStreams can't draw videos, see love.graphics.newVideo for that.
---@param filename string @ The file path to the Ogg Theora video file.
---@return VideoStream videostream @ A new VideoStream.
function video.newVideoStream(filename) end

---Creates a new VideoStream. Currently only Ogg Theora video files are supported. VideoStreams can't draw videos, see love.graphics.newVideo for that.
---@param file File @ The File object containing the Ogg Theora video.
---@return VideoStream videostream @ A new VideoStream.
function video.newVideoStream(file) end


return video