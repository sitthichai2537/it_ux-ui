const data = [
  { name: "sitthichai", last: "somchai", age: 30 },
  { name: "ananda", last: "chaiyaporn", age: 25 },
  { name: "kittipong", last: "sukjai", age: 28 },
  { name: "narong", last: "boonmee", age: 35 },
  { name: "thanakorn", last: "wongsa", age: 22 },
  { name: "preecha", last: "saelim", age: 40 },
  { name: "wirat", last: "intarapong", age: 27 },
  { name: "sakda", last: "manee", age: 33 },
  { name: "chaiwat", last: "kongsri", age: 29 },
  { name: "phongchai", last: "yindee", age: 31 },
  { name: "somsak", last: "rattanakul", age: 45 },
  { name: "krit", last: "thongdee", age: 26 },
  { name: "nattapong", last: "sriphan", age: 34 },
  { name: "jakrapong", last: "luangchai", age: 38 },
  { name: "teerapat", last: "sangchai", age: 24 },
  { name: "montree", last: "pradit", age: 41 },
  { name: "ekachai", last: "kaewka", age: 36 },
  { name: "veerachai", last: "saothong", age: 32 },
  { name: "apichai", last: "khamdee", age: 23 },
  { name: "surachai", last: "phrommai", age: 39 },
];

// data.forEach((x) => console.log(x));

data.forEach((x) => {
  //   if (x.age > 30) {
  //     console.log("name :" + x.name + " -> arg : " + x.age);
  //   }

  const age = x.age - 1;
  console.log("name :" + x.name + " -> arg : " + x.age);
});

// filter

// const x = data
//   .filter((x) => {
//     return x.age > 30;
//   })
//   .sort((a, b) => {
//     return a.age-b.age
//   });

const x = data.filter((x) => {
  return x.age > 30;
});

x.sort((a, b) => {
  return a.age - b.age;
});

console.log("agr > 30 ", x);

const res = x.find((x) => {
  return x.name === "sakda";
});

console.log("res -> ", res);
