export const GET_CLIENT = `
query Get_Client($id: ID!) {
  client(id: $id) {
    id
    name
    email
    phone
  }
}
`;

export const GET_CLIENTS = `
query Get_all_data{
  clients{
    id
    name
    email
    phone
  }
}
`;

export const Input_client = `
mutation input_client($name:String!, $email:String!, $phone:String!){
  addClient(name:$name, email:$email,phone:$phone){
    name
    email
    phone
  }
}
`;

export const delete_client = `
   mutation deletebyid($id:ID!){
  deleteClient(id:$id){
    id
    name
     email
    phone
  }
}
`;

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface singleClient {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Clients {
  clients: Client[];
}

export interface delete_client {
  deleteclient: Client;
}

export interface create_credentials {
  name: string;
  email: string;
  phone: string;
}

export interface create_response {
  clientresponse: Client;
}
