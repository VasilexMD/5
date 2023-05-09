// Цикл, создающий параграфы с каждым десятым числом от 100 до 50 и добавляющий их в div с классом numbers:

const numbersDiv = document.querySelector('.numbers');

for (let i = 100; i >= 50; i -= 10) {
  const paragraph = document.createElement('p');
  paragraph.textContent = i;
  numbersDiv.appendChild(paragraph);
}

// Цикл, который проходится по массиву строк, создает параграф для каждой строки и добавляет его в div с классом strings_container:
const strings = ['Привет', 'мир', 'как', 'дела'];
const stringsContainer = document.querySelector('.strings_container');

for (const str of strings) {
  const paragraph = document.createElement('p');
  paragraph.textContent = str;
  stringsContainer.appendChild(paragraph);
}

// Цикл, который проходится по массиву с объектами и создает карточки только для совершеннолетних пользователей:

const users = [
  { first_name: 'Иван', last_name: 'Иванов', age: 25 },
  { first_name: 'Мария', last_name: 'Петрова', age: 17 },
  { first_name: 'Сергей', last_name: 'Смирнов', age: 30 },
];

const usersContainer = document.querySelector('.users_container');

for (const user of users) {
  if (user.age >= 18) {
    const card = document.createElement('div');
    card.className = 'user-card';

    const name = document.createElement('p');
    name.textContent = `${user.first_name} ${user.last_name}`;

    const age = document.createElement('p');
    age.textContent = `Возраст: ${user.age} лет`;

    card.appendChild(name);
    card.appendChild(age);
    usersContainer.appendChild(card);
  }
}
