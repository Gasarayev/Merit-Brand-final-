import { baseQuery } from "./api";

export const CategoryApi = baseQuery.injectEndpoints({
  tagTypes: ["CategoryApi"],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/api/categories",
        headers: {
          Accept: "application/json",
        },
      }),
      providesTags: ["CategoryApi"],
    }),
    addCategory: builder.mutation({
      query: (categories) => ({
        url: `/api/categories`,
        method: "POST",
        body: categories,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: (categoriesNumber) => ({
        url: `/api/categories/${categoriesNumber}`,
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      }),
      invalidatesTags: ["Category"],
    }),
    editCategory: builder.mutation({
      query: (categories) => ({
        url: `/api/categories/${categories.number}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: student,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
} = CategoryApi;
