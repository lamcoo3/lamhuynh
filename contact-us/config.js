function myFunction() {
  let elmMenu = document.getElementById("menu");
  let elmSectionContact = document.getElementById("contact");
  let elmHeader = document.getElementById("header");
  let elmMenuIcon = document.getElementById("menu-icon");
  let elmLogo = document.getElementById("header-logo");
  let elmInfo = document.getElementById("header-info");

  if (elmMenu.style.display === "block") {
    elmMenu.style.display = "none";
    elmSectionContact.style.marginTop = "0px";
    elmInfo.style.display = "none";
    elmHeader.style.backgroundColor = "#FFF";
    elmLogo.style.color = "#000";
    elmMenuIcon.style.color = "#000";

  } else {
    elmMenu.style.display = "block";
    elmSectionContact.style.marginTop = "170px";
    elmHeader.style.backgroundColor = "#012537";
    elmMenuIcon.style.color = "#FFFFFF";
    elmLogo.style.color = "#FFF";
    elmInfo.style.display = "flex";
  }
}