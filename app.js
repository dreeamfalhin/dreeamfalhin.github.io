// Настройка Firebase
const firebaseConfig = {
  apiKey: "ВАШ_API_KEY",
  authDomain: "ВАШ_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://ВАШ_PROJECT_ID.firebaseio.com",
  projectId: "ВАШ_PROJECT_ID",
  storageBucket: "ВАШ_PROJECT_ID.appspot.com",
  messagingSenderId: "ВАШ_SENDER_ID",
  appId: "ВАШ_APP_ID"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Элементы DOM
const nameInput = document.getElementById('nameInput');
const saveBtn = document.getElementById('saveBtn');
const namesList = document.getElementById('namesList');

// Сохранение имени в базу
saveBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if(name) {
    db.ref('names').push(name);
    nameInput.value = '';
  }
});

// Подписка на изменения в базе и вывод в список
db.ref('names').on('value', snapshot => {
  namesList.innerHTML = '';
  snapshot.forEach(child => {
    const li = document.createElement('li');
    li.textContent = child.val();
    namesList.appendChild(li);
  });
});
