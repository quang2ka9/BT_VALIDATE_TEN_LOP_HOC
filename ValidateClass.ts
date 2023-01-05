let reg = new RegExp('^[C,A,P]*[0-9{4,4}]*[G,H,I,K,L,M]$')
let classList = ['C0318G', 'M0318G', 'P0323A']

for (let i of classList){
    if(reg.test(i)){
        console.log(i + 'is valid')
    }else {
        console.log(i + 'is invalid')
    }
}