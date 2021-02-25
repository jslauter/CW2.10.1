function getDrinkByProfession(param){
  let lower = param.toLowerCase()
  let first = lower[0].toUpperCase() + lower.slice(1)
  
  switch(first){
    case "Jabroni":
      return "Patron Tequila"
      break;
    case "School Counselor":
      return "Anything with Alcohol"
      break;
    case "Programmer":
      return "Hipster Craft Beer"
      break;
    case "Bike Gang Member":
      return "Moonshine"
      break;
    case "Politician":
      "Your tax dollars"
      break;
    case "Rapper":
      "Cristal"
      break;
    default: "Beer";
  }

}
