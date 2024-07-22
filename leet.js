function expect(val) {
    return {
        toBe: function(expectedVal) {
            if (val === expectedVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(unexpectedVal) {
            if (val !== unexpectedVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}

// Example usage
try {
    let result = expect(5).toBe(5);  // Should return true
    console.log(result);  // Output: true
} catch (error) {
    console.log(error.message);  // Should not print
}

try {
    let result = expect(5).toBe(3);  // Should throw "Not Equal"
    console.log(result);
} catch (error) {
    console.log(error.message);  // Output: "Not Equal"
}

try {
    let result = expect(5).notToBe(3);  // Should return true
    console.log(result);  // Output: true
} catch (error) {
    console.log(error.message);  // Should not print
}

try {
    let result = expect(5).notToBe(5);  // Should throw "Equal"
    console.log(result);
} catch (error) {
    console.log(error.message);  // Output: "Equal"
}
