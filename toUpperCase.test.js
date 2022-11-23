import changeToUpperCase from './toUpperCase.js'

describe('Verify toUpperCase', () => {
    it('hello to HELLO', () => {
        const retornoEsperado = 'HELLO';
        expect(changeToUpperCase('hello')).toEqual(retornoEsperado);
    })
})

