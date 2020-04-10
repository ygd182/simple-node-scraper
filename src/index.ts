// index.ts
const siteUrl = "https://www.google.com/";
import cheerio from "cheerio";
import axios from "axios";
function fetchData() {
	return new Promise((resolve, reject) => {
		axios.get(siteUrl).then((data) => {
			resolve(data.data);
		});
	});
}

fetchData().then((result:  string | Buffer) => {
	const $ = cheerio.load(result);
    const title = $('title');
    console.log(title.text());
});


