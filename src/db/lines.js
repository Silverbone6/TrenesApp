function getAllLines() {
    return [
        {
            name: "Roca",
            origin: "Constitución",
            end: "La Plata"
        }
    ]
}

function getLine(number) {
    if (number === "0") {
        return [
            {
                name: "Roca",
                origin: "Constitución",
                end: "La Plata"
            }
        ]
    } else {
        return undefined
    }
}

function createLine(number, name, origin, end) {
    return {
        number,
        name,
        origin,
        end
    }
}

function deleteLine(number) {

}

function updateLine(number, name, origin, end) {
    return {
        number,
        name,
        origin,
        end
    }
}

module.exports = {
    getAllLines,
    getLine,
    createLine,
    deleteLine,
    updateLine
}