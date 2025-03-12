const api = {
  auth: {
    signUp: {
      url: () => "/auth/sign-up",
    },
    signIn: {
      url: () => "/auth/sign-in",
    },
    forgotPassword: {
      url: () => "/auth/forgot-password",
    },
    resendOtp: {
      url: () => "/auth/resend-otp",
    },
    verifyOtp: {
      url: () => "/auth/verify-otp",
    },
    updatePassword: {
      url: () => "/auth/update-password",
    },
    refresh: {
      url: () => "/auth/refresh",
    },
  },
  public: {
    categories: {
      url: () => "/categories",
    },
    vendors: {
      url: (id?: string) => (id ? "/vendors" : `/vendors/${id}`),
    },
    products: {
      url: (id?: string) => (id ? "/products" : `/products/${id}`),
    },
    reviews: {
      url: (productId: string) => `/reviews/${productId}`,
    },
    profile: {
      url: () => "/profile",
    },
  },
  admin: {
    profile: {
      url: () => "/admin/profile",
    },
    users: {
      url: (id?: string) => (id ? "/admin/users" : `/admin/users/${id}`),
    },
    vendors: {
      url: (id?: string) => (id ? "/admin/vendors" : `/admin/vendors/${id}`),
    },
    categories: {
      url: (id?: string) =>
        id ? "/admin/categories" : `/admin/categories/${id}`,
    },
    products: {
      url: (id?: string) => (id ? "/admin/products" : `/admin/products/${id}`),
    },
    orders: {
      url: (id?: string) => (id ? "/admin/orders" : `/admin/orders/${id}`),
    },
  },
  vendor: {
    profile: {
      url: () => "/vendor/profile",
    },
    users: {
      url: (id?: string) => (id ? "/vendor/users" : `/vendor/users/${id}`),
    },
    categories: {
      url: () => "/vendor/categories",
    },
    products: {
      url: (id?: string) =>
        id ? "/vendor/products" : `/vendor/products/${id}`,
    },
    orders: {
      url: (id?: string) => (id ? "/vendor/orders" : `/vendor/orders/${id}`),
    },
  },
  user: {
    profile: {
      url: () => "/user/profile",
    },
    orders: {
      url: (id?: string) => (id ? "/user/orders" : `/user/orders/${id}`),
    },
    reviews: {
      url: (orderId: string) => `/user/reviews/${orderId}`,
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
      url: () => "/marketplace",
      label: "Marketplace",
    },
    vendors: {
      url: () => "/vendors",
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
