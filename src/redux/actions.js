const url =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

export const addCar = (car) => {
  return {
    type: "ADD_CAR",
    value: car,
  };
};

export const removeCar = (index) => {
  return {
    type: "REMOVE_CAR",
    value: index,
  };
};

export const fetchMakes = () => {
  return async (dispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({
      type: "FETCH_MAKES",
      value: data.Results,
    });
  };
};

export const deleteMakes = (index) => {
  return {
    type: "DELETE_MAKES",
    value: index,
  };
};
