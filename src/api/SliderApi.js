import { baseQuery } from "./api";

export const SliderApi = baseQuery.injectEndpoints({
  tagTypes: ["Slider"],
  endpoints: (builder) => ({
    getSlider: builder.query({
      query: () => ({
        url: "/api/images",
        headers: {
          Accept: "application/json",
        },
      }),
      providesTags: ["Slider"],
    }),
    addSlider: builder.mutation({
      query: (slider) => ({
        url: `/api/images/upload`,
        method: "POST",
        body: slider,
      }),
      invalidatesTags: ["Slider"],
    }),
    deleteSlider: builder.mutation({
      query: (filename) => ({
        url: `/api/images/${filename}`,
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      }),
      invalidatesTags: ["Slider"],
    })
    
  }),
  overrideExisting: false,
});

export const {
  useGetSliderQuery,
  useAddSliderMutation,
  useDeleteSliderMutation,
} = SliderApi;
