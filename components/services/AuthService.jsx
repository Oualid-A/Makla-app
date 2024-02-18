import { environment } from "../../environnement"

const BASE_URL = environment.url_api;

// login
export const login = async (email, password) => {
  console.log(email, password)
  const response = await fetch(`http://192.168.56.1:8082/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  console.log(response)
  if (response.ok) {
    return response
  }
}
// register
export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })

  return response
}

// getUser by email and token
export const getUserByEmail = async (email, token) => {
  let user = null;
  try {
    const response = await fetch(`${BASE_URL}/user/ByEmail`, {
    method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email: email }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server responded with status ${response.status}: ${errorText}`);
    }

    user = await response.json();
  } catch (error) {
    console.error("Error getting user by email:", error.message);
  }
  return user;
};


// edit infos
export const updateInfos = async (infos, token) => {
  try {
    console.log(infos)
    const response = await fetch(`${BASE_URL}/user/update`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(infos),
    })
    console.log(response)
    if (response !== null) return response
  } catch (error) {
    console.log("Erreur de modification des informations : ", error)
  }
}
