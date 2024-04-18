import { IconHome, IconNowPlaying, IconPopular, IconTopRated, IconUpcoming } from "@assets/icons";
import { menuInterface } from "@interfaces/menuInterface";

export const dataMenu: menuInterface[] = [
    { path: "/", icon: IconHome, name: "Home" },
    { path: "/popular", icon: IconPopular, name: "Popular" },
    { path: "/now-playing", icon: IconNowPlaying, name: "Now Playing" },
    { path: "/top-rated", icon: IconTopRated, name: "Top Rated" },
    { path: "/upcoming", icon: IconUpcoming, name: "Upcoming" }
]; 