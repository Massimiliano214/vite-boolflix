import { reactive } from "vue";

export const store = reactive(
    {
        search: "",
        filmList: [],
        tvShowList: [],
        castListFilm: [],
        castListTv: [],
        
    }
);