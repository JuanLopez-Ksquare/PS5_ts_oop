async function getInfo() {
  let data;
  let res = await fetch(
    "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json"
  );
  data = await res.json();

  //Work
  document.getElementById("worklabel").innerText = data[0].title;
  document.getElementById("worktimelabel").innerText =
    data[0].timeframes.weekly.current + " Hrs";
  document.getElementById("worklastweeklabel").innerText =
    "Last Day - " + data[0].timeframes.weekly.previous + "hrs";

  //Play
  document.getElementById("playlabel").innerText = data[1].title;
  document.getElementById("playtimelabel").innerText =
    data[1].timeframes.weekly.current + "Hrs";
  document.getElementById("playlastweeklabel").innerText =
    "Last Day - " + data[1].timeframes.weekly.previous + "hrs";

  //Study
  document.getElementById("studylabel").innerText = data[2].title;
  document.getElementById("studytimelabel").innerText =
    data[2].timeframes.weekly.current + "Hrs";
  document.getElementById("studylastweeklabel").innerText =
    "Last Day - " + data[2].timeframes.weekly.previous + "hrs";

  //Exercise
  document.getElementById("exerciselabel").innerText = data[3].title;
  document.getElementById("exercisetimelabel").innerText =
    data[3].timeframes.weekly.current + "Hrs";
  document.getElementById("exerciselastweeklabel").innerText =
    "Last Day - " + data[3].timeframes.weekly.previous + "hrs";

  //Social
  document.getElementById("sociallabel").innerText = data[4].title;
  document.getElementById("socialtimelabel").innerText =
    data[4].timeframes.weekly.current + "Hrs";
  document.getElementById("sociallastweeklabel").innerText =
    "Last Day - " + data[4].timeframes.weekly.previous + "hrs";

  //Selfcare
  document.getElementById("selfcarelabel").innerText = data[5].title;
  document.getElementById("selfcaretimelabel").innerText =
    data[5].timeframes.weekly.current + "Hrs";
  document.getElementById("selfcarelastweeklabel").innerText =
    "Last Day - " + data[5].timeframes.weekly.previous + "hrs";
}

function highlight(element) {
  document.getElementById("fake1").classList.remove("highlight");
  document.getElementById("fake2").classList.remove("highlight");
  document.getElementById("fake3").classList.remove("highlight");

  element.setAttribute("class", "highlight");
}

getInfo();
