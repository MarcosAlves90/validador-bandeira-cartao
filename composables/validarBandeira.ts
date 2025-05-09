export function validateCardBrand(cardNumber: string): { brand: string | null; valid: boolean } {
    const num = cardNumber.replace(/\D/g, '');

    const luhnCheck = (n: string): boolean => {
        if (!/^\d+$/.test(n) || n.length < 13) return false;
        
        let sum = 0;
        let shouldDouble = false;
        
        // Percorre da direita para a esquerda
        for (let i = n.length - 1; i >= 0; i--) {
            let digit = parseInt(n.charAt(i), 10);
            
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        
        return (sum % 10) === 0;
    };

    const brandPatterns: { [key: string]: RegExp[] } = {
        Aura: [
            /^50[0-9]{14,17}$/,
            /^509[0-9]{13,16}$/
        ],
        Visa: [/^4\d{12}(\d{3})?$/],
        MasterCard: [/^(5[1-5]\d{14}|2(2[2-9][1-9]|2[3-9]\d|[3-6]\d{2}|7[01]\d|720)\d{12})$/],
        'American Express': [/^3[47]\d{13}$/],
        Discover: [/^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/],
        Hipercard: [/^6062\d{12}$/],
        JCB: [/^(?:2131|1800|35\d{3})\d{11}$/],
        'Diners Club': [/^3(0[0-5]|[68]\d|9\d)\d{11}$/],
        Voyager: [/^8699\d{11}$/],
        EnRoute: [/^(2014|2149)\d{11}$/]
    };

    const brand = Object.keys(brandPatterns).find(key =>
        brandPatterns[key].some(pattern => pattern.test(num))
    ) || null;

    return { brand, valid: luhnCheck(num) };
}