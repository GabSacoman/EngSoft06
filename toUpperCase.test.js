import changeToUpperCase from './toUpperCase.js'
//verifica se está em Maiusculo 
describe('Verify toUpperCase', () => {
    it('hello to HELLO', () => {
        const retornoEsperado = 'HELLO';
        expect(changeToUpperCase('hello')).toEqual(retornoEsperado);
    })
})

