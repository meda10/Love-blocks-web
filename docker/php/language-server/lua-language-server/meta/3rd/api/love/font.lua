---Allows you to work with fonts.
local font = {}




-- types



--region GlyphData

---A GlyphData represents a drawable symbol of a font Rasterizer.
---@class GlyphData: Data, Object
local GlyphData = {}

---Gets glyph advance.
---@return number advance @ Glyph advance.
function GlyphData:getAdvance() end

---Gets glyph bearing.
---@return number bx @ Glyph bearing X.
---@return number by @ Glyph bearing Y.
function GlyphData:getBearing() end

---Gets glyph bounding box.
---@return number x @ Glyph position x.
---@return number y @ Glyph position y.
---@return number width @ Glyph width.
---@return number height @ Glyph height.
function GlyphData:getBoundingBox() end

---Gets glyph dimensions.
---@return number width @ Glyph width.
---@return number height @ Glyph height.
function GlyphData:getDimensions() end

---Gets glyph pixel format.
---@return PixelFormat format @ Glyph pixel format.
function GlyphData:getFormat() end

---Gets glyph number.
---@return number glyph @ Glyph number.
function GlyphData:getGlyph() end

---Gets glyph string.
---@return string glyph @ Glyph string.
function GlyphData:getGlyphString() end

---Gets glyph height.
---@return number height @ Glyph height.
function GlyphData:getHeight() end

---Gets glyph width.
---@return number width @ Glyph width.
function GlyphData:getWidth() end

--endregion GlyphData



--region Rasterizer


---A Rasterizer handles font rendering, containing the font data (image or TrueType font) and drawable glyphs.
---@class Rasterizer: Object
local Rasterizer = {}


---Gets font advance.
---@return number advance @ Font advance.
function Rasterizer:getAdvance() end


---Gets ascent height.
---@return number height @ Ascent height.
function Rasterizer:getAscent() end


---Gets descent height.
---@return number height @ Descent height.
function Rasterizer:getDescent() end


---Gets number of glyphs in font.
---@return number count @ Glyphs count.
function Rasterizer:getGlyphCount() end


---Gets glyph data of a specified glyph.
---@param glyph string @ Glyph
---@return GlyphData glyphData @ Glyph data
function Rasterizer:getGlyphData(glyph) end

---Gets glyph data of a specified glyph.
---@param glyphNumber number @ Glyph number
---@return GlyphData glyphData @ Glyph data
function Rasterizer:getGlyphData(glyphNumber) end


---Gets font height.
---@return number height @ Font height
function Rasterizer:getHeight() end


---Gets line height of a font.
---@return number height @ Line height of a font.
function Rasterizer:getLineHeight() end


---Checks if font contains specified glyphs.
---@param glyph1 string|number @ Glyph
---@param glyph2 string|number @ Glyph
---@vararg string|number @ Additional glyphs
---@return boolean hasGlyphs @ Whatever font contains specified glyphs.
function Rasterizer:hasGlyphs(glyph1, glyph2, ...) end


--endregion Rasterizer




-- functions


---Creates a new BMFont Rasterizer.
---@param imageData ImageData @ The image data containing the drawable pictures of font glyphs.
---@param glyphs string @ The sequence of glyphs in the ImageData.
---@param dpiscale? number @ (default: `1`) DPI scale.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newBMFontRasterizer(imageData, glyphs, dpiscale) end

---Creates a new BMFont Rasterizer.
---@param fileName string @ The path to file containing the drawable pictures of font glyphs.
---@param glyphs string @ The sequence of glyphs in the ImageData.
---@param dpiscale? number @ (default: `1`) DPI scale.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newBMFontRasterizer(fileName, glyphs, dpiscale) end


---Creates a new GlyphData.
---@param rasterizer Rasterizer @ The Rasterizer containing the font.
---@param glyph number @ The character code of the glyph.
function font.newGlyphData(rasterizer, glyph) end


---Creates a new Image Rasterizer.
---Create an ImageRasterizer from the image data.
---@param imageData ImageData @ Font image data.
---@param glyphs string @ String containing font glyphs.
---@param extraSpacing? number @ (default: `0`) Font extra spacing.
---@param dpiscale? number @ (default: `1`) Font DPI scale.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newImageRasterizer(imageData, glyphs, extraSpacing, dpiscale) end


---Creates a new Rasterizer.
---@param filename string @ The font file.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newRasterizer(filename) end

---Creates a new Rasterizer.
---@param data FileData @ The FileData of the font file.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newRasterizer(data) end

---Creates a new Rasterizer.
---Create a TrueTypeRasterizer with the default font.
---@param size? number @ (default: `12`) The font size.
---@param hinting? HintingMode @ (default: `'normal'`) True Type hinting mode.
---@param dpiscale? number @ (default: `love.window.getDPIScale()`) The font DPI scale.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newRasterizer(size, hinting, dpiscale) end

---Creates a new Rasterizer.
---Create a TrueTypeRasterizer with custom font.
---@param fileName string @ Path to font file.
---@param size? number @ (default: `12`) The font size.
---@param hinting? HintingMode @ (default: `'normal'`) True Type hinting mode.
---@param dpiscale? number @ (default: `love.window.getDPIScale()`) The font DPI scale.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newRasterizer(fileName, size, hinting, dpiscale) end

---Creates a new Rasterizer.
---Create a TrueTypeRasterizer with custom font.
---@param fileData FileData @ File data containing font.
---@param size? number @ (default: `12`) The font size.
---@param hinting? HintingMode @ (default: `'normal'`) True Type hinting mode.
---@param dpiscale? number @ (default: `love.window.getDPIScale()`) The font DPI scale.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newRasterizer(fileData, size, hinting, dpiscale) end

---Creates a new Rasterizer.
---Creates a new BMFont Rasterizer.
---@param imageData ImageData @ The image data containing the drawable pictures of font glyphs.
---@param glyphs string @ The sequence of glyphs in the ImageData.
---@param dpiscale? number @ (default: `1`) DPI scale.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newRasterizer(imageData, glyphs, dpiscale) end

---Creates a new Rasterizer.
---Creates a new BMFont Rasterizer.
---@param fileName string @ The path to file containing the drawable pictures of font glyphs.
---@param glyphs string @ The sequence of glyphs in the ImageData.
---@param dpiscale? number @ (default: `1`) DPI scale.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newRasterizer(fileName, glyphs, dpiscale) end


---Creates a new TrueType Rasterizer.
---Create a TrueTypeRasterizer with the default font.
---@param size? number @ (default: `12`) The font size.
---@param hinting? HintingMode @ (default: `'normal'`) True Type hinting mode.
---@param dpiscale? number @ (default: `love.window.getDPIScale()`) The font DPI scale.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newTrueTypeRasterizer(size, hinting, dpiscale) end

---Creates a new TrueType Rasterizer.
---Create a TrueTypeRasterizer with custom font.
---@param fileName string @ Path to font file.
---@param size? number @ (default: `12`) The font size.
---@param hinting? HintingMode @ (default: `'normal'`) True Type hinting mode.
---@param dpiscale? number @ (default: `love.window.getDPIScale()`) The font DPI scale.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newTrueTypeRasterizer(fileName, size, hinting, dpiscale) end

---Creates a new TrueType Rasterizer.
---Create a TrueTypeRasterizer with custom font.
---@param fileData FileData @ File data containing font.
---@param size? number @ (default: `12`) The font size.
---@param hinting? HintingMode @ (default: `'normal'`) True Type hinting mode.
---@param dpiscale? number @ (default: `love.window.getDPIScale()`) The font DPI scale.
---@return Rasterizer rasterizer @ The rasterizer.
function font.newTrueTypeRasterizer(fileData, size, hinting, dpiscale) end




-- enums
---True Type hinting mode.
---@alias HintingMode
---Default hinting. Should be preferred for typical antialiased fonts.
---| "'normal'"
---Results in fuzzier text but can sometimes preserve the original glyph shapes of the text better than normal hinting.
---| "'light'"
---Results in aliased / unsmoothed text with either full opacity or completely transparent pixels. Should be used when antialiasing is not desired for the font.
---| "'mono'"
---Disables hinting for the font. Results in fuzzier text.
---| "'none'"




return font