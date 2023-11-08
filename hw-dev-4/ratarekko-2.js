const Vector = function (components) {
    this.components = components;

    this.equals = function (otherVector) {
        if (this.components.length !== otherVector.components.length) {
            return false;
        }

        return this.components.every((value, index) => value === otherVector.components[index]);
    };

    this.add = function (otherVector) {
        if (this.components.length !== otherVector.components.length) {
            throw new Error("Vectors must have the same length for addition.");
        }

        const resultComponents = this.components.map((value, index) => value + otherVector.components[index]);
        return new Vector(resultComponents);
    };

    this.subtract = function (otherVector) {
        if (this.components.length !== otherVector.components.length) {
            throw new Error("Vectors must have the same length for subtraction.");
        }

        const resultComponents = this.components.map((value, index) => value - otherVector.components[index]);
        return new Vector(resultComponents);
    };

    this.dot = function (otherVector) {
        if (this.components.length !== otherVector.components.length) {
            throw new Error("Vectors must have the same length for dot product.");
        }

        return this.components.reduce((result, value, index) => result + value * otherVector.components[index], 0);
    };

    this.norm = function () {
        const sumOfSquares = this.components.reduce((result, value) => result + value * value, 0);
        return Math.sqrt(sumOfSquares);
    };

    this.toString = function () {
        return `(${this.components.join(',')})`;
    };
};