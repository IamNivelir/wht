import { STATUS_LANDED, STATUS_ON_SCHEDULE, STATUS_DELAYED } from "./constants";

const PROVIDERS = ["Ryanair", "Lufthanza", "MAV"];
const COUNTRIES = [
  "Cyprus",
  "Czeck Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Europa Island",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "Antarctic Lands",
  "Gabon",
  "Gambia, The",
  "Gaza Strip",
  "Georgia",
  "Germany",
  "Ghana",
];
const STATUSES = [STATUS_DELAYED, STATUS_ON_SCHEDULE, STATUS_LANDED];

// Get random item from provided array
const getRandom = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

// Generate random port code with 2 alphabetical characters and 4 digits pattern
const getRandomPortCode = () => {
  return (
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 2)
      .toUpperCase() +
    (Math.floor(Math.random() * 9999) + 1000)
  );
};

// Function generates flight dummy data
export const flightDummyDataGenerator = (numberOfFlights) => {
  const list = [];

  for (let i = 0; i < numberOfFlights; i++) {
    const startTime = new Date(
      +new Date() + Math.floor(Math.random() * 24 * 60 * 60 * 1000)
    );
    const endTime = new Date(startTime.getTime() + 4 * 60 * 60 * 1000);
    list.push({
      id: i,
      flightCode: getRandomPortCode(),
      flightProvider: getRandom(PROVIDERS),
      sourcePortName: getRandom(COUNTRIES),
      sourcePortCode: getRandomPortCode(),
      destinationPortName: getRandom(COUNTRIES),
      destinationPortCode: getRandomPortCode(),
      scheduledArrival: startTime,
      scheduledDeparture: endTime,
      status: getRandom(STATUSES),
    });
  }

  return list;
};
