import { baseQuery } from "./api";

export const ProductsApi = baseQuery.injectEndpoints({
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/api/products",
        headers: {
          Accept: "application/json",
        },
      }),
      providesTags: ["Products"],
    }),
    addProducts: builder.mutation({
      query: (products) => ({
        url: `/api/products`,
        method: "POST",
        body: products,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProducts: builder.mutation({
      query: (productNumber) => ({
        url: `/api/products/${productNumber}`,
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      }),
      invalidatesTags: ["Products"],
    }),
    editProducts: builder.mutation({
      query: (product) => ({
        url: `/api/product/${product.number}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductsQuery,
  useAddProductsMutation,
  useDeleteProductsMutation,
  useEditProductsMutation,
} = ProductsApi;