import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export async function fetchCountriesByRegion(region) {
  try {
    if (region === "All") {
      // Return all countries if region is "All"
      const response = await axios.get(`${apiBaseUrl}all`);
      return response.data;
    } else {
      // Return countries filtered by region
      const response = await axios.get(`${apiBaseUrl}region/${region}`);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

export async function fetchAllCountries() {
  try {
    const response = await axios.get(`${apiBaseUrl}all`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function searchCountriesByName(name) {
  try {
    const response = await axios.get(`${apiBaseUrl}name/${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCountryDetailsByCode(countryCode) {
  try {
    const response = await axios.get(`${apiBaseUrl}alpha/${countryCode}`);
    return response.data[0];
  } catch (error) {
    throw error;
  }
}
