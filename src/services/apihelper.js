// apiHelper.js
const apiUrl = process.env.REACT_APP_API_URL;  // Get API URL from .env

// Helper function for making POST requests
export const apifetch = async (endpoint, data) => {
  try {
    const response = await fetch(`${apiUrl}api/users/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error; // rethrow to be handled by the calling function
  }
};

// Add other helper functions like GET, PUT, DELETE if needed
