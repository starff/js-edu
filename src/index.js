/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
  ) {
      if (knowsProgramming == true) { // вся загвоздка была в задании, а именно то, что неподготовленному человеку нужно 1300ч. Цифры в обьекте конфиг, это часы в неделю
        return Math.ceil(800 / config[focus]);
      } else {
        return Math.ceil(1300 / config[focus]);
      };
  };   
 