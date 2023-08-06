function handleRadioClick(radio) {
  document.querySelectorAll(".radioDiv").forEach((element) => {
    element.classList.remove("showDescription");
  });
  document.querySelector(".finalPayment").style.pointerEvents = "all";
  document.querySelector("." + radio).classList.add("showDescription");
  if (radio === "one") {
    document.querySelector(".total span").innerHTML = "195";
  } else if (radio === "two") {
    document.querySelector(".total span").innerHTML = "345";
  } else {
    document.querySelector(".total span").innerHTML = "548";
  }
}
