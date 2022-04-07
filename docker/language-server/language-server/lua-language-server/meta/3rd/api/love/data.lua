---Provides functionality for creating and transforming data.
local data = {}



-- types


--region ByteData

---Data object containing arbitrary bytes in an contiguous memory.
---
---There are currently no LÖVE functions provided for manipulating the contents of a ByteData, but Data:getPointer can be used with LuaJIT's FFI to access and write to the contents directly.
---@class ByteData: Object, Data
local ByteData = {}

--endregion ByteData


--region CompressedData

---Represents byte data compressed using a specific algorithm.
---
---love.data.decompress can be used to de-compress the data (or love.math.decompress in 0.10.2 or earlier).
---@class CompressedData: Data, Object
local CompressedData = {}

---Gets the compression format of the CompressedData.

---@return CompressedDataFormat format @ The format of the CompressedData.

function CompressedData:getFormat() end

--endregion CompressedData



-- functions


---Compresses a string or data using a specific compression algorithm.
---@param container ContainerType @ What type to return the compressed data as.
---@param format CompressedDataFormat @ The format to use when compressing the string.
---@param rawstring string @ The raw (un-compressed) string to compress.
---@param level? number @ (default: `-1`) The level of compression to use, between 0 and 9. -1 indicates the default level. The meaning of this argument depends on the compression format being used.
---@return CompressedData|string compressedData @ CompressedData/string which contains the compressed version of rawstring.
function data.compress(container, format, rawstring, level) end

---Compresses a string or data using a specific compression algorithm.
---@param container ContainerType @ What type to return the compressed data as.
---@param format CompressedDataFormat @ The format to use when compressing the data.
---@param data Data @ A Data object containing the raw (un-compressed) data to compress.
---@param level? number @ (default: `-1`) The level of compression to use, between 0 and 9. -1 indicates the default level. The meaning of this argument depends on the compression format being used.
---@return CompressedData|string compressedData @ CompressedData/string which contains the compressed version of data.
function data.compress(container, format, data, level) end


---Decode Data or a string from any of the EncodeFormats to Data or string.
---@param container ContainerType @ What type to return the decoded data as.
---@param format EncodeFormat @ The format of the input data.
---@param sourceString string @ The raw (encoded) data to decode.
---@return ByteData|string decoded @ ByteData/string which contains the decoded version of source.
function data.decode(container, format, sourceString) end

---Decode Data or a string from any of the EncodeFormats to Data or string.
---@param container ContainerType @ What type to return the decoded data as.
---@param format EncodeFormat @ The format of the input data.
---@param sourceData Data @ The raw (encoded) data to decode.
---@return ByteData|string decoded @ ByteData/string which contains the decoded version of source.
function data.decode(container, format, sourceData) end


---Decompresses a CompressedData or previously compressed string or Data object.
---@param container ContainerType @ What type to return the decompressed data as.
---@param compressedData CompressedData @ The compressed data to decompress.
---@return Data|string decompressedData @ Data/string containing the raw decompressed data.
function data.decompress(container, compressedData) end

---Decompresses a CompressedData or previously compressed string or Data object.
---@param container ContainerType @ What type to return the decompressed data as.
---@param format CompressedDataFormat @ The format that was used to compress the given string.
---@param compressedString string @ A string containing data previously compressed with love.data.compress.
---@return Data|string decompressedData @ Data/string containing the raw decompressed data.
function data.decompress(container, format, compressedString) end

---Decompresses a CompressedData or previously compressed string or Data object.
---@param container ContainerType @ What type to return the decompressed data as.
---@param format CompressedDataFormat @ The format that was used to compress the given data.
---@param data Data @ A Data object containing data previously compressed with love.data.compress.
---@return Data|string decompressedData @ Data/string containing the raw decompressed data.
function data.decompress(container, format, data) end


---Encode Data or a string to a Data or string in one of the EncodeFormats.
---@param container ContainerType @ What type to return the encoded data as.
---@param format EncodeFormat @ The format of the output data.
---@param sourceString string @ The raw data to encode.
---@param linelength? number @ (default: `0`) The maximum line length of the output. Only supported for base64, ignored if 0.
---@return ByteData|string encoded @ ByteData/string which contains the encoded version of source.
function data.encode(container, format, sourceString, linelength) end

---Encode Data or a string to a Data or string in one of the EncodeFormats.
---@param container ContainerType @ What type to return the encoded data as.
---@param format EncodeFormat @ The format of the output data.
---@param sourceData Data @ The raw data to encode.
---@param linelength? number @ (default: `0`) The maximum line length of the output. Only supported for base64, ignored if 0.
---@return ByteData|string encoded @ ByteData/string which contains the encoded version of source.
function data.encode(container, format, sourceData, linelength) end


---Gets the size in bytes that a given format used with love.data.pack will use.
---
---This function behaves the same as Lua 5.3's string.packsize.
---The format string cannot have the variable-length options 's' or 'z'.
---@param format string @ A string determining how the values are packed. Follows the rules of Lua 5.3's string.pack format strings.
---@return number size @ The size in bytes that the packed data will use.
function data.getPackedSize(format) end


---Compute the message digest of a string using a specified hash algorithm.
---@param hashFunction HashFunction @ Hash algorithm to use.
---@param string string @ String to hash.
---@return string rawdigest @ Raw message digest string.
function data.hash(hashFunction, string) end

---Compute the message digest of a string using a specified hash algorithm.
---To return the hex string representation of the hash, use love.data.encode
---
---hexDigestString = love.data.encode('string', 'hex', love.data.hash(algo, data))
---@param hashFunction HashFunction @ Hash algorithm to use.
---@param data Data @ Data to hash.
---@return string rawdigest @ Raw message digest string.
function data.hash(hashFunction, data) end


---Creates a new Data object containing arbitrary bytes.
---
---Data:getPointer along with LuaJIT's FFI can be used to manipulate the contents of the ByteData object after it has been created.
---Creates a new ByteData by copying the contents of the specified string.
---@param datastring string @ The byte string to copy.
---@return ByteData bytedata @ The new Data object.
function data.newByteData(datastring) end

---Creates a new Data object containing arbitrary bytes.
---
---Data:getPointer along with LuaJIT's FFI can be used to manipulate the contents of the ByteData object after it has been created.
---Creates a new ByteData by copying from an existing Data object.
---@param Data Data @ The existing Data object to copy.
---@param offset? number @ (default: `0`) The offset of the subsection to copy, in bytes.
---@param size? number @ (default: `data:getSize()`) The size in bytes of the new Data object.
---@return ByteData bytedata @ The new Data object.
function data.newByteData(Data, offset, size) end

---Creates a new Data object containing arbitrary bytes.
---
---Data:getPointer along with LuaJIT's FFI can be used to manipulate the contents of the ByteData object after it has been created.
---Creates a new empty ByteData with the specific size.
---@param size number @ The size in bytes of the new Data object.
---@return ByteData bytedata @ The new Data object.
function data.newByteData(size) end


---Creates a new Data referencing a subsection of an existing Data object.
---Data:getString and Data:getPointer will return the original Data object's contents, with the view's offset and size applied.
---@param data Data @ The Data object to reference.
---@param offset number @ The offset of the subsection to reference, in bytes.
---@param size number @ The size in bytes of the subsection to reference.
---@return Data view @ The new Data view.
function data.newDataView(data, offset, size) end


---Packs (serializes) simple Lua values.
---
---This function behaves the same as Lua 5.3's string.pack.
---Packing integers with values greater than 2^52 is not supported, as Lua 5.1 cannot represent those values in its number type. 
---@param container ContainerType @ What type to return the encoded data as.
---@param format string @ A string determining how the values are packed. Follows the rules of Lua 5.3's string.pack format strings.
---@param v1 number|boolean|string @ The first value (number, boolean, or string) to serialize.
---@vararg number|boolean|string @ Additional values to serialize.
---@return Data|string data @ Data/string which contains the serialized data.
function data.pack(container, format, v1, ...) end


---Unpacks (deserializes) a byte-string or Data into simple Lua values.
---
---This function behaves the same as Lua 5.3's string.unpack.
---@param format string @ A string determining how the values were packed. Follows the rules of Lua 5.3's string.pack format strings.
---@param datastring string @ A string containing the packed (serialized) data.
---@param pos? number @ (default: `1`) Where to start reading in the string. Negative values can be used to read relative from the end of the string.
---@return number|boolean|string v1 @ The first value (number, boolean, or string) that was unpacked.
---@return ... @ Additional unpacked values.
---@return number index @ The index of the first unread byte in the data string.
function data.unpack(format, datastring, pos) end

---Unpacks (deserializes) a byte-string or Data into simple Lua values.
---
---This function behaves the same as Lua 5.3's string.unpack.
---Unpacking integers with values greater than 2^52 is not supported, as Lua 5.1 cannot represent those values in its number type. 
---@param format string @ A string determining how the values were packed. Follows the rules of Lua 5.3's string.pack format strings.
---@param data Data @ A Data object containing the packed (serialized) data.
---@param pos? number @ (default: `1`) 1-based index indicating where to start reading in the Data. Negative values can be used to read relative from the end of the Data object.
---@return number|boolean|string v1 @ The first value (number, boolean, or string) that was unpacked.
---@return ... @ Additional unpacked values.
---@return number index @ The 1-based index of the first unread byte in the Data.
function data.unpack(format, data, pos) end



-- enums

---Compressed data formats.
---@alias CompressedDataFormat
---The LZ4 compression format. Compresses and decompresses very quickly, but the compression ratio is not the best. LZ4-HC is used when compression level 9 is specified. Some benchmarks are available here.
---| "'lz4'"
---The zlib format is DEFLATE-compressed data with a small bit of header data. Compresses relatively slowly and decompresses moderately quickly, and has a decent compression ratio.
---| "'zlib'"
---The gzip format is DEFLATE-compressed data with a slightly larger header than zlib. Since it uses DEFLATE it has the same compression characteristics as the zlib format.
---| "'gzip'"
---Raw DEFLATE-compressed data (no header).
---| "'deflate'"

---Return type of various data-returning functions.
---@alias ContainerType
---Return type is ByteData.
---| "'data'"
---Return type is string.
---| "'string'"

---Encoding format used to encode or decode data.
---@alias EncodeFormat
---Encode/decode data as base64 binary-to-text encoding.
---| "'base64'"
---Encode/decode data as hexadecimal string.
---| "'hex'"

---Hash algorithm of love.data.hash.
---@alias HashFunction
---MD5 hash algorithm (16 bytes).
---| "'md5'"
---SHA1 hash algorithm (20 bytes).
---| "'sha1'"
---SHA2 hash algorithm with message digest size of 224 bits (28 bytes).
---| "'sha224'"
---SHA2 hash algorithm with message digest size of 256 bits (32 bytes).
---| "'sha256'"
---SHA2 hash algorithm with message digest size of 384 bits (48 bytes).
---| "'sha384'"
---SHA2 hash algorithm with message digest size of 512 bits (64 bytes).
---| "'sha512'"



return data