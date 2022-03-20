---This module is responsible for decoding sound files. It can't play the sounds, see love.audio for that.
local sound = {}




-- types



--region Decoder

---An object which can gradually decode a sound file.
---@class Decoder: Object
local Decoder = {}

---Creates a new copy of current decoder.
---
---The new decoder will start decoding from the beginning of the audio stream.
---@return Decoder decoder @ New copy of the decoder.
function Decoder:clone() end

---Returns the number of bits per sample.
---@return number bitDepth @ Either 8, or 16.
function Decoder:getBitDepth() end

---Returns the number of channels in the stream.
---@return number channels @ 1 for mono, 2 for stereo.
function Decoder:getChannelCount() end

---Gets the duration of the sound file. It may not always be sample-accurate, and it may return -1 if the duration cannot be determined at all.
---@return number duration @ The duration of the sound file in seconds, or -1 if it cannot be determined.
function Decoder:getDuration() end

---Returns the sample rate of the Decoder.
---@return number rate @ Number of samples per second.
function Decoder:getSampleRate() end

--endregion Decoder



--region SoundData


---Contains raw audio samples.
---
---You can not play SoundData back directly. You must wrap a Source object around it.
---@class SoundData: Data, Object
local SoundData = {}


---Returns the number of bits per sample.
---@return number bitdepth @ Either 8, or 16.
function SoundData:getBitDepth() end


---Returns the number of channels in the SoundData.
---@return number channels @ 1 for mono, 2 for stereo.
function SoundData:getChannelCount() end


---Gets the duration of the sound data.
---@return number duration @ The duration of the sound data in seconds.
function SoundData:getDuration() end


---Gets the value of the sample-point at the specified position. For stereo SoundData objects, the data from the left and right channels are interleaved in that order.
---@param i number @ An integer value specifying the position of the sample (starting at 0).
---@return number sample @ The normalized samplepoint (range -1.0 to 1.0).
function SoundData:getSample(i) end

---Gets the value of the sample-point at the specified position. For stereo SoundData objects, the data from the left and right channels are interleaved in that order.
---Gets the value of a sample using an explicit sample index instead of interleaving them in the sample position parameter.
---@param i number @ An integer value specifying the position of the sample (starting at 0).
---@param channel number @ The index of the channel to get within the given sample.
---@return number sample @ The normalized samplepoint (range -1.0 to 1.0).
function SoundData:getSample(i, channel) end


---Returns the number of samples per channel of the SoundData.
---@return number count @ Total number of samples.
function SoundData:getSampleCount() end


---Returns the sample rate of the SoundData.
---@return number rate @ Number of samples per second.
function SoundData:getSampleRate() end


---Sets the value of the sample-point at the specified position. For stereo SoundData objects, the data from the left and right channels are interleaved in that order.
---@param i number @ An integer value specifying the position of the sample (starting at 0).
---@param sample number @ The normalized samplepoint (range -1.0 to 1.0).
function SoundData:setSample(i, sample) end

---Sets the value of the sample-point at the specified position. For stereo SoundData objects, the data from the left and right channels are interleaved in that order.
---Sets the value of a sample using an explicit sample index instead of interleaving them in the sample position parameter.
---@param i number @ An integer value specifying the position of the sample (starting at 0).
---@param channel number @ The index of the channel to set within the given sample.
---@param sample number @ The normalized samplepoint (range -1.0 to 1.0).
function SoundData:setSample(i, channel, sample) end


--endregion SoundData




-- functions


---Attempts to find a decoder for the encoded sound data in the specified file.
---@param file File @ The file with encoded sound data.
---@param buffer? number @ (default: `2048`) The size of each decoded chunk, in bytes.
---@return Decoder decoder @ A new Decoder object.
function sound.newDecoder(file, buffer) end

---Attempts to find a decoder for the encoded sound data in the specified file.
---@param filename string @ The filename of the file with encoded sound data.
---@param buffer? number @ (default: `2048`) The size of each decoded chunk, in bytes.
---@return Decoder decoder @ A new Decoder object.
function sound.newDecoder(filename, buffer) end


---Creates new SoundData from a filepath, File, or Decoder. It's also possible to create SoundData with a custom sample rate, channel and bit depth.
---
---The sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.
---@param filename string @ The file name of the file to load.
---@return SoundData soundData @ A new SoundData object.
function sound.newSoundData(filename) end

---Creates new SoundData from a filepath, File, or Decoder. It's also possible to create SoundData with a custom sample rate, channel and bit depth.
---
---The sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.
---@param file File @ A File pointing to an audio file.
---@return SoundData soundData @ A new SoundData object.
function sound.newSoundData(file) end

---Creates new SoundData from a filepath, File, or Decoder. It's also possible to create SoundData with a custom sample rate, channel and bit depth.
---
---The sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.
---@param decoder Decoder @ Decode data from this Decoder until EOF.
---@return SoundData soundData @ A new SoundData object.
function sound.newSoundData(decoder) end

---Creates new SoundData from a filepath, File, or Decoder. It's also possible to create SoundData with a custom sample rate, channel and bit depth.
---
---The sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.
---@param samples number @ Total number of samples.
---@param rate? number @ (default: `44100`) Number of samples per second
---@param bits? number @ (default: `16`) Bits per sample (8 or 16).
---@param channels? number @ (default: `2`) Either 1 for mono or 2 for stereo.
---@return SoundData soundData @ A new SoundData object.
function sound.newSoundData(samples, rate, bits, channels) end




return sound