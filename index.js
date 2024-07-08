const path = require("path");

const date = new Date();

/** @type {import('caz').Template} */
module.exports = {
    name: "template-ilw",
    metadata: {
        year: date.getFullYear(),
        month: String(date.getMonth() + 1).padStart(2, "0"),
        day: String(date.getDate()).padStart(2, "0"),
    },
    prompts: [
        {
            name: "name",
            type: "text",
            message: "Project name",
        },
        {
            name: "repository",
            type: "text",
            message: "Repository",
        },
    ],
    init: false,
    install: false
};
