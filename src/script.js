const products = [
    { id: 0, title: 'Футбольный мяч', price: 25.99, count: 15 },
    { id: 1, title: 'Наушники Bluetooth', price: 59.99, count: 20 },
    { id: 2, title: 'Ноутбук Dell Inspiron', price: 899.99, count: 0 },
    { id: 3, title: 'Смартфон Samsung Galaxy S21', price: 799.99, count: 10 },
    { id: 4, title: 'Кофеварка Nespresso', price: 149.99, count: 8 },
    { id: 5, title: 'Книга "Мастер и Маргарита"', price: 12.99, count: 30 },
    { id: 6, title: 'Фотоаппарат Canon EOS R5', price: 3499.99, count: 0 },
    { id: 7, title: 'Спортивные кроссовки Nike Air Max', price: 129.99, count: 12 },
    { id: 8, title: 'Умный термостат Nest', price: 199.99, count: 0 },
    { id: 9, title: 'Пылесос Dyson V11', price: 499.99, count: 6 }
];

const wrapper  = document.createElement("div");
wrapper.className = "wrapper";
document.body.append(wrapper);

products.map(({id, title, price, count}) => {

    const newClass = document.createElement("div");
    newClass.setAttribute(`data-id`, id);
    newClass.className = "card";
    wrapper.append(newClass);

    const heading = document.createElement("h2");
    heading.innerText = title;
    newClass.append(heading);

    const cost = document.createElement("h4");
    cost.innerText = price;
    newClass.append(cost);

    const quantity = document.createElement("p");
    quantity.innerText = count;
    newClass.append(quantity);

    const button = document.createElement("button");
    button.textContent = "Change color";
    newClass.append(button);

    const btn = document.querySelectorAll("button");

    if (count === 0) {
        quantity.innerText = "Товар кончился";
    }

    button.addEventListener("click", () =>  {
        const originalColor = "cornflowerblue";

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        newClass.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
});
