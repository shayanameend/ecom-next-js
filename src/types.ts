export type ProductType = {
  id: string;
  pictureIds: string[];
  name: string;
  description: string;
  sku: string;
  stock: number;
  price: number;
  salePrice: number | null;
  isDeleted: boolean;
  categoryId: string;
  vendorId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CartType = {
  items: (ProductType & { quantity: number })[];
};

export type MetaType = {
  total: number;
  pages: number;
  limit: number;
  page: number;
};

export type InfoType = {
  message: string;
};
