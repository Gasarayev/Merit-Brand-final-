import { baseQuery } from "./api";

export const SliderApi = baseQuery.injectEndpoints({
  tagTypes: ["Slider"],
  endpoints: (builder) => ({
    getSlider: builder.query({
      query: () => ({
        url: "/api/slider",
        headers: {
          Accept: "application/json",
        },
      }),
      providesTags: ["Slider"],
    }),
    addSlider: builder.mutation({
      query: (slider) => ({
        url: `/api/slider`,
        method: "POST",
        body: slider,
      }),
      invalidatesTags: ["Slider"],
    }),
    deleteSlider: builder.mutation({
      query: (sliderNumber) => ({
        url: `/api/slider/${sliderNumber}`,
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
