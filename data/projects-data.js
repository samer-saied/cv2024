const projects = [
    {
        "id": 1,
        "section": "Website",
        "title": "XO-Store Games Cards Store",
        "image": "/projects/xo-store-main.png",
        "icon": "https://xo-store.vercel.app/logo/logo.svg",
        "shotScreens": [
            "/projects/xo-shootscreen.png",
            "/projects/xo-cart-shootscreen.png",
        ],
        "description": "Home Page \nCategories Page \nLogIn Page \nSignUp Page \nCart Page \nPayment Page \nSingle Game Card Page  ",
        "tags": ["Nextjs", "Reactjs", "Nodejs", "FireBase","Firestore","Firebase Storage"],
        "technology": "Nextjs Reactjs Nodejs FireBase (Firestore - Firebase Storage)",
        "links": [
            { "name": "Website", "url": "https://xo-store.vercel.app/" },

        ]


    },
     {
        "id": 2,
        "section": "Mobile app",
        "title": "Learn it - Education application",
        "image": "https://play-lh.googleusercontent.com/-yOTdzAfCLUhU-BkktQXnJTln7HQHXsrTuKuLASrFsuksVZSFC1TWTnqBO7I_VFpNlQ=w1052-h592-rw",
        "icon": "/projects/learnit/icon.png",
        "shotScreens": [
            "/projects/learnit/learnit_0.jpg",
            "https://play-lh.googleusercontent.com/0jJd2NpGSiRxhwEz6vtYpWMdMZNFXfAa5g41hV1yit3rmCNKkGuxTAqdKugXwomTz9AL=w1052-h592-rw",
            "https://play-lh.googleusercontent.com/gV9qRnvpC9w4iacBYiH1q5RuGgq7GdiO31REtsBQuPbnZwlixfCDErEwycltfP-vGg=w1052-h592-rw",
            "https://play-lh.googleusercontent.com/PHAO1MHxIIGjrRWrNe5xH14oNlfpJZujnCXZAh4UgPTZAzSf8opUqvuX6EQtreO3HTk=w1052-h592-rw",
            "https://play-lh.googleusercontent.com/cP5lnpJ34_521VoqBebctK0cP7xOC7RdcopwAx8AyYtDp0RDUm33W7wwyMJfdkzX4rY=w1052-h592-rw",
            "/projects/learnit/learnit_1.jpg",
            "/projects/learnit/learnit_2.png",
            "/projects/learnit/learnit_3.png",
            "/projects/learnit/learnit_4.png",
            "/projects/learnit/learnit_5.png",
            "/projects/learnit/learnit_6.png",
            "/projects/learnit/learnit_7.png",
            "/projects/learnit/learnit_8.png",
            "/projects/learnit/learnit_9.png",
            "/projects/learnit/learnit_10.jpg",
            "/projects/learnit/learnit_11.jpg",

        ],
        "description": "Screens:\n 1-Login Screen\n 2- Register Screen\n 3- Main Screen to Show new news\n 4- Profile Screen\n 5- Courses page for student filtered by terms and studying year and all Courses page for teachers\n 6- More page to add New posts and Courses and manage users\n 7- Settings Page to Change language\n 8- Contact Me Page \n \n  Features:\n * Posting: Users can post news and other content that is visible to all users.\n * Post management: Users can edit or delete their own posts, and they can also manage other users' posts.\n * Course management: Teacher can add chapters to courses and delete chapters.\n * User management: Teacher can block, activate, change the password of, or delete other users.\n * Language support: Users can change the interface language to Arabic, English, or any other language that is supported.\n * Sign-out and remember password: Users can sign out of the app and have the option to remember their password.\n * Contact page: Users can contact the teacher through a dedicated contact page.\n * Privacy and terms: Users can view the app's privacy policy and terms of service.\n * Firebase services: The app uses Firebase services, including Firestore (a NoSQL database) and Firebase Storage (a cloud storage service).\n * Crashlytics: The app uses Crashlytics to collect crash reports and help identify and fix stability issues.\n \n  Security:\n * Device binding: Users can only log in to the app from the device they registered with. The app saves the device's serial number to ensure that only the registered device can be used to log in.\n * Screen recording and screenshot protection: The app prevents users from recording the screen or taking screenshots. This helps to protect the app's content and prevent unauthorized sharing.\n * Single-user account: Each user can only have one account. This prevents users from logging in to the app with multiple accounts at the same time.\n * Headset detection: The app can detect if the user is using a headset. This helps to prevent the user from sharing the app's content with others by playing the sound through the loudspeaker.\n ",
        "tags": ["flutter", "andriod", "IOS", "FireBase"],
        "technology": "Flutter framework for IOS and Andriod \n Firebase backend\n GetX state manager.\n Multilanguage English and Arabic.",
        "links": [
            { "name": "PlayStore", "url": "https://play.google.com/store/apps/details?id=com.monaellebody.mlapp" },
            { "name": "appleStore", "url": "https://apps.apple.com/eg/app/mona-ellebody/id6469087922" }

        ]


    },
    
    {
        "id":3,
        "section": "Mobile app",
        "title": "Food Shop",
        "image": "/projects/food_shop_blue.png",
        "description": "full Food shop Mobile application for android and Iphone , you can connect it to Your API or Firebase",
        "tags": ["flutter", "andriod", "IOS",],
        "technology": "Flutter framework for IOS and Andriod \nClean architecture\nMultilanguage English, Arabic and More.",
        "links": [
            // { "name": "PlayStore", "url": "" },
            // { "name": "appleStore", "url": "" }

        ]

    },
   
    {
        "id": 4,
        "section": "Mobile app",
        "title": "Food Shop",
        "image": "/projects/foodshop.gif",
        "description": "Demo foodshop mobile applications",
        "tags": ["flutter", "andriod", "IOS"],
        "technology": "Flutter framework available for IOS and Andriod.\n Bloc state manager.",
        "links": [
            { "name": "Github", "url": "https://github.com/samer-saied/foodShop" },
            { "name": "PlayStore", "url": "https://samer-saied.github.io/samersaied/foodshop.html" },
            { "name": "Website", "url": "https://flutterawesome.com/a-simple-food-shop-flutter-example-with-firebase/" }

        ]
    },
    {
        "id": 5,
        "section": "NodeJs Api server , Mobile app",
        "title": "AccuNews",
        "image": "/projects/accunews.png",
        "description": "Mobile app to catch new News from scraping website by nodejs server",
        "tags": ["flutter", "andriod", "IOS", "expressJs", "nodeJs", "NextJs"],
        "technology": "Flutter framework for IOS and Andriod \n Firebase backend\n GetX state manager.\n Next.js api for BackEnd Server",
        "links": [
            { "name": "Github", "url": "https://github.com/samer-saied/News-flutter-app" },
            { "name": "Github", "url": "https://github.com/samer-saied/news_api_app" },
        ]

    },
    {
        "id": 6,
        "section": "Fullstack Website",
        "title": "POS",
        "image": "/projects/under.jpg",
        "description": "a system for making sales and processing payments in person. handles transactions, inventory, customer data, and more...",
        "tags": ["reactJs", "tailwind", "MySql", "expressJs", "nodeJs", "NextJs"],
        "links": [
            // {"name":"Github","url":"https://github.com/samer-saied/collectOrder/tree/master"},
            // {"name":"PlayStore","url":"https://play.google.com/store/apps/details?id=me.samersaied.collect_order"},

        ]
    },
    {
        "id": 7,
        "section": "Mobile app",
        "title": "Cigarettes Off",
        "image": "/projects/cigarettesoff.gif",
        "description": "Cigarettes Off is a mobile application that helps you quit smoking by providing you with a personalized plan, tips, and rewards. You can track your progress, see how much money and time you have saved, and get support from other quitters.",
        "tags": ["flutter", "andriod", "IOS", "Firebase"],
        "technology": "Flutter framework for IOS and Andriod \nFirebase backend Provider state manager.\nMultilanguage English and Arabic.",
        "links": [
            { "name": "Github", "url": "https://github.com/samer-saied/smokeless" },
            { "name": "PlayStore", "url": "https://play.google.com/store/apps/details?id=me.samersaied.freesmokingapp" },
            { "name": "appleStore", "url": "" }

        ]

    },
    {
        "id":8,
        "section": "Mobile app",
        "title": "Collect Orders",
        "image": "/projects/collectOrder.jpg",
        "description": "When a group of friends go out and order different sandwiches, this application can handle a specific order for every friend.",
        "technology": "Flutter framework available for IOS and Andriod \nHive Database \nGetx state manager.",
        "tags": ["flutter", "andriod", "IOS", "FireBase"],
        "links": [
            { "name": "Github", "url": "https://github.com/samer-saied/collectOrder/tree/master" },
            { "name": "PlayStore", "url": "https://play.google.com/store/apps/details?id=me.samersaied.collect_order" },

        ]

    },
    {
        "id": 9,
        "section": "Website",
        "title": "Ecommerce website",
        "image": "/projects/ecommerce_nextjs.gif",
        "description": "One Hour Work Only: fast building for 4 pages (single product page + Home page with products and categories + Loading Page + Error Page)",
        "technology": "Next.js + React.js + Tailwind + API (connect to fakeApi)",
        "tags": ["React.js", "Next.js 13 last version", "API"],
        "links": [
            { "name": "Github", "url": "https://github.com/samer-saied/nextjs13_ecommerce" },
            { "name": "Website", "url": "https://nextjs13-ecommerce-phi.vercel.app/products" },

        ]

    },{
        "id": 10,
        "section": "Website , adminPanel , Mobile application",
        "title": "Tal3a",
        "image": "/projects/tal3a_image.gif",
        "video": "tal3a_video.mp4",
        "description": "Tal3a is a website and mobile app that offers various events and activities for people to enjoy in Kuwait. You can find plays, concerts, movies, workshops, festivals, and more on the website. You can also create your own event and invite others to join you.",
        "tags": ["flutter", "andriod", "IOS", "reactJs", "tailwind", "mongoDb", "expressJs", "nodeJs", "NextJs"],
        "technology": "MERN stack by Next.js framework full-stack Web applications and admin Panel \nFlutter framework for IOS and Andriod.",
        "links": [
            { "name": "Website", "url": "https://www.tal3a.app" },
            { "name": "PlayStore", "url": "" },
            { "name": "appleStore", "url": "" }

        ]

    },

]



export default projects


