class CSES {
  constructor() {}
  async computeRating() {
    await this.getRatings();
    console.log(this.ratings);
    let problems;
    problems = document.querySelectorAll("[href*='/problemset/task/']");
    console.log("problems");

    for (let i = 0; i < problems.length; i++) {
      let rating = await this.findRating(problems[i]); // this would come from API
      // let rating = "100";
      const para = document.createElement("rating" + i);
      const node = document.createTextNode(`(${rating})`);
      para.appendChild(node);
      para.className = "rating";
      problems[i].parentElement.appendChild(para);
    }
  }

  async findRating(problemTag) {
    for (let i = 0; i < this.ratings.length; i++) {
      if (
        this.ratings[i].problem[
          problemTag.parentElement.parentElement.previousElementSibling
            .innerText
        ] !== undefined
      ) {
        if (
          this.ratings[i].problem[
            problemTag.parentElement.parentElement.previousElementSibling
              .innerText
          ][problemTag.innerText] !== undefined
        )
          return this.ratings[i].problem[
            problemTag.parentElement.parentElement.previousElementSibling
              .innerText
          ][problemTag.innerText];
      }
    }
    return "Not Found";
  }

  async getRatings() {
    const url =
      "https://cses-extensiona-code-daily.1955-1616.repl.co/api/v1/problem/all";
    const res = await fetch(url).then((result) => result.json());
    console.log(res);
    this.ratings = res.getAllProblem;
  }
}

setTimeout(() => {
  const cses = new CSES();
  cses.computeRating();
}, 1000);
