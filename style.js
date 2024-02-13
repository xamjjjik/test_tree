window.onload = function () {
  let parents = document.querySelectorAll(".parent");
  let children = document.querySelectorAll(".child");

  //Вызов и закрытие дочерних элементов первого порядка
  parents.forEach(function (parent) {
    parent.addEventListener("click", () => {
      let firstChildren = parent.querySelectorAll(`.of${parent.id}`);
      if (event.target === parent) {
        firstChildren.forEach((child) => {
          if (!child.classList.contains("visiable")) {
            setTimeout(() => {
              child.classList.add("visiable");
            }, 100);
            return;
          }
          setTimeout(() => {
            child.classList.remove("visiable");
          }, 200);
        });
      }
    });
  });

  //Вызов и закрытие дочерних элементов второго порядка
  children.forEach(function (child) {
    child.addEventListener("click", () => {
      let grandchild = child.querySelectorAll(`.of${child.id}`);
      if (event.target === child) {
        grandchild.forEach((grand) => {
          if (!grand.classList.contains("visiable")) {
            setTimeout(() => {
              grand.classList.add("visiable");
            }, 100);
            return;
          }
          setTimeout(() => {
            grand.classList.remove("visiable");
          }, 200);
        });
      }
    });
  });
};
