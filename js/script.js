/** @format */
let nav = document.getElementsByTagName("nav")[0];
let openMenu = document.querySelector(".open_menu");
let closeMenu = document.querySelector(".close_menu");

openMenu.addEventListener("click", () => {
  nav.classList.add("navbarr_Js");
  openMenu.classList.add("close_menu_js_effet");
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("navbarr_Js");
  openMenu.classList.remove("close_menu_js_effet");
});
/******************************links****************** */
let links = document.querySelectorAll(".link");
for (let z = 0; z < links.length; z++) {
  links[z].addEventListener("click", () => {
    nav.classList.remove("navbarr_Js");
    openMenu.classList.remove("close_menu_js_effet");
  });
}

/*******************les effet au survol dans lr bloc sevive************************************** */
let bloc_service = document.querySelectorAll(".bloc_service");
for (let y = 0; y < bloc_service.length; y++) {
  bloc_service[y].addEventListener("mouseover", () => {
    bloc_service[y].classList.add("master_bloc_section_div_js");
  });
  bloc_service[y].addEventListener("mouseout", () => {
    bloc_service[y].classList.remove("master_bloc_section_div_js");
  });
}

/********************************************************************************************* */
let temoignage_client = document.querySelectorAll(".temoignage_client");
for (let i = 0; i < temoignage_client.length; i++) {
  temoignage_client[i].addEventListener("mouseover", () => {
    temoignage_client[i].classList.add("article_bloc_temoignage_div_js");
  });

  temoignage_client[i].addEventListener("mouseout", () => {
    temoignage_client[i].classList.remove("article_bloc_temoignage_div_js");
  });
}