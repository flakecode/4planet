export const variants = ["right-side-half-width"] as const;

export interface IModel {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: (typeof variants)[number];
}
