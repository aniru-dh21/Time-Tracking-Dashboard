const dailyBtn = document.querySelector(".daily-para");
const weeklyBtn = document.querySelector(".weekly-para");
const monthlyBtn = document.querySelector(".monthly-para");
const themeCardAll = document.querySelectorAll(".theme-card");
const cardWork = document.querySelector(".card-1");
const cardPlay = document.querySelector(".card-2");
const cardStudy = document.querySelector(".card-3");
const cardExercise = document.querySelector(".card-4");
const cardSocial = document.querySelector(".card-5");
const cardSelfCare = document.querySelector(".card-6");
const ellipsisIconWork = document.querySelector(".card-work");
const ellipsisIconPlay = document.querySelector(".card-play");
const ellipsisIconStudy = document.querySelector(".card-study");
const ellipsisIconExercise = document.querySelector(".card-exercise");
const ellipsisIconSocial = document.querySelector(".card-social");
const ellipsisIconSelfCare = document.querySelector(".card-self-care");
const dataCard = document.querySelectorAll(".data-card");
let paraCurrent = document.querySelectorAll("p.para-current");
let spanPrevious = document.querySelectorAll(".span-previous");

async function requestData() {
    const response = await fetch("./data.json");
    const data = await response.json();
  
    dailyBtn.addEventListener("click", (event) => {
      themeCardAll.forEach((element) => {
        for (let i = 0; i < data.length; i++) {
          paraCurrent[i].textContent =
            data[i].timeframes.daily.current +
            (data[i].timeframes.daily.current > 1 ? "hrs" : "hr");
          spanPrevious[i].textContent =
            "Yesterday - " +
            data[i].timeframes.daily.previous +
            (data[i].timeframes.daily.previous > 1 ? "hrs" : "hr");
        }
      });
      changeActive(dailyBtn, weeklyBtn, monthlyBtn);
      event.preventDefault();
    });
    weeklyBtn.addEventListener("click", (event) => {
      themeCardAll.forEach((element) => {
        for (let i = 0; i < data.length; i++) {
          paraCurrent[i].textContent = data[i].timeframes.weekly.current + "hrs";
          spanPrevious[i].textContent =
            "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
        }
      });
      changeActive(weeklyBtn, monthlyBtn, dailyBtn);
      event.preventDefault();
    });
    monthlyBtn.addEventListener("click", (event) => {
      themeCardAll.forEach((element) => {
        for (let i = 0; i < data.length; i++) {
          paraCurrent[i].textContent = data[i].timeframes.monthly.current + "hrs";
          spanPrevious[i].textContent =
            "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
        }
      });
      changeActive(monthlyBtn, weeklyBtn, dailyBtn);
      event.preventDefault();
    });
  }
  
  requestData();
  
  function changeActive(element, previousActive1, previousActive2) {
    previousActive1.classList.remove("active");
    previousActive2.classList.remove("active");
    element.classList.add("active");
  }
  
  
  function extraInfo() {
    let closedWork = false;
    let closedPlay = false;
    let closedStudy = false;
    let closedExercise = false;
    let closedSocial = false;
    let closedSelfCare = false;
  
    ellipsisIconWork.addEventListener("click", () => {
      if (!closedWork) {
        cardWork.classList.remove("hidden");
        dataCard[0].classList.remove("border-radius");
        dataCard[0].classList.add("border-top-radius");
        closedWork = true;
      } else {
        cardWork.classList.add("hidden");
        dataCard[0].classList.add("border-radius");
        dataCard[0].classList.remove("border-top-radius");
        closedWork = false;
      }
    });
    ellipsisIconPlay.addEventListener("click", () => {
      if (!closedPlay) {
        cardPlay.classList.remove("hidden");
        dataCard[1].classList.remove("border-radius");
        dataCard[1].classList.add("border-top-radius");
        closedPlay = true;
      } else {
        cardPlay.classList.add("hidden");
        dataCard[1].classList.add("border-radius");
        dataCard[1].classList.remove("border-top-radius");
        closedPlay = false;
      }
    });
    ellipsisIconStudy.addEventListener("click", () => {
      if (!closedStudy) {
        cardStudy.classList.remove("hidden");
        dataCard[2].classList.remove("border-radius");
        dataCard[2].classList.add("border-top-radius");
        closedStudy = true;
      } else {
        cardStudy.classList.add("hidden");
        dataCard[2].classList.add("border-radius");
        dataCard[2].classList.remove("border-top-radius");
        closedStudy = false;
      }
    });
    ellipsisIconExercise.addEventListener("click", () => {
      if (!closedExercise) {
        cardExercise.classList.remove("hidden");
        dataCard[3].classList.remove("border-radius");
        dataCard[3].classList.add("border-top-radius");
        closedExercise = true;
      } else {
        cardExercise.classList.add("hidden");
        dataCard[3].classList.add("border-radius");
        dataCard[3].classList.remove("border-top-radius");
        closedExercise = false;
      }
    });
    ellipsisIconSocial.addEventListener("click", () => {
      if (!closedSocial) {
        cardSocial.classList.remove("hidden");
        dataCard[4].classList.remove("border-radius");
        dataCard[4].classList.add("border-top-radius");
        closedSocial = true;
      } else {
        cardSocial.classList.add("hidden");
        dataCard[4].classList.add("border-radius");
        dataCard[4].classList.remove("border-top-radius");
        closedSocial = false;
      }
    });
    ellipsisIconSelfCare.addEventListener("click", () => {
      if (!closedSelfCare) {
        cardSelfCare.classList.remove("hidden");
        dataCard[5].classList.remove("border-radius");
        dataCard[5].classList.add("border-top-radius");
        closedSelfCare = true;
      } else {
        cardSelfCare.classList.add("hidden");
        dataCard[5].classList.add("border-radius");
        dataCard[5].classList.remove("border-top-radius");
        closedSelfCare = false;
      }
    });
  }
  
  extraInfo();
  