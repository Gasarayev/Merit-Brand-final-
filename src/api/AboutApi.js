import { baseQuery } from "./api";

export const AboutApi = baseQuery.injectEndpoints({
  tagTypes: ["About"],
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => ({
        url: "/api/about",
        headers: {
          Accept: "application/json",
        },
      }),
      providesTags: ["About"],
    }),
    addAbout: builder.mutation({
      query: (about) => ({
        url: `/api/about`,
        method: "POST",
        body: about,
      }),
      invalidatesTags: ["About"],
    }),
    deleteAbout: builder.mutation({
      query: (aboutNumber) => ({
        url: `/api/about/${aboutNumber}`,
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      }),
      invalidatesTags: ["About"],
    }),
    editAbout: builder.mutation({
      query: (about) => ({
        url: `/api/about/${about.id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: about,
      }),
      invalidatesTags: ["About"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAboutQuery,
  useAddAboutMutation,
  useDeleteAboutMutation,
  useEditAboutMutation,
} = AboutApi;
