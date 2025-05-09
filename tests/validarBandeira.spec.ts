import { validateCardBrand } from '../composables/validarBandeira';

describe('validateCardBrand', () => {
    // Visa
    it('deve identificar Visa válido', () => {
        expect(validateCardBrand('4111111111111111')).toEqual({ brand: 'Visa', valid: true });
    });
    it('deve identificar Visa inválido', () => {
        expect(validateCardBrand('4111111111111121')).toEqual({ brand: 'Visa', valid: false });
    });

    // MasterCard
    it('deve identificar MasterCard válido', () => {
        expect(validateCardBrand('5555555555554444')).toEqual({ brand: 'MasterCard', valid: true });
    });
    it('deve identificar MasterCard inválido', () => {
        expect(validateCardBrand('5555555555554445')).toEqual({ brand: 'MasterCard', valid: false });
    });

    // American Express
    it('deve identificar American Express válido', () => {
        expect(validateCardBrand('378282246310005')).toEqual({ brand: 'American Express', valid: true });
    });
    it('deve identificar American Express inválido', () => {
        expect(validateCardBrand('378282246310006')).toEqual({ brand: 'American Express', valid: false });
    });

    // Discover
    it('deve identificar Discover válido', () => {
        expect(validateCardBrand('6011111111111117')).toEqual({ brand: 'Discover', valid: true });
    });
    it('deve identificar Discover inválido', () => {
        expect(validateCardBrand('6011111111111118')).toEqual({ brand: 'Discover', valid: false });
    });

    // Hipercard
    it('deve identificar Hipercard válido', () => {
        expect(validateCardBrand('6062825624254001')).toEqual({ brand: 'Hipercard', valid: true });
    });
    it('deve identificar Hipercard inválido', () => {
        expect(validateCardBrand('6062825624254002')).toEqual({ brand: 'Hipercard', valid: false });
    });

    // JCB
    it('deve identificar JCB válido', () => {
        expect(validateCardBrand('3530111333300000')).toEqual({ brand: 'JCB', valid: true });
    });
    it('deve identificar JCB inválido', () => {
        expect(validateCardBrand('3530111333300001')).toEqual({ brand: 'JCB', valid: false });
    });
    // Diners Club
    it('deve identificar Diners Club válido', () => {
        expect(validateCardBrand('30569309025904')).toEqual({ brand: 'Diners Club', valid: true });
    });
    it('deve identificar Diners Club inválido', () => {
        expect(validateCardBrand('30569309025905')).toEqual({ brand: 'Diners Club', valid: false });
    });

    // Aura
    it('deve identificar Aura válido', () => {
        expect(validateCardBrand('5017070281074321')).toEqual({ brand: 'Aura', valid: true });
    });
    it('deve identificar Aura inválido', () => {
        expect(validateCardBrand('5017070281074322')).toEqual({ brand: 'Aura', valid: false });
    });

    // Voyager
    it('deve identificar Voyager válido', () => {
        expect(validateCardBrand('869912616448367')).toEqual({ brand: 'Voyager', valid: true });
    });
    it('deve identificar Voyager inválido', () => {
        expect(validateCardBrand('869912616448368')).toEqual({ brand: 'Voyager', valid: false });
    });

    // EnRoute
    it('deve identificar EnRoute válido', () => {
        expect(validateCardBrand('201400000000009')).toEqual({ brand: 'EnRoute', valid: true });
    });
    it('deve identificar EnRoute inválido', () => {
        expect(validateCardBrand('201400000000008')).toEqual({ brand: 'EnRoute', valid: false });
    });

    // Testes adicionais

    // Teste com número muito curto
    it('deve retornar null e inválido para número muito curto', () => {
        expect(validateCardBrand('4111')).toEqual({ brand: null, valid: false });
    });

    // Teste com número muito longo
    it('deve retornar null e inválido para número muito longo', () => {
        expect(validateCardBrand('411111111111111111111111')).toEqual({ brand: null, valid: false });
    });

    // Teste com string vazia
    it('deve retornar null e inválido para string vazia', () => {
        expect(validateCardBrand('')).toEqual({ brand: null, valid: false });
    });

    // Teste com caracteres especiais
    it('deve identificar Visa válido mesmo com espaços', () => {
        expect(validateCardBrand('4111 1111 1111 1111')).toEqual({ brand: 'Visa', valid: true });
    });

    // Teste com prefixo de MasterCard 2-series
    it('deve identificar MasterCard válido com prefixo 2221', () => {
        expect(validateCardBrand('2221000000000009')).toEqual({ brand: 'MasterCard', valid: true });
    });

    // Teste com prefixo de MasterCard 2-series inválido
    it('deve identificar MasterCard inválido com prefixo 2221', () => {
        expect(validateCardBrand('2221000000000008')).toEqual({ brand: 'MasterCard', valid: false });
    });

    // Número inválido (sem bandeira)
    it('deve retornar null e inválido para número sem bandeira', () => {
        expect(validateCardBrand('1234567890123')).toEqual({ brand: null, valid: false });
    });

    // Teste com caracteres não numéricos
    it('deve ignorar caracteres não numéricos', () => {
        expect(validateCardBrand('4111-1111-1111-1111')).toEqual({ brand: 'Visa', valid: true });
    });
});
