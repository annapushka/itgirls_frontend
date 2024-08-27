function dirReduc(directions) {
    const opposites = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    };

    const stack = [];

    for (const direction of directions) {

        if (stack.length > 0 && stack[stack.length - 1] === opposites[direction]) {
            stack.pop();
        } else {
            stack.push(direction);
        }
    }

    return stack;
}