---@meta

---
---
---
---[查看文档](command:extension.lua.doc?["en-us/54/manual.html/pdf-table"])
---
---@class tablelib
table = {}

---
---提供一个列表，其所有元素都是字符串或数字，返回字符串 `list[i]..sep..list[i+1] ··· sep..list[j]`。
---
---[查看文档](command:extension.lua.doc?["en-us/54/manual.html/pdf-table.concat"])
---
---@param list table
---@param sep? string
---@param i?   integer
---@param j?   integer
---@return string
---@nodiscard
function table.concat(list, sep, i, j) end

---
---在 `list` 的位置 `pos` 处插入元素 `value`。
---
---[查看文档](command:extension.lua.doc?["en-us/54/manual.html/pdf-table.insert"])
---
---@overload fun(list: table, value: any)
---@param list table
---@param pos integer
---@param value any
function table.insert(list, pos, value) end

---@version <5.1
---
---返回给定表的最大正数索引，如果表没有正数索引，则返回零。
---
---[查看文档](command:extension.lua.doc?["en-us/54/manual.html/pdf-table.maxn"])
---
---@param table table
---@return integer
---@nodiscard
function table.maxn(table) end

---@version >5.3
---
---将元素从表 `a1` 移到表 `a2`。
---```lua
---a2[t],··· =
---a1[f],···,a1[e]
---return a2
---```
---
---
---[查看文档](command:extension.lua.doc?["en-us/54/manual.html/pdf-table.move"])
---
---@param a1  table
---@param f   integer
---@param e   integer
---@param t   integer
---@param a2? table
---@return table a2
function table.move(a1, f, e, t, a2) end

---@version >5.2, JIT
---
---返回用所有参数以键 `1`,`2`, 等填充的新表， 并将 `"n"` 这个域设为参数的总数。
---
---[查看文档](command:extension.lua.doc?["en-us/54/manual.html/pdf-table.pack"])
---
---@return table
---@nodiscard
function table.pack(...) end

---
---移除 `list` 中 `pos` 位置上的元素，并返回这个被移除的值。
---
---[查看文档](command:extension.lua.doc?["en-us/54/manual.html/pdf-table.remove"])
---
---@param list table
---@param pos? integer
---@return any
function table.remove(list, pos) end

---
---在表内从 `list[1]` 到 `list[#list]` *原地* 对其间元素按指定次序排序。
---
---[查看文档](command:extension.lua.doc?["en-us/54/manual.html/pdf-table.sort"])
---
---@param list table
---@param comp fun(a: any, b: any):boolean
function table.sort(list, comp) end

---@version >5.2, JIT
---
---返回列表中的元素。 这个函数等价于
---```lua
---    return list[i], list[i+1], ···, list[j]
---```
---i 默认为 1 ，j 默认为 #list。
---
---
---[查看文档](command:extension.lua.doc?["en-us/54/manual.html/pdf-table.unpack"])
---
---@param list table
---@param i?   integer
---@param j?   integer
---@nodiscard
function table.unpack(list, i, j) end

return table
