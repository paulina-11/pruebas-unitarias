describe('Probando Jest', () =>{
    test('Prueba de objetos iguales', () =>{
        const datos1 = {
            nombre: 'Paulina Avila',
            edad: 28
        };
        const datos2 = {
            nombre: 'Paulina Avila',
            edad: 28
        };
        expect(datos1).toEqual(datos2);

    })


});