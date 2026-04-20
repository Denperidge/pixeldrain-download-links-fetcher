import { readFileSync, writeFileSync } from "fs";

const PIXELDRAIN_API_URL = "https://pixeldrain.com/api"

const links = readFileSync("input.txt", {encoding: "utf-8"}).trim().split("\n")
let output = [];

const interval = setInterval(async () => {
    // Get the regular pixeldrain link
    const regularLink = links.shift();
    console.log(`Fetching ${regularLink}...`)

    // Replace the l/ prefix with list/
    const apiPath = regularLink.match(/l\/[^\/|\n]*/)[0].replace(/^l\//m, "list/")
    const apiLink = `${PIXELDRAIN_API_URL}/${apiPath}`

    const data = await (await fetch(apiLink)).json();
    
    const files = data.files
        .filter(file => file.mime_type != "text/plain; charset=utf-8")
        .map(file => {
            return {
                url: `${PIXELDRAIN_API_URL}/${file.detail_href.replace(/\/info$/m, "?download")}`,
                name: file.name
            }
        });
    output = output.concat(files)

    if (links.length == 0) {
        clearInterval(interval);
        writeFileSync("output.json", JSON.stringify(output), {encoding: "utf-8"})
    }
}, 1500);  // Be nice to Pixeldrains API