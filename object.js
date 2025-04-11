const objArr = {
    studoGlob: {
        languages: ['all', 'JavaScript', 'Framework', 'Design', 'React.js'],
        thumbnail: {
            title: 'Studio Glob',
            src: 'assets/Gallery/StudioGlob/throwingThumbnail.png',
            description: 'React.js / Css / Responsive Design',
            alt: 'A spread about pottery throwing with an arm holding a lump of clay and a beautiful woman holding a thrown bowl.'
        },
        info: {
            title: 'Studio Glob',
            subHead: 'Brand Design and Website Build',
            summary: `I’ve been working with Studio Glob, a brand new pottery studio in Smithfield RI, and I’m super proud to share the website I built — from scratch! As a developer, there's something really satisfying about taking a blank canvas and turning it into something functional, beautiful, and (most importantly) usable. I had the chance to design a full brand identity, build the website using React, and integrate a booking system so people can easily sign up for classes.
            It's fully responsive, packed with custom components, and showcases real photos from live classes — taken once things got rolling! The website is also chalk full of hand drawn and css animation done by yours truly.
            This was one of those projects where design, code, and community all came together in a really rewarding way. Really excited to be able to bring this vision online.`,
            url: 'https://studioglob.com',
            // gitHub: 'https://github.com/bubbster95/pottery'
        },
        images: [
            ['assets/Gallery/StudioGlob/carvingChickenDesktop.png',
            'A scruffy well dressed man carves a clay chicken who doesn\'t look pleased with him in the least bit.'],

            ['assets/Gallery/StudioGlob/carvingChickenMobile.png',
            'A scruffy well dressed man carves a clay chicken who doesn\'t look pleased with him in the least bit. This time it is mobile sized'],

            ['assets/Gallery/StudioGlob/kittyVaseDesktop.png',
            'A pair of hands raise out of a blue portal holding a handsome looking vase in the shape of a fat kitty.'],

            ['assets/Gallery/StudioGlob/kittyVaseMobile.png',
            'A pair of hands raise out of a blue portal holding a handsome looking vase in the shape of a fat kitty. This image is mobile sized'],

            ['assets/Gallery/StudioGlob/navOpen.png',
            'Not much to see here, just showing what the nav bar looks like when the hanburger menu is open.'],

            ['assets/Gallery/StudioGlob/studioTimeDesktop.png',
            'A screen shot of an animated clock aproaching a block of clay. In the animation she sculps the clay into a tea pot then smashes it with a hammar. She then sweeps away the dust and jumps aways before another block of clay drops onto her. the animation loops.'],

            ['assets/Gallery/StudioGlob/throwingDesktop.png',
            'an arm reaches from off the screen holding a wet lump of clay. Below that an beautiful woman is happily holding a bowl she made on the wheel'],

            ['assets/Gallery/StudioGlob/throwingMobile.png',
            'an arm reaches from off the screen holding a wet lump of clay. Below that an beautiful woman is happily holding a bowl she made on the wheel. This image is the mobile size'],
            ['assets/Gallery/StudioGlob/wheelThrowingDesktop.png',
            'A studio member leans over a pottery wheel throwing a pour over for making coffe.']
        ]
    },
    cvs: {
        languages: ['all', 'JavaScript', 'Framework'],
        thumbnail: {
            title: 'CVS Health',
            src: 'assets/Gallery/CVSHealth/cvsLogo.svg',
            description: 'Node.js / Angular / Typescript',
            alt: 'CVS Health Logo'
        },
        info: {
            title: 'CVS Health',
            subHead: 'Various projects for CVS Health Admin Tools',
            summary: `At CVS I started as a Node.js developer. I developed API's to manage inventory and query data about our products.
            I survived layoffs by cross training and switching to a front-end position on another team.
            There I began work on the modal component shown above. 
            <br>
            This component is now used widly across the Health Admin Tool.
            I wrote a single modal that dynamically switched content when the modal.service is called from anywere on the site.
            In addition to the modal all other elements displayed in the images above were my sole contribution to the site.
            <br>
            The scope of my work at CVS includes writing and calling API, UI elements such as headers, footers, and full page views with complex and dynamic form creation.
            I've used an array of different technologies, from Angular.ts, jest, mocha/chai, node.js, express.js, and even a little Java.
            Our workflow tools consist of Rally, Miro, Figma, MS Teams, and Slack.
            I have also written countless documentation for onboarding, deployment tutorials, api documentaion and README.md files.`,
            // url: 'https://climb-at.herokuapp.com/',
            // gitHub: 'https://github.com/bubbster95/climb-at'
        },
        images: [
            ['assets/Gallery/CVSHealth/FullPageWOPopup.png',
            'Full page including header, create store buffers, and footer.'],
            ['assets/Gallery/CVSHealth/FullPageWithPopup.png',
            'Full page including Header, create stor buffers, footer, and popup.'],
            ['assets/Gallery/CVSHealth/Header.png',
            'Header asset with CVS Health logo, and username.'],
            ['assets/Gallery/CVSHealth/Popup.png',
            'Popup With The words "are you sure you want to cancel" displayed. '],
            ['assets/Gallery/CVSHealth/StoreRulesBuffer.png',
            'Store rules buffer is a form that allows users to select buffer times.']
        ]
    },
    base: {
        languages: ['all', 'JavaScript', 'Design', 'Framework', 'React.js'],
        thumbnail: {
            title: 'Base Weight',
            src: 'assets/Gallery/base-weight/base-card-tile.png',
            description: 'React.js / Firebase',
            alt: 'Base Weight thumbnail'
        },
        info: {
            title: 'Base Weight',
            subHead: 'An E-commerce platform selling outdoors equipment',
            summary: `Base Weight is an E-commerce site inspired by REI.com.
            This project taught a number of lessons as follows.
            Learning to use Firebase was a fairly simple task and allowed safe global storage of information.
            In addition to being a great place to store data Firebase also offers a secure method of user authentication.
            This allows for small sites to have users who feel safe when logging in.
            Lastly this project shows a firm understanding of React and component based coding.
            My main hurdle with this project was using async functions to allow items to render after the information is loaded from Firebase.
            For the most part I’ve managed to avoid async functions but it was essential for this project.`,
            url: 'https://base-weight.netlify.app/',
            gitHub: 'https://github.com/bubbster95/E-commerce'
        },
        images:[
            ['assets/Gallery/base-weight/homepage-mobile.png',
            'Base Weight homepage for mobile.'
            ],
            ['assets/Gallery/base-weight/category-page-desktop.png',
            'Category page filtering items on base weight.'
            ],
            ['assets/Gallery/base-weight/item-page-desktop.png',
            'Item page for desktop.'
            ],
            ['assets/Gallery/base-weight/sign-in-up-desktop.png',
            'Sign in page.'
            ],
            ['assets/Gallery/base-weight/cart-page-mobile.png',
            'Cart page.'
            ]
        ]
    },
    racman: {
        languages: ['all', 'JavaScript'],
        thumbnail: {
            title: 'Racman, Inc.',
            src: 'assets/Gallery/Racman/RacmanHomeDesk.png',
            description: 'JavaScript',
            alt: 'Racman thumbnail.'
        },
        info: {
            title: 'Racman',
            subHead: 'Official Business Site',
            summary: `This website is a simple re-design of the Racman, Inc. website.
            The main hurtle of this project was working with the client to boil down copy into essential information.
            In addition to programming the site, some photography and logo work was needed to give this site a polished look.`,
            url: 'https://racman.netlify.app/',
            gitHub: 'https://github.com/bubbster95/racman'
        },
        images:[
            ['assets/Gallery/Racman/RacmanHomeMobile.png',
            'Racman home page for mobile.'
            ],
            ['assets/Gallery/Racman/RacmanDropMobile.png',
            'Racman website hamburger dropdwon menu.'
            ],
            ['assets/Gallery/Racman/RacmanWWDDesk.png',
            'What we service section of Racman website.'
            ],
            ['assets/Gallery/Racman/RacmanAboutDesk.png',
            'Racman about page for desktop.'
            ],
            ['assets/Gallery/Racman/RacmanContactDesk.png',
            'Racman contact page for desktop.'
            ]
        ]
    },
    // bouquet: {
    //     languages: ['all', 'React.js', 'JavaScript', 'Design', 'Framework'],
    //     thumbnail: {
    //         title: 'Bouq-A-Okay',
    //         src: 'assets/Gallery/Bouq-a-okay/BouqHomePage-min.png',
    //         description: 'React.js / JavaScript',
    //         alt: 'Bouq-A-Okay thumbnail.'
    //     },
    //     info: {
    //         title: 'Bouq-A-Okay',
    //         subHead: 'E-commerce Site',
    //         summary: `Bouq-A-Okay offers a unique way to pick flowers and build a Bouquet.
    //         As my first <i>major</i> React.js project there were many small hurtles to overcome.
    //         Most notably, this poject taught several effecient ways to pass state and props across the DOM.`,
    //         url: 'https://bouq-a-okay.netlify.app/',
    //         gitHub: 'https://github.com/bubbster95/Bouquet_Okay'
    //     },
    //     images:[
    //         ['assets/Gallery/Bouq-a-okay/BouqHomePage-min.png',
    //         'Bouq-A-Okay home page for desktop.',
    //         'https://bouq-a-okay.netlify.app/'
    //         ],
    //         ['assets/Gallery/Bouq-a-okay/BouqHomeMobile-min.png',
    //         'Cart page of Bouq-A-Okay',
    //         'https://bouq-a-okay.netlify.app/'
    //         ],
    //         ['assets/Gallery/Bouq-a-okay/ChooseABouq-min.png',
    //         'Choose a Bouquet page.',
    //         'https://bouq-a-okay.netlify.app/'
    //         ],
    //         ['assets/Gallery/Bouq-a-okay/PickYOurPallet-min.png',
    //         'Pick your pallet section of the Design a Bouquet page.',
    //         'https://bouq-a-okay.netlify.app/'
    //         ],
    //         ['assets/Gallery/Bouq-a-okay/PickYourFlowers-min.png',
    //         'Pick your flowers section of the Design a Bouquet page.',
    //         'https://bouq-a-okay.netlify.app/'
    //         ]
    //     ]
    // },
    oldPortfolio: {
        languages: ['all', 'JavaScript', 'Design'],
        thumbnail: {
            title: 'Old Portfolio Site',
            src: 'assets/Gallery/PortfolioSite/WillStilesSquare.png', 
            description: 'JavaScript / Design',
            alt: 'Old Portfolio Site thumbnail.'
        },
        info: {
            title: 'Portfolio Site Mark 1',
            subHead: 'Programming / Design portfolio',
            summary: `This is the first iteration of my personal porfolio using VJS.
            A technical hurtle of this project was generating tiles from an object.
            Each tile opened a corresponding modal on click.
            To further complicate things, the elements inside the pannel are also generated from an object.
            This same technique was used to effectively create the project section on this site.`,
            url: 'https://william-stiles.netlify.app',
            gitHub: 'https://github.com/bubbster95/Portfolio-Site'
        },
        images:[
            ['assets/Gallery/PortfolioSite/WillStilesSquare.png',
            'Portfolio Site Screen Shot'
            ],
            ['assets/Gallery/PortfolioSite/MobileFirst.png',
            'Mobile portfolio site'
            ],
            ['assets/Gallery/PortfolioSite/PanelWeb.png',
            'Responsive panel'
            ],
            ['assets/Gallery/PortfolioSite/MobilePanel.png',
            'Mobile panel'
            ],
            ['assets/Thumbnails/DiscoGif.gif',
            'Disco Dude sillohette gif'
            ]
        ]
    },
    disco: {
        languages: ['all', 'JavaScript', 'Design'],
        thumbnail: {
            title: 'Disco Dude',
            src: 'assets/Gallery/DiscoDude/DiscoDudeOnStage.png',
            description: 'JavaScript / Animation',
            alt: 'Disco Dude thumbnail'
        }, 
        info: {
            title: 'Disco Dude',
            subHead: 'VJS Browser Game',
            summary: `Using my background in animation allowed for fun graphics on an otherwise simple game.
            Being my first large scale Javascript program this project taught me a lot.
            Most importantly I learned about timing and updating the DOM using new ES6 features.`,
            url: 'https://disco-dude.netlify.app/',
            gitHub: 'https://github.com/bubbster95/DiscoDude'
        },
        images:[
            ['assets/Gallery/DiscoDude/DiscoDudeOnStage.png',
            'Screen shot of Disco Dude',
            'https://disco-dude.netlify.app'
            ],
            ['assets/Gallery/DiscoDude/disco-dude.gif',
            'Gif of dude dancing',
            'https://disco-dude.netlify.app'
            ],
            ['assets/Gallery/DiscoDude/Target.gif',
            'Gif of four targets',
            'https://disco-dude.netlify.app'
            ],
            ['assets/Gallery/DiscoDude/DiscoFloor.gif',
            'Gif of a disco floor',
            'https://disco-dude.netlify.app'
            ]
        ]
    },
    turner: {
        languages: ['all', 'JavaScript', 'Design'],
        thumbnail: {
            title: 'Turner\'s Calculator',
            src: 'assets/Gallery/turners-calculator/WebVase.png',
            description: 'JavaScript / Design',
            alt: 'Wood Turners Calculator thumbnail.'
        },
        info: {
            title: 'Turner\'s Calculator',
            subHead: 'Calculates segmented rings',
            summary: `This tool is used to calculate the dimensions of trapizoids (segments).
            Carving segmented bowls is not easy, calculating the segments that make up a ring improperly can cause the whole project to fail.
            One challenge for this project was to create a live updating graphic displaying the wall thickness of each ring.
            The second main hurdle for this project was creating <b>1 to 1</b> blueprints using <b>pixel to inch</b> conversion.`,
            url: 'https://wood-turners-calculator.netlify.app/',
            gitHub: 'https://github.com/bubbster95/segmented-ring-calculator'
        },
        images:[
            ['assets/Gallery/turners-calculator/WebVase.png',
            'Screen shot of Turner\'s Calculator web browser layout',
            'https://wood-turners-calculator.netlify.app/'
            ],
            ['assets/Gallery/turners-calculator/VaseMobile.png',
            'Screen shot of Turner\'s Calculator mobile browser layout',
            'https://wood-turners-calculator.netlify.app/'
            ],
            ['assets/Gallery/turners-calculator/WebBluePrints.png',
            'Screen shot of blueprints',
            'https://wood-turners-calculator.netlify.app/'
            ],
            ['assets/Gallery/turners-calculator/PrintPreview.png',
            'Screen shot of Trapezoides print preview',
            'https://wood-turners-calculator.netlify.app/'
            ]
        ]
    },
    motif: {
        languages: ['all', 'JavaScript', 'Design'],
        thumbnail: {
            title: 'Motif Magazine',
            src: 'assets/Thumbnails/FoodCover1X1.jpg',
            description: 'JavaScript / Design',
            alt: 'Motif Magazine portfolio thumbnail.'
        },
        info: {
            title: 'Motif Magazine',
            subHead: 'Lead Design Portfolio',
            summary: `As a freelance designer for Motif, I generated a total of 12 complete issues as <b>Creative Director</b>.
            Each issue was 32 pages long, completed in just 2 weeks, with two special issues between 60-70 pages.
            My work for Motif continues as a freelance Web Developer.
            I merge my knowlege of programming and design to solve issues with various wordpress sites.
            More often then not, the work includes fixing bugs and adding CSS.`
        }, 
        images:[
            ['assets/Gallery/Motif/FoodCover.jpg',
            'Motif Food Issue Cover',
            'https://indd.adobe.com/view/9c26a979-cf26-45f9-96a9-9fcfd267d14d'
            ],
            ['assets/Gallery/Motif/CannabisEating.jpg',
            'Cannabis Issue Eating Spread',
            'https://indd.adobe.com/view/8720e976-0198-4b0b-9893-742b5e699749'
            ],
            ['assets/Gallery/Motif/TinyLobster.jpg',
            'Tiny Lobster back story',
            'https://indd.adobe.com/view/9c26a979-cf26-45f9-96a9-9fcfd267d14d'
            ],
            ['assets/Gallery/Motif/Centerspread.jpg',
            'Motif Spring guide centerspread',
            'https://indd.adobe.com/view/8a081028-feae-4e76-9c7b-81c4ba0f124a'
            ],
            ['assets/Gallery/Motif/AntarcticaSpread.jpg',
            'Motif Spring guide centerspread',
            'https://indd.adobe.com/view/f4444bf0-704e-4840-88c5-e25f223a1cf7'
            ],
            ['assets/Gallery/Motif/HotRods.jpg',
            'Hot Rod Photo Bash',
            'https://indd.adobe.com/view/81200c61-0434-4e1b-b15d-30dcbc61a7b0'
            ],
            ['assets/Gallery/Motif/WhaleGuitar.jpg',
            'Whale Guitar Photo Bash',
            'https://indd.adobe.com/view/f4444bf0-704e-4840-88c5-e25f223a1cf7'
            ]
        ]
    },
    khoo: {
        languages: ['all', 'Design'],
        thumbnail: {
            title: 'Khoo Design',
            src: 'assets/Thumbnails/KhooStyle.png',
            description: 'Design',
            alt: 'Khoo Design thumbnail'
        }, 
        info: {
            title: 'Khoo Design',
            subHead: 'Design Porfolio',
            summary: `Khoo commisions freelance design work from me on occasion.
            My work started with large format advertisements and made it's way to print collatoral such as table tents.
            The most challenging project was a complete overhaul of Khoo's dine in menu, consisting of nine pages packed with titles, descriptions, prices, pictures and more.`
        },
        images:[
            ['assets/Gallery/Khoo/SundayKhoo.jpg',
            'Sunday Khoo table tent'
            ],
            ['assets/Gallery/Khoo/ThirstyThursday.jpg',
            'Thirsty Thursday table tent'
            ],
            ['assets/Gallery/Khoo/DinningMenuGray2.jpg',
            'Khoo Menu pg 2'
            ],
            ['assets/Gallery/Khoo/DinningMenuGray5.jpg',
            'Khoo Menu pg 5'
            ],
            ['assets/Gallery/Khoo/DinningMenuGray7.jpg',
            'Khoo Sushi menu'
            ],
            ['assets/Gallery/Khoo/DrinksGray1.jpg',
            'Khoo Special drinks menu'
            ],
            ['assets/Gallery/Khoo/DrinksGray2.jpg',
            'Khoo drinks menu'
            ]
        ]
    },
    animation: {
        languages: ['all', 'Design'],
        thumbnail: {
            title: 'Animation',
            src: 'assets/Gallery/Animation/ZackatanaSH.png',
            description: 'Animation',
            alt: 'Animation Thumbnail'
        }, 
        info: {
            title: 'Animation',
            subHead: 'A portfolio of movement.',
            summary: `As a student I studied and created animations in my free time.
            Now I leverage animation into my projects when I need to add some flair.
            Aditionally I have worked freelance as an animator, such as the Venga Climbing app.
            The Venga animation, completed in blender, is of a cellphone in motion.
            A white phone pops up from the bottom in a few shots, that's my handy work.`
        },
        images:[
            ['assets/Gallery/DiscoDude/disco-dude.gif',
            'Gif of a Disco Dancer',
            'https://disco-dude.netlify.app'
            ],
            ['assets/Gallery/Animation/Venga Climb.mp4',
            'Venda Climbing comercial'
            ],
            ['assets/Gallery/Animation/Zakatana.mp4',
            'Zackatana trailer'
            ],
            ['assets/Gallery/Animation/AvacadoRun.mp4',
            'Avacoda Run Cycle'
            ]
        ]
    },
};


// scroll: {
//     languages: ['all', 'React.js', 'JavaScript'],
//     thumbnail: {
//         title: 'Infinite Scroll React',
//         src: 'assets/Gallery/InfiniteScroll/InfiniteScroll.png',
//         description: 'React.js / JavaScript',
//         alt: 'Infinite Scroll React thumbnail.'
//     },
//     info: {
//         title: 'Infinite Scroll React',
//         subHead: 'React Introduction',
//         summary: `With this project I acomplished two simple goals.
//         First, learn React in a simple environment.
//         Second, create an infinitely generated list of users with randomly generated profiles and names.`,
//         url: 'https://wills-infinite-scroll.netlify.app/',
//         gitHub: 'https://github.com/bubbster95/Infinte-Scroll'
//     },
//     images:[
//         ['assets/Gallery/InfiniteScroll/InfiniteScroll.png',
//         'Screen Shot of Infinite Scroll landng page',
//         'https://wills-infinite-scroll.netlify.app/'
//         ],
//         ['assets/Gallery/InfiniteScroll/Profile 1.png',
//         'Screen Shot of Infinite Scroll avatar 1',
//         'https://wills-infinite-scroll.netlify.app/'
//         ],
//         ['assets/Gallery/InfiniteScroll/Profile2.png',
//         'Screen Shot of Infinite Scroll avatar 2',
//         'https://wills-infinite-scroll.netlify.app/'
//         ]
//     ]
// },