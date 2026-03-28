export interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
