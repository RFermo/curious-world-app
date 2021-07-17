import EdwardPic from "./images/edward.jpg";
import ChiaraPic from "./images/chiara.jpg";
import JasonPic from "./images/jason.jpg";

const testimonials = [
    {
        name: "Edward",
        age: 31,
        picture: EdwardPic,
        decl: "Curious World has allowed me to be more culturally aware of numerous places in the world. This website is amazing!",
        id: 1
    },

    {
        name: "Chiara",
        age: 24,
        picture: ChiaraPic,
        decl: "This web app allows you to learn about countries in an intuitive way. I will surely recommend it to my friends.",
        id: 2
    },

    {
        name: "Jason",
        age: 35,
        picture: JasonPic,
        decl: "As someone that loves geography, I can say that this site has taught me and my daughter a lot of things that we didn't know about.",
        id: 3
    }
]

const continentInfo = [
    {
        name: "Africa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/1200px-Africa_%28orthographic_projection%29.svg.png",
        altText: "African continent",
        link: "/explore/africa",
        icon: "fas fa-hippo continent-icons",
        id: 1
    },
    
    {
        name: "America",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Americas_%28orthographic_projection%29.svg/1200px-Americas_%28orthographic_projection%29.svg.png",
        altText: "American continent",
        link: "/explore/americas",
        icon: "fas fa-globe-americas continent-icons",
        id: 2
    },

    {
        name: "Asia",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/1200px-Asia_%28orthographic_projection%29.svg.png",
        altText: "Asian continent",
        link: "/explore/asia",
        icon: "fas fa-dharmachakra continent-icons",
        id: 3
    },

    {
        name: "Europe",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/1024px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png",
        altText: "European continent",
        link: "/explore/europe",
        icon: "fas fa-coffee continent-icons",
        id: 4
    },

    {
        name: "Oceania",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Oceania_%28orthographic_projection%29.svg/541px-Oceania_%28orthographic_projection%29.svg.png",
        altText: "Oceanian continent",
        link: "/explore/oceania",
        icon: "fas fa-water continent-icons",
        id: 5
    }
]

const notCountries = ["British Indian Ocean Territory", "French Southern Territories", "Mayotte", "Réunion",
    "Saint Helena, Ascension and Tristan da Cunha", "United States Minor Outlying Islands", 
    "South Georgia and the South Sandwich Islands", "Falkland Islands (Malvinas)", "Macao", "Åland Islands",
    "Gibraltar", "Guernsey", "Holy See", "Isle of Man", "Jersey", "Monaco", "Svalbard and Jan Mayen", "Christmas Island",
    "Cocos (Keeling) Islands", "Cook Islands", "Guam", "Norfolk Island", "Pitcairn", "Tokelau", "Wallis and Futuna"
]

export {testimonials, continentInfo, notCountries}