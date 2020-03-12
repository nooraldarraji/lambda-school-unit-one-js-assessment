/*

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * Example ✅
 *
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
 */
function getName(character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name;
}

/**
 * ### Challenge `getFilmCount`
 * MVP Challenge 🤓
 *
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount(character) {
  // TODO: Add your code inside the functions (others below).
  return character.films.length;
}

/**
 * ### Challenge `getSecondStarshipName`
 * MVP Challenge 🤓
 *
 * @instructions
 * Return second starship's name from `starships` property.
 * If length is 0. Return 'none'
 */
function getSecondStarshipName(character) {
  return character.starships.length === 0
    ? "none"
    : character.starships[1].name;
}

/**
 * ### Challenge `getSummary`
 * MVP Challenge 🤓
 *
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
  // TODO: Add your code here.
  return `${character.name}, ${character.height}cm, ${
    character.mass
  }kg. Featured in ${character.films.length} films.`; //.map(e => e.starships.name[1]);
}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * MVP Challenge 🤓
 *
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
 */
function getVehiclesCostInCreditsSumTotal(character) {
  // TODO: Add your code here.
  return character.vehicles.reduce(
    (acc, item) => (acc = acc + item.cost_in_credits),
    0
  );
}

/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * MVP Challenge 🤓
 *
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
 */
function getStarshipPassengerAndCrewSumTotal(character) {
  // TODO: Add your code here.
  return character.starships.reduce(
    (acc, item) => (acc = acc + item.crew + item.passengers),
    0
  );
}

/**
 * ### Challenge `getNthFilm`
 * MVP Challenge 🤓
 *
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
 */
function getNthFilm(character, filmNumber) {
  // TODO: Add your code here.
  return character.films[filmNumber - 1];
  // return;
}

/**
 * ### Challenge `getCargoCapacityTotal`
 * Stretch Goal 💪
 *
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 * Some objects may not have a value for their cargo capacity.
 *
 * Sample data expected output: 80124
 */
function getCargoCapacityTotal(character) {
  //TODO: Add your code here.
  return (
    character.vehicles.reduce(
      (acc, item) => (acc = acc + Number(item.cargo_capacity)),
      0
    ) +
    character.starships.reduce(
      (acc, item) => (acc = acc + Number(item.cargo_capacity)),
      0
    )
  );
}

/**
 * ### Challenge `getFastestStarshipName`
 * Stretch Goal 💪
 *
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `X-wing`
 */
function getFastestStarshipName(character) {
  // TODO: Add your code here.
  if (character.starships.length < 1) {
    return "none";
  } else {
    let max_num = Math.max(
      ...character.starships.map(o => o.max_atmosphering_speed),
      0
    );
    for (let i in character.starships) {
      if (max_num === Number(character.starships[i].max_atmosphering_speed)) {
        return character.starships[i].name;
      }
    }
  }
}
// const getFastestStarshipName = character => {
// let maxSpeed = 0;
// let isNone = character.starships.length < 1 ? null : null;
// let maxSpeed = Math.max(
//   ...character.starships.map(o => o.max_atmosphering_speed)
// );
// return isNone
//   ? console.log("none")
//   : character.starships.map(x =>
//       maxSpeed.toString() === x.max_atmosphering_speed ? x.name : null
//     );
// };

/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * Stretch Goal 💪
 *
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
 */
function getLargestCargoStarshipModelName(character) {
  // TODO: Add your code here.
  if (character.starships.length < 1) {
    return "none";
  } else {
    let maxCargo = Math.max(
      ...character.starships.map(o => Number(o.cargo_capacity)),
      0
    );
    for (let i in character.starships) {
      if (maxCargo === Number(character.starships[i].cargo_capacity)) {
        return character.starships[i].model;
      }
    }
  }
}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 *Stretch Goal 💪
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
 */
function getSlowestVehicleOrStarshipName(character) {
  // TODO: Add your code here.
  if (character.starships.length < 1) {
    const slowestVehicle = Math.min(
      ...character.vehicles.map(o => Number(o.max_atmosphering_speed))
    );
    return character.vehicles
      .map(x =>
        Number(x.max_atmosphering_speed) === slowestVehicle
          ? x.name.toString()
          : null
      )
      .toString();
  } else if (character.starships.length < 1 && character.vehicles.length < 1) {
    return "none";
  } else {
    let slowestStarshipSpeed = Math.min(
      ...character.starships.map(o => Number(o.max_atmosphering_speed))
    );
    let slowestVehicleSpeed = Math.min(
      ...character.vehicles.map(o => Number(o.max_atmosphering_speed))
    );
    const slowestStarshipName = character.starships
      .map(x =>
        Number(x.max_atmosphering_speed) === slowestStarshipSpeed
          ? x.name
          : null
      )
      .toString()
      .replace(",", "");
    const slowestVehicleName = character.vehicles
      .map(x =>
        Number(x.max_atmosphering_speed) === slowestVehicleSpeed ? x.name : null
      )
      .toString()
      .replace(",", "");
    // .map() returns and array with a comma in it that's why I used these two methods
    return slowestStarshipSpeed > slowestVehicleSpeed
      ? slowestVehicleName
      : slowestStarshipName;
  }
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
// DO NOT CHANGE ANYTHING BELOW THIS LINE //
if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {};
  if (getName) {
    module.exports.getName = getName;
  }
  if (getFilmCount) {
    module.exports.getFilmCount = getFilmCount;
  }
  if (getSecondStarshipName) {
    module.exports.getSecondStarshipName = getSecondStarshipName;
  }
  if (getSummary) {
    module.exports.getSummary = getSummary;
  }
  if (getVehiclesCostInCreditsSumTotal) {
    module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal;
  }
  if (getStarshipPassengerAndCrewSumTotal) {
    module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal;
  }
  if (getNthFilm) {
    module.exports.getNthFilm = getNthFilm;
  }
  if (getCargoCapacityTotal) {
    module.exports.getCargoCapacityTotal = getCargoCapacityTotal;
  }
  if (getFastestStarshipName) {
    module.exports.getFastestStarshipName = getFastestStarshipName;
  }
  if (getLargestCargoStarshipModelName) {
    module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName;
  }
  if (getSlowestVehicleOrStarshipName) {
    module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName;
  }
}
