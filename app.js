const openTab = (et, tabName) => {
  let i, tabcontent, links;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  links = document.getElementsByClassName("links");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "flex";
  et.currentTarget.className += " active";
};

const initTabs = () => {
  const firstBtn = document.querySelector(".tab .links");
  firstBtn.classList.add("active");

  const secondTab = document.getElementById("speedy");
  const thirdTab = document.getElementById("easy");
  secondTab.style.display = "none";
  thirdTab.style.display = "none";
};

document.addEventListener("DOMContentLoaded", initTabs);
