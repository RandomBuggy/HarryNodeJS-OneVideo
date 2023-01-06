import url from "url";


export function complex() {
    console.log("complex");
}

export default function complex2() {
    console.log("complex2");
}

const u = new URL("https://abc:1234@example.org:5647/a/b/c/h?q=my_query#the_hash");
console.log(u);
console.log(u.href);

