export async function loginUser(email: string, password: string): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const response = await fetch("https://firealarm.ccontrolz.com/usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email,
        Contrasena: password,
      }),
    });
    if (response.ok) {
      return { success: true, data: await response.json() };
    } else {
      return { success: false, error: "Login failed" };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
