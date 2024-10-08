const API_BASE_URL = "http://localhost:8000";

export const fetchCurrentUser = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/getme`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return response.json();
};

export const validateToken = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate`, {
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || "Error validating token");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in validateToken api-client:", error.message);
    throw error;
  }
};

export const fetchCurrentUserAdmin = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/getme`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return response.json();
};

export const SignIn = async (data) => {
  const { email, password } = data;

  const response = await fetch(`${API_BASE_URL}/api/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.msg || "Error signing in");
  }

  return response.json();
};

export const signUp = async (data) => {
  const { fullName, email, phoneNumber, password } = data;

  const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ fullName, email, phoneNumber, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.msg || "Error signing up");
  }

  return response.json();
};

export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.msg || "Error signing out");
  }
}

export const ForgotPassword = async (data) => {
  const { email } = data;
  const response = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email }),
  });
  if (!response.ok) {
    const errorData = await response.json();  
    throw new Error(errorData.msg || "Error resetting password");
  }
}

export const ResetPassword = async (data) => {
  const { token, newPassword } = data;
  const response = await fetch(`${API_BASE_URL}/api/auth/reset-password`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ token, newPassword }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.msg || "Error resetting password");
  }
}

export const getGamesLandingPage = async () => {
  const response = await fetch(`${API_BASE_URL}/api/games/fetch-games`);
  if (!response.ok) {
    throw new Error("Error fetching games");
  }
  return response.json();
}