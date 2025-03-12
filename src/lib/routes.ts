const api = {
  auth: {
    signUp: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`,
    },
    signIn: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`,
    },
    forgotPassword: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
    },
    resendOtp: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/auth/resend-otp`,
    },
    verifyOtp: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-otp`,
    },
    updatePassword: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/auth/update-password`,
    },
    refresh: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
    },
  },
  public: {
    categories: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/categories`,
    },
    vendors: {
      url: (id?: string) =>
        id
          ? `${process.env.NEXT_PUBLIC_API_URL}/vendors/${id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/vendors`,
    },
    products: {
      url: (id?: string) =>
        id
          ? `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/products`,
    },
    reviews: {
      url: (productId: string) =>
        `${process.env.NEXT_PUBLIC_API_URL}/reviews/${productId}`,
    },
    profile: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/profile`,
    },
  },
  admin: {
    profile: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/admin/profile`,
    },
    users: {
      url: (id?: string) =>
        id
          ? `${process.env.NEXT_PUBLIC_API_URL}/admin/users/${id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/admin/users`,
    },
    vendors: {
      url: (id?: string) =>
        id
          ? `${process.env.NEXT_PUBLIC_API_URL}/admin/vendors/${id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/admin/vendors`,
    },
    categories: {
      url: (id?: string) =>
        id
          ? `${process.env.NEXT_PUBLIC_API_URL}/admin/categories/${id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/admin/categories`,
    },
    products: {
      url: (id?: string) =>
        id
          ? `${process.env.NEXT_PUBLIC_API_URL}/admin/products/${id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/admin/products`,
    },
    orders: {
      url: (id?: string) =>
        id
          ? `${process.env.NEXT_PUBLIC_API_URL}/admin/orders/${id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/admin/orders`,
    },
  },
  vendor: {
    profile: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/vendor/profile`,
    },
    users: {
      url: (id?: string) =>
        id
          ? `${process.env.NEXT_PUBLIC_API_URL}/vendor/users/${id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/vendor/users`,
    },
    categories: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/vendor/categories`,
    },
    products: {
      url: (id?: string) =>
        id
          ? `${process.env.NEXT_PUBLIC_API_URL}/vendor/products/${id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/vendor/products`,
    },
    orders: {
      url: (id?: string) =>
        id
          ? `${process.env.NEXT_PUBLIC_API_URL}/vendor/orders/${id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/vendor/orders`,
    },
  },
  user: {
    profile: {
      url: () => `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    },
    orders: {
      url: (id?: string) =>
        id
          ? `${process.env.NEXT_PUBLIC_API_URL}/user/orders/${id}`
          : `${process.env.NEXT_PUBLIC_API_URL}/user/orders`,
    },
    reviews: {
      url: (orderId: string) =>
        `${process.env.NEXT_PUBLIC_API_URL}/user/reviews/${orderId}`,
    },
  },
};

const app = {
  auth: {
    signUp: {
      url: () => "/auth/sign-up",
      label: "Sign Up",
    },
    signIn: {
      url: () => "/auth/sign-in",
      label: "Sign In",
    },
    forgotPassword: {
      url: () => "/auth/forgot-password",
      label: "Forgot Password",
    },
    resendOtp: {
      url: () => "/auth/resend-otp",
      label: "Resend OTP",
    },
    verifyOtp: {
      url: () => "/auth/verify-otp",
      label: "Verify OTP",
    },
    updatePassword: {
      url: () => "/auth/update-password",
      label: "Update Password",
    },
    refresh: {
      url: () => "/auth/refresh",
      label: "Refresh",
    },
  },
  public: {
    root: {
      url: () => "/",
      label: "Home",
    },
    marketplace: {
      url: (id?: string) => (id ? `/marketplace/${id}` : "/marketplace"),
      label: "Marketplace",
    },
    vendors: {
      url: (id?: string) => (id ? `/vendors/${id}` : "/vendors"),
      label: "Vendors",
    },
    community: {
      url: () => "/community",
      label: "Community",
    },
    contact: {
      url: () => "/contact",
      label: "Contact",
    },
  },
  protected: {
    profile: {
      url: () => "/profile",
      label: "Profile",
    },
  },
};

export const routes = {
  api,
  app,
};
