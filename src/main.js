import { router, render } from "../lib";
import About from "./page/about";
import adminproductPage from "./page/addmin/product";

import blog from "./page/blog";
import contact from "./page/contact";
import Homepage from "./page/home";


const app = document.querySelector("#app");


router.on("/", () => render(Homepage, app));
router.on("/About", () => render(About, app));
router.on("/contact", () => render(contact, app));
router.on("/blog", () => render(blog, app));

router.on("/admin/product", () => render(adminproductPage, app));
router.resolve();