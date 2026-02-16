function padIt(str,n){
    let nTimes =0;
    let input = str;
    do {
        let val = (nTimes%2)?(input = input + '*'):(input = '*' + input);
        // if(val){
            nTimes++
        // } else {nTimes++}
    }
    while (nTimes<n)

    return (input);
    //coding here
}

let resultN =padIt ('b', 1);

console.log(resultN);