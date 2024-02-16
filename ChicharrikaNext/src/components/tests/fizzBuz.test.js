import { describe, expect, it } from 'vitest';

// Función a probar
function sumar(a, b) {
    return a + b;
}

// Prueba
describe('Prueba de sumar', () => {
    it('debería sumar dos números correctamente', () => {
        // Arrange
        const numero1 = 3;
        const numero2 = 5;

        // Act
        const resultado = sumar(numero1, numero2);

        // Assert
        expect(resultado).toBe(8);
    });

    it('debería sumar números negativos correctamente', () => {
        // Arrange
        const numero1 = -2;
        const numero2 = -4;

        // Act
        const resultado = sumar(numero1, numero2);

        // Assert
        expect(resultado).toBe(-6);
    });
});



