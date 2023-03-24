class CSES {
  constructor() {}
  computeRating() {
    let problems;
    problems = document.querySelectorAll("[href*='/problemset/task/']");

    for (let i = 0; i < problems.length; i++) {
      let rating = "1200"; // this would come from API
      const para = document.createElement("rating" + i);
      const node = document.createTextNode(`(${rating})`);
      para.appendChild(node);
      para.className = "rating";
      problems[i].parentElement.appendChild(para);
    }
  }

  findRating(problemName) {
    const url = "";
    const res = fetch(url, { method: "POST", body: problemName });
    // from response we get rating and then we return it
  }
}

setTimeout(() => {
  const cses = new CSES();
  cses.computeRating();
}, 1000);
