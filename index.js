const obj = {
  func1: function () {
    console.log(this, "1");
  },
  func2: () => {
    console.log(this, "2");
  },
};

obj.func1();
obj.func2();
