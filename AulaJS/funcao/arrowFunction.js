// primeiro exemplo
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2* a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

// segundo exmplo
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // não tem parametro
ola = _ => 'Olá' // possui parametro
console.log(ola())