var display = function (func) {
    return console.log(func);
};


// Expected Results Using Let in a for Loop
let updateFunctions = [];
for (let i = 0; i < 2; i++) {
    updateFunctions.push(function() { return i; });
}
display(updateFunctions[0]()); // 0 