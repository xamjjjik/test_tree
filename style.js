let parents = document.querySelectorAll(".parent");
let children = document.querySelectorAll(".child");
// console.log(children);

parents.forEach(function (parent) {
  console.log("pidoras");
  parent.addEventListener("click", console.log("penis"));
  //   parent.addEventListener("click", () => {
  //     let firstChildren = parent.querySelectorAll(`.of${parent.id}`);
  //     firstChildren.forEach((child) => {
  //       if (!child.classList.contains("visiable")) {
  //         setTimeout(() => {
  //           child.classList.add("visiable");
  //         }, 1000);
  //         return;
  //       }
  //       setTimeout(() => {
  //         child.classList.remove("visiable");
  //       }, 20000);
  //     });
  //   });
});

children.forEach(function (child) {
  child.addEventListener("click", () => {
    let grandchild = child.querySelectorAll(`.of${child.id}`);

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
  });
});
