import {usePizzaOfTheDay } from './usePizzaOfTheDay';

const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

const PizzaOfTheDay = () => {
    
    const pizzaoftheday = usePizzaOfTheDay();

    if(!pizzaoftheday) {
        return <div>Loading...</div>
    }


    return (
        <div className="pizza-of-the-day">
            <h2>Pizza of the day</h2>
            <div>
            <div className="pizza-of-the-day-info">
                <h3>{pizzaoftheday.name}</h3>
                <p>{pizzaoftheday.description}</p>
                <p className="pizza-of-the-day-price">
                    from: {intl.format(pizzaoftheday.sizes.S)}
                </p>
            </div>
            <img
                className="pizza-of-the-day-image"
                src={pizzaoftheday.image}
                alt={pizzaoftheday.name}
                />
            </div>
        </div>
    )
}

export default PizzaOfTheDay;