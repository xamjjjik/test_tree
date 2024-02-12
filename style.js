document.addEventListener("DOMContentLoaded", function () {
  let parents = document.querySelectorAll(".parent");
  let children = document.querySelectorAll(".child");

  parents.forEach(function (parent) {
    parent.addEventListener("click", function () {
      let firstChildren = parent.querySelectorAll(`.of${parent.id}`);
      firstChildren.forEach(function (child) {
        if (child.style.display == "list-item") {
          setTimeout(function () {
            child.style.display = "none";
          }, 100);
          return;
        }
        setTimeout(function () {
          child.style.display = "list-item";
        }, 200);
      });
    });
  });

  children.forEach(function (child) {
    child.addEventListener("mouseover", function () {
      console.log(child);
      let grandchildren = child.querySelectorAll(`.of${children.id}`);
      grandchildren.forEach(function (grand) {
        if (grand.style.display == "list-item") {
          setTimeout(function () {
            grand.style.display = "none";
          }, 100);
          return;
        }
        setTimeout(function () {
          grand.style.display = "list-item";
        }, 200);
      });
    });
  });
});
