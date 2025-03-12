export type CartType = {
  items: (ProductType & { quantity: number })[];
};

export type CategoryType = {
  status: CategoryStatus;
  id: string;
  name: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type VendorType = {
  id: string;
  pictureId: string;
  name: string;
  description: string;
  phone: string;
  postalCode: string;
  city: string;
  pickupAddress: string;
  createdAt: Date;
  updatedAt: Date;
};

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

export enum CategoryStatus {
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  APPROVED = "APPROVED",
}

export type MetaType = {
  total: number;
  pages: number;
  limit: number;
  page: number;
};

export type InfoType = {
  message: string;
};
