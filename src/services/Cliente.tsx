import { Cliente } from "../types/Cliente";

export async function obtenerClientes(): Promise<Cliente[]> {
  try {
    const response = await fetch("URL_DE_TU_API_GETALL");
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function crearCliente(cliente: Partial<Cliente>): Promise<void> {
  try {
    const response = await fetch('URL_DE_TU_API_CREATE', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    });
    if (!response.ok) {
      throw new Error('Error al crear el cliente');
    }
  } catch (error) {
    throw new Error('Error al crear el cliente: ' + error);
  }
}
