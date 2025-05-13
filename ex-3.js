// for(let i = 1; i <= 20; i++) {
//     if(i % 2 === 0) {
//         if(i % 4 === 0) {
//             continue;
//         }
//         console.log(i);
//     }
// }

let count = 1;
while (count <= 20) {
    if(count % 2 === 0) {
        if(count % 4 === 0) {
            count++;
            continue;
        }
        console.log(count);
    }
    count++;
}



