var reg = new RegExp('^[C,A,P]*[0-9{4,4}]*[G,H,I,K,L,M]$');
var classList = ['C0318G', 'M0318G', 'P0323A'];
for (var _i = 0, classList_1 = classList; _i < classList_1.length; _i++) {
    var i = classList_1[_i];
    if (reg.test(i)) {
        console.log(i + 'is valid');
    }
    else {
        console.log(i + 'is invalid');
    }
}
