let space1 = "O" 
let space2 = "X" 
let space3 = "O"
let space4 = "X"
let space5 = "X"
let space6 = ""
let space7 = "O"
let space8 = ""
let space9 = ""
console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3}`);
console.log("   |   |   ");
console.log("___________");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("___________");
console.log("   |   |   ");
console.log(` ${space7} | ${space8}  | ${space9}`);
console.log("   |   |   ");
if (space1 ==="X" && space2 ==="X" && space3 ==="X"){
    console.log("X wins");
}
else if (space1 ==="O" && space2 ==="O" && space3 ==="O"){
    console.log("O wins")
}
else {
    console.log("try again");
}