
export function getBrandLogo(brand: string): string | null {
    const normalize = (s: string) => s.toLowerCase().trim().replace(/\s+/g, '-');
    const key = normalize(brand);

    // Single Source of Truth for Brand Logos
    // Add new mappings here to control logos application-wide
    const brandMap: Record<string, string> = {
        // Common mappings
        'mercedes': 'mercedes-benz',
        'mercedes-benz': 'mercedes-benz',
        'vw': 'volkswagen',
        'volkswagen': 'volkswagen',
        'bmw': 'bmw',
        'audi': 'audi',
        'tesla': 'tesla',
        'toyota': 'toyota',
        'honda': 'honda',
        'ford': 'ford',
        'hyundai': 'hyundai',
        'kia': 'kia',
        'volvo': 'volvo',
        'renault': 'renault',
        'fiat': 'fiat',

        // Luxury & Sport
        'porsche': 'porsche',
        'ferrari': 'ferrari',
        'lamborghini': 'lamborghini',
        'maserati': 'maserati',
        'bentley': 'bentley',
        'rolls-royce': 'rolls-royce',
        'aston-martin': 'aston-martin',
        'bugatti': 'bugatti',
        'mclaren': 'mclaren',
        'lotus': 'lotus',

        // Premium
        'jaguar': 'jaguar',
        'land-rover': 'land-rover',
        'lexus': 'lexus',
        'infiniti': 'infiniti',
        'acura': 'acura',
        'genesis': 'genesis',
        'alfa-romeo': 'alfa-romeo',
        'ds': 'ds',
        'cupra': 'cupra',

        // Mainstream
        'peugeot': 'peugeot',
        'citroen': 'citroen',
        'opel': 'opel',
        'skoda': 'skoda',
        'seat': 'seat',
        'nissan': 'nissan',
        'mazda': 'mazda',
        'subaru': 'subaru',
        'mitsubishi': 'mitsubishi',
        'suzuki': 'suzuki',
        'mini': 'mini',
        'smart': 'smart',
        'jeep': 'jeep',
        'dodge': 'dodge',
        'chrysler': 'chrysler',
        'chevrolet': 'chevrolet',
        'cadillac': 'cadillac',
        'gmc': 'gmc',
        'buick': 'buick',
        'lincoln': 'lincoln',

        // Commercial & Heavy
        'man': 'man',
        'scania': 'scania',
        'daf': 'daf',
        'iveco': 'iveco',
        'isuzu': 'isuzu',
        'kamaz': 'kamaz',
        'ford-trucks': 'ford',
        'mercedes-trucks': 'mercedes-benz',
    };

    const logoName = brandMap[key] || key;

    // Return path directly - Next.js Image component handles static assets from public folder
    return `/badges/${logoName}.png`;
}
