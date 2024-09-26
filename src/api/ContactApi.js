import { baseQuery } from "./api";

export const ContactApi = baseQuery.injectEndpoints({
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => ({
        url: "/api/contacts",
        headers: {
          Accept: "application/json",
        },
      }),
      providesTags: ["Contact"],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: `/api/contacts`,
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (contactNumber) => ({
        url: `/api/contacts/${contactNumber}`,
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      }),
      invalidatesTags: ["Contact"],
    }),
    editContact: builder.mutation({
      query: (contact) => ({
        url: `/api/contacts/${contact.number}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: contact,
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = ContactApi;
