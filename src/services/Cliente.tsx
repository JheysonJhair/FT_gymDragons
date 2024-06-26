import { Cliente } from "../types/Cliente";

interface ApiResponseAll {
  msg: string;
  success: boolean;
  data: Cliente[];
}
interface ApiResponse {
  msg: string;
  success: boolean;
  data: Cliente;
}
export async function obtenerClientes(): Promise<Cliente[]> {
  try {
    const response = await fetch("https://zonafitbk.ccontrolz.com/api/client");
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const responseData: ApiResponseAll = await response.json();
    if (!responseData.success) {
      throw new Error(responseData.msg);
    }
    return responseData.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function crearCliente(cliente: Partial<Cliente>): Promise<void> {
  try {
    const response = await fetch("https://zonafitbk.ccontrolz.com/api/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    });
    if (!response.ok) {
      throw new Error("Error al crear el cliente");
    }
  } catch (error) {
    throw new Error("Error al crear el cliente: " + error);
  }
}

export async function eliminarCliente(clienteId: number): Promise<void> {
  try {
    const url = `https://zonafitbk.ccontrolz.com/api/client/${clienteId}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar el cliente");
    }
  } catch (error) {
    throw new Error("Error al eliminar el cliente: " + error);
  }
}

export async function obtenerClientePorDNI(
  dni: string
): Promise<Cliente | null> {
  try {
    const url = `https://zonafitbk.ccontrolz.com/api/client/dni/${dni}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener los datos del cliente por DNI");
    }
    const responseData: ApiResponse = await response.json();
    if (!responseData.success || !responseData.data) {
      throw new Error(
        responseData.msg || "Error al obtener los datos del cliente"
      );
    }
    return responseData.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function obtenerClientePorID(
  clienteId: number
): Promise<Cliente | null> {
  try {
    const url = `https://zonafitbk.ccontrolz.com/api/client/${clienteId}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener los datos del cliente por ID");
    }
    const responseData: ApiResponse = await response.json();
    if (!responseData.success || !responseData.data) {
      throw new Error(
        responseData.msg || "Error al obtener los datos del cliente"
      );
    }
    return responseData.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
