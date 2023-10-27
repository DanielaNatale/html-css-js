const datosUsuarios = [
    {
        nombre: 'flavia',
        password: 'sols1234'
    },
    {
        nombre: 'sofia',
        password: 'as1234'
    },
    {
        nombre: 'florencia',
        password: 'dsjss1234'
    },
    {
        nombre: 'manuel',
        password: 'ak;wx1234'
    },
    {
        nombre: 'sebastian',
        password: 'klwjcnw1234'
    },
]

const soloPass= datosUsuarios.map(function(p){
    return p.password
})

//arrow function> const soloPass= datosUsuarios.map(p => {
//      return p.password

// })

console.log(soloPass)



const soloNom= datosUsuarios.map(function(p){
    return p.nombre
})

console.log(soloNom)

