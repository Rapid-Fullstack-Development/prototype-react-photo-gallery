import Gallery from "react-photo-gallery";

let gallery = require("./gallery.json");

gallery = gallery.map(item => {
    return {
        src: item.urls.thumb,
        width: item.width,
        height: item.height,
    };
});

// gallery = [ gallery[0] ];

console.log(gallery);

export function App() {
    return <Gallery 
        photos={gallery} 
        targetRowHeight={40}
        />;
}
