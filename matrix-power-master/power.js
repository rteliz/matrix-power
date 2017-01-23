const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

function power(mtrx, p){
    //mtrx is the matrix you input
    //p is the power of the matrix you want

    let temporaryMatrix = mtrx;

    for(let i = 0; i < p-1; i++){
      mtrx = Matrix(temporaryMatrix.prod(mtrx));
    }

    return mtrx();
}


//testing code
console.log(power(A,10));
