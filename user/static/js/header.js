var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "385px";

function togglemenu(){
  if(menuList.style.maxHeight == "0px")
  {
    menuList.style.maxHeight = "385px";
  }
  else
  {
    menuList.style.maxHeight = "0px";
  }
}