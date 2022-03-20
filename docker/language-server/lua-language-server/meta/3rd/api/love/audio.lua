---Provides an interface to create noise with the user's speakers.
local audio = {}




-- types



--region RecordingDevice

---Represents an audio input device capable of recording sounds.
---@class RecordingDevice: Object
local RecordingDevice = {}

---Gets the number of bits per sample in the data currently being recorded.
---@return number bits @ The number of bits per sample in the data that's currently being recorded.
function RecordingDevice:getBitDepth() end

---Gets the number of channels currently being recorded (mono or stereo).
---@return number channels @ The number of channels being recorded (1 for mono, 2 for stereo).
function RecordingDevice:getChannelCount() end

---Gets all recorded audio SoundData stored in the device's internal ring buffer.
---
---The internal ring buffer is cleared when this function is called, so calling it again will only get audio recorded after the previous call. If the device's internal ring buffer completely fills up before getData is called, the oldest data that doesn't fit into the buffer will be lost.
---@return SoundData data @ The recorded audio data, or nil if the device isn't recording.
function RecordingDevice:getData() end

---Gets the name of the recording device.
---@return string name @ The name of the device.
function RecordingDevice:getName() end

---Gets the number of currently recorded samples.
---@return number samples @ The number of samples that have been recorded so far.
function RecordingDevice:getSampleCount() end

---Gets the number of samples per second currently being recorded.
---@return number rate @ The number of samples being recorded per second (sample rate).
function RecordingDevice:getSampleRate() end

---Gets whether the device is currently recording.
---@return boolean recording @ True if the recording, false otherwise.
function RecordingDevice:isRecording() end

---Begins recording audio using this device.
---A ring buffer is used internally to store recorded data before RecordingDevice:getData or RecordingDevice:stop are called – the former clears the buffer. If the buffer completely fills up before getData or stop are called, the oldest data that doesn't fit into the buffer will be lost.
---@param samplecount number @ The maximum number of samples to store in an internal ring buffer when recording. RecordingDevice:getData clears the internal buffer when called.
---@param samplerate? number @ (default: `8000`) The number of samples per second to store when recording.
---@param bitdepth? number @ (default: `16`) The number of bits per sample.
---@param channels? number @ (default: `1`) Whether to record in mono or stereo. Most microphones don't support more than 1 channel.
---@return boolean success @ True if the device successfully began recording using the specified parameters, false if not.
function RecordingDevice:start(samplecount, samplerate, bitdepth, channels) end

---Stops recording audio from this device. Any sound data currently in the device's buffer will be returned.
---@return SoundData data @ The sound data currently in the device's buffer, or nil if the device wasn't recording.
function RecordingDevice:stop() end

--endregion RecordingDevice



--region Source


---A Source represents audio you can play back.
---
---You can do interesting things with Sources, like set the volume, pitch, and its position relative to the listener. Please note that positional audio only works for mono (i.e. non-stereo) sources.
---
---The Source controls (play/pause/stop) act according to the following state table.
---@class Source: Object
local Source = {}


---Creates an identical copy of the Source in the stopped state.
---
---Static Sources will use significantly less memory and take much less time to be created if Source:clone is used to create them instead of love.audio.newSource, so this method should be preferred when making multiple Sources which play the same sound.
---Cloned Sources inherit all the set-able state of the original Source, but they are initialized stopped.
---@return Source source @ The new identical copy of this Source.
function Source:clone() end


---Gets a list of the Source's active effect names.
---@return table effects @ A list of the source's active effect names.
function Source:getActiveEffects() end


---Gets the amount of air absorption applied to the Source.
---
---By default the value is set to 0 which means that air absorption effects are disabled. A value of 1 will apply high frequency attenuation to the Source at a rate of 0.05 dB per meter.
---Audio air absorption functionality is not supported on iOS.
---@return number amount @ The amount of air absorption applied to the Source.
function Source:getAirAbsorption() end


---Gets the reference and maximum attenuation distances of the Source. The values, combined with the current DistanceModel, affect how the Source's volume attenuates based on distance from the listener.
---@return number ref @ The current reference attenuation distance. If the current DistanceModel is clamped, this is the minimum distance before the Source is no longer attenuated.
---@return number max @ The current maximum attenuation distance.
function Source:getAttenuationDistances() end


---Gets the number of channels in the Source. Only 1-channel (mono) Sources can use directional and positional effects.
---@return number channels @ 1 for mono, 2 for stereo.
function Source:getChannelCount() end


---Gets the Source's directional volume cones. Together with Source:setDirection, the cone angles allow for the Source's volume to vary depending on its direction.
---@return number innerAngle @ The inner angle from the Source's direction, in radians. The Source will play at normal volume if the listener is inside the cone defined by this angle.
---@return number outerAngle @ The outer angle from the Source's direction, in radians. The Source will play at a volume between the normal and outer volumes, if the listener is in between the cones defined by the inner and outer angles.
---@return number outerVolume @ The Source's volume when the listener is outside both the inner and outer cone angles.
function Source:getCone() end


---Gets the direction of the Source.
---@return number x @ The X part of the direction vector.
---@return number y @ The Y part of the direction vector.
---@return number z @ The Z part of the direction vector.
function Source:getDirection() end


---Gets the duration of the Source. For streaming Sources it may not always be sample-accurate, and may return -1 if the duration cannot be determined at all.
---@param unit? TimeUnit @ (default: `'seconds'`) The time unit for the return value.
---@return number duration @ The duration of the Source, or -1 if it cannot be determined.
function Source:getDuration(unit) end


---Gets the filter settings associated to a specific effect.
---
---This function returns nil if the effect was applied with no filter settings associated to it.
---@param name string @ The name of the effect.
---@param filtersettings? table @ (default: `{}`) An optional empty table that will be filled with the filter settings.
---@return Source-getEffect-1 filtersettings @ The settings for the filter associated to this effect, or nil if the effect is not present in this Source or has no filter associated. The table has the following fields:
function Source:getEffect(name, filtersettings) end


---Gets the filter settings currently applied to the Source.
---@return Source-getFilter-1 settings @ The filter settings to use for this Source, or nil if the Source has no active filter. The table has the following fields:
function Source:getFilter() end


---Gets the number of free buffer slots in a queueable Source. If the queueable Source is playing, this value will increase up to the amount the Source was created with. If the queueable Source is stopped, it will process all of its internal buffers first, in which case this function will always return the amount it was created with.
---@return number buffers @ How many more SoundData objects can be queued up.
function Source:getFreeBufferCount() end


---Gets the current pitch of the Source.
---@return number pitch @ The pitch, where 1.0 is normal.
function Source:getPitch() end


---Gets the position of the Source.
---@return number x @ The X position of the Source.
---@return number y @ The Y position of the Source.
---@return number z @ The Z position of the Source.
function Source:getPosition() end


---Returns the rolloff factor of the source.
---@return number rolloff @ The rolloff factor.
function Source:getRolloff() end


---Gets the type of the Source.
---@return SourceType sourcetype @ The type of the source.
function Source:getType() end


---Gets the velocity of the Source.
---@return number x @ The X part of the velocity vector.
---@return number y @ The Y part of the velocity vector.
---@return number z @ The Z part of the velocity vector.
function Source:getVelocity() end


---Gets the current volume of the Source.
---@return number volume @ The volume of the Source, where 1.0 is normal volume.
function Source:getVolume() end


---Returns the volume limits of the source.
---@return number min @ The minimum volume.
---@return number max @ The maximum volume.
function Source:getVolumeLimits() end


---Returns whether the Source will loop.
---@return boolean loop @ True if the Source will loop, false otherwise.
function Source:isLooping() end


---Returns whether the Source is playing.
---@return boolean playing @ True if the Source is playing, false otherwise.
function Source:isPlaying() end


---Gets whether the Source's position, velocity, direction, and cone angles are relative to the listener.
---@return boolean relative @ True if the position, velocity, direction and cone angles are relative to the listener, false if they're absolute.
function Source:isRelative() end


---Pauses the Source.
function Source:pause() end


---Starts playing the Source.
---@return boolean success @ Whether the Source was able to successfully start playing.
function Source:play() end


---Queues SoundData for playback in a queueable Source.
---
---This method requires the Source to be created via love.audio.newQueueableSource.
---@param sounddata SoundData @ The data to queue. The SoundData's sample rate, bit depth, and channel count must match the Source's.
---@return boolean success @ True if the data was successfully queued for playback, false if there were no available buffers to use for queueing.
function Source:queue(sounddata) end


---Sets the currently playing position of the Source.
---@param offset number @ The position to seek to.
---@param unit? TimeUnit @ (default: `'seconds'`) The unit of the position value.
function Source:seek(offset, unit) end


---Sets the amount of air absorption applied to the Source.
---
---By default the value is set to 0 which means that air absorption effects are disabled. A value of 1 will apply high frequency attenuation to the Source at a rate of 0.05 dB per meter.
---
---Air absorption can simulate sound transmission through foggy air, dry air, smoky atmosphere, etc. It can be used to simulate different atmospheric conditions within different locations in an area.
---Audio air absorption functionality is not supported on iOS.
---@param amount number @ The amount of air absorption applied to the Source. Must be between 0 and 10.
function Source:setAirAbsorption(amount) end


---Sets the reference and maximum attenuation distances of the Source. The parameters, combined with the current DistanceModel, affect how the Source's volume attenuates based on distance.
---
---Distance attenuation is only applicable to Sources based on mono (rather than stereo) audio.
---@param ref number @ The new reference attenuation distance. If the current DistanceModel is clamped, this is the minimum attenuation distance.
---@param max number @ The new maximum attenuation distance.
function Source:setAttenuationDistances(ref, max) end


---Sets the Source's directional volume cones. Together with Source:setDirection, the cone angles allow for the Source's volume to vary depending on its direction.
---@param innerAngle number @ The inner angle from the Source's direction, in radians. The Source will play at normal volume if the listener is inside the cone defined by this angle.
---@param outerAngle number @ The outer angle from the Source's direction, in radians. The Source will play at a volume between the normal and outer volumes, if the listener is in between the cones defined by the inner and outer angles.
---@param outerVolume? number @ (default: `0`) The Source's volume when the listener is outside both the inner and outer cone angles.
function Source:setCone(innerAngle, outerAngle, outerVolume) end


---Sets the direction vector of the Source. A zero vector makes the source non-directional.
---@param x number @ The X part of the direction vector.
---@param y number @ The Y part of the direction vector.
---@param z number @ The Z part of the direction vector.
function Source:setDirection(x, y, z) end


---Applies an audio effect to the Source.
---
---The effect must have been previously defined using love.audio.setEffect.
---Applies the given previously defined effect to this Source.
---@param name string @ The name of the effect previously set up with love.audio.setEffect.
---@param enable? boolean @ (default: `true`) If false and the given effect name was previously enabled on this Source, disables the effect.
---@return boolean success @ Whether the effect was successfully applied to this Source.
function Source:setEffect(name, enable) end

---Applies an audio effect to the Source.
---
---The effect must have been previously defined using love.audio.setEffect.
---Applies the given previously defined effect to this Source, and applies a filter to the Source which affects the sound fed into the effect.
---
---Audio effect functionality is not supported on iOS.
---@param name string @ The name of the effect previously set up with love.audio.setEffect.
---@param filtersettings Source-setEffect-1 @ The filter settings to apply prior to the effect, with the following fields:
---@return boolean success @ Whether the effect and filter were successfully applied to this Source.
function Source:setEffect(name, filtersettings) end


---Sets a low-pass, high-pass, or band-pass filter to apply when playing the Source.
---@param settings Source-setEffect-1 @ The filter settings to use for this Source, with the following fields:
---@return boolean success @ Whether the filter was successfully applied to the Source.
function Source:setFilter(settings) end

---Sets a low-pass, high-pass, or band-pass filter to apply when playing the Source.
---Disables filtering on this Source.
---
---
function Source:setFilter() end


---Sets whether the Source should loop.
---@param loop boolean @ True if the source should loop, false otherwise.
function Source:setLooping(loop) end


---Sets the pitch of the Source.
---@param pitch number @ Calculated with regard to 1 being the base pitch. Each reduction by 50 percent equals a pitch shift of -12 semitones (one octave reduction). Each doubling equals a pitch shift of 12 semitones (one octave increase). Zero is not a legal value.
function Source:setPitch(pitch) end


---Sets the position of the Source. Please note that this only works for mono (i.e. non-stereo) sound files!
---@param x number @ The X position of the Source.
---@param y number @ The Y position of the Source.
---@param z number @ The Z position of the Source.
function Source:setPosition(x, y, z) end


---Sets whether the Source's position, velocity, direction, and cone angles are relative to the listener, or absolute.
---
---By default, all sources are absolute and therefore relative to the origin of love's coordinate system 0, 0. Only absolute sources are affected by the position of the listener. Please note that positional audio only works for mono (i.e. non-stereo) sources. 
---@param enable? boolean @ (default: `false`) True to make the position, velocity, direction and cone angles relative to the listener, false to make them absolute.
function Source:setRelative(enable) end


---Sets the rolloff factor which affects the strength of the used distance attenuation.
---
---Extended information and detailed formulas can be found in the chapter '3.4. Attenuation By Distance' of OpenAL 1.1 specification.
---@param rolloff number @ The new rolloff factor.
function Source:setRolloff(rolloff) end


---Sets the velocity of the Source.
---
---This does '''not''' change the position of the Source, but lets the application know how it has to calculate the doppler effect.
---@param x number @ The X part of the velocity vector.
---@param y number @ The Y part of the velocity vector.
---@param z number @ The Z part of the velocity vector.
function Source:setVelocity(x, y, z) end


---Sets the current volume of the Source.
---@param volume number @ The volume for a Source, where 1.0 is normal volume. Volume cannot be raised above 1.0.
function Source:setVolume(volume) end


---Sets the volume limits of the source. The limits have to be numbers from 0 to 1.
---@param min number @ The minimum volume.
---@param max number @ The maximum volume.
function Source:setVolumeLimits(min, max) end


---Stops a Source.
function Source:stop() end


---Gets the currently playing position of the Source.
---@param unit? TimeUnit @ (default: `'seconds'`) The type of unit for the return value.
---@return number position @ The currently playing position of the Source.
function Source:tell(unit) end


--endregion Source




-- functions


---Gets a list of the names of the currently enabled effects.
---@return table effects @ The list of the names of the currently enabled effects.
function audio.getActiveEffects() end


---Gets the current number of simultaneously playing sources.
---@return number count @ The current number of simultaneously playing sources.
function audio.getActiveSourceCount() end


---Returns the distance attenuation model.
---@return DistanceModel model @ The current distance model. The default is 'inverseclamped'.
function audio.getDistanceModel() end


---Gets the current global scale factor for velocity-based doppler effects.
---@return number scale @ The current doppler scale factor.
function audio.getDopplerScale() end


---Gets the settings associated with an effect.
---@param name string @ The name of the effect.
---@return table settings @ The settings associated with the effect.
function audio.getEffect(name) end


---Gets the maximum number of active effects supported by the system.
---@return number maximum @ The maximum number of active effects.
function audio.getMaxSceneEffects() end


---Gets the maximum number of active Effects in a single Source object, that the system can support.
---This function return 0 for system that doesn't support audio effects.
---@return number maximum @ The maximum number of active Effects per Source.
function audio.getMaxSourceEffects() end


---Returns the orientation of the listener.
---@return number fx @ Forward vector of the listener orientation.
---@return number fy @ Forward vector of the listener orientation.
---@return number fz @ Forward vector of the listener orientation.
---@return number ux @ Up vector of the listener orientation.
---@return number uy @ Up vector of the listener orientation.
---@return number uz @ Up vector of the listener orientation.
function audio.getOrientation() end


---Returns the position of the listener. Please note that positional audio only works for mono (i.e. non-stereo) sources.
---@return number x @ The X position of the listener.
---@return number y @ The Y position of the listener.
---@return number z @ The Z position of the listener.
function audio.getPosition() end


---Gets a list of RecordingDevices on the system.
---
---The first device in the list is the user's default recording device. The list may be empty if there are no microphones connected to the system.
---
---Audio recording is currently not supported on iOS.
---Audio recording for Android is supported since 11.3. However, it's not supported when APK from Play Store is used.
---@return table devices @ The list of connected recording devices.
function audio.getRecordingDevices() end


---Gets the current number of simultaneously playing sources.
---@return number numSources @ The current number of simultaneously playing sources.
function audio.getSourceCount() end


---Returns the velocity of the listener.
---@return number x @ The X velocity of the listener.
---@return number y @ The Y velocity of the listener.
---@return number z @ The Z velocity of the listener.
function audio.getVelocity() end


---Returns the master volume.
---@return number volume @ The current master volume
function audio.getVolume() end


---Gets whether audio effects are supported in the system.
---Older Linux distributions that ship with older OpenAL library may not support audio effects. Furthermore, iOS doesn't
---
---support audio effects at all.
---@return boolean supported @ True if effects are supported, false otherwise.
function audio.isEffectsSupported() end


---Creates a new Source usable for real-time generated sound playback with Source:queue.
---The sample rate, bit depth, and channel count of any SoundData used with Source:queue must match the parameters given to this constructor.
---@param samplerate number @ Number of samples per second when playing.
---@param bitdepth number @ Bits per sample (8 or 16).
---@param channels number @ 1 for mono or 2 for stereo.
---@param buffercount? number @ (default: `0`) The number of buffers that can be queued up at any given time with Source:queue. Cannot be greater than 64. A sensible default (~8) is chosen if no value is specified.
---@return Source source @ The new Source usable with Source:queue.
function audio.newQueueableSource(samplerate, bitdepth, channels, buffercount) end


---Creates a new Source from a filepath, File, Decoder or SoundData.
---
---Sources created from SoundData are always static.
---@param filename string @ The filepath to the audio file.
---@param type SourceType @ Streaming or static source.
---@return Source source @ A new Source that can play the specified audio.
function audio.newSource(filename, type) end

---Creates a new Source from a filepath, File, Decoder or SoundData.
---
---Sources created from SoundData are always static.
---@param file File @ A File pointing to an audio file.
---@param type SourceType @ Streaming or static source.
---@return Source source @ A new Source that can play the specified audio.
function audio.newSource(file, type) end

---Creates a new Source from a filepath, File, Decoder or SoundData.
---
---Sources created from SoundData are always static.
---@param decoder Decoder @ The Decoder to create a Source from.
---@param type SourceType @ Streaming or static source.
---@return Source source @ A new Source that can play the specified audio.
function audio.newSource(decoder, type) end

---Creates a new Source from a filepath, File, Decoder or SoundData.
---
---Sources created from SoundData are always static.
---@param data FileData @ The FileData to create a Source from.
---@param type SourceType @ Streaming or static source.
---@return Source source @ A new Source that can play the specified audio.
function audio.newSource(data, type) end

---Creates a new Source from a filepath, File, Decoder or SoundData.
---
---Sources created from SoundData are always static.
---@param data SoundData @ The SoundData to create a Source from.
---@return Source source @ A new Source that can play the specified audio. The SourceType of the returned audio is 'static'.
function audio.newSource(data) end


---Pauses specific or all currently played Sources.
---Pauses all currently active Sources and returns them.
---@return table Sources @ A table containing a list of Sources that were paused by this call.
function audio.pause() end

---Pauses specific or all currently played Sources.
---Pauses the given Sources.
---@param source Source @ The first Source to pause.
---@vararg Source @ Additional Sources to pause.
function audio.pause(source, ...) end

---Pauses specific or all currently played Sources.
---Pauses the given Sources.
---@param sources table @ A table containing a list of Sources to pause.
function audio.pause(sources) end


---Plays the specified Source.
---@param source Source @ The Source to play.
function audio.play(source) end

---Plays the specified Source.
---Starts playing multiple Sources simultaneously.
---@param sources table @ Table containing a list of Sources to play.
function audio.play(sources) end

---Plays the specified Source.
---Starts playing multiple Sources simultaneously.
---@param source1 Source @ The first Source to play.
---@param source2 Source @ The second Source to play.
---@vararg Source @ Additional Sources to play.
function audio.play(source1, source2, ...) end


---Sets the distance attenuation model.
---@param model DistanceModel @ The new distance model.
function audio.setDistanceModel(model) end


---Sets a global scale factor for velocity-based doppler effects. The default scale value is 1.
---@param scale number @ The new doppler scale factor. The scale must be greater than 0.
function audio.setDopplerScale(scale) end


---Defines an effect that can be applied to a Source.
---
---Not all system supports audio effects. Use love.audio.isEffectsSupported to check.
---@param name string @ The name of the effect.
---@param settings audio-setEffect-1 @ The settings to use for this effect, with the following fields:
---@return boolean success @ Whether the effect was successfully created.
function audio.setEffect(name, settings) end

---Defines an effect that can be applied to a Source.
---
---Not all system supports audio effects. Use love.audio.isEffectsSupported to check.
---@param name string @ The name of the effect.
---@param enabled? boolean @ (default: `true`) If false and the given effect name was previously set, disables the effect.
---@return boolean success @ Whether the effect was successfully disabled.
function audio.setEffect(name, enabled) end


---Sets whether the system should mix the audio with the system's audio.
---@param mix boolean @ True to enable mixing, false to disable it.
---@return boolean success @ True if the change succeeded, false otherwise.
function audio.setMixWithSystem(mix) end


---Sets the orientation of the listener.
---@param fx number @ Forward vector of the listener orientation.
---@param fy number @ Forward vector of the listener orientation.
---@param fz number @ Forward vector of the listener orientation.
---@param ux number @ Up vector of the listener orientation.
---@param uy number @ Up vector of the listener orientation.
---@param uz number @ Up vector of the listener orientation.
function audio.setOrientation(fx, fy, fz, ux, uy, uz) end


---Sets the position of the listener, which determines how sounds play.
---@param x number @ The x position of the listener.
---@param y number @ The y position of the listener.
---@param z number @ The z position of the listener.
function audio.setPosition(x, y, z) end


---Sets the velocity of the listener.
---@param x number @ The X velocity of the listener.
---@param y number @ The Y velocity of the listener.
---@param z number @ The Z velocity of the listener.
function audio.setVelocity(x, y, z) end


---Sets the master volume.
---@param volume number @ 1.0 is max and 0.0 is off.
function audio.setVolume(volume) end


---Stops currently played sources.
---This function will stop all currently active sources.
function audio.stop() end

---Stops currently played sources.
---This function will only stop the specified source.
---@param source Source @ The source on which to stop the playback.
function audio.stop(source) end

---Stops currently played sources.
---Simultaneously stops all given Sources.
---@param source1 Source @ The first Source to stop.
---@param source2 Source @ The second Source to stop.
---@vararg Source @ Additional Sources to stop.
function audio.stop(source1, source2, ...) end

---Stops currently played sources.
---Simultaneously stops all given Sources.
---@param sources table @ A table containing a list of Sources to stop.
function audio.stop(sources) end




-- enums

---The different distance models.
---
---Extended information can be found in the chapter "3.4. Attenuation By Distance" of the OpenAL 1.1 specification.
---@alias DistanceModel
---Sources do not get attenuated.
---| "'none'"
---Inverse distance attenuation.
---| "'inverse'"
---Inverse distance attenuation. Gain is clamped. In version 0.9.2 and older this is named '''inverse clamped'''.
---| "'inverseclamped'"
---Linear attenuation.
---| "'linear'"
---Linear attenuation. Gain is clamped. In version 0.9.2 and older this is named '''linear clamped'''.
---| "'linearclamped'"
---Exponential attenuation.
---| "'exponent'"
---Exponential attenuation. Gain is clamped. In version 0.9.2 and older this is named '''exponent clamped'''.
---| "'exponentclamped'"

---The different types of effects supported by love.audio.setEffect.
---@alias EffectType
---Plays multiple copies of the sound with slight pitch and time variation. Used to make sounds sound "fuller" or "thicker".
---| "'chorus'"
---Decreases the dynamic range of the sound, making the loud and quiet parts closer in volume, producing a more uniform amplitude throughout time.
---| "'compressor'"
---Alters the sound by amplifying it until it clips, shearing off parts of the signal, leading to a compressed and distorted sound.
---| "'distortion'"
---Decaying feedback based effect, on the order of seconds. Also known as delay; causes the sound to repeat at regular intervals at a decreasing volume.
---| "'echo'"
---Adjust the frequency components of the sound using a 4-band (low-shelf, two band-pass and a high-shelf) equalizer.
---| "'equalizer'"
---Plays two copies of the sound; while varying the phase, or equivalently delaying one of them, by amounts on the order of milliseconds, resulting in phasing sounds.
---| "'flanger'"
---Decaying feedback based effect, on the order of milliseconds. Used to simulate the reflection off of the surroundings.
---| "'reverb'"
---An implementation of amplitude modulation; multiplies the source signal with a simple waveform, to produce either volume changes, or inharmonic overtones.
---| "'ringmodulator'"

---The different types of waveforms that can be used with the '''ringmodulator''' EffectType.
---@alias EffectWaveform
---A sawtooth wave, also known as a ramp wave. Named for its linear rise, and (near-)instantaneous fall along time.
---| "'sawtooth'"
---A sine wave. Follows a trigonometric sine function.
---| "'sine'"
---A square wave. Switches between high and low states (near-)instantaneously.
---| "'square'"
---A triangle wave. Follows a linear rise and fall that repeats periodically.
---| "'triangle'"

---Types of filters for Sources.
---@alias FilterType
---Low-pass filter. High frequency sounds are attenuated.
---| "'lowpass'"
---High-pass filter. Low frequency sounds are attenuated.
---| "'highpass'"
---Band-pass filter. Both high and low frequency sounds are attenuated based on the given parameters.
---| "'bandpass'"

---Types of audio sources.
---
---A good rule of thumb is to use stream for music files and static for all short sound effects. Basically, you want to avoid loading large files into memory at once.
---@alias SourceType
---The whole audio is decoded.
---| "'static'"
---The audio is decoded in chunks when needed.
---| "'stream'"
---The audio must be manually queued by the user.
---| "'queue'"

---Units that represent time.
---@alias TimeUnit
---Regular seconds.
---| "'seconds'"
---Audio samples.
---| "'samples'"




-- preludes

---@class Source-getEffect-1
---@field volume number # The overall volume of the audio.
---@field highgain number # Volume of high-frequency audio. Only applies to low-pass and band-pass filters.
---@field lowgain number # Volume of low-frequency audio. Only applies to high-pass and band-pass filters.

---@class audio-setEffect-1
---@field type EffectType # The type of effect to use.
---@field volume number # The volume of the effect.
------@field ... number # Effect-specific settings. See EffectType for available effects and their corresponding settings.

---@class Source-setEffect-1
---@field type FilterType # The type of filter to use.
---@field volume number # The overall volume of the audio. Must be between 0 and 1.
---@field highgain number # Volume of high-frequency audio. Only applies to low-pass and band-pass filters. Must be between 0 and 1.
---@field lowgain number # Volume of low-frequency audio. Only applies to high-pass and band-pass filters. Must be between 0 and 1.

---@class Source-getFilter-1
---@field type FilterType # The type of filter to use.
---@field volume number # The overall volume of the audio.
---@field highgain number # Volume of high-frequency audio. Only applies to low-pass and band-pass filters.
---@field lowgain number # Volume of low-frequency audio. Only applies to high-pass and band-pass filters.




return audio