import "./contact.scss";
import { Form } from "../form/form.js";
import contact from "./contact.html"

export function Contact() {
    const contactMain = contact;
    const formMain = Form();
    return contactMain.replace('<div id="formContainer"></div>', formMain);
}