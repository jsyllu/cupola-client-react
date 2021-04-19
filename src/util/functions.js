export function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const currencySymbol = (currency) => {
    if (currency === 'USD') {
        return '$'
    } else {
        return ''
    }
}

const functions = {
    capitalize, currencySymbol
}

export default functions