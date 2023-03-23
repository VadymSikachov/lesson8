function Check() {
    let city;
    city = 'Київ';
    city = 'Львів';
    let address = city;
    console.log(address);
    let num = +prompt('Введіть число', '0');
    num !== null ?
        num == 0 ?
            console.log('Чосло 0')
            : num % 2 === 0 ?
                console.log('Чосло парне')
                : console.log('Чосло непарне')
        : console.log('Write a number');
    function max(x, y, ...numArray) {
        console.log(Math.max(x, y, Math.max.apply(null, numArray)));
    }
    max(5, -2);
    max(5, -2, 30, 6);
    function getSqrt(...Num) {
        Num.length == 0 ?
            console.log('Будь ласка, введіть число!')
            : typeof Num[0] !== 'number' ?
                console.log('Повинно бути числове значення')
                : Num[0] < 0 ?
                    console.log('Введіть додатнє число.')
                    : console.log(`Квадратний корінь з ${Num} дорівнює ${Math.sqrt.apply(null, Num)}`);
    }
    getSqrt(4);
    getSqrt('ds');
    getSqrt(-1);
    getSqrt();
}
const GetS = (sel) => document.querySelector(sel);
GetS('.add').addEventListener('click', function () {
    GetS('.input-words').value !== "" ?
        AddWords()
        :
            GetS('.input-words').placeholder = 'Please write a word!';
});
function AddWords() {
    console.log('++');
    GetS('.bad-words').textContent == '' ?
        GetS('.bad-words').textContent += `${GetS('.input-words').value}`
        :
            GetS('.bad-words').textContent += `,${GetS('.input-words').value}`;
    GetS('.input-words').value = '';
    GetS('.input-words').placeholder = 'word here...';
}
GetS('.reset').addEventListener('click', function () {
    GetS('.bad-words').textContent = '';
    GetS('.text-area').value = '';
});
GetS('.cenzor').addEventListener('click', function () {
    if (GetS('.text-area').value == '') {
        GetS('.text-area').placeholder = 'Please write a text!';
    }
    else {
        let cenzor = GetS('.bad-words').textContent?.split(',');
        for (let i = 0; i < cenzor.length; i++) {
            if (GetS('.text-area').value.includes(cenzor[i])) {
                let text = GetS('.text-area').value;
                let regT = new RegExp(cenzor[i], 'gmi');
                let hide = cenzor[i].split('').map(elem => elem = '*').join('');
                GetS('.text-area').value = text.replace(regT, hide);
            }
        }
    }
});
