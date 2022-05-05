api = require('love-api.extra')(require('love-api.love_api'))
table.sort(api.variants, function(a, b)
    return a.function_.fullname < b.function_.fullname
end)
local functionsTable = {}

for index, variant in ipairs(api.variants) do
    local function list(t)
        local s = ''
        for i, a in ipairs(t) do
            s = s .. a.name
            if a.default then
                s = s .. ' [' .. a.default .. ']'
            end
            if i ~= #t then
                s = s .. ', '
            end
        end
        return s
    end
    local functionSignature = ''
    if #variant.returns > 0 then
        functionSignature = list(variant.returns) .. ' = '
    end
    functionSignature = functionSignature .. variant.function_.fullname .. '('
    if #variant.arguments > 0 then
        functionSignature = functionSignature .. list(variant.arguments)
    end
    functionSignature = functionSignature .. ')'
    functionsTable[index] = functionSignature
end

function file_exists(file)
    local f = io.open(file, "rb")
    if f then
        f:close()
    end
    return f ~= nil
end

function lines_from(file)
    if not file_exists(file) then
        return {}
    end
    local lines = {}
    for line in io.lines(file) do
        lines[#lines + 1] = line
    end
    return lines
end

local function has_value (table, val)
    for _, value in ipairs(table) do
        if value == val then
            return true
        end
    end
    return false
end

function getChanges ()
    local file = 'myBlocks'
    local lines = lines_from(file)
    print('--------------------------------------------------------------------------')
    print('Reading currently implemented blocks from file "' .. file .. '"')
    print('Signature changed in these functions:')
    for _, functionName in pairs(lines) do
        if not has_value(functionsTable, functionName) then
            print(functionName)
        end
    end
    print('--------------------------------------------------------------------------')
end

getChanges()
