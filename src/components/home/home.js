import "./home.scss";
import home from "./home.html";
import { Banner } from "../banner/banner.js";
import { Skills } from "../skills/skills.js";
import { AboutMe } from "../about-me/about-me.js";

export function Home() {
    return Banner() + Skills() + AboutMe();
}