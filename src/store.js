import { reactive } from "vue";

export const store = reactive(
    {
        search: "",
        filmList: [],
        tvShowList: [],
        baseImg: "https://image.tmdb.org/t/p/w500/"
    }
);