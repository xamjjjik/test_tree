// Получаем данные из API
fetch("tree.json")
  .then((response) => response.json())
  .then((data) => {
    // Добавляем дерево на веб-страницу
    const tree = document.createElement("ul");
    document.body.appendChild(tree);
    // Заполняем дерево из полученных данных
    buildTree(data.services, tree);
  });

function buildTree(data, father) {
  let servicesByHead = {};
  let sortArray = [];

  // Разделение массива по head
  data.map((service) => {
    if (!servicesByHead[service.head]) {
      servicesByHead[service.head] = [service];
      sortArray.push(service.head);
    } else {
      servicesByHead[service.head].push(service);
    }
    servicesByHead[service.head].sort((a, b) => a.sorthead - b.sorthead);
  });

  //Создание разделов
  for (let i = 0; i < sortArray.length; i++) {
    servicesByHead[sortArray[i]].forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name}`;
      li.id = `${item.id}`;
      if (sortArray[i] === null) {
        father.appendChild(li);
        li.className = "parent";
        return;
      }
      li.className = "child";
      const parent = document.getElementById(`${item.head}`);
      parent.appendChild(li);
    });
  }

  //Добавление цен
  data.map((item) => {
    if (item.node === 0) {
      let el = document.getElementById(`${item.id}`);
      el.textContent += `(${item.price})`;
    }
  });
}
