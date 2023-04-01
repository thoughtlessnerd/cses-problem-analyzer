let problems;
let solvedProblems = 0;
problems = document.querySelectorAll("[href*='/problemset/task/']");
console.log("problems");
for (let i = 0; i < problems.length; i++) {
  if (
    problems[i].nextElementSibling.nextElementSibling.classList.contains("full")
  )
    solvedProblems++;
}

// saving in the same storage as the api
setTimeout(() => {
  chrome.storage.sync.set(
    { countSolved: solvedProblems, countAll: problems.length },
    function () {
      console.log("saved");
    }
  );
}, 500);
