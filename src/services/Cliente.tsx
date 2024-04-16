import { allCliente, Cliente } from "../types/Cliente";

interface ApiResponse {
  msg: string;
  success: boolean;
  data: allCliente[];
}

export async function obtenerClientes(): Promise<allCliente[]> {
  try {
    const response = await fetch("https://zonafitbk.ccontrolz.com/api/client");
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const responseData: ApiResponse = await response.json();
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
    const response = await fetch('https://zonafitbk.ccontrolz.com/api/client', {
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

export async function eliminarCliente(clienteId: number): Promise<void> {
  try {
    const url = `https://zonafitbk.ccontrolz.com/api/client/${clienteId}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar el cliente');
    }
  } catch (error) {
    throw new Error('Error al eliminar el cliente: ' + error);
  }
}
