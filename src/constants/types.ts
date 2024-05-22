export interface ContactFormType {
  name: string;
  email: string;
  message: string;
}

export type ContactFormState = "idle" | "text" | "fail";

export interface SongType {
  title: string;
  artist: string;
}

export type FormLoadingState = "init" | "loading" | "fail" | "success";
