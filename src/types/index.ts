export type LayoutProps = {
  children: React.ReactNode;
};

export type Navigation = {
  id: number;
  title: string;
  path: string;
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};
