import express from "express";

const app = express();
const port = 3000;

const trackList =[{name: "Chihiro", artist: "Billie Eilish", src: "music6.mp3", cover: "bil.png", duration: "5:03" } ,{name: "Please Please Please", artist: "Sabrina Carpenter", src: "music5.mp3", cover: "sab.jpg", duration: "3:06"} ,{name: "Rockstar", artist: "Lisa", src: "music2.mp3", cover: "lisa.jpg", duration: "0:38"}, {name: "Guess", artist: "Charli XCX feat Billie Eilish", src: "music3.mp3", cover: "bil.png", duration: "2:40"}, {name: "Lunch", artist: "Billie Eilish", src: "music4.mp3", cover: "bil.png", duration: "2:59"}, {name: "APT.", artist: "ROSE, Bruno Mars", src: "music.mp3", cover: "cover.jpg", duration: "2:53"}] 

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {trackList: trackList});
})


app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});
