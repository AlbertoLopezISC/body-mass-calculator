export function calculateIndexMass(isMale, weight, height, waist, hip, neck) {
    if (isMale) {
        const denominator = 1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)
        const bodyFatPorcentage = 495 / denominator - 450;
        return {
            bodyFatPorcentag: bodyFatPorcentage,
            fatMass: bodyFatPorcentage * weight
        };
    }
    const denominator = 1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)
    const bodyFatPorcentage = 495 / denominator - 450;
    return {
        bodyFatPorcentag: bodyFatPorcentage,
        fatMass: bodyFatPorcentage * weight
    };


}