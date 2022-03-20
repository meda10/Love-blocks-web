---The primary responsibility for the love.graphics module is the drawing of lines, shapes, text, Images and other Drawable objects onto the screen. Its secondary responsibilities include loading external files (including Images and Fonts) into memory, creating specialized objects (such as ParticleSystems or Canvases) and managing screen geometry.
---
---LÖVE's coordinate system is rooted in the upper-left corner of the screen, which is at location (0, 0). The x axis is horizontal: larger values are further to the right. The y axis is vertical: larger values are further towards the bottom.
---
---In many cases, you draw images or shapes in terms of their upper-left corner.
---
---Many of the functions are used to manipulate the graphics coordinate system, which is essentially the way coordinates are mapped to the display. You can change the position, scale, and even rotation in this way.
local graphics = {}




-- types



--region Canvas


---A Canvas is used for off-screen rendering. Think of it as an invisible screen that you can draw to, but that will not be visible until you draw it to the actual visible screen. It is also known as "render to texture".
---
---By drawing things that do not change position often (such as background items) to the Canvas, and then drawing the entire Canvas instead of each item,  you can reduce the number of draw operations performed each frame.
---
---In versions prior to love.graphics.isSupported("canvas") could be used to check for support at runtime.
---@class Canvas: Texture, Drawable, Object
local Canvas = {}


---Generates mipmaps for the Canvas, based on the contents of the highest-resolution mipmap level.
---
---The Canvas must be created with mipmaps set to a MipmapMode other than 'none' for this function to work. It should only be called while the Canvas is not the active render target.
---
---If the mipmap mode is set to 'auto', this function is automatically called inside love.graphics.setCanvas when switching from this Canvas to another Canvas or to the main screen.
function Canvas:generateMipmaps() end


---Gets the number of multisample antialiasing (MSAA) samples used when drawing to the Canvas.
---
---This may be different than the number used as an argument to love.graphics.newCanvas if the system running LÖVE doesn't support that number.
---@return number samples @ The number of multisample antialiasing samples used by the canvas when drawing to it.
function Canvas:getMSAA() end


---Gets the MipmapMode this Canvas was created with.
---@return MipmapMode mode @ The mipmap mode this Canvas was created with.
function Canvas:getMipmapMode() end


---Generates ImageData from the contents of the Canvas.
---@return ImageData data @ The new ImageData made from the Canvas' contents.
function Canvas:newImageData() end

---Generates ImageData from the contents of the Canvas.
---@param slice number @ The cubemap face index, array index, or depth layer for cubemap, array, or volume type Canvases, respectively. This argument is ignored for regular 2D canvases.
---@param mipmap? number @ (default: `1`) The mipmap index to use, for Canvases with mipmaps.
---@param x number @ The x-axis of the top-left corner (in pixels) of the area within the Canvas to capture.
---@param y number @ The y-axis of the top-left corner (in pixels) of the area within the Canvas to capture.
---@param width number @ The width in pixels of the area within the Canvas to capture.
---@param height number @ The height in pixels of the area within the Canvas to capture.
---@return ImageData data @ The new ImageData made from the Canvas' contents.
function Canvas:newImageData(slice, mipmap, x, y, width, height) end


---Render to the Canvas using a function.
---
---This is a shortcut to love.graphics.setCanvas:
---
---canvas:renderTo( func )
---
---is the same as
---
---love.graphics.setCanvas( canvas )
---
---func()
---
---love.graphics.setCanvas()
---@param func function @ A function performing drawing operations.
function Canvas:renderTo(func) end


--endregion Canvas



--region Drawable

---Superclass for all things that can be drawn on screen. This is an abstract type that can't be created directly.
---@class Drawable: Object
local Drawable = {}

--endregion Drawable



--region Font


---Defines the shape of characters that can be drawn onto the screen.
---@class Font: Object
local Font = {}


---Gets the ascent of the Font.
---
---The ascent spans the distance between the baseline and the top of the glyph that reaches farthest from the baseline.
---@return number ascent @ The ascent of the Font in pixels.
function Font:getAscent() end


---Gets the baseline of the Font.
---
---Most scripts share the notion of a baseline: an imaginary horizontal line on which characters rest. In some scripts, parts of glyphs lie below the baseline.
---@return number baseline @ The baseline of the Font in pixels.
function Font:getBaseline() end


---Gets the DPI scale factor of the Font.
---
---The DPI scale factor represents relative pixel density. A DPI scale factor of 2 means the font's glyphs have twice the pixel density in each dimension (4 times as many pixels in the same area) compared to a font with a DPI scale factor of 1.
---
---The font size of TrueType fonts is scaled internally by the font's specified DPI scale factor. By default, LÖVE uses the screen's DPI scale factor when creating TrueType fonts.
---@return number dpiscale @ The DPI scale factor of the Font.
function Font:getDPIScale() end


---Gets the descent of the Font.
---
---The descent spans the distance between the baseline and the lowest descending glyph in a typeface.
---@return number descent @ The descent of the Font in pixels.
function Font:getDescent() end


---Gets the filter mode for a font.
---@return FilterMode min @ Filter mode used when minifying the font.
---@return FilterMode mag @ Filter mode used when magnifying the font.
---@return number anisotropy @ Maximum amount of anisotropic filtering used.
function Font:getFilter() end


---Gets the height of the Font.
---
---The height of the font is the size including any spacing; the height which it will need.
---@return number height @ The height of the Font in pixels.
function Font:getHeight() end


---Gets the line height.
---
---This will be the value previously set by Font:setLineHeight, or 1.0 by default.
---@return number height @ The current line height.
function Font:getLineHeight() end


---Determines the maximum width (accounting for newlines) taken by the given string.
---@param text string @ A string.
---@return number width @ The width of the text.
function Font:getWidth(text) end


---Gets formatting information for text, given a wrap limit.
---
---This function accounts for newlines correctly (i.e. '\n').
---@param text string @ The text that will be wrapped.
---@param wraplimit number @ The maximum width in pixels of each line that ''text'' is allowed before wrapping.
---@return number width @ The maximum width of the wrapped text.
---@return table wrappedtext @ A sequence containing each line of text that was wrapped.
function Font:getWrap(text, wraplimit) end


---Gets whether the Font can render a character or string.
---@param text string @ A UTF-8 encoded unicode string.
---@return boolean hasglyph @ Whether the font can render all the UTF-8 characters in the string.
function Font:hasGlyphs(text) end

---Gets whether the Font can render a character or string.
---@param character1 string @ A unicode character.
---@param character2 string @ Another unicode character.
---@return boolean hasglyph @ Whether the font can render all the glyphs represented by the characters.
function Font:hasGlyphs(character1, character2) end

---Gets whether the Font can render a character or string.
---@param codepoint1 number @ A unicode codepoint number.
---@param codepoint2 number @ Another unicode codepoint number.
---@return boolean hasglyph @ Whether the font can render all the glyphs represented by the codepoint numbers.
function Font:hasGlyphs(codepoint1, codepoint2) end


---Sets the fallback fonts. When the Font doesn't contain a glyph, it will substitute the glyph from the next subsequent fallback Fonts. This is akin to setting a 'font stack' in Cascading Style Sheets (CSS).
---If this is called it should be before love.graphics.print, Font:getWrap, and other Font methods which use glyph positioning information are called.
---
---Every fallback Font must be created from the same file type as the primary Font. For example, a Font created from a .ttf file can only use fallback Fonts that were created from .ttf files.
---@param fallbackfont1 Font @ The first fallback Font to use.
---@vararg Font @ Additional fallback Fonts.
function Font:setFallbacks(fallbackfont1, ...) end


---Sets the filter mode for a font.
---@param min FilterMode @ How to scale a font down.
---@param mag FilterMode @ How to scale a font up.
---@param anisotropy? number @ (default: `1`) Maximum amount of anisotropic filtering used.
function Font:setFilter(min, mag, anisotropy) end


---Sets the line height.
---
---When rendering the font in lines the actual height will be determined by the line height multiplied by the height of the font. The default is 1.0.
---@param height number @ The new line height.
function Font:setLineHeight(height) end


--endregion Font



--region Image

---Drawable image type.
---@class Image: Texture, Drawable, Object
local Image = {}

---Gets the flags used when the image was created.
---@return table flags @ A table with ImageFlag keys.
function Image:getFlags() end

---Gets whether the Image was created from CompressedData.
---
---Compressed images take up less space in VRAM, and drawing a compressed image will generally be more efficient than drawing one created from raw pixel data.
---@return boolean compressed @ Whether the Image is stored as a compressed texture on the GPU.
function Image:isCompressed() end

---Replace the contents of an Image.
---@param data ImageData @ The new ImageData to replace the contents with.
---@param slice number @ Which cubemap face, array index, or volume layer to replace, if applicable.
---@param mipmap? number @ (default: `1`) The mimap level to replace, if the Image has mipmaps.
---@param x? number @ (default: `0`) The x-offset in pixels from the top-left of the image to replace. The given ImageData's width plus this value must not be greater than the pixel width of the Image's specified mipmap level.
---@param y? number @ (default: `0`) The y-offset in pixels from the top-left of the image to replace. The given ImageData's height plus this value must not be greater than the pixel height of the Image's specified mipmap level.
---@param reloadmipmaps boolean @ Whether to generate new mipmaps after replacing the Image's pixels. True by default if the Image was created with automatically generated mipmaps, false by default otherwise.
function Image:replacePixels(data, slice, mipmap, x, y, reloadmipmaps) end

--endregion Image



--region Mesh


---A 2D polygon mesh used for drawing arbitrary textured shapes.
---@class Mesh: Drawable, Object
local Mesh = {}


---Attaches a vertex attribute from a different Mesh onto this Mesh, for use when drawing. This can be used to share vertex attribute data between several different Meshes.
---@param name string @ The name of the vertex attribute to attach.
---@param mesh Mesh @ The Mesh to get the vertex attribute from.
function Mesh:attachAttribute(name, mesh) end

---Attaches a vertex attribute from a different Mesh onto this Mesh, for use when drawing. This can be used to share vertex attribute data between several different Meshes.
---If a Mesh wasn't created with a custom vertex format, it will have 3 vertex attributes named VertexPosition, VertexTexCoord, and VertexColor.
---
---Custom named attributes can be accessed in a vertex shader by declaring them as attribute vec4 MyCustomAttributeName; at the top-level of the vertex shader code. The name must match what was specified in the Mesh's vertex format and in the name argument of Mesh:attachAttribute.
---@param name string @ The name of the vertex attribute to attach.
---@param mesh Mesh @ The Mesh to get the vertex attribute from.
---@param step? VertexAttributeStep @ (default: `'pervertex'`) Whether the attribute will be per-vertex or per-instance when the mesh is drawn.
---@param attachname? string @ (default: `name`) The name of the attribute to use in shader code. Defaults to the name of the attribute in the given mesh. Can be used to use a different name for this attribute when rendering.
function Mesh:attachAttribute(name, mesh, step, attachname) end


---Removes a previously attached vertex attribute from this Mesh.
---@param name string @ The name of the attached vertex attribute to detach.
---@return boolean success @ Whether the attribute was successfully detached.
function Mesh:detachAttribute(name) end


---Gets the mode used when drawing the Mesh.
---@return MeshDrawMode mode @ The mode used when drawing the Mesh.
function Mesh:getDrawMode() end


---Gets the range of vertices used when drawing the Mesh.
---If the Mesh's draw range has not been set previously with Mesh:setDrawRange, this function will return nil.
---@return number min @ The index of the first vertex used when drawing, or the index of the first value in the vertex map used if one is set for this Mesh.
---@return number max @ The index of the last vertex used when drawing, or the index of the last value in the vertex map used if one is set for this Mesh.
function Mesh:getDrawRange() end


---Gets the texture (Image or Canvas) used when drawing the Mesh.
---@return Texture texture @ The Image or Canvas to texture the Mesh with when drawing, or nil if none is set.
function Mesh:getTexture() end


---Gets the properties of a vertex in the Mesh.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---The values are returned in the same order as the vertex attributes in the Mesh's vertex format. A standard Mesh that wasn't created with a custom vertex format will return two position numbers, two texture coordinate numbers, and four color components: x, y, u, v, r, g, b, a.
---@param index number @ The one-based index of the vertex you want to retrieve the information for.
---@return number attributecomponent @ The first component of the first vertex attribute in the specified vertex.
---@return ... @ Additional components of all vertex attributes in the specified vertex.
function Mesh:getVertex(index) end

---Gets the properties of a vertex in the Mesh.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---Gets the vertex components of a Mesh that wasn't created with a custom vertex format.
---@param index number @ The index of the vertex you want to retrieve the information for.
---@return number x @ The position of the vertex on the x-axis.
---@return number y @ The position of the vertex on the y-axis.
---@return number u @ The horizontal component of the texture coordinate.
---@return number v @ The vertical component of the texture coordinate.
---@return number r @ The red component of the vertex's color.
---@return number g @ The green component of the vertex's color.
---@return number b @ The blue component of the vertex's color.
---@return number a @ The alpha component of the vertex's color.
function Mesh:getVertex(index) end


---Gets the properties of a specific attribute within a vertex in the Mesh.
---
---Meshes without a custom vertex format specified in love.graphics.newMesh have position as their first attribute, texture coordinates as their second attribute, and color as their third attribute.
---@param vertexindex number @ The index of the the vertex you want to retrieve the attribute for (one-based).
---@param attributeindex number @ The index of the attribute within the vertex to be retrieved (one-based).
---@return number value1 @ The value of the first component of the attribute.
---@return number value2 @ The value of the second component of the attribute.
---@return ... @ Any additional vertex attribute components.
function Mesh:getVertexAttribute(vertexindex, attributeindex) end


---Gets the total number of vertices in the Mesh.
---@return number count @ The total number of vertices in the mesh.
function Mesh:getVertexCount() end


---Gets the vertex format that the Mesh was created with.
---If a Mesh wasn't created with a custom vertex format, it will have the following vertex format:
---
---defaultformat = {
---
---    {'VertexPosition', 'float', 2}, -- The x,y position of each vertex.
---
---    {'VertexTexCoord', 'float', 2}, -- The u,v texture coordinates of each vertex.
---
---    {'VertexColor', 'byte', 4} -- The r,g,b,a color of each vertex.
---
---}
---@return Mesh-getVertexFormat-1 format @ The vertex format of the Mesh, which is a table containing tables for each vertex attribute the Mesh was created with, in the form of {attribute, ...}.
function Mesh:getVertexFormat() end


---Gets the vertex map for the Mesh. The vertex map describes the order in which the vertices are used when the Mesh is drawn. The vertices, vertex map, and mesh draw mode work together to determine what exactly is displayed on the screen.
---
---If no vertex map has been set previously via Mesh:setVertexMap, then this function will return nil in LÖVE 0.10.0+, or an empty table in 0.9.2 and older.
---@return table map @ A table containing the list of vertex indices used when drawing.
function Mesh:getVertexMap() end


---Gets whether a specific vertex attribute in the Mesh is enabled. Vertex data from disabled attributes is not used when drawing the Mesh.
---If a Mesh wasn't created with a custom vertex format, it will have 3 vertex attributes named VertexPosition, VertexTexCoord, and VertexColor. Otherwise the attribute name must either match one of the vertex attributes specified in the vertex format when creating the Mesh, 
---
---or must match a vertex attribute from another Mesh attached to this Mesh via Mesh:attachAttribute.
---@param name string @ The name of the vertex attribute to be checked.
---@return boolean enabled @ Whether the vertex attribute is used when drawing this Mesh.
function Mesh:isAttributeEnabled(name) end


---Enables or disables a specific vertex attribute in the Mesh. Vertex data from disabled attributes is not used when drawing the Mesh.
---If a Mesh wasn't created with a custom vertex format, it will have 3 vertex attributes named VertexPosition, VertexTexCoord, and VertexColor. Otherwise the attribute name must either match one of the vertex attributes specified in the vertex format when creating the Mesh, 
---
---or must match a vertex attribute from another Mesh attached to this Mesh via Mesh:attachAttribute.
---@param name string @ The name of the vertex attribute to enable or disable.
---@param enable boolean @ Whether the vertex attribute is used when drawing this Mesh.
function Mesh:setAttributeEnabled(name, enable) end


---Sets the mode used when drawing the Mesh.
---@param mode MeshDrawMode @ The mode to use when drawing the Mesh.
function Mesh:setDrawMode(mode) end


---Restricts the drawn vertices of the Mesh to a subset of the total.
---@param start number @ The index of the first vertex to use when drawing, or the index of the first value in the vertex map to use if one is set for this Mesh.
---@param count number @ The number of vertices to use when drawing, or number of values in the vertex map to use if one is set for this Mesh.
function Mesh:setDrawRange(start, count) end

---Restricts the drawn vertices of the Mesh to a subset of the total.
---Allows all vertices in the Mesh to be drawn.
function Mesh:setDrawRange() end


---Sets the texture (Image or Canvas) used when drawing the Mesh.
---@param texture Texture @ The Image or Canvas to texture the Mesh with when drawing.
function Mesh:setTexture(texture) end

---Sets the texture (Image or Canvas) used when drawing the Mesh.
---Disables any texture from being used when drawing the Mesh. Untextured meshes have a white color by default.
function Mesh:setTexture() end


---Sets the properties of a vertex in the Mesh.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---The arguments are in the same order as the vertex attributes in the Mesh's vertex format. A standard Mesh that wasn't created with a custom vertex format will use two position numbers, two texture coordinate numbers, and four color components per vertex: x, y, u, v, r, g, b, a.
---
---If no value is supplied for a specific vertex attribute component, it will be set to a default value of 0 if its data type is 'float', or 1 if its data type is 'byte'.
---@param index number @ The index of the the vertex you want to modify (one-based).
---@param attributecomponent number @ The first component of the first vertex attribute in the specified vertex.
---@vararg number @ Additional components of all vertex attributes in the specified vertex.
function Mesh:setVertex(index, attributecomponent, ...) end

---Sets the properties of a vertex in the Mesh.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---The table indices are in the same order as the vertex attributes in the Mesh's vertex format. A standard Mesh that wasn't created with a custom vertex format will use two position numbers, two texture coordinate numbers, and four color components per vertex: x, y, u, v, r, g, b, a.
---
---If no value is supplied for a specific vertex attribute component, it will be set to a default value of 0 if its data type is 'float', or 1 if its data type is 'byte'.
---@param index number @ The index of the the vertex you want to modify (one-based).
---@param vertex Mesh-setVertex-1 @ A table with vertex information, in the form of {attributecomponent, ...}.
function Mesh:setVertex(index, vertex) end

---Sets the properties of a vertex in the Mesh.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---Sets the vertex components of a Mesh that wasn't created with a custom vertex format.
---@param index number @ The index of the the vertex you want to modify (one-based).
---@param x number @ The position of the vertex on the x-axis.
---@param y number @ The position of the vertex on the y-axis.
---@param u number @ The horizontal component of the texture coordinate.
---@param v number @ The vertical component of the texture coordinate.
---@param r? number @ (default: `1`) The red component of the vertex's color.
---@param g? number @ (default: `1`) The green component of the vertex's color.
---@param b? number @ (default: `1`) The blue component of the vertex's color.
---@param a? number @ (default: `1`) The alpha component of the vertex's color.
function Mesh:setVertex(index, x, y, u, v, r, g, b, a) end

---Sets the properties of a vertex in the Mesh.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---Sets the vertex components of a Mesh that wasn't created with a custom vertex format.
---@param index number @ The index of the the vertex you want to modify (one-based).
---@param vertex Mesh-setVertex-2 @ A table with vertex information.
function Mesh:setVertex(index, vertex) end


---Sets the properties of a specific attribute within a vertex in the Mesh.
---
---Meshes without a custom vertex format specified in love.graphics.newMesh have position as their first attribute, texture coordinates as their second attribute, and color as their third attribute.
---Attribute components which exist within the attribute but are not specified as arguments default to 0 for attributes with the float data type, and 255 for the byte data type.
---@param vertexindex number @ The index of the the vertex to be modified (one-based).
---@param attributeindex number @ The index of the attribute within the vertex to be modified (one-based).
---@param value1 number @ The new value for the first component of the attribute.
---@param value2 number @ The new value for the second component of the attribute.
---@vararg number @ Any additional vertex attribute components.
function Mesh:setVertexAttribute(vertexindex, attributeindex, value1, value2, ...) end


---Sets the vertex map for the Mesh. The vertex map describes the order in which the vertices are used when the Mesh is drawn. The vertices, vertex map, and mesh draw mode work together to determine what exactly is displayed on the screen.
---
---The vertex map allows you to re-order or reuse vertices when drawing without changing the actual vertex parameters or duplicating vertices. It is especially useful when combined with different Mesh Draw Modes.
---@param map table @ A table containing a list of vertex indices to use when drawing. Values must be in the range of Mesh:getVertexCount().
function Mesh:setVertexMap(map) end

---Sets the vertex map for the Mesh. The vertex map describes the order in which the vertices are used when the Mesh is drawn. The vertices, vertex map, and mesh draw mode work together to determine what exactly is displayed on the screen.
---
---The vertex map allows you to re-order or reuse vertices when drawing without changing the actual vertex parameters or duplicating vertices. It is especially useful when combined with different Mesh Draw Modes.
---@param vi1 number @ The index of the first vertex to use when drawing. Must be in the range of Mesh:getVertexCount().
---@param vi2 number @ The index of the second vertex to use when drawing.
---@param vi3 number @ The index of the third vertex to use when drawing.
function Mesh:setVertexMap(vi1, vi2, vi3) end

---Sets the vertex map for the Mesh. The vertex map describes the order in which the vertices are used when the Mesh is drawn. The vertices, vertex map, and mesh draw mode work together to determine what exactly is displayed on the screen.
---
---The vertex map allows you to re-order or reuse vertices when drawing without changing the actual vertex parameters or duplicating vertices. It is especially useful when combined with different Mesh Draw Modes.
---@param data Data @ Array of vertex indices to use when drawing. Values must be in the range of Mesh:getVertexCount()-1
---@param datatype IndexDataType @ Datatype of the vertex indices array above.
function Mesh:setVertexMap(data, datatype) end


---Replaces a range of vertices in the Mesh with new ones. The total number of vertices in a Mesh cannot be changed after it has been created. This is often more efficient than calling Mesh:setVertex in a loop.
---The values in each vertex table are in the same order as the vertex attributes in the Mesh's vertex format. A standard Mesh that wasn't created with a custom vertex format will use two position numbers, two texture coordinate numbers, and four color components per vertex: x, y, u, v, r, g, b, a.
---
---If no value is supplied for a specific vertex attribute component, it will be set to a default value of 0 if its data type is 'float', or 255 if its data type is 'byte'.
---@param vertices Mesh-setVertices-1 @ The table filled with vertex information tables for each vertex, in the form of {vertex, ...} where each vertex is a table in the form of {attributecomponent, ...}.
---@param startvertex? number @ (default: `1`) The index of the first vertex to replace.
function Mesh:setVertices(vertices, startvertex) end

---Replaces a range of vertices in the Mesh with new ones. The total number of vertices in a Mesh cannot be changed after it has been created. This is often more efficient than calling Mesh:setVertex in a loop.
---Sets the vertex components of the Mesh by copying directly from the memory of a Data object.
---
---If LuaJIT's FFI is used to populate the Data object via Data:getPointer and ffi.cast, this variant can be drastically more efficient than other methods of setting Mesh vertex data.
---@param data Data @ A Data object to copy from. The contents of the Data must match the layout of this Mesh's vertex format.
---@param startvertex? number @ (default: `1`) The index of the first vertex to replace.
function Mesh:setVertices(data, startvertex) end

---Replaces a range of vertices in the Mesh with new ones. The total number of vertices in a Mesh cannot be changed after it has been created. This is often more efficient than calling Mesh:setVertex in a loop.
---Sets the vertex components of a Mesh that wasn't created with a custom vertex format.
---@param vertices Mesh-setVertices-2 @ The table filled with vertex information tables for each vertex as follows:
function Mesh:setVertices(vertices) end


--endregion Mesh



--region ParticleSystem


---A ParticleSystem can be used to create particle effects like fire or smoke.
---
---The particle system has to be created using update it in the update callback to see any changes in the particles emitted.
---
---The particle system won't create any particles unless you call setParticleLifetime and setEmissionRate.
---@class ParticleSystem: Drawable, Object
local ParticleSystem = {}


---Creates an identical copy of the ParticleSystem in the stopped state.
---Cloned ParticleSystem inherit all the set-able state of the original ParticleSystem, but they are initialized stopped.
---@return ParticleSystem particlesystem @ The new identical copy of this ParticleSystem.
function ParticleSystem:clone() end


---Emits a burst of particles from the particle emitter.
---@param numparticles number @ The amount of particles to emit. The number of emitted particles will be truncated if the particle system's max buffer size is reached.
function ParticleSystem:emit(numparticles) end


---Gets the maximum number of particles the ParticleSystem can have at once.
---@return number size @ The maximum number of particles.
function ParticleSystem:getBufferSize() end


---Gets the series of colors applied to the particle sprite.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---@return number r1 @ First color, red component (0-1).
---@return number g1 @ First color, green component (0-1).
---@return number b1 @ First color, blue component (0-1).
---@return number a1 @ First color, alpha component (0-1).
---@return number r2 @ Second color, red component (0-1).
---@return number g2 @ Second color, green component (0-1).
---@return number b2 @ Second color, blue component (0-1).
---@return number a2 @ Second color, alpha component (0-1).
---@return number r8 @ Eighth color, red component (0-1).
---@return number g8 @ Eighth color, green component (0-1).
---@return number b8 @ Eighth color, blue component (0-1).
---@return number a8 @ Eighth color, alpha component (0-1).
function ParticleSystem:getColors() end


---Gets the number of particles that are currently in the system.
---@return number count @ The current number of live particles.
function ParticleSystem:getCount() end


---Gets the direction of the particle emitter (in radians).
---@return number direction @ The direction of the emitter (radians).
function ParticleSystem:getDirection() end


---Gets the area-based spawn parameters for the particles.
---@return AreaSpreadDistribution distribution @ The type of distribution for new particles.
---@return number dx @ The maximum spawn distance from the emitter along the x-axis for uniform distribution, or the standard deviation along the x-axis for normal distribution.
---@return number dy @ The maximum spawn distance from the emitter along the y-axis for uniform distribution, or the standard deviation along the y-axis for normal distribution.
---@return number angle @ The angle in radians of the emission area.
---@return boolean directionRelativeToCenter @ True if newly spawned particles will be oriented relative to the center of the emission area, false otherwise.
function ParticleSystem:getEmissionArea() end


---Gets the amount of particles emitted per second.
---@return number rate @ The amount of particles per second.
function ParticleSystem:getEmissionRate() end


---Gets how long the particle system will emit particles (if -1 then it emits particles forever).
---@return number life @ The lifetime of the emitter (in seconds).
function ParticleSystem:getEmitterLifetime() end


---Gets the mode used when the ParticleSystem adds new particles.
---@return ParticleInsertMode mode @ The mode used when the ParticleSystem adds new particles.
function ParticleSystem:getInsertMode() end


---Gets the linear acceleration (acceleration along the x and y axes) for particles.
---
---Every particle created will accelerate along the x and y axes between xmin,ymin and xmax,ymax.
---@return number xmin @ The minimum acceleration along the x axis.
---@return number ymin @ The minimum acceleration along the y axis.
---@return number xmax @ The maximum acceleration along the x axis.
---@return number ymax @ The maximum acceleration along the y axis.
function ParticleSystem:getLinearAcceleration() end


---Gets the amount of linear damping (constant deceleration) for particles.
---@return number min @ The minimum amount of linear damping applied to particles.
---@return number max @ The maximum amount of linear damping applied to particles.
function ParticleSystem:getLinearDamping() end


---Gets the particle image's draw offset.
---@return number ox @ The x coordinate of the particle image's draw offset.
---@return number oy @ The y coordinate of the particle image's draw offset.
function ParticleSystem:getOffset() end


---Gets the lifetime of the particles.
---@return number min @ The minimum life of the particles (in seconds).
---@return number max @ The maximum life of the particles (in seconds).
function ParticleSystem:getParticleLifetime() end


---Gets the position of the emitter.
---@return number x @ Position along x-axis.
---@return number y @ Position along y-axis.
function ParticleSystem:getPosition() end


---Gets the series of Quads used for the particle sprites.
---@return table quads @ A table containing the Quads used.
function ParticleSystem:getQuads() end


---Gets the radial acceleration (away from the emitter).
---@return number min @ The minimum acceleration.
---@return number max @ The maximum acceleration.
function ParticleSystem:getRadialAcceleration() end


---Gets the rotation of the image upon particle creation (in radians).
---@return number min @ The minimum initial angle (radians).
---@return number max @ The maximum initial angle (radians).
function ParticleSystem:getRotation() end


---Gets the amount of size variation (0 meaning no variation and 1 meaning full variation between start and end).
---@return number variation @ The amount of variation (0 meaning no variation and 1 meaning full variation between start and end).
function ParticleSystem:getSizeVariation() end


---Gets the series of sizes by which the sprite is scaled. 1.0 is normal size. The particle system will interpolate between each size evenly over the particle's lifetime.
---@return number size1 @ The first size.
---@return number size2 @ The second size.
---@return number size8 @ The eighth size.
function ParticleSystem:getSizes() end


---Gets the speed of the particles.
---@return number min @ The minimum linear speed of the particles.
---@return number max @ The maximum linear speed of the particles.
function ParticleSystem:getSpeed() end


---Gets the spin of the sprite.
---@return number min @ The minimum spin (radians per second).
---@return number max @ The maximum spin (radians per second).
---@return number variation @ The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
function ParticleSystem:getSpin() end


---Gets the amount of spin variation (0 meaning no variation and 1 meaning full variation between start and end).
---@return number variation @ The amount of variation (0 meaning no variation and 1 meaning full variation between start and end).
function ParticleSystem:getSpinVariation() end


---Gets the amount of directional spread of the particle emitter (in radians).
---@return number spread @ The spread of the emitter (radians).
function ParticleSystem:getSpread() end


---Gets the tangential acceleration (acceleration perpendicular to the particle's direction).
---@return number min @ The minimum acceleration.
---@return number max @ The maximum acceleration.
function ParticleSystem:getTangentialAcceleration() end


---Gets the texture (Image or Canvas) used for the particles.
---@return Texture texture @ The Image or Canvas used for the particles.
function ParticleSystem:getTexture() end


---Gets whether particle angles and rotations are relative to their velocities. If enabled, particles are aligned to the angle of their velocities and rotate relative to that angle.
---@return boolean enable @ True if relative particle rotation is enabled, false if it's disabled.
function ParticleSystem:hasRelativeRotation() end


---Checks whether the particle system is actively emitting particles.
---@return boolean active @ True if system is active, false otherwise.
function ParticleSystem:isActive() end


---Checks whether the particle system is paused.
---@return boolean paused @ True if system is paused, false otherwise.
function ParticleSystem:isPaused() end


---Checks whether the particle system is stopped.
---@return boolean stopped @ True if system is stopped, false otherwise.
function ParticleSystem:isStopped() end


---Moves the position of the emitter. This results in smoother particle spawning behaviour than if ParticleSystem:setPosition is used every frame.
---@param x number @ Position along x-axis.
---@param y number @ Position along y-axis.
function ParticleSystem:moveTo(x, y) end


---Pauses the particle emitter.
function ParticleSystem:pause() end


---Resets the particle emitter, removing any existing particles and resetting the lifetime counter.
function ParticleSystem:reset() end


---Sets the size of the buffer (the max allowed amount of particles in the system).
---@param size number @ The buffer size.
function ParticleSystem:setBufferSize(size) end


---Sets a series of colors to apply to the particle sprite. The particle system will interpolate between each color evenly over the particle's lifetime.
---
---Arguments can be passed in groups of four, representing the components of the desired RGBA value, or as tables of RGBA component values, with a default alpha value of 1 if only three values are given. At least one color must be specified. A maximum of eight may be used.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---@param r1 number @ First color, red component (0-1).
---@param g1 number @ First color, green component (0-1).
---@param b1 number @ First color, blue component (0-1).
---@param a1 number @ First color, alpha component (0-1).
---@param r2 number @ Second color, red component (0-1).
---@param g2 number @ Second color, green component (0-1).
---@param b2 number @ Second color, blue component (0-1).
---@param a2 number @ Second color, alpha component (0-1).
---@param r8 number @ Eighth color, red component (0-1).
---@param g8 number @ Eighth color, green component (0-1).
---@param b8 number @ Eighth color, blue component (0-1).
---@param a8 number @ Eighth color, alpha component (0-1).
function ParticleSystem:setColors(r1, g1, b1, a1, r2, g2, b2, a2, r8, g8, b8, a8) end


---Sets the direction the particles will be emitted in.
---@param direction number @ The direction of the particles (in radians).
function ParticleSystem:setDirection(direction) end


---Sets area-based spawn parameters for the particles. Newly created particles will spawn in an area around the emitter based on the parameters to this function.
---@param distribution AreaSpreadDistribution @ The type of distribution for new particles.
---@param dx number @ The maximum spawn distance from the emitter along the x-axis for uniform distribution, or the standard deviation along the x-axis for normal distribution.
---@param dy number @ The maximum spawn distance from the emitter along the y-axis for uniform distribution, or the standard deviation along the y-axis for normal distribution.
---@param angle? number @ (default: `0`) The angle in radians of the emission area.
---@param directionRelativeToCenter? boolean @ (default: `false`) True if newly spawned particles will be oriented relative to the center of the emission area, false otherwise.
function ParticleSystem:setEmissionArea(distribution, dx, dy, angle, directionRelativeToCenter) end


---Sets the amount of particles emitted per second.
---@param rate number @ The amount of particles per second.
function ParticleSystem:setEmissionRate(rate) end


---Sets how long the particle system should emit particles (if -1 then it emits particles forever).
---@param life number @ The lifetime of the emitter (in seconds).
function ParticleSystem:setEmitterLifetime(life) end


---Sets the mode to use when the ParticleSystem adds new particles.
---@param mode ParticleInsertMode @ The mode to use when the ParticleSystem adds new particles.
function ParticleSystem:setInsertMode(mode) end


---Sets the linear acceleration (acceleration along the x and y axes) for particles.
---
---Every particle created will accelerate along the x and y axes between xmin,ymin and xmax,ymax.
---@param xmin number @ The minimum acceleration along the x axis.
---@param ymin number @ The minimum acceleration along the y axis.
---@param xmax? number @ (default: `xmin`) The maximum acceleration along the x axis.
---@param ymax? number @ (default: `ymin`) The maximum acceleration along the y axis.
function ParticleSystem:setLinearAcceleration(xmin, ymin, xmax, ymax) end


---Sets the amount of linear damping (constant deceleration) for particles.
---@param min number @ The minimum amount of linear damping applied to particles.
---@param max? number @ (default: `min`) The maximum amount of linear damping applied to particles.
function ParticleSystem:setLinearDamping(min, max) end


---Set the offset position which the particle sprite is rotated around.
---
---If this function is not used, the particles rotate around their center.
---@param x number @ The x coordinate of the rotation offset.
---@param y number @ The y coordinate of the rotation offset.
function ParticleSystem:setOffset(x, y) end


---Sets the lifetime of the particles.
---@param min number @ The minimum life of the particles (in seconds).
---@param max? number @ (default: `min`) The maximum life of the particles (in seconds).
function ParticleSystem:setParticleLifetime(min, max) end


---Sets the position of the emitter.
---@param x number @ Position along x-axis.
---@param y number @ Position along y-axis.
function ParticleSystem:setPosition(x, y) end


---Sets a series of Quads to use for the particle sprites. Particles will choose a Quad from the list based on the particle's current lifetime, allowing for the use of animated sprite sheets with ParticleSystems.
---@param quad1 Quad @ The first Quad to use.
---@param quad2 Quad @ The second Quad to use.
function ParticleSystem:setQuads(quad1, quad2) end

---Sets a series of Quads to use for the particle sprites. Particles will choose a Quad from the list based on the particle's current lifetime, allowing for the use of animated sprite sheets with ParticleSystems.
---@param quads table @ A table containing the Quads to use.
function ParticleSystem:setQuads(quads) end


---Set the radial acceleration (away from the emitter).
---@param min number @ The minimum acceleration.
---@param max? number @ (default: `min`) The maximum acceleration.
function ParticleSystem:setRadialAcceleration(min, max) end


---Sets whether particle angles and rotations are relative to their velocities. If enabled, particles are aligned to the angle of their velocities and rotate relative to that angle.
---@param enable boolean @ True to enable relative particle rotation, false to disable it.
function ParticleSystem:setRelativeRotation(enable) end


---Sets the rotation of the image upon particle creation (in radians).
---@param min number @ The minimum initial angle (radians).
---@param max? number @ (default: `min`) The maximum initial angle (radians).
function ParticleSystem:setRotation(min, max) end


---Sets the amount of size variation (0 meaning no variation and 1 meaning full variation between start and end).
---@param variation number @ The amount of variation (0 meaning no variation and 1 meaning full variation between start and end).
function ParticleSystem:setSizeVariation(variation) end


---Sets a series of sizes by which to scale a particle sprite. 1.0 is normal size. The particle system will interpolate between each size evenly over the particle's lifetime.
---
---At least one size must be specified. A maximum of eight may be used.
---@param size1 number @ The first size.
---@param size2 number @ The second size.
---@param size8 number @ The eighth size.
function ParticleSystem:setSizes(size1, size2, size8) end


---Sets the speed of the particles.
---@param min number @ The minimum linear speed of the particles.
---@param max? number @ (default: `min`) The maximum linear speed of the particles.
function ParticleSystem:setSpeed(min, max) end


---Sets the spin of the sprite.
---@param min number @ The minimum spin (radians per second).
---@param max? number @ (default: `min`) The maximum spin (radians per second).
function ParticleSystem:setSpin(min, max) end


---Sets the amount of spin variation (0 meaning no variation and 1 meaning full variation between start and end).
---@param variation number @ The amount of variation (0 meaning no variation and 1 meaning full variation between start and end).
function ParticleSystem:setSpinVariation(variation) end


---Sets the amount of spread for the system.
---@param spread number @ The amount of spread (radians).
function ParticleSystem:setSpread(spread) end


---Sets the tangential acceleration (acceleration perpendicular to the particle's direction).
---@param min number @ The minimum acceleration.
---@param max? number @ (default: `min`) The maximum acceleration.
function ParticleSystem:setTangentialAcceleration(min, max) end


---Sets the texture (Image or Canvas) to be used for the particles.
---@param texture Texture @ An Image or Canvas to use for the particles.
function ParticleSystem:setTexture(texture) end


---Starts the particle emitter.
function ParticleSystem:start() end


---Stops the particle emitter, resetting the lifetime counter.
function ParticleSystem:stop() end


---Updates the particle system; moving, creating and killing particles.
---@param dt number @ The time (seconds) since last frame.
function ParticleSystem:update(dt) end


--endregion ParticleSystem



--region Quad

---A quadrilateral (a polygon with four sides and four corners) with texture coordinate information.
---
---Quads can be used to select part of a texture to draw. In this way, one large texture atlas can be loaded, and then split up into sub-images.
---@class Quad: Object
local Quad = {}

---Gets reference texture dimensions initially specified in love.graphics.newQuad.
---@return number sw @ The Texture width used by the Quad.
---@return number sh @ The Texture height used by the Quad.
function Quad:getTextureDimensions() end

---Gets the current viewport of this Quad.
---@return number x @ The top-left corner along the x-axis.
---@return number y @ The top-left corner along the y-axis.
---@return number w @ The width of the viewport.
---@return number h @ The height of the viewport.
function Quad:getViewport() end

---Sets the texture coordinates according to a viewport.
---@param x number @ The top-left corner along the x-axis.
---@param y number @ The top-left corner along the y-axis.
---@param w number @ The width of the viewport.
---@param h number @ The height of the viewport.
---@param sw number @ The reference width, the width of the Image. (Must be greater than 0.)
---@param sh number @ The reference height, the height of the Image. (Must be greater than 0.)
function Quad:setViewport(x, y, w, h, sw, sh) end

--endregion Quad



--region Shader


---A Shader is used for advanced hardware-accelerated pixel or vertex manipulation. These effects are written in a language based on GLSL (OpenGL Shading Language) with a few things simplified for easier coding.
---
---Potential uses for shaders include HDR/bloom, motion blur, grayscale/invert/sepia/any kind of color effect, reflection/refraction, distortions, bump mapping, and much more! Here is a collection of basic shaders and good starting point to learn: https://github.com/vrld/moonshine
---@class Shader: Object
local Shader = {}


---Returns any warning and error messages from compiling the shader code. This can be used for debugging your shaders if there's anything the graphics hardware doesn't like.
---@return string warnings @ Warning and error messages (if any).
function Shader:getWarnings() end


---Gets whether a uniform / extern variable exists in the Shader.
---
---If a graphics driver's shader compiler determines that a uniform / extern variable doesn't affect the final output of the shader, it may optimize the variable out. This function will return false in that case.
---@param name string @ The name of the uniform variable.
---@return boolean hasuniform @ Whether the uniform exists in the shader and affects its final output.
function Shader:hasUniform(name) end


---Sends one or more values to a special (''uniform'') variable inside the shader. Uniform variables have to be marked using the ''uniform'' or ''extern'' keyword, e.g.
---
---uniform float time;  // 'float' is the typical number type used in GLSL shaders.
---
---uniform float varsvec2 light_pos;
---
---uniform vec4 colors[4;
---
---The corresponding send calls would be
---
---shader:send('time', t)
---
---shader:send('vars',a,b)
---
---shader:send('light_pos', {light_x, light_y})
---
---shader:send('colors', {r1, g1, b1, a1},  {r2, g2, b2, a2},  {r3, g3, b3, a3},  {r4, g4, b4, a4})
---
---Uniform / extern variables are read-only in the shader code and remain constant until modified by a Shader:send call. Uniform variables can be accessed in both the Vertex and Pixel components of a shader, as long as the variable is declared in each.
---Because all numbers in Lua are floating point, in versions prior to 0.10.2 you must use the function Shader:sendInt to send values to uniform int variables in the shader's code.
---@param name string @ Name of the number to send to the shader.
---@param number number @ Number to send to store in the uniform variable.
---@vararg number @ Additional numbers to send if the uniform variable is an array.
function Shader:send(name, number, ...) end

---Sends one or more values to a special (''uniform'') variable inside the shader. Uniform variables have to be marked using the ''uniform'' or ''extern'' keyword, e.g.
---
---uniform float time;  // 'float' is the typical number type used in GLSL shaders.
---
---uniform float varsvec2 light_pos;
---
---uniform vec4 colors[4;
---
---The corresponding send calls would be
---
---shader:send('time', t)
---
---shader:send('vars',a,b)
---
---shader:send('light_pos', {light_x, light_y})
---
---shader:send('colors', {r1, g1, b1, a1},  {r2, g2, b2, a2},  {r3, g3, b3, a3},  {r4, g4, b4, a4})
---
---Uniform / extern variables are read-only in the shader code and remain constant until modified by a Shader:send call. Uniform variables can be accessed in both the Vertex and Pixel components of a shader, as long as the variable is declared in each.
---@param name string @ Name of the vector to send to the shader.
---@param vector table @ Numbers to send to the uniform variable as a vector. The number of elements in the table determines the type of the vector (e.g. two numbers -&gt; vec2). At least two and at most four numbers can be used.
---@vararg table @ Additional vectors to send if the uniform variable is an array. All vectors need to be of the same size (e.g. only vec3's).
function Shader:send(name, vector, ...) end

---Sends one or more values to a special (''uniform'') variable inside the shader. Uniform variables have to be marked using the ''uniform'' or ''extern'' keyword, e.g.
---
---uniform float time;  // 'float' is the typical number type used in GLSL shaders.
---
---uniform float varsvec2 light_pos;
---
---uniform vec4 colors[4;
---
---The corresponding send calls would be
---
---shader:send('time', t)
---
---shader:send('vars',a,b)
---
---shader:send('light_pos', {light_x, light_y})
---
---shader:send('colors', {r1, g1, b1, a1},  {r2, g2, b2, a2},  {r3, g3, b3, a3},  {r4, g4, b4, a4})
---
---Uniform / extern variables are read-only in the shader code and remain constant until modified by a Shader:send call. Uniform variables can be accessed in both the Vertex and Pixel components of a shader, as long as the variable is declared in each.
---@param name string @ Name of the matrix to send to the shader.
---@param matrix table @ 2x2, 3x3, or 4x4 matrix to send to the uniform variable. Using table form: {{a,b,c,d}, {e,f,g,h}, ... } or (since version 0.10.2) {a,b,c,d, e,f,g,h, ...}. The order in 0.10.2 is column-major; starting in 11.0 it's row-major instead.
---@vararg table @ Additional matrices of the same type as ''matrix'' to store in a uniform array.
function Shader:send(name, matrix, ...) end

---Sends one or more values to a special (''uniform'') variable inside the shader. Uniform variables have to be marked using the ''uniform'' or ''extern'' keyword, e.g.
---
---uniform float time;  // 'float' is the typical number type used in GLSL shaders.
---
---uniform float varsvec2 light_pos;
---
---uniform vec4 colors[4;
---
---The corresponding send calls would be
---
---shader:send('time', t)
---
---shader:send('vars',a,b)
---
---shader:send('light_pos', {light_x, light_y})
---
---shader:send('colors', {r1, g1, b1, a1},  {r2, g2, b2, a2},  {r3, g3, b3, a3},  {r4, g4, b4, a4})
---
---Uniform / extern variables are read-only in the shader code and remain constant until modified by a Shader:send call. Uniform variables can be accessed in both the Vertex and Pixel components of a shader, as long as the variable is declared in each.
---@param name string @ Name of the Texture to send to the shader.
---@param texture Texture @ Texture (Image or Canvas) to send to the uniform variable.
function Shader:send(name, texture) end

---Sends one or more values to a special (''uniform'') variable inside the shader. Uniform variables have to be marked using the ''uniform'' or ''extern'' keyword, e.g.
---
---uniform float time;  // 'float' is the typical number type used in GLSL shaders.
---
---uniform float varsvec2 light_pos;
---
---uniform vec4 colors[4;
---
---The corresponding send calls would be
---
---shader:send('time', t)
---
---shader:send('vars',a,b)
---
---shader:send('light_pos', {light_x, light_y})
---
---shader:send('colors', {r1, g1, b1, a1},  {r2, g2, b2, a2},  {r3, g3, b3, a3},  {r4, g4, b4, a4})
---
---Uniform / extern variables are read-only in the shader code and remain constant until modified by a Shader:send call. Uniform variables can be accessed in both the Vertex and Pixel components of a shader, as long as the variable is declared in each.
---@param name string @ Name of the boolean to send to the shader.
---@param boolean boolean @ Boolean to send to store in the uniform variable.
---@vararg boolean @ Additional booleans to send if the uniform variable is an array.
function Shader:send(name, boolean, ...) end

---Sends one or more values to a special (''uniform'') variable inside the shader. Uniform variables have to be marked using the ''uniform'' or ''extern'' keyword, e.g.
---
---uniform float time;  // 'float' is the typical number type used in GLSL shaders.
---
---uniform float varsvec2 light_pos;
---
---uniform vec4 colors[4;
---
---The corresponding send calls would be
---
---shader:send('time', t)
---
---shader:send('vars',a,b)
---
---shader:send('light_pos', {light_x, light_y})
---
---shader:send('colors', {r1, g1, b1, a1},  {r2, g2, b2, a2},  {r3, g3, b3, a3},  {r4, g4, b4, a4})
---
---Uniform / extern variables are read-only in the shader code and remain constant until modified by a Shader:send call. Uniform variables can be accessed in both the Vertex and Pixel components of a shader, as long as the variable is declared in each.
---@param name string @ Name of the matrix to send to the shader.
---@param matrixlayout MatrixLayout @ The layout (row- or column-major) of the matrix.
---@param matrix table @ 2x2, 3x3, or 4x4 matrix to send to the uniform variable. Using table form: {{a,b,c,d}, {e,f,g,h}, ... } or {a,b,c,d, e,f,g,h, ...}.
---@vararg table @ Additional matrices of the same type as ''matrix'' to store in a uniform array.
function Shader:send(name, matrixlayout, matrix, ...) end

---Sends one or more values to a special (''uniform'') variable inside the shader. Uniform variables have to be marked using the ''uniform'' or ''extern'' keyword, e.g.
---
---uniform float time;  // 'float' is the typical number type used in GLSL shaders.
---
---uniform float varsvec2 light_pos;
---
---uniform vec4 colors[4;
---
---The corresponding send calls would be
---
---shader:send('time', t)
---
---shader:send('vars',a,b)
---
---shader:send('light_pos', {light_x, light_y})
---
---shader:send('colors', {r1, g1, b1, a1},  {r2, g2, b2, a2},  {r3, g3, b3, a3},  {r4, g4, b4, a4})
---
---Uniform / extern variables are read-only in the shader code and remain constant until modified by a Shader:send call. Uniform variables can be accessed in both the Vertex and Pixel components of a shader, as long as the variable is declared in each.
---Sends uniform values to the Shader sourced from the contents of a Data object. This directly copies the bytes of the data.
---@param name string @ Name of the uniform to send to the shader.
---@param data Data @ Data object containing the values to send.
---@param offset? number @ (default: `0`) Offset in bytes from the start of the Data object.
---@param size? number @ (default: `all`) Size in bytes of the data to send. If nil, as many bytes as the specified uniform uses will be copied.
function Shader:send(name, data, offset, size) end

---Sends one or more values to a special (''uniform'') variable inside the shader. Uniform variables have to be marked using the ''uniform'' or ''extern'' keyword, e.g.
---
---uniform float time;  // 'float' is the typical number type used in GLSL shaders.
---
---uniform float varsvec2 light_pos;
---
---uniform vec4 colors[4;
---
---The corresponding send calls would be
---
---shader:send('time', t)
---
---shader:send('vars',a,b)
---
---shader:send('light_pos', {light_x, light_y})
---
---shader:send('colors', {r1, g1, b1, a1},  {r2, g2, b2, a2},  {r3, g3, b3, a3},  {r4, g4, b4, a4})
---
---Uniform / extern variables are read-only in the shader code and remain constant until modified by a Shader:send call. Uniform variables can be accessed in both the Vertex and Pixel components of a shader, as long as the variable is declared in each.
---Sends uniform matrices to the Shader sourced from the contents of a Data object. This directly copies the bytes of the data.
---@param name string @ Name of the uniform matrix to send to the shader.
---@param data Data @ Data object containing the values to send.
---@param matrixlayout MatrixLayout @ The layout (row- or column-major) of the matrix in memory.
---@param offset? number @ (default: `0`) Offset in bytes from the start of the Data object.
---@param size? number @ (default: `all`) Size in bytes of the data to send. If nil, as many bytes as the specified uniform uses will be copied.
function Shader:send(name, data, matrixlayout, offset, size) end


---Sends one or more colors to a special (''extern'' / ''uniform'') vec3 or vec4 variable inside the shader. The color components must be in the range of 1. The colors are gamma-corrected if global gamma-correction is enabled.
---
---Extern variables must be marked using the ''extern'' keyword, e.g.
---
---extern vec4 Color;
---
---The corresponding sendColor call would be
---
---shader:sendColor('Color', {r, g, b, a})
---
---Extern variables can be accessed in both the Vertex and Pixel stages of a shader, as long as the variable is declared in each.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---@param name string @ The name of the color extern variable to send to in the shader.
---@param color table @ A table with red, green, blue, and optional alpha color components in the range of 1 to send to the extern as a vector.
---@vararg table @ Additional colors to send in case the extern is an array. All colors need to be of the same size (e.g. only vec3's).
function Shader:sendColor(name, color, ...) end


--endregion Shader



--region SpriteBatch


---Using a single image, draw any number of identical copies of the image using a single call to love.graphics.draw(). This can be used, for example, to draw repeating copies of a single background image with high performance.
---
---A SpriteBatch can be even more useful when the underlying image is a texture atlas (a single image file containing many independent images); by adding Quads to the batch, different sub-images from within the atlas can be drawn.
---@class SpriteBatch: Drawable, Object
local SpriteBatch = {}


---Adds a sprite to the batch. Sprites are drawn in the order they are added.
---@param x number @ The position to draw the object (x-axis).
---@param y number @ The position to draw the object (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shear factor (x-axis).
---@param ky? number @ (default: `0`) Shear factor (y-axis).
---@return number id @ An identifier for the added sprite.
function SpriteBatch:add(x, y, r, sx, sy, ox, oy, kx, ky) end

---Adds a sprite to the batch. Sprites are drawn in the order they are added.
---Adds a Quad to the batch.
---@param quad Quad @ The Quad to add.
---@param x number @ The position to draw the object (x-axis).
---@param y number @ The position to draw the object (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shear factor (x-axis).
---@param ky? number @ (default: `0`) Shear factor (y-axis).
---@return number id @ An identifier for the added sprite.
function SpriteBatch:add(quad, x, y, r, sx, sy, ox, oy, kx, ky) end


---Adds a sprite to a batch created with an Array Texture.
---Adds a layer of the SpriteBatch's Array Texture.
---@param layerindex number @ The index of the layer to use for this sprite.
---@param x? number @ (default: `0`) The position to draw the sprite (x-axis).
---@param y? number @ (default: `0`) The position to draw the sprite (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
---@return number spriteindex @ The index of the added sprite, for use with SpriteBatch:set or SpriteBatch:setLayer.
function SpriteBatch:addLayer(layerindex, x, y, r, sx, sy, ox, oy, kx, ky) end

---Adds a sprite to a batch created with an Array Texture.
---Adds a layer of the SpriteBatch's Array Texture using the specified Quad.
---
---The specified layer index overrides any layer index set on the Quad via Quad:setLayer.
---@param layerindex number @ The index of the layer to use for this sprite.
---@param quad Quad @ The subsection of the texture's layer to use when drawing the sprite.
---@param x? number @ (default: `0`) The position to draw the sprite (x-axis).
---@param y? number @ (default: `0`) The position to draw the sprite (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
---@return number spriteindex @ The index of the added sprite, for use with SpriteBatch:set or SpriteBatch:setLayer.
function SpriteBatch:addLayer(layerindex, quad, x, y, r, sx, sy, ox, oy, kx, ky) end

---Adds a sprite to a batch created with an Array Texture.
---Adds a layer of the SpriteBatch's Array Texture using the specified Transform.
---@param layerindex number @ The index of the layer to use for this sprite.
---@param transform Transform @ A transform object.
---@return number spriteindex @ The index of the added sprite, for use with SpriteBatch:set or SpriteBatch:setLayer.
function SpriteBatch:addLayer(layerindex, transform) end

---Adds a sprite to a batch created with an Array Texture.
---Adds a layer of the SpriteBatch's Array Texture using the specified Quad and Transform.
---
---In order to use an Array Texture or other non-2D texture types as the main texture in a custom void effect() variant must be used in the pixel shader, and MainTex must be declared as an ArrayImage or sampler2DArray like so: uniform ArrayImage MainTex;.
---@param layerindex number @ The index of the layer to use for this sprite.
---@param quad Quad @ The subsection of the texture's layer to use when drawing the sprite.
---@param transform Transform @ A transform object.
---@return number spriteindex @ The index of the added sprite, for use with SpriteBatch:set or SpriteBatch:setLayer.
function SpriteBatch:addLayer(layerindex, quad, transform) end


---Attaches a per-vertex attribute from a Mesh onto this SpriteBatch, for use when drawing. This can be combined with a Shader to augment a SpriteBatch with per-vertex or additional per-sprite information instead of just having per-sprite colors.
---
---Each sprite in a SpriteBatch has 4 vertices in the following order: top-left, bottom-left, top-right, bottom-right. The index returned by SpriteBatch:add (and used by SpriteBatch:set) can used to determine the first vertex of a specific sprite with the formula 1 + 4 * ( id - 1 ).
---If a created with a custom vertex format, it will have 3 vertex attributes named VertexPosition, VertexTexCoord, and VertexColor. If vertex attributes with those names are attached to the SpriteBatch, it will override the SpriteBatch's sprite positions, texture coordinates, and sprite colors, respectively.
---
---Custom named attributes can be accessed in a vertex shader by declaring them as attribute vec4 MyCustomAttributeName; at the top-level of the vertex shader code. The name must match what was specified in the Mesh's vertex format and in the name argument of SpriteBatch:attachAttribute.
---
---A Mesh must have at least 4 * SpriteBatch:getBufferSize vertices in order to be attachable to a SpriteBatch.
---@param name string @ The name of the vertex attribute to attach.
---@param mesh Mesh @ The Mesh to get the vertex attribute from.
function SpriteBatch:attachAttribute(name, mesh) end


---Removes all sprites from the buffer.
function SpriteBatch:clear() end


---Immediately sends all new and modified sprite data in the batch to the graphics card.
---
---Normally it isn't necessary to call this method as love.graphics.draw(spritebatch, ...) will do it automatically if needed, but explicitly using SpriteBatch:flush gives more control over when the work happens.
---
---If this method is used, it generally shouldn't be called more than once (at most) between love.graphics.draw(spritebatch, ...) calls.
function SpriteBatch:flush() end


---Gets the maximum number of sprites the SpriteBatch can hold.
---@return number size @ The maximum number of sprites the batch can hold.
function SpriteBatch:getBufferSize() end


---Gets the color that will be used for the next add and set operations.
---
---If no color has been set with SpriteBatch:setColor or the current SpriteBatch color has been cleared, this method will return nil.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---@return number r @ The red component (0-1).
---@return number g @ The green component (0-1).
---@return number b @ The blue component (0-1).
---@return number a @ The alpha component (0-1).
function SpriteBatch:getColor() end


---Gets the number of sprites currently in the SpriteBatch.
---@return number count @ The number of sprites currently in the batch.
function SpriteBatch:getCount() end


---Gets the texture (Image or Canvas) used by the SpriteBatch.
---@return Texture texture @ The Image or Canvas used by the SpriteBatch.
function SpriteBatch:getTexture() end


---Changes a sprite in the batch. This requires the sprite index returned by SpriteBatch:add or SpriteBatch:addLayer.
---@param spriteindex number @ The index of the sprite that will be changed.
---@param x number @ The position to draw the object (x-axis).
---@param y number @ The position to draw the object (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shear factor (x-axis).
---@param ky? number @ (default: `0`) Shear factor (y-axis).
function SpriteBatch:set(spriteindex, x, y, r, sx, sy, ox, oy, kx, ky) end

---Changes a sprite in the batch. This requires the sprite index returned by SpriteBatch:add or SpriteBatch:addLayer.
---Changes a sprite with a Quad in the batch. This requires the index returned by SpriteBatch:add or SpriteBatch:addLayer.
---
---SpriteBatches do not support removing individual sprites. One can do a pseudo removal (instead of clearing and re-adding everything) by:
---
---SpriteBatch:set(id, 0, 0, 0, 0, 0)
---
---This makes all the sprite's vertices equal (because the x and y scales are 0), which prevents the GPU from fully processing the sprite when drawing the SpriteBatch.
---@param spriteindex number @ The index of the sprite that will be changed.
---@param quad Quad @ The Quad used on the image of the batch.
---@param x number @ The position to draw the object (x-axis).
---@param y number @ The position to draw the object (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shear factor (x-axis).
---@param ky? number @ (default: `0`) Shear factor (y-axis).
function SpriteBatch:set(spriteindex, quad, x, y, r, sx, sy, ox, oy, kx, ky) end


---Sets the color that will be used for the next add and set operations. Calling the function without arguments will disable all per-sprite colors for the SpriteBatch.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---
---In version 0.9.2 and older, the global color set with love.graphics.setColor will not work on the SpriteBatch if any of the sprites has its own color.
---@param r number @ The amount of red.
---@param g number @ The amount of green.
---@param b number @ The amount of blue.
---@param a? number @ (default: `1`) The amount of alpha.
function SpriteBatch:setColor(r, g, b, a) end

---Sets the color that will be used for the next add and set operations. Calling the function without arguments will disable all per-sprite colors for the SpriteBatch.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---
---In version 0.9.2 and older, the global color set with love.graphics.setColor will not work on the SpriteBatch if any of the sprites has its own color.
---Disables all per-sprite colors for this SpriteBatch.
function SpriteBatch:setColor() end


---Restricts the drawn sprites in the SpriteBatch to a subset of the total.
---@param start number @ The index of the first sprite to draw. Index 1 corresponds to the first sprite added with SpriteBatch:add.
---@param count number @ The number of sprites to draw.
function SpriteBatch:setDrawRange(start, count) end

---Restricts the drawn sprites in the SpriteBatch to a subset of the total.
---Allows all sprites in the SpriteBatch to be drawn.
function SpriteBatch:setDrawRange() end


---Changes a sprite previously added with add or addLayer, in a batch created with an Array Texture.
---Changes the sprite in the SpriteBatch.
---@param spriteindex number @ The index of the existing sprite to replace.
---@param layerindex number @ The index of the layer in the Array Texture to use for this sprite.
---@param x? number @ (default: `0`) The position to draw the sprite (x-axis).
---@param y? number @ (default: `0`) The position to draw the sprite (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
function SpriteBatch:setLayer(spriteindex, layerindex, x, y, r, sx, sy, ox, oy, kx, ky) end

---Changes a sprite previously added with add or addLayer, in a batch created with an Array Texture.
---Adds a layer of the SpriteBatch's Array Texture using the specified Quad.
---
---The specified layer index overrides any layer index set on the Quad via Quad:setLayer.
---@param spriteindex number @ The index of the existing sprite to replace.
---@param layerindex number @ The index of the layer to use for this sprite.
---@param quad Quad @ The subsection of the texture's layer to use when drawing the sprite.
---@param x? number @ (default: `0`) The position to draw the sprite (x-axis).
---@param y? number @ (default: `0`) The position to draw the sprite (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
function SpriteBatch:setLayer(spriteindex, layerindex, quad, x, y, r, sx, sy, ox, oy, kx, ky) end

---Changes a sprite previously added with add or addLayer, in a batch created with an Array Texture.
---Adds a layer of the SpriteBatch's Array Texture using the specified Transform.
---@param spriteindex number @ The index of the existing sprite to replace.
---@param layerindex number @ The index of the layer to use for the sprite.
---@param transform Transform @ A transform object.
function SpriteBatch:setLayer(spriteindex, layerindex, transform) end

---Changes a sprite previously added with add or addLayer, in a batch created with an Array Texture.
---Adds a layer of the SpriteBatch's Array Texture using the specified Quad and Transform.
---
---The specified layer index overrides any layer index set on the Quad via Quad:setLayer.
---@param spriteindex number @ The index of the existing sprite to replace.
---@param layerindex number @ The index of the layer to use for the sprite.
---@param quad Quad @ The subsection of the texture's layer to use when drawing the sprite.
---@param transform Transform @ A transform object.
function SpriteBatch:setLayer(spriteindex, layerindex, quad, transform) end


---Sets the texture (Image or Canvas) used for the sprites in the batch, when drawing.
---@param texture Texture @ The new Image or Canvas to use for the sprites in the batch.
function SpriteBatch:setTexture(texture) end


--endregion SpriteBatch



--region Text


---Drawable text.
---@class Text: Drawable, Object
local Text = {}


---Adds additional colored text to the Text object at the specified position.
---@param textstring string @ The text to add to the object.
---@param x? number @ (default: `0`) The position of the new text on the x-axis.
---@param y? number @ (default: `0`) The position of the new text on the y-axis.
---@param angle? number @ (default: `0`) The orientation of the new text in radians.
---@param sx? number @ (default: `1`) Scale factor on the x-axis.
---@param sy? number @ (default: `sx`) Scale factor on the y-axis.
---@param ox? number @ (default: `0`) Origin offset on the x-axis.
---@param oy? number @ (default: `0`) Origin offset on the y-axis.
---@param kx? number @ (default: `0`) Shearing / skew factor on the x-axis.
---@param ky? number @ (default: `0`) Shearing / skew factor on the y-axis.
---@return number index @ An index number that can be used with Text:getWidth or Text:getHeight.
function Text:add(textstring, x, y, angle, sx, sy, ox, oy, kx, ky) end

---Adds additional colored text to the Text object at the specified position.
---The color set by love.graphics.setColor will be combined (multiplied) with the colors of the text, when drawing the Text object.
---@param coloredtext Text-add-1 @ A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
---@param x? number @ (default: `0`) The position of the new text on the x-axis.
---@param y? number @ (default: `0`) The position of the new text on the y-axis.
---@param angle? number @ (default: `0`) The orientation of the new text in radians.
---@param sx? number @ (default: `1`) Scale factor on the x-axis.
---@param sy? number @ (default: `sx`) Scale factor on the y-axis.
---@param ox? number @ (default: `0`) Origin offset on the x-axis.
---@param oy? number @ (default: `0`) Origin offset on the y-axis.
---@param kx? number @ (default: `0`) Shearing / skew factor on the x-axis.
---@param ky? number @ (default: `0`) Shearing / skew factor on the y-axis.
---@return number index @ An index number that can be used with Text:getWidth or Text:getHeight.
function Text:add(coloredtext, x, y, angle, sx, sy, ox, oy, kx, ky) end


---Adds additional formatted / colored text to the Text object at the specified position.
---
---The word wrap limit is applied before any scaling, rotation, and other coordinate transformations. Therefore the amount of text per line stays constant given the same wrap limit, even if the scale arguments change.
---@param textstring string @ The text to add to the object.
---@param wraplimit number @ The maximum width in pixels of the text before it gets automatically wrapped to a new line.
---@param align AlignMode @ The alignment of the text.
---@param x number @ The position of the new text (x-axis).
---@param y number @ The position of the new text (y-axis).
---@param angle? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing / skew factor (x-axis).
---@param ky? number @ (default: `0`) Shearing / skew factor (y-axis).
---@return number index @ An index number that can be used with Text:getWidth or Text:getHeight.
function Text:addf(textstring, wraplimit, align, x, y, angle, sx, sy, ox, oy, kx, ky) end

---Adds additional formatted / colored text to the Text object at the specified position.
---
---The word wrap limit is applied before any scaling, rotation, and other coordinate transformations. Therefore the amount of text per line stays constant given the same wrap limit, even if the scale arguments change.
---The color set by love.graphics.setColor will be combined (multiplied) with the colors of the text, when drawing the Text object.
---@param coloredtext Text-add-1 @ A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
---@param wraplimit number @ The maximum width in pixels of the text before it gets automatically wrapped to a new line.
---@param align AlignMode @ The alignment of the text.
---@param x number @ The position of the new text (x-axis).
---@param y number @ The position of the new text (y-axis).
---@param angle? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing / skew factor (x-axis).
---@param ky? number @ (default: `0`) Shearing / skew factor (y-axis).
---@return number index @ An index number that can be used with Text:getWidth or Text:getHeight.
function Text:addf(coloredtext, wraplimit, align, x, y, angle, sx, sy, ox, oy, kx, ky) end


---Clears the contents of the Text object.
function Text:clear() end


---Gets the width and height of the text in pixels.
---@return number width @ The width of the text. If multiple sub-strings have been added with Text:add, the width of the last sub-string is returned.
---@return number height @ The height of the text. If multiple sub-strings have been added with Text:add, the height of the last sub-string is returned.
function Text:getDimensions() end

---Gets the width and height of the text in pixels.
---Gets the width and height of a specific sub-string that was previously added to the Text object.
---@param index number @ An index number returned by Text:add or Text:addf.
---@return number width @ The width of the sub-string (before scaling and other transformations).
---@return number height @ The height of the sub-string (before scaling and other transformations).
function Text:getDimensions(index) end


---Gets the Font used with the Text object.
---@return Font font @ The font used with this Text object.
function Text:getFont() end


---Gets the height of the text in pixels.
---@return number  height  @ The height of the text. If multiple sub-strings have been added with Text:add, the height of the last sub-string is returned.
function Text:getHeight() end

---Gets the height of the text in pixels.
---Gets the height of a specific sub-string that was previously added to the Text object.
---@param index number @ An index number returned by Text:add or Text:addf.
---@return number height @ The height of the sub-string (before scaling and other transformations).
function Text:getHeight(index) end


---Gets the width of the text in pixels.
---@return number width @ The width of the text. If multiple sub-strings have been added with Text:add, the width of the last sub-string is returned.
function Text:getWidth() end

---Gets the width of the text in pixels.
---Gets the width of a specific sub-string that was previously added to the Text object.
---@param index number @ An index number returned by Text:add or Text:addf.
---@return number width @ The width of the sub-string (before scaling and other transformations).
function Text:getWidth(index) end


---Replaces the contents of the Text object with a new unformatted string.
---@param textstring string @ The new string of text to use.
function Text:set(textstring) end

---Replaces the contents of the Text object with a new unformatted string.
---The color set by love.graphics.setColor will be combined (multiplied) with the colors of the text, when drawing the Text object.
---@param coloredtext Text-add-1 @ A table containing colors and strings to use as the new text, in the form of {color1, string1, color2, string2, ...}.
function Text:set(coloredtext) end


---Replaces the Font used with the text.
---@param font Font @ The new font to use with this Text object.
function Text:setFont(font) end


---Replaces the contents of the Text object with a new formatted string.
---@param textstring string @ The new string of text to use.
---@param wraplimit number @ The maximum width in pixels of the text before it gets automatically wrapped to a new line.
---@param align AlignMode @ The alignment of the text.
function Text:setf(textstring, wraplimit, align) end

---Replaces the contents of the Text object with a new formatted string.
---The color set by love.graphics.setColor will be combined (multiplied) with the colors of the text, when drawing the Text object.
---@param coloredtext Text-add-1 @ A table containing colors and strings to use as the new text, in the form of {color1, string1, color2, string2, ...}.
---@param wraplimit number @ The maximum width in pixels of the text before it gets automatically wrapped to a new line.
---@param align AlignMode @ The alignment of the text.
function Text:setf(coloredtext, wraplimit, align) end


--endregion Text



--region Texture


---Superclass for drawable objects which represent a texture. All Textures can be drawn with Quads. This is an abstract type that can't be created directly.
---@class Texture: Drawable, Object
local Texture = {}


---Gets the DPI scale factor of the Texture.
---
---The DPI scale factor represents relative pixel density. A DPI scale factor of 2 means the texture has twice the pixel density in each dimension (4 times as many pixels in the same area) compared to a texture with a DPI scale factor of 1.
---
---For example, a texture with pixel dimensions of 100x100 with a DPI scale factor of 2 will be drawn as if it was 50x50. This is useful with high-dpi /  retina displays to easily allow swapping out higher or lower pixel density Images and Canvases without needing any extra manual scaling logic.
---@return number dpiscale @ The DPI scale factor of the Texture.
function Texture:getDPIScale() end


---Gets the depth of a Volume Texture. Returns 1 for 2D, Cubemap, and Array textures.
---@return number depth @ The depth of the volume Texture.
function Texture:getDepth() end


---Gets the comparison mode used when sampling from a depth texture in a shader.
---
---Depth texture comparison modes are advanced low-level functionality typically used with shadow mapping in 3D.
---@return CompareMode? compare @ (default: `nil`) The comparison mode used when sampling from this texture in a shader, or nil if setDepthSampleMode has not been called on this Texture.
function Texture:getDepthSampleMode() end


---Gets the width and height of the Texture.
---@return number width @ The width of the Texture.
---@return number height @ The height of the Texture.
function Texture:getDimensions() end


---Gets the filter mode of the Texture.
---@return FilterMode min @ Filter mode to use when minifying the texture (rendering it at a smaller size on-screen than its size in pixels).
---@return FilterMode mag @ Filter mode to use when magnifying the texture (rendering it at a smaller size on-screen than its size in pixels).
---@return number anisotropy @ Maximum amount of anisotropic filtering used.
function Texture:getFilter() end


---Gets the pixel format of the Texture.
---@return PixelFormat format @ The pixel format the Texture was created with.
function Texture:getFormat() end


---Gets the height of the Texture.
---@return number height @ The height of the Texture.
function Texture:getHeight() end


---Gets the number of layers / slices in an Array Texture. Returns 1 for 2D, Cubemap, and Volume textures.
---@return number layers @ The number of layers in the Array Texture.
function Texture:getLayerCount() end


---Gets the number of mipmaps contained in the Texture. If the texture was not created with mipmaps, it will return 1.
---@return number mipmaps @ The number of mipmaps in the Texture.
function Texture:getMipmapCount() end


---Gets the mipmap filter mode for a Texture. Prior to 11.0 this method only worked on Images.
---@return FilterMode mode @ The filter mode used in between mipmap levels. nil if mipmap filtering is not enabled.
---@return number sharpness @ Value used to determine whether the image should use more or less detailed mipmap levels than normal when drawing.
function Texture:getMipmapFilter() end


---Gets the width and height in pixels of the Texture.
---
---Texture:getDimensions gets the dimensions of the texture in units scaled by the texture's DPI scale factor, rather than pixels. Use getDimensions for calculations related to drawing the texture (calculating an origin offset, for example), and getPixelDimensions only when dealing specifically with pixels, for example when using Canvas:newImageData.
---@return number pixelwidth @ The width of the Texture, in pixels.
---@return number pixelheight @ The height of the Texture, in pixels.
function Texture:getPixelDimensions() end


---Gets the height in pixels of the Texture.
---
---DPI scale factor, rather than pixels. Use getHeight for calculations related to drawing the texture (calculating an origin offset, for example), and getPixelHeight only when dealing specifically with pixels, for example when using Canvas:newImageData.
---@return number pixelheight @ The height of the Texture, in pixels.
function Texture:getPixelHeight() end


---Gets the width in pixels of the Texture.
---
---DPI scale factor, rather than pixels. Use getWidth for calculations related to drawing the texture (calculating an origin offset, for example), and getPixelWidth only when dealing specifically with pixels, for example when using Canvas:newImageData.
---@return number pixelwidth @ The width of the Texture, in pixels.
function Texture:getPixelWidth() end


---Gets the type of the Texture.
---@return TextureType texturetype @ The type of the Texture.
function Texture:getTextureType() end


---Gets the width of the Texture.
---@return number width @ The width of the Texture.
function Texture:getWidth() end


---Gets the wrapping properties of a Texture.
---
---This function returns the currently set horizontal and vertical wrapping modes for the texture.
---@return WrapMode horiz @ Horizontal wrapping mode of the texture.
---@return WrapMode vert @ Vertical wrapping mode of the texture.
---@return WrapMode depth @ Wrapping mode for the z-axis of a Volume texture.
function Texture:getWrap() end


---Gets whether the Texture can be drawn and sent to a Shader.
---
---Canvases created with stencil and/or depth PixelFormats are not readable by default, unless readable=true is specified in the settings table passed into love.graphics.newCanvas.
---
---Non-readable Canvases can still be rendered to.
---@return boolean readable @ Whether the Texture is readable.
function Texture:isReadable() end


---Sets the comparison mode used when sampling from a depth texture in a shader. Depth texture comparison modes are advanced low-level functionality typically used with shadow mapping in 3D.
---
---When using a depth texture with a comparison mode set in a shader, it must be declared as a sampler2DShadow and used in a GLSL 3 Shader. The result of accessing the texture in the shader will return a float between 0 and 1, proportional to the number of samples (up to 4 samples will be used if bilinear filtering is enabled) that passed the test set by the comparison operation.
---
---Depth texture comparison can only be used with readable depth-formatted Canvases.
---@param compare CompareMode @ The comparison mode used when sampling from this texture in a shader.
function Texture:setDepthSampleMode(compare) end


---Sets the filter mode of the Texture.
---@param min FilterMode @ Filter mode to use when minifying the texture (rendering it at a smaller size on-screen than its size in pixels).
---@param mag FilterMode @ Filter mode to use when magnifying the texture (rendering it at a larger size on-screen than its size in pixels).
---@param anisotropy? number @ (default: `1`) Maximum amount of anisotropic filtering to use.
function Texture:setFilter(min, mag, anisotropy) end


---Sets the mipmap filter mode for a Texture. Prior to 11.0 this method only worked on Images.
---
---Mipmapping is useful when drawing a texture at a reduced scale. It can improve performance and reduce aliasing issues.
---
---In created with the mipmaps flag enabled for the mipmap filter to have any effect. In versions prior to 0.10.0 it's best to call this method directly after creating the image with love.graphics.newImage, to avoid bugs in certain graphics drivers.
---
---Due to hardware restrictions and driver bugs, in versions prior to 0.10.0 images that weren't loaded from a CompressedData must have power-of-two dimensions (64x64, 512x256, etc.) to use mipmaps.
---On mobile devices (Android and iOS), the sharpness parameter is not supported and will do nothing. You can use a custom compressed and its CompressedData has mipmap data included, it will use that.
---@param filtermode FilterMode @ The filter mode to use in between mipmap levels. 'nearest' will often give better performance.
---@param sharpness? number @ (default: `0`) A positive sharpness value makes the texture use a more detailed mipmap level when drawing, at the expense of performance. A negative value does the reverse.
function Texture:setMipmapFilter(filtermode, sharpness) end

---Sets the mipmap filter mode for a Texture. Prior to 11.0 this method only worked on Images.
---
---Mipmapping is useful when drawing a texture at a reduced scale. It can improve performance and reduce aliasing issues.
---
---In created with the mipmaps flag enabled for the mipmap filter to have any effect. In versions prior to 0.10.0 it's best to call this method directly after creating the image with love.graphics.newImage, to avoid bugs in certain graphics drivers.
---
---Due to hardware restrictions and driver bugs, in versions prior to 0.10.0 images that weren't loaded from a CompressedData must have power-of-two dimensions (64x64, 512x256, etc.) to use mipmaps.
---Disables mipmap filtering.
function Texture:setMipmapFilter() end


---Sets the wrapping properties of a Texture.
---
---This function sets the way a Texture is repeated when it is drawn with a Quad that is larger than the texture's extent, or when a custom Shader is used which uses texture coordinates outside of [0, 1]. A texture may be clamped or set to repeat in both horizontal and vertical directions.
---
---Clamped textures appear only once (with the edges of the texture stretching to fill the extent of the Quad), whereas repeated ones repeat as many times as there is room in the Quad.
---@param horiz WrapMode @ Horizontal wrapping mode of the texture.
---@param vert? WrapMode @ (default: `horiz`) Vertical wrapping mode of the texture.
---@param depth? WrapMode @ (default: `horiz`) Wrapping mode for the z-axis of a Volume texture.
function Texture:setWrap(horiz, vert, depth) end


--endregion Texture



--region Video

---A drawable video.
---@class Video: Drawable, Object
local Video = {}

---Gets the width and height of the Video in pixels.
---@return number width @ The width of the Video.
---@return number height @ The height of the Video.
function Video:getDimensions() end

---Gets the scaling filters used when drawing the Video.
---@return FilterMode min @ The filter mode used when scaling the Video down.
---@return FilterMode mag @ The filter mode used when scaling the Video up.
---@return number anisotropy @ Maximum amount of anisotropic filtering used.
function Video:getFilter() end

---Gets the height of the Video in pixels.
---@return number height @ The height of the Video.
function Video:getHeight() end

---Gets the audio Source used for playing back the video's audio. May return nil if the video has no audio, or if Video:setSource is called with a nil argument.
---@return Source source @ The audio Source used for audio playback, or nil if the video has no audio.
function Video:getSource() end

---Gets the VideoStream object used for decoding and controlling the video.
---@return VideoStream stream @ The VideoStream used for decoding and controlling the video.
function Video:getStream() end

---Gets the width of the Video in pixels.
---@return number width @ The width of the Video.
function Video:getWidth() end

---Gets whether the Video is currently playing.
---@return boolean playing @ Whether the video is playing.
function Video:isPlaying() end

---Pauses the Video.
function Video:pause() end

---Starts playing the Video. In order for the video to appear onscreen it must be drawn with love.graphics.draw.
function Video:play() end

---Rewinds the Video to the beginning.
function Video:rewind() end

---Sets the current playback position of the Video.
---@param offset number @ The time in seconds since the beginning of the Video.
function Video:seek(offset) end

---Sets the scaling filters used when drawing the Video.
---@param min FilterMode @ The filter mode used when scaling the Video down.
---@param mag FilterMode @ The filter mode used when scaling the Video up.
---@param anisotropy? number @ (default: `1`) Maximum amount of anisotropic filtering used.
function Video:setFilter(min, mag, anisotropy) end

---Sets the audio Source used for playing back the video's audio. The audio Source also controls playback speed and synchronization.
---@param source? Source @ (default: `nil`) The audio Source used for audio playback, or nil to disable audio synchronization.
function Video:setSource(source) end

---Gets the current playback position of the Video.
---@return number seconds @ The time in seconds since the beginning of the Video.
function Video:tell() end

--endregion Video




-- functions


---Applies the given Transform object to the current coordinate transformation.
---
---This effectively multiplies the existing coordinate transformation's matrix with the Transform object's internal matrix to produce the new coordinate transformation.
---@param transform Transform @ The Transform object to apply to the current graphics coordinate transform.
function graphics.applyTransform(transform) end


---Draws a filled or unfilled arc at position (x, y). The arc is drawn from angle1 to angle2 in radians. The segments parameter determines how many segments are used to draw the arc. The more segments, the smoother the edge.
---Draws an arc using the 'pie' ArcType.
---@param drawmode DrawMode @ How to draw the arc.
---@param x number @ The position of the center along x-axis.
---@param y number @ The position of the center along y-axis.
---@param radius number @ Radius of the arc.
---@param angle1 number @ The angle at which the arc begins.
---@param angle2 number @ The angle at which the arc terminates.
---@param segments? number @ (default: `10`) The number of segments used for drawing the arc.
function graphics.arc(drawmode, x, y, radius, angle1, angle2, segments) end

---Draws a filled or unfilled arc at position (x, y). The arc is drawn from angle1 to angle2 in radians. The segments parameter determines how many segments are used to draw the arc. The more segments, the smoother the edge.
---
---@param drawmode DrawMode @ How to draw the arc.
---@param arctype ArcType @ The type of arc to draw.
---@param x number @ The position of the center along x-axis.
---@param y number @ The position of the center along y-axis.
---@param radius number @ Radius of the arc.
---@param angle1 number @ The angle at which the arc begins.
---@param angle2 number @ The angle at which the arc terminates.
---@param segments? number @ (default: `10`) The number of segments used for drawing the arc.
function graphics.arc(drawmode, arctype, x, y, radius, angle1, angle2, segments) end


---Creates a screenshot once the current frame is done (after love.draw has finished).
---
---Since this function enqueues a screenshot capture rather than executing it immediately, it can be called from an input callback or love.update and it will still capture all of what's drawn to the screen in that frame.
---Capture a screenshot and save it to a file at the end of the current frame.
---@param filename string @ The filename to save the screenshot to. The encoded image type is determined based on the extension of the filename, and must be one of the ImageFormats.
function graphics.captureScreenshot(filename) end

---Creates a screenshot once the current frame is done (after love.draw has finished).
---
---Since this function enqueues a screenshot capture rather than executing it immediately, it can be called from an input callback or love.update and it will still capture all of what's drawn to the screen in that frame.
---Capture a screenshot and call a callback with the generated ImageData at the end of the current frame.
---@param callback function @ Function which gets called once the screenshot has been captured. An ImageData is passed into the function as its only argument.
function graphics.captureScreenshot(callback) end

---Creates a screenshot once the current frame is done (after love.draw has finished).
---
---Since this function enqueues a screenshot capture rather than executing it immediately, it can be called from an input callback or love.update and it will still capture all of what's drawn to the screen in that frame.
---Capture a screenshot and push the generated ImageData to a Channel at the end of the current frame.
---@param channel Channel @ The Channel to push the generated ImageData to.
function graphics.captureScreenshot(channel) end


---Draws a circle.
---@param mode DrawMode @ How to draw the circle.
---@param x number @ The position of the center along x-axis.
---@param y number @ The position of the center along y-axis.
---@param radius number @ The radius of the circle.
function graphics.circle(mode, x, y, radius) end

---Draws a circle.
---@param mode DrawMode @ How to draw the circle.
---@param x number @ The position of the center along x-axis.
---@param y number @ The position of the center along y-axis.
---@param radius number @ The radius of the circle.
---@param segments number @ The number of segments used for drawing the circle. Note: The default variable for the segments parameter varies between different versions of LÖVE.
function graphics.circle(mode, x, y, radius, segments) end


---Clears the screen or active Canvas to the specified color.
---
---This function is called automatically before love.draw in the default love.run function. See the example in love.run for a typical use of this function.
---
---Note that the scissor area bounds the cleared region.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---
---In versions prior to background color instead.
---Clears the screen to the background color in 0.9.2 and earlier, or to transparent black (0, 0, 0, 0) in LÖVE 0.10.0 and newer.
function graphics.clear() end

---Clears the screen or active Canvas to the specified color.
---
---This function is called automatically before love.draw in the default love.run function. See the example in love.run for a typical use of this function.
---
---Note that the scissor area bounds the cleared region.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---
---In versions prior to background color instead.
---Clears the screen or active Canvas to the specified color.
---@param r number @ The red channel of the color to clear the screen to.
---@param g number @ The green channel of the color to clear the screen to.
---@param b number @ The blue channel of the color to clear the screen to.
---@param a? number @ (default: `1`) The alpha channel of the color to clear the screen to.
---@param clearstencil? boolean @ (default: `true`) Whether to clear the active stencil buffer, if present. It can also be an integer between 0 and 255 to clear the stencil buffer to a specific value.
---@param cleardepth? boolean @ (default: `true`) Whether to clear the active depth buffer, if present. It can also be a number between 0 and 1 to clear the depth buffer to a specific value.
function graphics.clear(r, g, b, a, clearstencil, cleardepth) end

---Clears the screen or active Canvas to the specified color.
---
---This function is called automatically before love.draw in the default love.run function. See the example in love.run for a typical use of this function.
---
---Note that the scissor area bounds the cleared region.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---
---In versions prior to background color instead.
---Clears multiple active Canvases to different colors, if multiple Canvases are active at once via love.graphics.setCanvas.
---
---A color must be specified for each active Canvas, when this function variant is used.
---@param color table @ A table in the form of {r, g, b, a} containing the color to clear the first active Canvas to.
---@vararg table @ Additional tables for each active Canvas.
---@param clearstencil? boolean @ (default: `true`) Whether to clear the active stencil buffer, if present. It can also be an integer between 0 and 255 to clear the stencil buffer to a specific value.
---@param cleardepth? boolean @ (default: `true`) Whether to clear the active depth buffer, if present. It can also be a number between 0 and 1 to clear the depth buffer to a specific value.
function graphics.clear(color, ..., clearstencil, cleardepth) end

---Clears the screen or active Canvas to the specified color.
---
---This function is called automatically before love.draw in the default love.run function. See the example in love.run for a typical use of this function.
---
---Note that the scissor area bounds the cleared region.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---
---In versions prior to background color instead.
---Clears the stencil or depth buffers without having to clear the color canvas as well.
---@param clearcolor boolean @ Whether to clear the active color canvas to transparent black (0, 0, 0, 0). Typically this should be set to false with this variant of the function.
---@param clearstencil boolean @ Whether to clear the active stencil buffer, if present. It can also be an integer between 0 and 255 to clear the stencil buffer to a specific value.
---@param cleardepth boolean @ Whether to clear the active depth buffer, if present. It can also be a number between 0 and 1 to clear the depth buffer to a specific value.
function graphics.clear(clearcolor, clearstencil, cleardepth) end


---Discards (trashes) the contents of the screen or active Canvas. This is a performance optimization function with niche use cases.
---
---If the active Canvas has just been changed and the 'replace' BlendMode is about to be used to draw something which covers the entire screen, calling love.graphics.discard rather than calling love.graphics.clear or doing nothing may improve performance on mobile devices.
---
---On some desktop systems this function may do nothing.
---@param discardcolor? boolean @ (default: `true`) Whether to discard the texture(s) of the active Canvas(es) (the contents of the screen if no Canvas is active.)
---@param discardstencil? boolean @ (default: `true`) Whether to discard the contents of the stencil buffer of the screen / active Canvas.
function graphics.discard(discardcolor, discardstencil) end

---Discards (trashes) the contents of the screen or active Canvas. This is a performance optimization function with niche use cases.
---
---If the active Canvas has just been changed and the 'replace' BlendMode is about to be used to draw something which covers the entire screen, calling love.graphics.discard rather than calling love.graphics.clear or doing nothing may improve performance on mobile devices.
---
---On some desktop systems this function may do nothing.
---@param discardcolors table @ An array containing boolean values indicating whether to discard the texture of each active Canvas, when multiple simultaneous Canvases are active.
---@param discardstencil? boolean @ (default: `true`) Whether to discard the contents of the stencil buffer of the screen / active Canvas.
function graphics.discard(discardcolors, discardstencil) end


---Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh, Text object, or Video) on the screen with optional rotation, scaling and shearing.
---
---Objects are drawn relative to their local coordinate system. The origin is by default located at the top left corner of Image and Canvas. All scaling, shearing, and rotation arguments transform the object relative to that point. Also, the position of the origin can be specified on the screen coordinate system.
---
---It's possible to rotate an object about its center by offsetting the origin to the center. Angles must be given in radians for rotation. One can also use a negative scaling factor to flip about its centerline. 
---
---Note that the offsets are applied before rotation, scaling, or shearing; scaling and shearing are applied before rotation.
---
---The right and bottom edges of the object are shifted at an angle defined by the shearing factors.
---
---When using the default shader anything drawn with this function will be tinted according to the currently selected color.  Set it to pure white to preserve the object's original colors.
---@param drawable Drawable @ A drawable object.
---@param x? number @ (default: `0`) The position to draw the object (x-axis).
---@param y? number @ (default: `0`) The position to draw the object (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
function graphics.draw(drawable, x, y, r, sx, sy, ox, oy, kx, ky) end

---Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh, Text object, or Video) on the screen with optional rotation, scaling and shearing.
---
---Objects are drawn relative to their local coordinate system. The origin is by default located at the top left corner of Image and Canvas. All scaling, shearing, and rotation arguments transform the object relative to that point. Also, the position of the origin can be specified on the screen coordinate system.
---
---It's possible to rotate an object about its center by offsetting the origin to the center. Angles must be given in radians for rotation. One can also use a negative scaling factor to flip about its centerline. 
---
---Note that the offsets are applied before rotation, scaling, or shearing; scaling and shearing are applied before rotation.
---
---The right and bottom edges of the object are shifted at an angle defined by the shearing factors.
---
---When using the default shader anything drawn with this function will be tinted according to the currently selected color.  Set it to pure white to preserve the object's original colors.
---@param texture Texture @ A Texture (Image or Canvas) to texture the Quad with.
---@param quad Quad @ The Quad to draw on screen.
---@param x number @ The position to draw the object (x-axis).
---@param y number @ The position to draw the object (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
function graphics.draw(texture, quad, x, y, r, sx, sy, ox, oy, kx, ky) end

---Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh, Text object, or Video) on the screen with optional rotation, scaling and shearing.
---
---Objects are drawn relative to their local coordinate system. The origin is by default located at the top left corner of Image and Canvas. All scaling, shearing, and rotation arguments transform the object relative to that point. Also, the position of the origin can be specified on the screen coordinate system.
---
---It's possible to rotate an object about its center by offsetting the origin to the center. Angles must be given in radians for rotation. One can also use a negative scaling factor to flip about its centerline. 
---
---Note that the offsets are applied before rotation, scaling, or shearing; scaling and shearing are applied before rotation.
---
---The right and bottom edges of the object are shifted at an angle defined by the shearing factors.
---
---When using the default shader anything drawn with this function will be tinted according to the currently selected color.  Set it to pure white to preserve the object's original colors.
---@param drawable Drawable @ A drawable object.
---@param transform Transform @ Transformation object.
function graphics.draw(drawable, transform) end

---Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh, Text object, or Video) on the screen with optional rotation, scaling and shearing.
---
---Objects are drawn relative to their local coordinate system. The origin is by default located at the top left corner of Image and Canvas. All scaling, shearing, and rotation arguments transform the object relative to that point. Also, the position of the origin can be specified on the screen coordinate system.
---
---It's possible to rotate an object about its center by offsetting the origin to the center. Angles must be given in radians for rotation. One can also use a negative scaling factor to flip about its centerline. 
---
---Note that the offsets are applied before rotation, scaling, or shearing; scaling and shearing are applied before rotation.
---
---The right and bottom edges of the object are shifted at an angle defined by the shearing factors.
---
---When using the default shader anything drawn with this function will be tinted according to the currently selected color.  Set it to pure white to preserve the object's original colors.
---@param texture Texture @ A Texture (Image or Canvas) to texture the Quad with.
---@param quad Quad @ The Quad to draw on screen.
---@param transform Transform @ Transformation object.
function graphics.draw(texture, quad, transform) end


---Draws many instances of a Mesh with a single draw call, using hardware geometry instancing.
---
---Each instance can have unique properties (positions, colors, etc.) but will not by default unless a custom per-instance vertex attributes or the love_InstanceID GLSL 3 vertex shader variable is used, otherwise they will all render at the same position on top of each other.
---
---Instancing is not supported by some older GPUs that are only capable of using OpenGL ES 2 or OpenGL 2. Use love.graphics.getSupported to check.
---@param mesh Mesh @ The mesh to render.
---@param instancecount number @ The number of instances to render.
---@param x? number @ (default: `0`) The position to draw the instances (x-axis).
---@param y? number @ (default: `0`) The position to draw the instances (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
function graphics.drawInstanced(mesh, instancecount, x, y, r, sx, sy, ox, oy, kx, ky) end

---Draws many instances of a Mesh with a single draw call, using hardware geometry instancing.
---
---Each instance can have unique properties (positions, colors, etc.) but will not by default unless a custom per-instance vertex attributes or the love_InstanceID GLSL 3 vertex shader variable is used, otherwise they will all render at the same position on top of each other.
---
---Instancing is not supported by some older GPUs that are only capable of using OpenGL ES 2 or OpenGL 2. Use love.graphics.getSupported to check.
---@param mesh Mesh @ The mesh to render.
---@param instancecount number @ The number of instances to render.
---@param transform Transform @ A transform object.
function graphics.drawInstanced(mesh, instancecount, transform) end


---Draws a layer of an Array Texture.
---Draws a layer of an Array Texture.
---@param texture Texture @ The Array Texture to draw.
---@param layerindex number @ The index of the layer to use when drawing.
---@param x? number @ (default: `0`) The position to draw the texture (x-axis).
---@param y? number @ (default: `0`) The position to draw the texture (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
function graphics.drawLayer(texture, layerindex, x, y, r, sx, sy, ox, oy, kx, ky) end

---Draws a layer of an Array Texture.
---Draws a layer of an Array Texture using the specified Quad.
---
---The specified layer index overrides any layer index set on the Quad via Quad:setLayer.
---@param texture Texture @ The Array Texture to draw.
---@param layerindex number @ The index of the layer to use when drawing.
---@param quad Quad @ The subsection of the texture's layer to use when drawing.
---@param x? number @ (default: `0`) The position to draw the texture (x-axis).
---@param y? number @ (default: `0`) The position to draw the texture (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
function graphics.drawLayer(texture, layerindex, quad, x, y, r, sx, sy, ox, oy, kx, ky) end

---Draws a layer of an Array Texture.
---Draws a layer of an Array Texture using the specified Transform.
---@param texture Texture @ The Array Texture to draw.
---@param layerindex number @ The index of the layer to use when drawing.
---@param transform Transform @ A transform object.
function graphics.drawLayer(texture, layerindex, transform) end

---Draws a layer of an Array Texture.
---Draws a layer of an Array Texture using the specified Quad and Transform.
---
---In order to use an Array Texture or other non-2D texture types as the main texture in a custom void effect() variant must be used in the pixel shader, and MainTex must be declared as an ArrayImage or sampler2DArray like so: uniform ArrayImage MainTex;.
---@param texture Texture @ The Array Texture to draw.
---@param layerindex number @ The index of the layer to use when drawing.
---@param quad Quad @ The subsection of the texture's layer to use when drawing.
---@param transform Transform @ A transform object.
function graphics.drawLayer(texture, layerindex, quad, transform) end


---Draws an ellipse.
---@param mode DrawMode @ How to draw the ellipse.
---@param x number @ The position of the center along x-axis.
---@param y number @ The position of the center along y-axis.
---@param radiusx number @ The radius of the ellipse along the x-axis (half the ellipse's width).
---@param radiusy number @ The radius of the ellipse along the y-axis (half the ellipse's height).
function graphics.ellipse(mode, x, y, radiusx, radiusy) end

---Draws an ellipse.
---@param mode DrawMode @ How to draw the ellipse.
---@param x number @ The position of the center along x-axis.
---@param y number @ The position of the center along y-axis.
---@param radiusx number @ The radius of the ellipse along the x-axis (half the ellipse's width).
---@param radiusy number @ The radius of the ellipse along the y-axis (half the ellipse's height).
---@param segments number @ The number of segments used for drawing the ellipse.
function graphics.ellipse(mode, x, y, radiusx, radiusy, segments) end


---Immediately renders any pending automatically batched draws.
---
---LÖVE will call this function internally as needed when most state is changed, so it is not necessary to manually call it.
---
---The current batch will be automatically flushed by color), as well as Shader:send and methods on Textures which change their state. Using a different Image in consecutive love.graphics.draw calls will also flush the current batch.
---
---SpriteBatches, ParticleSystems, Meshes, and Text objects do their own batching and do not affect automatic batching of other draws, aside from flushing the current batch when they're drawn.
function graphics.flushBatch() end


---Gets the current background color.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---@return number r @ The red component (0-1).
---@return number g @ The green component (0-1).
---@return number b @ The blue component (0-1).
---@return number a @ The alpha component (0-1).
function graphics.getBackgroundColor() end


---Gets the blending mode.
---@return BlendMode mode @ The current blend mode.
---@return BlendAlphaMode alphamode @ The current blend alpha mode – it determines how the alpha of drawn objects affects blending.
function graphics.getBlendMode() end


---Gets the current target Canvas.
---@return Canvas canvas @ The Canvas set by setCanvas. Returns nil if drawing to the real screen.
function graphics.getCanvas() end


---Gets the available Canvas formats, and whether each is supported.
---@return table formats @ A table containing CanvasFormats as keys, and a boolean indicating whether the format is supported as values. Not all systems support all formats.
function graphics.getCanvasFormats() end

---Gets the available Canvas formats, and whether each is supported.
---@param readable boolean @ If true, the returned formats will only be indicated as supported if readable flag set to true for that format, and vice versa if the parameter is false.
---@return table formats @ A table containing CanvasFormats as keys, and a boolean indicating whether the format is supported as values (taking into account the readable parameter). Not all systems support all formats.
function graphics.getCanvasFormats(readable) end


---Gets the current color.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---@return number r @ The red component (0-1).
---@return number g @ The green component (0-1).
---@return number b @ The blue component (0-1).
---@return number a @ The alpha component (0-1).
function graphics.getColor() end


---Gets the active color components used when drawing. Normally all 4 components are active unless love.graphics.setColorMask has been used.
---
---The color mask determines whether individual components of the colors of drawn objects will affect the color of the screen. They affect love.graphics.clear and Canvas:clear as well.
---@return boolean r @ Whether the red color component is active when rendering.
---@return boolean g @ Whether the green color component is active when rendering.
---@return boolean b @ Whether the blue color component is active when rendering.
---@return boolean a @ Whether the alpha color component is active when rendering.
function graphics.getColorMask() end


---Gets the DPI scale factor of the window.
---
---The DPI scale factor represents relative pixel density. The pixel density inside the window might be greater (or smaller) than the 'size' of the window. For example on a retina screen in Mac OS X with the highdpi window flag enabled, the window may take up the same physical size as an 800x600 window, but the area inside the window uses 1600x1200 pixels. love.graphics.getDPIScale() would return 2 in that case.
---
---The love.window.fromPixels and love.window.toPixels functions can also be used to convert between units.
---
---The highdpi window flag must be enabled to use the full pixel density of a Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows and Linux, and on Android it is effectively always enabled.
---The units of love.graphics.getWidth, love.graphics.getHeight, love.mouse.getPosition, mouse events, love.touch.getPosition, and touch events are always in DPI-scaled units rather than pixels. In LÖVE 0.10 and older they were in pixels.
---@return number scale @ The pixel scale factor associated with the window.
function graphics.getDPIScale() end


---Returns the default scaling filters used with Images, Canvases, and Fonts.
---@return FilterMode min @ Filter mode used when scaling the image down.
---@return FilterMode mag @ Filter mode used when scaling the image up.
---@return number anisotropy @ Maximum amount of Anisotropic Filtering used.
function graphics.getDefaultFilter() end


---Gets the current depth test mode and whether writing to the depth buffer is enabled.
---
---This is low-level functionality designed for use with custom vertex shaders and Meshes with custom vertex attributes. No higher level APIs are provided to set the depth of 2D graphics such as shapes, lines, and Images.
---@return CompareMode comparemode @ Depth comparison mode used for depth testing.
---@return boolean write @ Whether to write update / write values to the depth buffer when rendering.
function graphics.getDepthMode() end


---Gets the width and height in pixels of the window.
---@return number width @ The width of the window.
---@return number height @ The height of the window.
function graphics.getDimensions() end


---Gets the current Font object.
---@return Font font @ The current Font. Automatically creates and sets the default font, if none is set yet.
function graphics.getFont() end


---Gets whether triangles with clockwise- or counterclockwise-ordered vertices are considered front-facing.
---
---This is designed for use in combination with Mesh face culling. Other love.graphics shapes, lines, and sprites are not guaranteed to have a specific winding order to their internal vertices.
---@return VertexWinding winding @ The winding mode being used. The default winding is counterclockwise ('ccw').
function graphics.getFrontFaceWinding() end


---Gets the height in pixels of the window.
---@return number height @ The height of the window.
function graphics.getHeight() end


---Gets the raw and compressed pixel formats usable for Images, and whether each is supported.
---@return table formats @ A table containing PixelFormats as keys, and a boolean indicating whether the format is supported as values. Not all systems support all formats.
function graphics.getImageFormats() end


---Gets the line join style.
---@return LineJoin join @ The LineJoin style.
function graphics.getLineJoin() end


---Gets the line style.
---@return LineStyle style @ The current line style.
function graphics.getLineStyle() end


---Gets the current line width.
---This function does not work in 0.8.0, but has been fixed in version 0.9.0. Use the following snippet to circumvent this in 0.8.0;
---
---love.graphics._getLineWidth = love.graphics.getLineWidth
---
---love.graphics._setLineWidth = love.graphics.setLineWidth
---
---function love.graphics.getLineWidth() return love.graphics.varlinewidth or 1 end
---
---function love.graphics.setLineWidth(w) love.graphics.varlinewidth = w; return love.graphics._setLineWidth(w) end
---@return number width @ The current line width.
function graphics.getLineWidth() end


---Gets whether back-facing triangles in a Mesh are culled.
---
---Mesh face culling is designed for use with low level custom hardware-accelerated 3D rendering via custom vertex attributes on Meshes, custom vertex shaders, and depth testing with a depth buffer.
---@return CullMode mode @ The Mesh face culling mode in use (whether to render everything, cull back-facing triangles, or cull front-facing triangles).
function graphics.getMeshCullMode() end


---Gets the height in pixels of the window.
---
---The graphics coordinate system and DPI scale factor, rather than raw pixels. Use getHeight for calculations related to drawing to the screen and using the coordinate system (calculating the center of the screen, for example), and getPixelHeight only when dealing specifically with underlying pixels (pixel-related calculations in a pixel Shader, for example).
---@return number pixelheight @ The height of the window in pixels.
function graphics.getPixelHeight() end


---Gets the width in pixels of the window.
---
---The graphics coordinate system and DPI scale factor, rather than raw pixels. Use getWidth for calculations related to drawing to the screen and using the coordinate system (calculating the center of the screen, for example), and getPixelWidth only when dealing specifically with underlying pixels (pixel-related calculations in a pixel Shader, for example).
---@return number pixelwidth @ The width of the window in pixels.
function graphics.getPixelWidth() end


---Gets the point size.
---@return number size @ The current point size.
function graphics.getPointSize() end


---Gets information about the system's video card and drivers.
---@return string name @ The name of the renderer, e.g. 'OpenGL' or 'OpenGL ES'.
---@return string version @ The version of the renderer with some extra driver-dependent version info, e.g. '2.1 INTEL-8.10.44'.
---@return string vendor @ The name of the graphics card vendor, e.g. 'Intel Inc'. 
---@return string device @ The name of the graphics card, e.g. 'Intel HD Graphics 3000 OpenGL Engine'.
function graphics.getRendererInfo() end


---Gets the current scissor box.
---@return number x @ The x-component of the top-left point of the box.
---@return number y @ The y-component of the top-left point of the box.
---@return number width @ The width of the box.
---@return number height @ The height of the box.
function graphics.getScissor() end


---Gets the current Shader. Returns nil if none is set.
---@return Shader shader @ The currently active Shader, or nil if none is set.
function graphics.getShader() end


---Gets the current depth of the transform / state stack (the number of pushes without corresponding pops).
---@return number depth @ The current depth of the transform and state love.graphics stack.
function graphics.getStackDepth() end


---Gets performance-related rendering statistics. 
---@return graphics-getStats-1 stats @ A table with the following fields:
function graphics.getStats() end

---Gets performance-related rendering statistics. 
---This variant accepts an existing table to fill in, instead of creating a new one.
---@param stats table @ A table which will be filled in with the stat fields below.
---@return graphics-getStats-1 stats @ The table that was passed in above, now containing the following fields:
function graphics.getStats(stats) end


---Gets the current stencil test configuration.
---
---When stencil testing is enabled, the geometry of everything that is drawn afterward will be clipped / stencilled out based on a comparison between the arguments of this function and the stencil value of each pixel that the geometry touches. The stencil values of pixels are affected via love.graphics.stencil.
---
---Each Canvas has its own per-pixel stencil values.
---@return CompareMode comparemode @ The type of comparison that is made for each pixel. Will be 'always' if stencil testing is disabled.
---@return number comparevalue @ The value used when comparing with the stencil value of each pixel.
function graphics.getStencilTest() end


---Gets the optional graphics features and whether they're supported on the system.
---
---Some older or low-end systems don't always support all graphics features.
---@return table features @ A table containing GraphicsFeature keys, and boolean values indicating whether each feature is supported.
function graphics.getSupported() end


---Gets the system-dependent maximum values for love.graphics features.
---@return table limits @ A table containing GraphicsLimit keys, and number values.
function graphics.getSystemLimits() end


---Gets the available texture types, and whether each is supported.
---@return table texturetypes @ A table containing TextureTypes as keys, and a boolean indicating whether the type is supported as values. Not all systems support all types.
function graphics.getTextureTypes() end


---Gets the width in pixels of the window.
---@return number width @ The width of the window.
function graphics.getWidth() end


---Sets the scissor to the rectangle created by the intersection of the specified rectangle with the existing scissor.  If no scissor is active yet, it behaves like love.graphics.setScissor.
---
---The scissor limits the drawing area to a specified rectangle. This affects all graphics calls, including love.graphics.clear.
---
---The dimensions of the scissor is unaffected by graphical transformations (translate, scale, ...).
---@param x number @ The x-coordinate of the upper left corner of the rectangle to intersect with the existing scissor rectangle.
---@param y number @ The y-coordinate of the upper left corner of the rectangle to intersect with the existing scissor rectangle.
---@param width number @ The width of the rectangle to intersect with the existing scissor rectangle.
---@param height number @ The height of the rectangle to intersect with the existing scissor rectangle.
function graphics.intersectScissor(x, y, width, height) end


---Converts the given 2D position from screen-space into global coordinates.
---
---This effectively applies the reverse of the current graphics transformations to the given position. A similar Transform:inverseTransformPoint method exists for Transform objects.
---@param screenX number @ The x component of the screen-space position.
---@param screenY number @ The y component of the screen-space position.
---@return number globalX @ The x component of the position in global coordinates.
---@return number globalY @ The y component of the position in global coordinates.
function graphics.inverseTransformPoint(screenX, screenY) end


---Gets whether the graphics module is able to be used. If it is not active, love.graphics function and method calls will not work correctly and may cause the program to crash.
---The graphics module is inactive if a window is not open, or if the app is in the background on iOS. Typically the app's execution will be automatically paused by the system, in the latter case.
---@return boolean active @ Whether the graphics module is active and able to be used.
function graphics.isActive() end


---Gets whether gamma-correct rendering is supported and enabled. It can be enabled by setting t.gammacorrect = true in love.conf.
---
---Not all devices support gamma-correct rendering, in which case it will be automatically disabled and this function will return false. It is supported on desktop systems which have graphics cards that are capable of using OpenGL 3 / DirectX 10, and iOS devices that can use OpenGL ES 3.
---When gamma-correct rendering is enabled, many functions and objects perform automatic color conversion between sRGB and linear RGB in order for blending and shader math to be mathematically correct (which they aren't if it's not enabled.)
---
---* The colors passed into converted from sRGB to linear RGB.
---
---* The colors set in text with per-character colors, points with per-point colors, standard custom Meshes which use the 'VertexColor' attribute name will automatically be converted from sRGB to linear RGB when those objects are drawn.
---
---* creating the Image.
---
---* Everything drawn to the screen will be blended in linear RGB and then the result will be converted to sRGB for display.
---
---* Canvases which use the 'normal' or 'srgb' CanvasFormat will have their content blended in linear RGB and the result will be stored in the canvas in sRGB, when drawing to them. When the Canvas itself is drawn, its pixel colors will be converted from sRGB to linear RGB in the same manner as Images. Keeping the canvas pixel data stored as sRGB allows for better precision (less banding) for darker colors compared to 'rgba8'.
---
---Because most conversions are automatically handled, your own code doesn't need to worry about sRGB and linear RGB color conversions when gamma-correct rendering is enabled, except in a couple cases:
---
---* If a Mesh with custom vertex attributes is used and one of the attributes is meant to be used as a color in a Shader, and the attribute isn't named 'VertexColor'.
---
---* If  a Shader is used which has uniform / extern variables or other variables that are meant to be used as colors, and Shader:sendColor isn't used.
---
---In both cases, love.math.gammaToLinear can be used to convert color values to linear RGB in Lua code, or the gammaCorrectColor (or unGammaCorrectColor if necessary) shader functions can be used inside shader code. Those shader functions ''only'' do conversions if gamma-correct rendering is actually enabled. The LOVE_GAMMA_CORRECT shader preprocessor define will be set if so.
---
---Read more about gamma-correct rendering here, here, and here.
---@return boolean gammacorrect @ True if gamma-correct rendering is supported and was enabled in love.conf, false otherwise.
function graphics.isGammaCorrect() end


---Gets whether wireframe mode is used when drawing.
---@return boolean wireframe @ True if wireframe lines are used when drawing, false if it's not.
function graphics.isWireframe() end


---Draws lines between points.
---@param x1 number @ The position of first point on the x-axis.
---@param y1 number @ The position of first point on the y-axis.
---@param x2 number @ The position of second point on the x-axis.
---@param y2 number @ The position of second point on the y-axis.
---@vararg number @ You can continue passing point positions to draw a polyline.
function graphics.line(x1, y1, x2, y2, ...) end

---Draws lines between points.
---@param points table @ A table of point positions, as described above.
function graphics.line(points) end


---Creates a new array Image.
---
---An array image / array texture is a single object which contains multiple 'layers' or 'slices' of 2D sub-images. It can be thought of similarly to a texture atlas or sprite sheet, but it doesn't suffer from the same tile / quad bleeding artifacts that texture atlases do – although every sub-image must have the same dimensions.
---
---A specific layer of an array image can be drawn with love.graphics.drawLayer / SpriteBatch:addLayer, or with the Quad variant of love.graphics.draw and Quad:setLayer, or via a custom Shader.
---
---To use an array image in a Shader, it must be declared as a ArrayImage or sampler2DArray type (instead of Image or sampler2D). The Texel(ArrayImage image, vec3 texturecoord) shader function must be used to get pixel colors from a slice of the array image. The vec3 argument contains the texture coordinate in the first two components, and the 0-based slice index in the third component.
---Creates an array Image given a different image file for each slice of the resulting array image object.
---
---Illustration of how an array image works: [http://codeflow.org/entries/2010/dec/09/minecraft-like-rendering-experiments-in-opengl-4/illustrations/textures.jpg]
---
---A DPI scale of 2 (double the normal pixel density) will result in the image taking up the same space on-screen as an image with half its pixel dimensions that has a DPI scale of 1. This allows for easily swapping out image assets that take the same space on-screen but have different pixel densities, which makes supporting high-dpi / retina resolution require less code logic.
---
---In order to use an Array Texture or other non-2D texture types as the main texture in a custom void effect() variant must be used in the pixel shader, and MainTex must be declared as an ArrayImage or sampler2DArray like so: uniform ArrayImage MainTex;.
---@param slices table @ A table containing filepaths to images (or File, FileData, ImageData, or CompressedImageData objects), in an array. Each sub-image must have the same dimensions. A table of tables can also be given, where each sub-table contains all mipmap levels for the slice index of that sub-table.
---@param settings? graphics-newArrayImage-1 @ (default: `nil`) Optional table of settings to configure the array image, containing the following fields:
---@return Image image @ An Array Image object.
function graphics.newArrayImage(slices, settings) end


---Creates a new Canvas object for offscreen rendering.
---@return Canvas canvas @ A new Canvas with dimensions equal to the window's size in pixels.
function graphics.newCanvas() end

---Creates a new Canvas object for offscreen rendering.
---@param width number @ The desired width of the Canvas.
---@param height number @ The desired height of the Canvas.
---@return Canvas canvas @ A new Canvas with specified width and height.
function graphics.newCanvas(width, height) end

---Creates a new Canvas object for offscreen rendering.
---Creates a 2D or cubemap Canvas using the given settings.
---
---Some Canvas formats have higher system requirements than the default format. Use love.graphics.getCanvasFormats to check for support.
---@param width number @ The desired width of the Canvas.
---@param height number @ The desired height of the Canvas.
---@param settings graphics-newCanvas-1 @ A table containing the given fields:
---@return Canvas canvas @ A new Canvas with specified width and height.
function graphics.newCanvas(width, height, settings) end

---Creates a new Canvas object for offscreen rendering.
---Creates a volume or array texture-type Canvas.
---@param width number @ The desired width of the Canvas.
---@param height number @ The desired height of the Canvas.
---@param layers number @ The number of array layers (if the Canvas is an Array Texture), or the volume depth (if the Canvas is a Volume Texture).
---@param settings graphics-newCanvas-2 @ A table containing the given fields:
---@return Canvas canvas @ A new Canvas with specified width and height.
function graphics.newCanvas(width, height, layers, settings) end


---Creates a new cubemap Image.
---
---Cubemap images have 6 faces (sides) which represent a cube. They can't be rendered directly, they can only be used in Shader code (and sent to the shader via Shader:send).
---
---To use a cubemap image in a Shader, it must be declared as a CubeImage or samplerCube type (instead of Image or sampler2D). The Texel(CubeImage image, vec3 direction) shader function must be used to get pixel colors from the cubemap. The vec3 argument is a normalized direction from the center of the cube, rather than explicit texture coordinates.
---
---Each face in a cubemap image must have square dimensions.
---
---For variants of this function which accept a single image containing multiple cubemap faces, they must be laid out in one of the following forms in the image:
---
---   +y
---
---+z +x -z
---
---   -y
---
---   -x
---
---or:
---
---   +y
---
----x +z +x -z
---
---   -y
---
---or:
---
---+x
---
----x
---
---+y
---
----y
---
---+z
---
----z
---
---or:
---
---+x -x +y -y +z -z
---Creates a cubemap Image given a single image file containing multiple cube faces.
---@param filename string @ The filepath to a cubemap image file (or a File, FileData, or ImageData).
---@param settings? graphics-newCubeImage-1 @ (default: `nil`) Optional table of settings to configure the cubemap image, containing the following fields:
---@return Image image @ An cubemap Image object.
function graphics.newCubeImage(filename, settings) end

---Creates a new cubemap Image.
---
---Cubemap images have 6 faces (sides) which represent a cube. They can't be rendered directly, they can only be used in Shader code (and sent to the shader via Shader:send).
---
---To use a cubemap image in a Shader, it must be declared as a CubeImage or samplerCube type (instead of Image or sampler2D). The Texel(CubeImage image, vec3 direction) shader function must be used to get pixel colors from the cubemap. The vec3 argument is a normalized direction from the center of the cube, rather than explicit texture coordinates.
---
---Each face in a cubemap image must have square dimensions.
---
---For variants of this function which accept a single image containing multiple cubemap faces, they must be laid out in one of the following forms in the image:
---
---   +y
---
---+z +x -z
---
---   -y
---
---   -x
---
---or:
---
---   +y
---
----x +z +x -z
---
---   -y
---
---or:
---
---+x
---
----x
---
---+y
---
----y
---
---+z
---
----z
---
---or:
---
---+x -x +y -y +z -z
---Creates a cubemap Image given a different image file for each cube face.
---@param faces table @ A table containing 6 filepaths to images (or File, FileData, ImageData, or CompressedImageData objects), in an array. Each face image must have the same dimensions. A table of tables can also be given, where each sub-table contains all mipmap levels for the cube face index of that sub-table.
---@param settings? graphics-newCubeImage-1 @ (default: `nil`) Optional table of settings to configure the cubemap image, containing the following fields:
---@return Image image @ An cubemap Image object.
function graphics.newCubeImage(faces, settings) end


---Creates a new Font from a TrueType Font or BMFont file. Created fonts are not cached, in that calling this function with the same arguments will always create a new Font object.
---
---All variants which accept a filename can also accept a Data object instead.
---Create a new BMFont or TrueType font.
---
---If the file is a TrueType font, it will be size 12. Use the variant below to create a TrueType font with a custom size.
---@param filename string @ The filepath to the BMFont or TrueType font file.
---@return Font font @ A Font object which can be used to draw text on screen.
function graphics.newFont(filename) end

---Creates a new Font from a TrueType Font or BMFont file. Created fonts are not cached, in that calling this function with the same arguments will always create a new Font object.
---
---All variants which accept a filename can also accept a Data object instead.
---Create a new TrueType font.
---@param filename string @ The filepath to the TrueType font file.
---@param size number @ The size of the font in pixels.
---@param hinting? HintingMode @ (default: `'normal'`) True Type hinting mode.
---@param dpiscale? number @ (default: `love.graphics.getDPIScale()`) The DPI scale factor of the font.
---@return Font font @ A Font object which can be used to draw text on screen.
function graphics.newFont(filename, size, hinting, dpiscale) end

---Creates a new Font from a TrueType Font or BMFont file. Created fonts are not cached, in that calling this function with the same arguments will always create a new Font object.
---
---All variants which accept a filename can also accept a Data object instead.
---Create a new BMFont.
---@param filename string @ The filepath to the BMFont file.
---@param imagefilename string @ The filepath to the BMFont's image file. If this argument is omitted, the path specified inside the BMFont file will be used.
---@return Font font @ A Font object which can be used to draw text on screen.
function graphics.newFont(filename, imagefilename) end

---Creates a new Font from a TrueType Font or BMFont file. Created fonts are not cached, in that calling this function with the same arguments will always create a new Font object.
---
---All variants which accept a filename can also accept a Data object instead.
---Create a new instance of the default font (Vera Sans) with a custom size.
---@param size? number @ (default: `12`) The size of the font in pixels.
---@param hinting? HintingMode @ (default: `'normal'`) True Type hinting mode.
---@param dpiscale? number @ (default: `love.graphics.getDPIScale()`) The DPI scale factor of the font.
---@return Font font @ A Font object which can be used to draw text on screen.
function graphics.newFont(size, hinting, dpiscale) end


---Creates a new Image from a filepath, FileData, an ImageData, or a CompressedImageData, and optionally generates or specifies mipmaps for the image.
---@param filename string @ The filepath to the image file.
---@return Image image @ An Image object which can be drawn on screen.
function graphics.newImage(filename) end

---Creates a new Image from a filepath, FileData, an ImageData, or a CompressedImageData, and optionally generates or specifies mipmaps for the image.
---@param imageData ImageData @ An ImageData object. The Image will use this ImageData to reload itself when love.window.setMode is called.
---@return Image image @ An Image object which can be drawn on screen.
function graphics.newImage(imageData) end

---Creates a new Image from a filepath, FileData, an ImageData, or a CompressedImageData, and optionally generates or specifies mipmaps for the image.
---@param compressedImageData CompressedImageData @ A CompressedImageData object. The Image will use this CompressedImageData to reload itself when love.window.setMode is called.
---@return Image image @ An Image object which can be drawn on screen.
function graphics.newImage(compressedImageData) end

---Creates a new Image from a filepath, FileData, an ImageData, or a CompressedImageData, and optionally generates or specifies mipmaps for the image.
---@param filename string @ The filepath to the image file (or a FileData or ImageData or CompressedImageData object).
---@param flags graphics-newImage-1 @ A table containing the following fields:
---@return Image image @ A new Image object which can be drawn on screen.
function graphics.newImage(filename, flags) end


---Creates a new specifically formatted image.
---
---In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs string.
---@param filename string @ The filepath to the image file.
---@param glyphs string @ A string of the characters in the image in order from left to right.
---@return Font font @ A Font object which can be used to draw text on screen.
function graphics.newImageFont(filename, glyphs) end

---Creates a new specifically formatted image.
---
---In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs string.
---@param imageData ImageData @ The ImageData object to create the font from.
---@param glyphs string @ A string of the characters in the image in order from left to right.
---@return Font font @ A Font object which can be used to draw text on screen.
function graphics.newImageFont(imageData, glyphs) end

---Creates a new specifically formatted image.
---
---In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs string.
---Instead of using this function, consider using a BMFont generator such as bmfont, littera, or bmGlyph with love.graphics.newFont. Because slime said it was better.
---@param filename string @ The filepath to the image file.
---@param glyphs string @ A string of the characters in the image in order from left to right.
---@param extraspacing number @ Additional spacing (positive or negative) to apply to each glyph in the Font.
---@return Font font @ A Font object which can be used to draw text on screen.
function graphics.newImageFont(filename, glyphs, extraspacing) end


---Creates a new Mesh.
---
---Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when it's drawn.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---Creates a standard Mesh with the specified vertices.
---@param vertices graphics-newMesh-1 @ The table filled with vertex information tables for each vertex as follows:
---@param mode? MeshDrawMode @ (default: `'fan'`) How the vertices are used when drawing. The default mode 'fan' is sufficient for simple convex polygons.
---@param usage? SpriteBatchUsage @ (default: `'dynamic'`) The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
---@return Mesh mesh @ The new mesh.
function graphics.newMesh(vertices, mode, usage) end

---Creates a new Mesh.
---
---Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when it's drawn.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---Creates a standard Mesh with the specified number of vertices.
---
---Mesh:setVertices or Mesh:setVertex and Mesh:setDrawRange can be used to specify vertex information once the Mesh is created.
---@param vertexcount number @ The total number of vertices the Mesh will use. Each vertex is initialized to {0,0, 0,0, 1,1,1,1}.
---@param mode? MeshDrawMode @ (default: `'fan'`) How the vertices are used when drawing. The default mode 'fan' is sufficient for simple convex polygons.
---@param usage? SpriteBatchUsage @ (default: `'dynamic'`) The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
---@return Mesh mesh @ The new mesh.
function graphics.newMesh(vertexcount, mode, usage) end

---Creates a new Mesh.
---
---Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when it's drawn.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---Creates a Mesh with custom vertex attributes and the specified vertex data.
---
---The values in each vertex table are in the same order as the vertex attributes in the specified vertex format. If no value is supplied for a specific vertex attribute component, it will be set to a default value of 0 if its data type is 'float', or 1 if its data type is 'byte'.
---
---If the data type of an attribute is 'float', components can be in the range 1 to 4, if the data type is 'byte' it must be 4.
---
---If a custom vertex attribute uses the name 'VertexPosition', 'VertexTexCoord', or 'VertexColor', then the vertex data for that vertex attribute will be used for the standard vertex positions, texture coordinates, or vertex colors respectively, when drawing the Mesh. Otherwise a Vertex Shader is required in order to make use of the vertex attribute when the Mesh is drawn.
---
---A Mesh '''must''' have a 'VertexPosition' attribute in order to be drawn, but it can be attached from a different Mesh via Mesh:attachAttribute.
---
---To use a custom named vertex attribute in a Vertex Shader, it must be declared as an attribute variable of the same name. Variables can be sent from Vertex Shader code to Pixel Shader code by making a varying variable. For example:
---
---''Vertex Shader code''
---
---attribute vec2 CoolVertexAttribute;
---
---varying vec2 CoolVariable;
---
---vec4 position(mat4 transform_projection, vec4 vertex_position)
---
---{
---
---    CoolVariable = CoolVertexAttribute;
---
---    return transform_projection * vertex_position;
---
---}
---
---''Pixel Shader code''
---
---varying vec2 CoolVariable;
---
---vec4 effect(vec4 color, Image tex, vec2 texcoord, vec2 pixcoord)
---
---{
---
---    vec4 texcolor = Texel(tex, texcoord + CoolVariable);
---
---    return texcolor * color;
---
---}
---@param vertexformat graphics-newMesh-2 @ A table in the form of {attribute, ...}. Each attribute is a table which specifies a custom vertex attribute used for each vertex.
---@param vertices Mesh-setVertices-1 @ The table filled with vertex information tables for each vertex, in the form of {vertex, ...} where each vertex is a table in the form of {attributecomponent, ...}.
---@param mode? MeshDrawMode @ (default: `'fan'`) How the vertices are used when drawing. The default mode 'fan' is sufficient for simple convex polygons.
---@param usage? SpriteBatchUsage @ (default: `'dynamic'`) The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
---@return Mesh mesh @ The new mesh.
function graphics.newMesh(vertexformat, vertices, mode, usage) end

---Creates a new Mesh.
---
---Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when it's drawn.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---Creates a Mesh with custom vertex attributes and the specified number of vertices.
---
---Each vertex attribute component is initialized to 0 if its data type is 'float', or 1 if its data type is 'byte'. Vertex Shader is required in order to make use of the vertex attribute when the Mesh is drawn.
---
---A Mesh '''must''' have a 'VertexPosition' attribute in order to be drawn, but it can be attached from a different Mesh via Mesh:attachAttribute.
---@param vertexformat graphics-newMesh-2 @ A table in the form of {attribute, ...}. Each attribute is a table which specifies a custom vertex attribute used for each vertex.
---@param vertexcount number @ The total number of vertices the Mesh will use.
---@param mode? MeshDrawMode @ (default: `'fan'`) How the vertices are used when drawing. The default mode 'fan' is sufficient for simple convex polygons.
---@param usage? SpriteBatchUsage @ (default: `'dynamic'`) The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
---@return Mesh mesh @ The new mesh.
function graphics.newMesh(vertexformat, vertexcount, mode, usage) end

---Creates a new Mesh.
---
---Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when it's drawn.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---Mesh:setVertices or Mesh:setVertex and Mesh:setDrawRange can be used to specify vertex information once the Mesh is created.
---@param vertexcount number @ The total number of vertices the Mesh will use. Each vertex is initialized to {0,0, 0,0, 255,255,255,255}.
---@param texture? Texture @ (default: `nil`) The Image or Canvas to use when drawing the Mesh. May be nil to use no texture.
---@param mode? MeshDrawMode @ (default: `'fan'`) How the vertices are used when drawing. The default mode 'fan' is sufficient for simple convex polygons.
---@return Mesh mesh @ The new mesh.
function graphics.newMesh(vertexcount, texture, mode) end


---Creates a new ParticleSystem.
---@param image Image @ The image to use.
---@param buffer? number @ (default: `1000`) The max number of particles at the same time.
---@return ParticleSystem system @ A new ParticleSystem.
function graphics.newParticleSystem(image, buffer) end

---Creates a new ParticleSystem.
---@param texture Texture @ The texture (Image or Canvas) to use.
---@param buffer? number @ (default: `1000`) The max number of particles at the same time.
---@return ParticleSystem system @ A new ParticleSystem.
function graphics.newParticleSystem(texture, buffer) end


---Creates a new Quad.
---
---The purpose of a Quad is to use a fraction of an image to draw objects, as opposed to drawing entire image. It is most useful for sprite sheets and atlases: in a sprite atlas, multiple sprites reside in same image, quad is used to draw a specific sprite from that image; in animated sprites with all frames residing in the same image, quad is used to draw specific frame from the animation.
---@param x number @ The top-left position in the Image along the x-axis.
---@param y number @ The top-left position in the Image along the y-axis.
---@param width number @ The width of the Quad in the Image. (Must be greater than 0.)
---@param height number @ The height of the Quad in the Image. (Must be greater than 0.)
---@param sw number @ The reference width, the width of the Image. (Must be greater than 0.)
---@param sh number @ The reference height, the height of the Image. (Must be greater than 0.)
---@return Quad quad @ The new Quad.
function graphics.newQuad(x, y, width, height, sw, sh) end


---Creates a new Shader object for hardware-accelerated vertex and pixel effects. A Shader contains either vertex shader code, pixel shader code, or both.
---
---Shaders are small programs which are run on the graphics card when drawing. Vertex shaders are run once for each vertex (for example, an image has 4 vertices - one at each corner. A Mesh might have many more.) Pixel shaders are run once for each pixel on the screen which the drawn object touches. Pixel shader code is executed after all the object's vertices have been processed by the vertex shader.
---@param code string @ The pixel shader or vertex shader code, or a filename pointing to a file with the code.
---@return Shader shader @ A Shader object for use in drawing operations.
function graphics.newShader(code) end

---Creates a new Shader object for hardware-accelerated vertex and pixel effects. A Shader contains either vertex shader code, pixel shader code, or both.
---
---Shaders are small programs which are run on the graphics card when drawing. Vertex shaders are run once for each vertex (for example, an image has 4 vertices - one at each corner. A Mesh might have many more.) Pixel shaders are run once for each pixel on the screen which the drawn object touches. Pixel shader code is executed after all the object's vertices have been processed by the vertex shader.
---@param pixelcode string @ The pixel shader code, or a filename pointing to a file with the code.
---@param vertexcode string @ The vertex shader code, or a filename pointing to a file with the code.
---@return Shader shader @ A Shader object for use in drawing operations.
function graphics.newShader(pixelcode, vertexcode) end


---Creates a new SpriteBatch object.
---@param image Image @ The Image to use for the sprites.
---@param maxsprites? number @ (default: `1000`) The maximum number of sprites that the SpriteBatch can contain at any given time. Since version 11.0, additional sprites added past this number will automatically grow the spritebatch.
---@return SpriteBatch spriteBatch @ The new SpriteBatch.
function graphics.newSpriteBatch(image, maxsprites) end

---Creates a new SpriteBatch object.
---@param image Image @ The Image to use for the sprites.
---@param maxsprites? number @ (default: `1000`) The maximum number of sprites that the SpriteBatch can contain at any given time. Since version 11.0, additional sprites added past this number will automatically grow the spritebatch.
---@param usage? SpriteBatchUsage @ (default: `'dynamic'`) The expected usage of the SpriteBatch. The specified usage mode affects the SpriteBatch's memory usage and performance.
---@return SpriteBatch spriteBatch @ The new SpriteBatch.
function graphics.newSpriteBatch(image, maxsprites, usage) end

---Creates a new SpriteBatch object.
---@param texture Texture @ The Image or Canvas to use for the sprites.
---@param maxsprites? number @ (default: `1000`) The maximum number of sprites that the SpriteBatch can contain at any given time. Since version 11.0, additional sprites added past this number will automatically grow the spritebatch.
---@param usage? SpriteBatchUsage @ (default: `'dynamic'`) The expected usage of the SpriteBatch. The specified usage mode affects the SpriteBatch's memory usage and performance.
---@return SpriteBatch spriteBatch @ The new SpriteBatch.
function graphics.newSpriteBatch(texture, maxsprites, usage) end


---Creates a new drawable Text object.
---@param font Font @ The font to use for the text.
---@param textstring? string @ (default: `nil`) The initial string of text that the new Text object will contain. May be nil.
---@return Text text @ The new drawable Text object.
function graphics.newText(font, textstring) end


---Creates a new drawable Video. Currently only Ogg Theora video files are supported.
---@param filename string @ The file path to the Ogg Theora video file.
---@return Video video @ A new Video.
function graphics.newVideo(filename) end

---Creates a new drawable Video. Currently only Ogg Theora video files are supported.
---@param videostream VideoStream @ A video stream object.
---@return Video video @ A new Video.
function graphics.newVideo(videostream) end

---Creates a new drawable Video. Currently only Ogg Theora video files are supported.
---@param filename string @ The file path to the Ogg Theora video file (or VideoStream).
---@param settings graphics-newVideo-1 @ A table containing the following fields:
---@return Video video @ A new Video.
function graphics.newVideo(filename, settings) end

---Creates a new drawable Video. Currently only Ogg Theora video files are supported.
---@param filename string @ The file path to the Ogg Theora video file.
---@param loadaudio? boolean @ (default: `nil`) Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio.
---@return Video video @ A new Video.
function graphics.newVideo(filename, loadaudio) end

---Creates a new drawable Video. Currently only Ogg Theora video files are supported.
---@param videostream VideoStream @ A video stream object.
---@param loadaudio? boolean @ (default: `nil`) Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio.
---@return Video video @ A new Video.
function graphics.newVideo(videostream, loadaudio) end


---Creates a new volume (3D) Image.
---
---Volume images are 3D textures with width, height, and depth. They can't be rendered directly, they can only be used in Shader code (and sent to the shader via Shader:send).
---
---To use a volume image in a Shader, it must be declared as a VolumeImage or sampler3D type (instead of Image or sampler2D). The Texel(VolumeImage image, vec3 texcoords) shader function must be used to get pixel colors from the volume image. The vec3 argument is a normalized texture coordinate with the z component representing the depth to sample at (ranging from 1).
---
---Volume images are typically used as lookup tables in shaders for color grading, for example, because sampling using a texture coordinate that is partway in between two pixels can interpolate across all 3 dimensions in the volume image, resulting in a smooth gradient even when a small-sized volume image is used as the lookup table.
---
---Array images are a much better choice than volume images for storing multiple different sprites in a single array image for directly drawing them.
---Creates a volume Image given multiple image files with matching dimensions.
---
---Volume images are not supported on some older mobile devices. Use love.graphics.getTextureTypes to check at runtime.
---@param layers table @ A table containing filepaths to images (or File, FileData, ImageData, or CompressedImageData objects), in an array. A table of tables can also be given, where each sub-table represents a single mipmap level and contains all layers for that mipmap.
---@param settings? graphics-newCubeImage-1 @ (default: `nil`) Optional table of settings to configure the volume image, containing the following fields:
---@return Image image @ A volume Image object.
function graphics.newVolumeImage(layers, settings) end


---Resets the current coordinate transformation.
---
---This function is always used to reverse any previous calls to love.graphics.rotate, love.graphics.scale, love.graphics.shear or love.graphics.translate. It returns the current transformation state to its defaults.
function graphics.origin() end


---Draws one or more points.
---@param x number @ The position of the first point on the x-axis.
---@param y number @ The position of the first point on the y-axis.
---@vararg number @ The x and y coordinates of additional points.
function graphics.points(x, y, ...) end

---Draws one or more points.
---@param points graphics-points-1 @ A table containing multiple point positions, in the form of {x, y, ...}.
function graphics.points(points) end

---Draws one or more points.
---Draws one or more individually colored points.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---
---The pixel grid is actually offset to the center of each pixel. So to get clean pixels drawn use 0.5 + integer increments.
---
---Points are not affected by size is always in pixels.
---@param points graphics-points-2 @ A table containing multiple individually colored points, in the form of {point, ...}.
function graphics.points(points) end


---Draw a polygon.
---
---Following the mode argument, this function can accept multiple numeric arguments or a single table of numeric arguments. In either case the arguments are interpreted as alternating x and y coordinates of the polygon's vertices.
---@param mode DrawMode @ How to draw the polygon.
---@vararg number @ The vertices of the polygon.
function graphics.polygon(mode, ...) end

---Draw a polygon.
---
---Following the mode argument, this function can accept multiple numeric arguments or a single table of numeric arguments. In either case the arguments are interpreted as alternating x and y coordinates of the polygon's vertices.
---@param mode DrawMode @ How to draw the polygon.
---@param vertices table @ The vertices of the polygon as a table.
function graphics.polygon(mode, vertices) end


---Pops the current coordinate transformation from the transformation stack.
---
---This function is always used to reverse a previous push operation. It returns the current transformation state to what it was before the last preceding push.
function graphics.pop() end


---Displays the results of drawing operations on the screen.
---
---This function is used when writing your own love.run function. It presents all the results of your drawing operations on the screen. See the example in love.run for a typical use of this function.
---* If love.window.setMode has vsync equal to true, this function can't run more frequently than the refresh rate (e.g. 60 Hz), and will halt the program until ready if necessary.
function graphics.present() end


---Draws text on screen. If no Font is set, one will be created and set (once) if needed.
---
---As of LOVE 0.7.1, when using translation and scaling functions while drawing text, this function assumes the scale occurs first.  If you don't script with this in mind, the text won't be in the right position, or possibly even on screen.
---
---love.graphics.print and love.graphics.printf both support UTF-8 encoding. You'll also need a proper Font for special characters.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---@param text string @ The text to draw.
---@param x? number @ (default: `0`) The position to draw the object (x-axis).
---@param y? number @ (default: `0`) The position to draw the object (y-axis).
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
function graphics.print(text, x, y, r, sx, sy, ox, oy, kx, ky) end

---Draws text on screen. If no Font is set, one will be created and set (once) if needed.
---
---As of LOVE 0.7.1, when using translation and scaling functions while drawing text, this function assumes the scale occurs first.  If you don't script with this in mind, the text won't be in the right position, or possibly even on screen.
---
---love.graphics.print and love.graphics.printf both support UTF-8 encoding. You'll also need a proper Font for special characters.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---The color set by love.graphics.setColor will be combined (multiplied) with the colors of the text.
---@param coloredtext Text-add-1 @ A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
---@param x? number @ (default: `0`) The position of the text on the x-axis.
---@param y? number @ (default: `0`) The position of the text on the y-axis.
---@param angle? number @ (default: `0`) The orientation of the text in radians.
---@param sx? number @ (default: `1`) Scale factor on the x-axis.
---@param sy? number @ (default: `sx`) Scale factor on the y-axis.
---@param ox? number @ (default: `0`) Origin offset on the x-axis.
---@param oy? number @ (default: `0`) Origin offset on the y-axis.
---@param kx? number @ (default: `0`) Shearing / skew factor on the x-axis.
---@param ky? number @ (default: `0`) Shearing / skew factor on the y-axis.
function graphics.print(coloredtext, x, y, angle, sx, sy, ox, oy, kx, ky) end

---Draws text on screen. If no Font is set, one will be created and set (once) if needed.
---
---As of LOVE 0.7.1, when using translation and scaling functions while drawing text, this function assumes the scale occurs first.  If you don't script with this in mind, the text won't be in the right position, or possibly even on screen.
---
---love.graphics.print and love.graphics.printf both support UTF-8 encoding. You'll also need a proper Font for special characters.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---@param text string @ The text to draw.
---@param transform Transform @ Transformation object.
function graphics.print(text, transform) end

---Draws text on screen. If no Font is set, one will be created and set (once) if needed.
---
---As of LOVE 0.7.1, when using translation and scaling functions while drawing text, this function assumes the scale occurs first.  If you don't script with this in mind, the text won't be in the right position, or possibly even on screen.
---
---love.graphics.print and love.graphics.printf both support UTF-8 encoding. You'll also need a proper Font for special characters.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---The color set by love.graphics.setColor will be combined (multiplied) with the colors of the text.
---@param coloredtext Text-add-1 @ A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
---@param transform Transform @ Transformation object.
function graphics.print(coloredtext, transform) end

---Draws text on screen. If no Font is set, one will be created and set (once) if needed.
---
---As of LOVE 0.7.1, when using translation and scaling functions while drawing text, this function assumes the scale occurs first.  If you don't script with this in mind, the text won't be in the right position, or possibly even on screen.
---
---love.graphics.print and love.graphics.printf both support UTF-8 encoding. You'll also need a proper Font for special characters.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---@param text string @ The text to draw.
---@param font Font @ The Font object to use.
---@param transform Transform @ Transformation object.
function graphics.print(text, font, transform) end

---Draws text on screen. If no Font is set, one will be created and set (once) if needed.
---
---As of LOVE 0.7.1, when using translation and scaling functions while drawing text, this function assumes the scale occurs first.  If you don't script with this in mind, the text won't be in the right position, or possibly even on screen.
---
---love.graphics.print and love.graphics.printf both support UTF-8 encoding. You'll also need a proper Font for special characters.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---
---@param coloredtext Text-add-1 @ A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
---@param font Font @ The Font object to use.
---@param transform Transform @ Transformation object.
function graphics.print(coloredtext, font, transform) end


---Draws formatted text, with word wrap and alignment.
---
---See additional notes in love.graphics.print.
---
---The word wrap limit is applied before any scaling, rotation, and other coordinate transformations. Therefore the amount of text per line stays constant given the same wrap limit, even if the scale arguments change.
---
---In version 0.9.2 and earlier, wrapping was implemented by breaking up words by spaces and putting them back together to make sure things fit nicely within the limit provided. However, due to the way this is done, extra spaces between words would end up missing when printed on the screen, and some lines could overflow past the provided wrap limit. In version 0.10.0 and newer this is no longer the case.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---@param text string @ A text string.
---@param x number @ The position on the x-axis.
---@param y number @ The position on the y-axis.
---@param limit number @ Wrap the line after this many horizontal pixels.
---@param align? AlignMode @ (default: `'left'`) The alignment.
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
function graphics.printf(text, x, y, limit, align, r, sx, sy, ox, oy, kx, ky) end

---Draws formatted text, with word wrap and alignment.
---
---See additional notes in love.graphics.print.
---
---The word wrap limit is applied before any scaling, rotation, and other coordinate transformations. Therefore the amount of text per line stays constant given the same wrap limit, even if the scale arguments change.
---
---In version 0.9.2 and earlier, wrapping was implemented by breaking up words by spaces and putting them back together to make sure things fit nicely within the limit provided. However, due to the way this is done, extra spaces between words would end up missing when printed on the screen, and some lines could overflow past the provided wrap limit. In version 0.10.0 and newer this is no longer the case.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---@param text string @ A text string.
---@param font Font @ The Font object to use.
---@param x number @ The position on the x-axis.
---@param y number @ The position on the y-axis.
---@param limit number @ Wrap the line after this many horizontal pixels.
---@param align? AlignMode @ (default: `'left'`) The alignment.
---@param r? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
function graphics.printf(text, font, x, y, limit, align, r, sx, sy, ox, oy, kx, ky) end

---Draws formatted text, with word wrap and alignment.
---
---See additional notes in love.graphics.print.
---
---The word wrap limit is applied before any scaling, rotation, and other coordinate transformations. Therefore the amount of text per line stays constant given the same wrap limit, even if the scale arguments change.
---
---In version 0.9.2 and earlier, wrapping was implemented by breaking up words by spaces and putting them back together to make sure things fit nicely within the limit provided. However, due to the way this is done, extra spaces between words would end up missing when printed on the screen, and some lines could overflow past the provided wrap limit. In version 0.10.0 and newer this is no longer the case.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---@param text string @ A text string.
---@param transform Transform @ Transformation object.
---@param limit number @ Wrap the line after this many horizontal pixels.
---@param align? AlignMode @ (default: `'left'`) The alignment.
function graphics.printf(text, transform, limit, align) end

---Draws formatted text, with word wrap and alignment.
---
---See additional notes in love.graphics.print.
---
---The word wrap limit is applied before any scaling, rotation, and other coordinate transformations. Therefore the amount of text per line stays constant given the same wrap limit, even if the scale arguments change.
---
---In version 0.9.2 and earlier, wrapping was implemented by breaking up words by spaces and putting them back together to make sure things fit nicely within the limit provided. However, due to the way this is done, extra spaces between words would end up missing when printed on the screen, and some lines could overflow past the provided wrap limit. In version 0.10.0 and newer this is no longer the case.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---@param text string @ A text string.
---@param font Font @ The Font object to use.
---@param transform Transform @ Transformation object.
---@param limit number @ Wrap the line after this many horizontal pixels.
---@param align? AlignMode @ (default: `'left'`) The alignment.
function graphics.printf(text, font, transform, limit, align) end

---Draws formatted text, with word wrap and alignment.
---
---See additional notes in love.graphics.print.
---
---The word wrap limit is applied before any scaling, rotation, and other coordinate transformations. Therefore the amount of text per line stays constant given the same wrap limit, even if the scale arguments change.
---
---In version 0.9.2 and earlier, wrapping was implemented by breaking up words by spaces and putting them back together to make sure things fit nicely within the limit provided. However, due to the way this is done, extra spaces between words would end up missing when printed on the screen, and some lines could overflow past the provided wrap limit. In version 0.10.0 and newer this is no longer the case.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---The color set by love.graphics.setColor will be combined (multiplied) with the colors of the text.
---@param coloredtext Text-add-1 @ A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
---@param x number @ The position of the text (x-axis).
---@param y number @ The position of the text (y-axis).
---@param limit number @ The maximum width in pixels of the text before it gets automatically wrapped to a new line.
---@param align AlignMode @ The alignment of the text.
---@param angle? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing / skew factor (x-axis).
---@param ky? number @ (default: `0`) Shearing / skew factor (y-axis).
function graphics.printf(coloredtext, x, y, limit, align, angle, sx, sy, ox, oy, kx, ky) end

---Draws formatted text, with word wrap and alignment.
---
---See additional notes in love.graphics.print.
---
---The word wrap limit is applied before any scaling, rotation, and other coordinate transformations. Therefore the amount of text per line stays constant given the same wrap limit, even if the scale arguments change.
---
---In version 0.9.2 and earlier, wrapping was implemented by breaking up words by spaces and putting them back together to make sure things fit nicely within the limit provided. However, due to the way this is done, extra spaces between words would end up missing when printed on the screen, and some lines could overflow past the provided wrap limit. In version 0.10.0 and newer this is no longer the case.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---The color set by love.graphics.setColor will be combined (multiplied) with the colors of the text.
---@param coloredtext Text-add-1 @ A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
---@param font Font @ The Font object to use.
---@param x number @ The position on the x-axis.
---@param y number @ The position on the y-axis.
---@param limit number @ Wrap the line after this many horizontal pixels.
---@param align? AlignMode @ (default: `'left'`) The alignment.
---@param angle? number @ (default: `0`) Orientation (radians).
---@param sx? number @ (default: `1`) Scale factor (x-axis).
---@param sy? number @ (default: `sx`) Scale factor (y-axis).
---@param ox? number @ (default: `0`) Origin offset (x-axis).
---@param oy? number @ (default: `0`) Origin offset (y-axis).
---@param kx? number @ (default: `0`) Shearing factor (x-axis).
---@param ky? number @ (default: `0`) Shearing factor (y-axis).
function graphics.printf(coloredtext, font, x, y, limit, align, angle, sx, sy, ox, oy, kx, ky) end

---Draws formatted text, with word wrap and alignment.
---
---See additional notes in love.graphics.print.
---
---The word wrap limit is applied before any scaling, rotation, and other coordinate transformations. Therefore the amount of text per line stays constant given the same wrap limit, even if the scale arguments change.
---
---In version 0.9.2 and earlier, wrapping was implemented by breaking up words by spaces and putting them back together to make sure things fit nicely within the limit provided. However, due to the way this is done, extra spaces between words would end up missing when printed on the screen, and some lines could overflow past the provided wrap limit. In version 0.10.0 and newer this is no longer the case.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---The color set by love.graphics.setColor will be combined (multiplied) with the colors of the text.
---@param coloredtext Text-add-1 @ A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
---@param transform Transform @ Transformation object.
---@param limit number @ Wrap the line after this many horizontal pixels.
---@param align? AlignMode @ (default: `'left'`) The alignment.
function graphics.printf(coloredtext, transform, limit, align) end

---Draws formatted text, with word wrap and alignment.
---
---See additional notes in love.graphics.print.
---
---The word wrap limit is applied before any scaling, rotation, and other coordinate transformations. Therefore the amount of text per line stays constant given the same wrap limit, even if the scale arguments change.
---
---In version 0.9.2 and earlier, wrapping was implemented by breaking up words by spaces and putting them back together to make sure things fit nicely within the limit provided. However, due to the way this is done, extra spaces between words would end up missing when printed on the screen, and some lines could overflow past the provided wrap limit. In version 0.10.0 and newer this is no longer the case.
---
---In versions prior to 11.0, color and byte component values were within the range of 0 to 255 instead of 0 to 1.
---
---@param coloredtext Text-add-1 @ A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
---@param font Font @ The Font object to use.
---@param transform Transform @ Transformation object.
---@param limit number @ Wrap the line after this many horizontal pixels.
---@param align? AlignMode @ (default: `'left'`) The alignment.
function graphics.printf(coloredtext, font, transform, limit, align) end


---Copies and pushes the current coordinate transformation to the transformation stack.
---
---This function is always used to prepare for a corresponding pop operation later. It stores the current coordinate transformation state into the transformation stack and keeps it active. Later changes to the transformation can be undone by using the pop operation, which returns the coordinate transform to the state it was in before calling push.
---Pushes the current transformation to the transformation stack.
function graphics.push() end

---Copies and pushes the current coordinate transformation to the transformation stack.
---
---This function is always used to prepare for a corresponding pop operation later. It stores the current coordinate transformation state into the transformation stack and keeps it active. Later changes to the transformation can be undone by using the pop operation, which returns the coordinate transform to the state it was in before calling push.
---Pushes a specific type of state to the stack.
---@param stack StackType @ The type of stack to push (e.g. just transformation state, or all love.graphics state).
function graphics.push(stack) end


---Draws a rectangle.
---@param mode DrawMode @ How to draw the rectangle.
---@param x number @ The position of top-left corner along the x-axis.
---@param y number @ The position of top-left corner along the y-axis.
---@param width number @ Width of the rectangle.
---@param height number @ Height of the rectangle.
function graphics.rectangle(mode, x, y, width, height) end

---Draws a rectangle.
---Draws a rectangle with rounded corners.
---@param mode DrawMode @ How to draw the rectangle.
---@param x number @ The position of top-left corner along the x-axis.
---@param y number @ The position of top-left corner along the y-axis.
---@param width number @ Width of the rectangle.
---@param height number @ Height of the rectangle.
---@param rx number @ The x-axis radius of each round corner. Cannot be greater than half the rectangle's width.
---@param ry? number @ (default: `rx`) The y-axis radius of each round corner. Cannot be greater than half the rectangle's height.
---@param segments? number @ (default: `nil`) The number of segments used for drawing the round corners. A default amount will be chosen if no number is given.
function graphics.rectangle(mode, x, y, width, height, rx, ry, segments) end


---Replaces the current coordinate transformation with the given Transform object.
---@param transform Transform @ The Transform object to replace the current graphics coordinate transform with.
function graphics.replaceTransform(transform) end


---Resets the current graphics settings.
---
---Calling reset makes the current drawing color white, the current background color black, disables any active color component masks, disables wireframe mode and resets the current graphics transformation to the origin. It also sets both the point and line drawing modes to smooth and their sizes to 1.0.
function graphics.reset() end


---Rotates the coordinate system in two dimensions.
---
---Calling this function affects all future drawing operations by rotating the coordinate system around the origin by the given amount of radians. This change lasts until love.draw() exits.
---@param angle number @ The amount to rotate the coordinate system in radians.
function graphics.rotate(angle) end


---Scales the coordinate system in two dimensions.
---
---By default the coordinate system in LÖVE corresponds to the display pixels in horizontal and vertical directions one-to-one, and the x-axis increases towards the right while the y-axis increases downwards. Scaling the coordinate system changes this relation.
---
---After scaling by sx and sy, all coordinates are treated as if they were multiplied by sx and sy. Every result of a drawing operation is also correspondingly scaled, so scaling by (2, 2) for example would mean making everything twice as large in both x- and y-directions. Scaling by a negative value flips the coordinate system in the corresponding direction, which also means everything will be drawn flipped or upside down, or both. Scaling by zero is not a useful operation.
---
---Scale and translate are not commutative operations, therefore, calling them in different orders will change the outcome.
---
---Scaling lasts until love.draw() exits.
---@param sx number @ The scaling in the direction of the x-axis.
---@param sy? number @ (default: `sx`) The scaling in the direction of the y-axis. If omitted, it defaults to same as parameter sx.
function graphics.scale(sx, sy) end


---Sets the background color.
---@param red number @ The red component (0-1).
---@param green number @ The green component (0-1).
---@param blue number @ The blue component (0-1).
---@param alpha? number @ (default: `1`) The alpha component (0-1).
function graphics.setBackgroundColor(red, green, blue, alpha) end

---Sets the background color.
function graphics.setBackgroundColor() end

---Sets the background color.
function graphics.setBackgroundColor() end


---Sets the blending mode.
---@param mode BlendMode @ The blend mode to use.
function graphics.setBlendMode(mode) end

---Sets the blending mode.
---The default 'alphamultiply' alpha mode should normally be preferred except when drawing content with pre-multiplied alpha. If content is drawn to a Canvas using the 'alphamultiply' mode, the Canvas texture will have pre-multiplied alpha afterwards, so the 'premultiplied' alpha mode should generally be used when drawing a Canvas to the screen.
---@param mode BlendMode @ The blend mode to use.
---@param alphamode? BlendAlphaMode @ (default: `'alphamultiply'`) What to do with the alpha of drawn objects when blending.
function graphics.setBlendMode(mode, alphamode) end


---Captures drawing operations to a Canvas.
---Sets the render target to a specified stencil or depth testing with an active Canvas, the stencil buffer or depth buffer must be explicitly enabled in setCanvas via the variants below.
---
---Note that no canvas should be active when ''love.graphics.present'' is called. ''love.graphics.present'' is called at the end of love.draw in the default love.run, hence if you activate a canvas using this function, you normally need to deactivate it at some point before ''love.draw'' finishes.
---@param canvas Canvas @ The new target.
---@param mipmap? number @ (default: `1`) The mipmap level to render to, for Canvases with mipmaps.
function graphics.setCanvas(canvas, mipmap) end

---Captures drawing operations to a Canvas.
---Resets the render target to the screen, i.e. re-enables drawing to the screen.
function graphics.setCanvas() end

---Captures drawing operations to a Canvas.
---Sets the render target to multiple simultaneous 2D Canvases. All drawing operations until the next ''love.graphics.setCanvas'' call will be redirected to the specified canvases and not shown on the screen.
---
---Normally all drawing operations will draw only to the first canvas passed to the function, but that can be changed if a pixel shader is used with the void effect function instead of the regular vec4 effect.
---
---All canvas arguments must have the same widths and heights and the same texture type. Not all computers which support Canvases will support multiple render targets. If love.graphics.isSupported('multicanvas') returns true, at least 4 simultaneously active canvases are supported.
---@param canvas1 Canvas @ The first render target.
---@param canvas2 Canvas @ The second render target.
---@vararg Canvas @ More canvases.
function graphics.setCanvas(canvas1, canvas2, ...) end

---Captures drawing operations to a Canvas.
---Sets the render target to the specified layer/slice and mipmap level of the given non-2D Canvas. All drawing operations until the next ''love.graphics.setCanvas'' call will be redirected to the Canvas and not shown on the screen.
---@param canvas Canvas @ The new render target.
---@param slice number @ For cubemaps this is the cube face index to render to (between 1 and 6). For Array textures this is the array layer. For volume textures this is the depth slice. 2D canvases should use a value of 1.
---@param mipmap? number @ (default: `1`) The mipmap level to render to, for Canvases with mipmaps.
function graphics.setCanvas(canvas, slice, mipmap) end

---Captures drawing operations to a Canvas.
---Sets the active render target(s) and active stencil and depth buffers based on the specified setup information. All drawing operations until the next ''love.graphics.setCanvas'' call will be redirected to the specified Canvases and not shown on the screen.
---
---The RenderTargetSetup parameters can either be a Canvas|[1]|The Canvas to use for this active render target.}}
---
---{{param|number|mipmap (1)|The mipmap level to render to, for Canvases with [[Texture:getMipmapCount|mipmaps.}}
---
---{{param|number|layer (1)|Only used for Volume and Array-type Canvases. For Array textures this is the array layer to render to. For volume textures this is the depth slice.}}
---
---{{param|number|face (1)|Only used for Cubemap-type Canvases. The cube face index to render to (between 1 and 6)}}
---@param setup graphics-setCanvas-1 @ A table specifying the active Canvas(es), their mipmap levels and active layers if applicable, and whether to use a stencil and/or depth buffer.
function graphics.setCanvas(setup) end


---Sets the color used for drawing.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---@param red number @ The amount of red.
---@param green number @ The amount of green.
---@param blue number @ The amount of blue.
---@param alpha? number @ (default: `1`) The amount of alpha.  The alpha value will be applied to all subsequent draw operations, even the drawing of an image.
function graphics.setColor(red, green, blue, alpha) end

---Sets the color used for drawing.
---
---In versions prior to 11.0, color component values were within the range of 0 to 255 instead of 0 to 1.
---@param rgba table @ A numerical indexed table with the red, green, blue and alpha values as numbers. The alpha is optional and defaults to 1 if it is left out.
function graphics.setColor(rgba) end


---Sets the color mask. Enables or disables specific color components when rendering and clearing the screen. For example, if '''red''' is set to '''false''', no further changes will be made to the red component of any pixels.
---Enables color masking for the specified color components.
---@param red boolean @ Render red component.
---@param green boolean @ Render green component.
---@param blue boolean @ Render blue component.
---@param alpha boolean @ Render alpha component.
function graphics.setColorMask(red, green, blue, alpha) end

---Sets the color mask. Enables or disables specific color components when rendering and clearing the screen. For example, if '''red''' is set to '''false''', no further changes will be made to the red component of any pixels.
---Disables color masking.
function graphics.setColorMask() end


---Sets the default scaling filters used with Images, Canvases, and Fonts.
---This function does not apply retroactively to loaded images.
---@param min FilterMode @ Filter mode used when scaling the image down.
---@param mag FilterMode @ Filter mode used when scaling the image up.
---@param anisotropy? number @ (default: `1`) Maximum amount of Anisotropic Filtering used.
function graphics.setDefaultFilter(min, mag, anisotropy) end


---Configures depth testing and writing to the depth buffer.
---
---This is low-level functionality designed for use with custom vertex shaders and Meshes with custom vertex attributes. No higher level APIs are provided to set the depth of 2D graphics such as shapes, lines, and Images.
---@param comparemode CompareMode @ Depth comparison mode used for depth testing.
---@param write boolean @ Whether to write update / write values to the depth buffer when rendering.
function graphics.setDepthMode(comparemode, write) end

---Configures depth testing and writing to the depth buffer.
---
---This is low-level functionality designed for use with custom vertex shaders and Meshes with custom vertex attributes. No higher level APIs are provided to set the depth of 2D graphics such as shapes, lines, and Images.
---Disables depth testing and depth writes.
function graphics.setDepthMode() end


---Set an already-loaded Font as the current font or create and load a new one from the file and size.
---
---It's recommended that Font objects are created with love.graphics.newFont in the loading stage and then passed to this function in the drawing stage.
---@param font Font @ The Font object to use.
function graphics.setFont(font) end


---Sets whether triangles with clockwise- or counterclockwise-ordered vertices are considered front-facing.
---
---This is designed for use in combination with Mesh face culling. Other love.graphics shapes, lines, and sprites are not guaranteed to have a specific winding order to their internal vertices.
---@param winding VertexWinding @ The winding mode to use. The default winding is counterclockwise ('ccw').
function graphics.setFrontFaceWinding(winding) end


---Sets the line join style. See LineJoin for the possible options.
---@param join LineJoin @ The LineJoin to use.
function graphics.setLineJoin(join) end


---Sets the line style.
---@param style LineStyle @ The LineStyle to use. Line styles include smooth and rough.
function graphics.setLineStyle(style) end


---Sets the line width.
---@param width number @ The width of the line.
function graphics.setLineWidth(width) end


---Sets whether back-facing triangles in a Mesh are culled.
---
---This is designed for use with low level custom hardware-accelerated 3D rendering via custom vertex attributes on Meshes, custom vertex shaders, and depth testing with a depth buffer.
---
---By default, both front- and back-facing triangles in Meshes are rendered.
---@param mode CullMode @ The Mesh face culling mode to use (whether to render everything, cull back-facing triangles, or cull front-facing triangles).
function graphics.setMeshCullMode(mode) end


---Creates and sets a new Font.
---@param size? number @ (default: `12`) The size of the font.
---@return Font font @ The new font.
function graphics.setNewFont(size) end

---Creates and sets a new Font.
---@param filename string @ The path and name of the file with the font.
---@param size? number @ (default: `12`) The size of the font.
---@return Font font @ The new font.
function graphics.setNewFont(filename, size) end

---Creates and sets a new Font.
---@param file File @ A File with the font.
---@param size? number @ (default: `12`) The size of the font.
---@return Font font @ The new font.
function graphics.setNewFont(file, size) end

---Creates and sets a new Font.
---@param data Data @ A Data with the font.
---@param size? number @ (default: `12`) The size of the font.
---@return Font font @ The new font.
function graphics.setNewFont(data, size) end

---Creates and sets a new Font.
---@param rasterizer Rasterizer @ A rasterizer.
---@return Font font @ The new font.
function graphics.setNewFont(rasterizer) end


---Sets the point size.
---@param size number @ The new point size.
function graphics.setPointSize(size) end


---Sets or disables scissor.
---
---The scissor limits the drawing area to a specified rectangle. This affects all graphics calls, including love.graphics.clear. 
---
---The dimensions of the scissor is unaffected by graphical transformations (translate, scale, ...).
---Limits the drawing area to a specified rectangle. 
---@param x number @ x coordinate of upper left corner.
---@param y number @ y coordinate of upper left corner.
---@param width number @ width of clipping rectangle.
---@param height number @ height of clipping rectangle.
function graphics.setScissor(x, y, width, height) end

---Sets or disables scissor.
---
---The scissor limits the drawing area to a specified rectangle. This affects all graphics calls, including love.graphics.clear. 
---
---The dimensions of the scissor is unaffected by graphical transformations (translate, scale, ...).
---Disables scissor.
function graphics.setScissor() end


---Sets or resets a Shader as the current pixel effect or vertex shaders. All drawing operations until the next ''love.graphics.setShader'' will be drawn using the Shader object specified.
---Sets the current shader to a specified Shader. All drawing operations until the next ''love.graphics.setShader'' will be drawn using the Shader object specified.
---@param shader Shader @ The new shader.
function graphics.setShader(shader) end

---Sets or resets a Shader as the current pixel effect or vertex shaders. All drawing operations until the next ''love.graphics.setShader'' will be drawn using the Shader object specified.
---Disables shaders, allowing unfiltered drawing operations.
function graphics.setShader() end


---Configures or disables stencil testing.
---
---When stencil testing is enabled, the geometry of everything that is drawn afterward will be clipped / stencilled out based on a comparison between the arguments of this function and the stencil value of each pixel that the geometry touches. The stencil values of pixels are affected via love.graphics.stencil.
---@param comparemode CompareMode @ The type of comparison to make for each pixel.
---@param comparevalue number @ The value to use when comparing with the stencil value of each pixel. Must be between 0 and 255.
function graphics.setStencilTest(comparemode, comparevalue) end

---Configures or disables stencil testing.
---
---When stencil testing is enabled, the geometry of everything that is drawn afterward will be clipped / stencilled out based on a comparison between the arguments of this function and the stencil value of each pixel that the geometry touches. The stencil values of pixels are affected via love.graphics.stencil.
---Disables stencil testing.
function graphics.setStencilTest() end


---Sets whether wireframe lines will be used when drawing.
---@param enable boolean @ True to enable wireframe mode when drawing, false to disable it.
function graphics.setWireframe(enable) end


---Shears the coordinate system.
---@param kx number @ The shear factor on the x-axis.
---@param ky number @ The shear factor on the y-axis.
function graphics.shear(kx, ky) end


---Draws geometry as a stencil.
---
---The geometry drawn by the supplied function sets invisible stencil values of pixels, instead of setting pixel colors. The stencil buffer (which contains those stencil values) can act like a mask / stencil - love.graphics.setStencilTest can be used afterward to determine how further rendering is affected by the stencil values in each pixel.
---
---Stencil values are integers within the range of 255.
---It is possible to draw to the screen and to the stencil values of pixels at the same time, by using love.graphics.setColorMask inside the stencil function to enable drawing to all color components.
---@param stencilfunction function @ Function which draws geometry. The stencil values of pixels, rather than the color of each pixel, will be affected by the geometry.
---@param action? StencilAction @ (default: `'replace'`) How to modify any stencil values of pixels that are touched by what's drawn in the stencil function.
---@param value? number @ (default: `1`) The new stencil value to use for pixels if the 'replace' stencil action is used. Has no effect with other stencil actions. Must be between 0 and 255.
---@param keepvalues? boolean @ (default: `false`) True to preserve old stencil values of pixels, false to re-set every pixel's stencil value to 0 before executing the stencil function. love.graphics.clear will also re-set all stencil values.
function graphics.stencil(stencilfunction, action, value, keepvalues) end


---Converts the given 2D position from global coordinates into screen-space.
---
---This effectively applies the current graphics transformations to the given position. A similar Transform:transformPoint method exists for Transform objects.
---@param globalX number @ The x component of the position in global coordinates.
---@param globalY number @ The y component of the position in global coordinates.
---@return number screenX @ The x component of the position with graphics transformations applied.
---@return number screenY @ The y component of the position with graphics transformations applied.
function graphics.transformPoint(globalX, globalY) end


---Translates the coordinate system in two dimensions.
---
---When this function is called with two numbers, dx, and dy, all the following drawing operations take effect as if their x and y coordinates were x+dx and y+dy. 
---
---Scale and translate are not commutative operations, therefore, calling them in different orders will change the outcome.
---
---This change lasts until love.draw() exits or else a love.graphics.pop reverts to a previous love.graphics.push.
---
---Translating using whole numbers will prevent tearing/blurring of images and fonts draw after translating.
---@param dx number @ The translation relative to the x-axis.
---@param dy number @ The translation relative to the y-axis.
function graphics.translate(dx, dy) end


---Validates shader code. Check if specified shader code does not contain any errors.
---@param gles boolean @ Validate code as GLSL ES shader.
---@param code string @ The pixel shader or vertex shader code, or a filename pointing to a file with the code.
---@return boolean status @ true if specified shader code doesn't contain any errors. false otherwise.
---@return string message @ Reason why shader code validation failed (or nil if validation succeded).
function graphics.validateShader(gles, code) end

---Validates shader code. Check if specified shader code does not contain any errors.
---@param gles boolean @ Validate code as GLSL ES shader.
---@param pixelcode string @ The pixel shader code, or a filename pointing to a file with the code.
---@param vertexcode string @ The vertex shader code, or a filename pointing to a file with the code.
---@return boolean status @ true if specified shader code doesn't contain any errors. false otherwise.
---@return string message @ Reason why shader code validation failed (or nil if validation succeded).
function graphics.validateShader(gles, pixelcode, vertexcode) end




-- enums

---Text alignment.
---@alias AlignMode
---Align text center.
---| "'center'"
---Align text left.
---| "'left'"
---Align text right.
---| "'right'"
---Align text both left and right.
---| "'justify'"

---Different types of arcs that can be drawn.
---@alias ArcType
---The arc is drawn like a slice of pie, with the arc circle connected to the center at its end-points.
---| "'pie'"
---The arc circle's two end-points are unconnected when the arc is drawn as a line. Behaves like the "closed" arc type when the arc is drawn in filled mode.
---| "'open'"
---The arc circle's two end-points are connected to each other.
---| "'closed'"

---Types of particle area spread distribution.
---@alias AreaSpreadDistribution
---Uniform distribution.
---| "'uniform'"
---Normal (gaussian) distribution.
---| "'normal'"
---Uniform distribution in an ellipse.
---| "'ellipse'"
---Distribution in an ellipse with particles spawning at the edges of the ellipse.
---| "'borderellipse'"
---Distribution in a rectangle with particles spawning at the edges of the rectangle.
---| "'borderrectangle'"
---No distribution - area spread is disabled.
---| "'none'"

---Different ways alpha affects color blending. See BlendMode and the BlendMode Formulas for additional notes.
---@alias BlendAlphaMode
---The RGB values of what's drawn are multiplied by the alpha values of those colors during blending. This is the default alpha mode.
---| "'alphamultiply'"
---The RGB values of what's drawn are '''not''' multiplied by the alpha values of those colors during blending. For most blend modes to work correctly with this alpha mode, the colors of a drawn object need to have had their RGB values multiplied by their alpha values at some point previously ("premultiplied alpha").
---| "'premultiplied'"

---Different ways to do color blending. See BlendAlphaMode and the BlendMode Formulas for additional notes.
---@alias BlendMode
---Alpha blending (normal). The alpha of what's drawn determines its opacity.
---| "'alpha'"
---The colors of what's drawn completely replace what was on the screen, with no additional blending. The BlendAlphaMode specified in love.graphics.setBlendMode still affects what happens.
---| "'replace'"
---'Screen' blending.
---| "'screen'"
---The pixel colors of what's drawn are added to the pixel colors already on the screen. The alpha of the screen is not modified.
---| "'add'"
---The pixel colors of what's drawn are subtracted from the pixel colors already on the screen. The alpha of the screen is not modified.
---| "'subtract'"
---The pixel colors of what's drawn are multiplied with the pixel colors already on the screen (darkening them). The alpha of drawn objects is multiplied with the alpha of the screen rather than determining how much the colors on the screen are affected, even when the "alphamultiply" BlendAlphaMode is used.
---| "'multiply'"
---The pixel colors of what's drawn are compared to the existing pixel colors, and the larger of the two values for each color component is used. Only works when the "premultiplied" BlendAlphaMode is used in love.graphics.setBlendMode.
---| "'lighten'"
---The pixel colors of what's drawn are compared to the existing pixel colors, and the smaller of the two values for each color component is used. Only works when the "premultiplied" BlendAlphaMode is used in love.graphics.setBlendMode.
---| "'darken'"
---Additive blend mode.
---| "'additive'"
---Subtractive blend mode.
---| "'subtractive'"
---Multiply blend mode.
---| "'multiplicative'"
---Premultiplied alpha blend mode.
---| "'premultiplied'"

---Different types of per-pixel stencil test and depth test comparisons. The pixels of an object will be drawn if the comparison succeeds, for each pixel that the object touches.
---@alias CompareMode
---* stencil tests: the stencil value of the pixel must be equal to the supplied value.
---* depth tests: the depth value of the drawn object at that pixel must be equal to the existing depth value of that pixel.
---| "'equal'"
---* stencil tests: the stencil value of the pixel must not be equal to the supplied value.
---* depth tests: the depth value of the drawn object at that pixel must not be equal to the existing depth value of that pixel.
---| "'notequal'"
---* stencil tests: the stencil value of the pixel must be less than the supplied value.
---* depth tests: the depth value of the drawn object at that pixel must be less than the existing depth value of that pixel.
---| "'less'"
---* stencil tests: the stencil value of the pixel must be less than or equal to the supplied value.
---* depth tests: the depth value of the drawn object at that pixel must be less than or equal to the existing depth value of that pixel.
---| "'lequal'"
---* stencil tests: the stencil value of the pixel must be greater than or equal to the supplied value.
---* depth tests: the depth value of the drawn object at that pixel must be greater than or equal to the existing depth value of that pixel.
---| "'gequal'"
---* stencil tests: the stencil value of the pixel must be greater than the supplied value.
---* depth tests: the depth value of the drawn object at that pixel must be greater than the existing depth value of that pixel.
---| "'greater'"
---Objects will never be drawn.
---| "'never'"
---Objects will always be drawn. Effectively disables the depth or stencil test.
---| "'always'"

---How Mesh geometry is culled when rendering.
---@alias CullMode
---Back-facing triangles in Meshes are culled (not rendered). The vertex order of a triangle determines whether it is back- or front-facing.
---| "'back'"
---Front-facing triangles in Meshes are culled.
---| "'front'"
---Both back- and front-facing triangles in Meshes are rendered.
---| "'none'"

---Controls whether shapes are drawn as an outline, or filled.
---@alias DrawMode
---Draw filled shape.
---| "'fill'"
---Draw outlined shape.
---| "'line'"

---How the image is filtered when scaling.
---@alias FilterMode
---Scale image with linear interpolation.
---| "'linear'"
---Scale image with nearest neighbor interpolation.
---| "'nearest'"

---Graphics features that can be checked for with love.graphics.getSupported.
---@alias GraphicsFeature
---Whether the "clampzero" WrapMode is supported.
---| "'clampzero'"
---Whether the "lighten" and "darken" BlendModes are supported.
---| "'lighten'"
---Whether multiple formats can be used in the same love.graphics.setCanvas call.
---| "'multicanvasformats'"
---Whether GLSL 3 Shaders can be used.
---| "'glsl3'"
---Whether mesh instancing is supported.
---| "'instancing'"
---Whether textures with non-power-of-two dimensions can use mipmapping and the 'repeat' WrapMode.
---| "'fullnpot'"
---Whether pixel shaders can use "highp" 32 bit floating point numbers (as opposed to just 16 bit or lower precision).
---| "'pixelshaderhighp'"
---Whether shaders can use the dFdx, dFdy, and fwidth functions for computing derivatives.
---| "'shaderderivatives'"

---Types of system-dependent graphics limits checked for using love.graphics.getSystemLimits.
---@alias GraphicsLimit
---The maximum size of points.
---| "'pointsize'"
---The maximum width or height of Images and Canvases.
---| "'texturesize'"
---The maximum number of simultaneously active canvases (via love.graphics.setCanvas.)
---| "'multicanvas'"
---The maximum number of antialiasing samples for a Canvas.
---| "'canvasmsaa'"
---The maximum number of layers in an Array texture.
---| "'texturelayers'"
---The maximum width, height, or depth of a Volume texture.
---| "'volumetexturesize'"
---The maximum width or height of a Cubemap texture.
---| "'cubetexturesize'"
---The maximum amount of anisotropic filtering. Texture:setMipmapFilter internally clamps the given anisotropy value to the system's limit.
---| "'anisotropy'"

---Vertex map datatype for Data variant of Mesh:setVertexMap.
---@alias IndexDataType
---The vertex map is array of unsigned word (16-bit).
---| "'uint16'"
---The vertex map is array of unsigned dword (32-bit).
---| "'uint32'"

---Line join style.
---@alias LineJoin
---The ends of the line segments beveled in an angle so that they join seamlessly.
---| "'miter'"
---No cap applied to the ends of the line segments.
---| "'none'"
---Flattens the point where line segments join together.
---| "'bevel'"

---The styles in which lines are drawn.
---@alias LineStyle
---Draw rough lines.
---| "'rough'"
---Draw smooth lines.
---| "'smooth'"

---How a Mesh's vertices are used when drawing.
---@alias MeshDrawMode
---The vertices create a "fan" shape with the first vertex acting as the hub point. Can be easily used to draw simple convex polygons.
---| "'fan'"
---The vertices create a series of connected triangles using vertices 1, 2, 3, then 3, 2, 4 (note the order), then 3, 4, 5, and so on.
---| "'strip'"
---The vertices create unconnected triangles.
---| "'triangles'"
---The vertices are drawn as unconnected points (see love.graphics.setPointSize.)
---| "'points'"

---Controls whether a Canvas has mipmaps, and its behaviour when it does.
---@alias MipmapMode
---The Canvas has no mipmaps.
---| "'none'"
---The Canvas has mipmaps. love.graphics.setCanvas can be used to render to a specific mipmap level, or Canvas:generateMipmaps can (re-)compute all mipmap levels based on the base level.
---| "'auto'"
---The Canvas has mipmaps, and all mipmap levels will automatically be recomputed when switching away from the Canvas with love.graphics.setCanvas.
---| "'manual'"

---How newly created particles are added to the ParticleSystem.
---@alias ParticleInsertMode
---Particles are inserted at the top of the ParticleSystem's list of particles.
---| "'top'"
---Particles are inserted at the bottom of the ParticleSystem's list of particles.
---| "'bottom'"
---Particles are inserted at random positions in the ParticleSystem's list of particles.
---| "'random'"

---Usage hints for SpriteBatches and Meshes to optimize data storage and access.
---@alias SpriteBatchUsage
---The object's data will change occasionally during its lifetime. 
---| "'dynamic'"
---The object will not be modified after initial sprites or vertices are added.
---| "'static'"
---The object data will always change between draws.
---| "'stream'"

---Graphics state stack types used with love.graphics.push.
---@alias StackType
---The transformation stack (love.graphics.translate, love.graphics.rotate, etc.)
---| "'transform'"
---All love.graphics state, including transform state.
---| "'all'"

---How a stencil function modifies the stencil values of pixels it touches.
---@alias StencilAction
---The stencil value of a pixel will be replaced by the value specified in love.graphics.stencil, if any object touches the pixel.
---| "'replace'"
---The stencil value of a pixel will be incremented by 1 for each object that touches the pixel. If the stencil value reaches 255 it will stay at 255.
---| "'increment'"
---The stencil value of a pixel will be decremented by 1 for each object that touches the pixel. If the stencil value reaches 0 it will stay at 0.
---| "'decrement'"
---The stencil value of a pixel will be incremented by 1 for each object that touches the pixel. If a stencil value of 255 is incremented it will be set to 0.
---| "'incrementwrap'"
---The stencil value of a pixel will be decremented by 1 for each object that touches the pixel. If the stencil value of 0 is decremented it will be set to 255.
---| "'decrementwrap'"
---The stencil value of a pixel will be bitwise-inverted for each object that touches the pixel. If a stencil value of 0 is inverted it will become 255.
---| "'invert'"

---Types of textures (2D, cubemap, etc.)
---@alias TextureType
---Regular 2D texture with width and height.
---| "'2d'"
---Several same-size 2D textures organized into a single object. Similar to a texture atlas / sprite sheet, but avoids sprite bleeding and other issues.
---| "'array'"
---Cubemap texture with 6 faces. Requires a custom shader (and Shader:send) to use. Sampling from a cube texture in a shader takes a 3D direction vector instead of a texture coordinate.
---| "'cube'"
---3D texture with width, height, and depth. Requires a custom shader to use. Volume textures can have texture filtering applied along the 3rd axis.
---| "'volume'"

---The frequency at which a vertex shader fetches the vertex attribute's data from the Mesh when it's drawn.
---
---Per-instance attributes can be used to render a Mesh many times with different positions, colors, or other attributes via a single love.graphics.drawInstanced call, without using the love_InstanceID vertex shader variable.
---@alias VertexAttributeStep
---The vertex attribute will have a unique value for each vertex in the Mesh.
---| "'pervertex'"
---The vertex attribute will have a unique value for each instance of the Mesh.
---| "'perinstance'"

---How Mesh geometry vertices are ordered.
---@alias VertexWinding
---Clockwise.
---| "'cw'"
---Counter-clockwise.
---| "'ccw'"

---How the image wraps inside a Quad with a larger quad size than image size. This also affects how Meshes with texture coordinates which are outside the range of 1 are drawn, and the color returned by the Texel Shader function when using it to sample from texture coordinates outside of the range of 1.
---@alias WrapMode
---Clamp the texture. Appears only once. The area outside the texture's normal range is colored based on the edge pixels of the texture.
---| "'clamp'"
---Repeat the texture. Fills the whole available extent.
---| "'repeat'"
---Repeat the texture, flipping it each time it repeats. May produce better visual results than the repeat mode when the texture doesn't seamlessly tile.
---| "'mirroredrepeat'"
---Clamp the texture. Fills the area outside the texture's normal range with transparent black (or opaque black for textures with no alpha channel.)
---| "'clampzero'"




-- preludes

---@class graphics-newCanvas-2
---@field type? TextureType # (default: `'array'`) The type of Canvas to create.
---@field format? PixelFormat # (default: `'normal'`) The format of the Canvas.
---@field readable boolean # Whether the Canvas is readable (drawable and accessible in a Shader). True by default for regular formats, false by default for depth/stencil formats.
---@field msaa? number # (default: `0`) The desired number of multisample antialiasing (MSAA) samples used when drawing to the Canvas.
---@field dpiscale? number # (default: `love.graphics.getDPIScale()`) The DPI scale factor of the Canvas, used when drawing to the Canvas as well as when drawing the Canvas to the screen.
---@field mipmaps? MipmapMode # (default: `'none'`) Whether the Canvas has mipmaps, and whether to automatically regenerate them if so.

---@class Mesh-setVertices-2
---@field [1] number # The position of the vertex on the x-axis.
---@field [2] number # The position of the vertex on the y-axis.
---@field [3] number # The horizontal component of the texture coordinate. Texture coordinates are normally in the range of 1, but can be greater or less (see WrapMode).
---@field [4] number # The vertical component of the texture coordinate. Texture coordinates are normally in the range of 1, but can be greater or less (see WrapMode).
---@field [5]? number # (default: `1`) The red color component.
---@field [6]? number # (default: `1`) The green color component.
---@field [7]? number # (default: `1`) The blue color component.
---@field [8]? number # (default: `1`) The alpha color component.

---@class graphics-points-1
---@field x number # The position of the first point on the x-axis.
---@field y number # The position of the first point on the y-axis.
------@field ... number # The x and y coordinates of additional points.

---@class graphics-newMesh-1
---@field [1] number # The position of the vertex on the x-axis.
---@field [2] number # The position of the vertex on the y-axis.
---@field [3]? number # (default: `0`) The u texture coordinate of the vertex. Texture coordinates are normally in the range of 1, but can be greater or less (see WrapMode.)
---@field [4]? number # (default: `0`) The v texture coordinate of the vertex. Texture coordinates are normally in the range of 1, but can be greater or less (see WrapMode.)
---@field [5]? number # (default: `1`) The red component of the vertex color.
---@field [6]? number # (default: `1`) The green component of the vertex color.
---@field [7]? number # (default: `1`) The blue component of the vertex color.
---@field [8]? number # (default: `1`) The alpha component of the vertex color.

---@class Mesh-setVertex-2
---@field [1] number # The position of the vertex on the x-axis.
---@field [2] number # The position of the vertex on the y-axis.
---@field [3] number # The u texture coordinate. Texture coordinates are normally in the range of 1, but can be greater or less (see WrapMode.)
---@field [4] number # The v texture coordinate. Texture coordinates are normally in the range of 1, but can be greater or less (see WrapMode.)
---@field [5]? number # (default: `1`) The red color component.
---@field [6]? number # (default: `1`) The green color component.
---@field [7]? number # (default: `1`) The blue color component.
---@field [8]? number # (default: `1`) The alpha color component.

---@class Text-add-1
---@field color1 table # A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.
---@field string1 string # A string of text which has a color specified by the previous color.
---@field color2 table # A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.
---@field string2 string # A string of text which has a color specified by the previous color.
------@field ... "tables and strings" # Additional colors and strings.

---@class Mesh-setVertices-1
---@field attributecomponent number # The first component of the first vertex attribute in the vertex.
------@field ... number # Additional components of all vertex attributes in the vertex.

---@class Mesh-getVertexFormat-1
---@field attribute table # A table containing the attribute's name, it's data type, and the number of components in the attribute, in the form of {name, datatype, components}.
------@field ... table # Additional vertex attributes in the Mesh.

---@class graphics-getStats-1
---@field drawcalls number # The number of draw calls made so far during the current frame.
---@field canvasswitches number # The number of times the active Canvas has been switched so far during the current frame.
---@field texturememory number # The estimated total size in bytes of video memory used by all loaded Images, Canvases, and Fonts.
---@field images number # The number of Image objects currently loaded.
---@field canvases number # The number of Canvas objects currently loaded.
---@field fonts number # The number of Font objects currently loaded.
---@field shaderswitches number # The number of times the active Shader has been changed so far during the current frame.
---@field drawcallsbatched number # The number of draw calls that were saved by LÖVE's automatic batching, since the start of the frame.

---@class graphics-newImage-1
---@field linear? boolean # (default: `false`) True if the image's pixels should be interpreted as being linear RGB rather than sRGB-encoded, if gamma-correct rendering is enabled. Has no effect otherwise.
---@field mipmaps? boolean|table # (default: `false`) If true, mipmaps for the image will be automatically generated (or taken from the images's file if possible, if the image originated from a CompressedImageData). If this value is a table, it should contain a list of other filenames of images of the same format that have progressively half-sized dimensions, all the way down to 1x1. Those images will be used as this Image's mipmap levels.

---@class graphics-newArrayImage-1
---@field mipmaps? boolean # (default: `false`) True to make the image use mipmaps, false to disable them. Mipmaps will be automatically generated if the image isn't a compressed texture format.
---@field linear? boolean # (default: `false`) True to treat the image's pixels as linear instead of sRGB, when gamma correct rendering is enabled. Most images are authored as sRGB.
---@field dpiscale? number # (default: `1`) The DPI scale to use when drawing the array image and calling getWidth/getHeight.

---@class graphics-setCanvas-1
---@field [1] RenderTargetSetup # The Canvas to render to.
---@field [2]? RenderTargetSetup # (default: `nil`) An additional Canvas to render to, if multiple simultaneous render targets are wanted.
------@field ... RenderTargetSetup # Additional Canvases to render to, if multiple simultaneous render targets are wanted.
---@field stencil? boolean # (default: `false`) Whether an internally managed stencil buffer should be used, if the depthstencil field isn't set.
---@field depth? boolean # (default: `false`) Whether an internally managed depth buffer should be used, if the depthstencil field isn't set.
---@field depthstencil? RenderTargetSetup # (default: `nil`) An optional custom depth/stencil formatted Canvas to use for the depth and/or stencil buffer.

---@class Mesh-setVertex-1
---@field attributecomponent number # The first component of the first vertex attribute in the specified vertex.
------@field ... number # Additional components of all vertex attributes in the specified vertex.

---@class graphics-points-2
---@field point table # A table containing the position and color of the first point, in the form of {x, y, r, g, b, a}. The color components are optional.
------@field ... table # Additional tables containing the position and color of more points, in the form of {x, y, r, g, b, a}. The color components are optional.

---@class graphics-newCubeImage-1
---@field mipmaps? boolean # (default: `false`) True to make the image use mipmaps, false to disable them. Mipmaps will be automatically generated if the image isn't a compressed texture format.
---@field linear? boolean # (default: `false`) True to treat the image's pixels as linear instead of sRGB, when gamma correct rendering is enabled. Most images are authored as sRGB.

---@class graphics-newCanvas-1
---@field type? TextureType # (default: `'2d'`) The type of Canvas to create.
---@field format? PixelFormat # (default: `'normal'`) The format of the Canvas.
---@field readable boolean # Whether the Canvas is readable (drawable and accessible in a Shader). True by default for regular formats, false by default for depth/stencil formats.
---@field msaa? number # (default: `0`) The desired number of multisample antialiasing (MSAA) samples used when drawing to the Canvas.
---@field dpiscale? number # (default: `love.graphics.getDPIScale()`) The DPI scale factor of the Canvas, used when drawing to the Canvas as well as when drawing the Canvas to the screen.
---@field mipmaps? MipmapMode # (default: `'none'`) Whether the Canvas has mipmaps, and whether to automatically regenerate them if so.

---@class graphics-newMesh-2
---@field attribute table # A table containing the attribute's name, it's data type, and the number of components in the attribute, in the form of {name, datatype, components}.
------@field ... table # Additional vertex attribute format tables.

---@class graphics-newVideo-1
---@field audio? boolean # (default: `false`) Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio.
---@field dpiscale? number # (default: `love.graphics.getDPIScale()`) The DPI scale factor of the video.




return graphics