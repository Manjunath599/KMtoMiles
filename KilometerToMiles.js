//Converting Kilometers to Miles

const conversion = (number)=>{
  let mile = 0.621371;
  let logic = Math.floor(number * mile);
  return console.log(logic);
}

conversion(68);