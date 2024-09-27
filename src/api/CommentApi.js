import { baseQuery } from "./api";

export const CommentApi = baseQuery.injectEndpoints({
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    getComment: builder.query({
      query: () => ({
        url: "/api/comments",
        headers: {
          Accept: "application/json",
        },
      }),
      providesTags: ["Comment"],
    }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: `/api/comments`,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comment"],
    }),
    deleteComment: builder.mutation({
      query: (commentNumber) => ({
        url: `/api/comments/${commentNumber}`,
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      }),
      invalidatesTags: ["Comment"],
    }),
    editComment: builder.mutation({
      query: (comment) => ({
        url: `/api/comments/${comment.number}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: comment,
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCommentQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
} = CommentApi;