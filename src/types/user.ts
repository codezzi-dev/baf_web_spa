export interface User {
  id: string;           // Unique user ID
  name: string;         // Full name
  email: string;        // Email address
  createdAt?: string;   // Optional: ISO timestamp of creation
  updatedAt?: string;   // Optional: ISO timestamp of last update
}


export type UserInput = {
  name: string;
  email: string;
};