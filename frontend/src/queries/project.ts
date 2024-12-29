import { Client } from "./client";

export const Find_project = `
query find_project($id:ID!){
    project(id:$id){
      id
      name
      description
      status
      client{
        id
        name
        email
        phone
      }
    }
  }
`;

export const All_PROJECT = `query{
    projects{
       id
      name
      description
      status
      client{
        id
        name
        email
        phone
      }
    }
  }
`;

export const DEL_PROJECT = `
mutation delete_project($id:ID!){
    deleteProject(id:$id){
      id
      description
    }
  }
`;

export interface getproject {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  client?: Client;
}

export interface deleteproject {
  id: string;
  description: string;
}
