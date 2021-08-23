let savol = confirm(`Bu son topish o'yini, men 20gacha bo'lgan son o'yladim,Agar rozi bo'lsangiz boshladik`);
if(!savol) {
    window.location.href='https://fulfiledu.uz/';
}

let urinish = 0;
let number = Math.round(Math.random() * 20);

let youNumber = prompt(`Son kiriting`);

if(Number(youNumber) != youNumber) {
    youNumber = prompt(`Son kiriting`);
    urinish += 1;
}
while(true) {
    if(youNumber > number) {
        youNumber = prompt(`Men o'ylagan son ${youNumber} dan kichik,:\n\n qayta urinib ko'ring`);
        urinish += 1;
    }
    if(youNumber < number) {
        youNumber = prompt(`Men o'ylagan son ${youNumber} dan katta,:\n\n qayta urinib ko'ring`);
        urinish += 1;
    }else
        break
}

alert(`Tabriklayman siz men o'ylagan ${number} sonini topdingiz,siz meni ${urinish} ta urinishda yutdingiz`);
