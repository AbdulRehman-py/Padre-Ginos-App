const intl = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const PriceConverter = (price) => intl.format(price); 
    export default function useCurrency(price) {
        return intl.format(price);
    }
