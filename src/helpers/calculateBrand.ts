const calculateBrand = (brand: string): number => {
    let increment;
    if (brand === 'europeo') {
        increment = 130 / 100
    } else if (brand === 'americano') {
        increment = 115 / 100 
    } else if (brand === 'asiatico') {
        increment = 105 / 100
    } else {
        increment = 0
    }

    return increment
}

export default calculateBrand