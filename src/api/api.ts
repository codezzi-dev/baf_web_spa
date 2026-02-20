const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://musnadcodezzi-001-site1.rtempurl.com/api";

async function request<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  // Try to parse JSON safely
  const responseBody = await res.json().catch(() => null);

  if (res.status >= 500) {
    throw new Error(responseBody?.message || "Server error. Please try again.");
  }

  if (!res.ok) {
    console.log("API Error Response:", responseBody?.errors);
    throw new Error(
      responseBody?.message ||
      responseBody?.errors?.[0] ||
      JSON.stringify(responseBody?.errors) ||
      "Something went wrong"
    );
  }

  return responseBody as T;
}

export default request;
