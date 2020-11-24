require('dotenv').config();
const mongoose = require('mongoose');
const config = require('config');
const { Phone } = require('./models/phones');
const { User } = require('./models/user');

const data = {
    name: 'Mykolas',
    email: 'kebabas@gmail.com',
    password: 'Maarichuana',
    phones: [
        {
            model: 'Samsung',
            brand: 'Galaxy S9+',
            screenSize: 6.2,
            RAMsize: 6,
            state:
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            storageSize: 128,
            color: 'Blue',
            phoneNumber: '+306944513675',
            price: 267,
            images: [
                {
                    path:
                        'https://b.scdn.gr/images/sku_images/019523/19523721/20180226104215_8fa33ae5.jpeg'
                },
                {
                    path:
                        'https://www.mytrendyphone.eu/images/Samsung-Galaxy-S9-LCD-Display-Touch-Screen-Reparation-Black-18052018-1-p.jpg'
                },
                {
                    path:
                        'https://krispitech.com/wp-content/uploads/2018/12/How-to-Fix-a-Broken-Galaxy-S9-Screen.jpg'
                },
                {
                    path:
                        'https://i.insider.com/5aafc703cc502925008b4bd6?width=1100&format=jpeg&auto=webp'
                }
            ]
        },
        {
            model: 'Samsung',
            brand: 'Galaxy S7 edge',
            screenSize: 5.5,
            RAMsize: 4,
            state:
                'Samsung Pay (Visa, MasterCard certified) IP68 dust/water resistant (up to 1.5m for 30 mins) storageSize: 128,',
            storageSize: 128,
            color: 'Silver/Black',
            phoneNumber: '+306944513675',
            price: 102.9,
            images: [
                {
                    path:
                        'https://www.mytrendyphone.eu/images/Samsung-Galaxy-S7-Edge-32GB-Factory-Refurbished-Gold-Platinum-15102018-01-p.jpg'
                },
                {
                    path:
                        'https://external.webstorage.gr/ProductImages/1148702/samsung-galaxy-s7-edge-1000-1148702.jpg'
                },
                {
                    path:
                        'https://cnet4.cbsistatic.com/img/ZfdDveUpHeJW4TTLckL0IexodhE=/940x0/2016/03/18/a1ad8867-64c1-48ad-8fc5-086ea9fcad4e/fd-samsung-s7-cracked-broken-6654-001.jpg'
                },
                {
                    path:
                        'https://assets.hardwarezone.com/img/2016/02/IMG_0100.jpg'
                }
            ]
        },
        {
            model: 'Apple',
            brand: 'IPhone 7 Plus',
            screenSize: 5.5,
            RAMsize: 3,
            state:
                "English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
            storageSize: 64,
            color: 'Black',
            phoneNumber: '+306944513675',
            price: 150.0,
            images: [
                {
                    path:
                        'https://images-na.ssl-images-amazon.com/images/I/61CvAFp0GKL._AC_SL1500_.jpg'
                },
                {
                    path:
                        'https://www.varle.lt/static/uploads/products/28/app/apple-iphone-7-plus-32gb-juodas-black_gtEySKM.jpg'
                },
                {
                    path:
                        'https://blog.rewatechnology.com/wp-content/uploads/2016/10/iPhone-7-Plus-Broken-Screen-Refurbishing-807x538.jpg'
                },
                {
                    path:
                        'https://www.ifixyouri.com/1596-large_default/iphone-7-plus-glass-lcd-repair-service.jpg'
                },
                {
                    path:
                        'https://www.repairtech.co.nz/wp-content/uploads/2017/04/iphone-7-repair-hamilton-screen.jpeg'
                }
            ]
        },
        {
            model: 'Apple',
            brand: 'IPhone X',
            screenSize: 5.8,
            RAMsize: 3,
            state:
                '5 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,',
            storageSize: 256,
            color: 'White',
            phoneNumber: '+306944513675',
            price: 302.0,
            images: [
                {
                    path:
                        'https://www.kickmobiles.com/images/thumbs/0008667_apple-iphone-x-a1901-256gb-silver_610.jpeg'
                },
                {
                    path:
                        'https://cdn.pocket-lint.com/r/s/970x/assets/images/142227-phones-review-iphone-x-review-photos-image1-ahdsiyvum0-jpg.webp'
                },
                {
                    path:
                        'https://assets.swappie.com/SwappieiPhonex256gbt%C3%A4htiharmaa-1-1-1-600x600.jpg'
                },
                { path: 'https://i.redd.it/lhn5vrdbual01.jpg' }
            ]
        },
        {
            model: 'HTC',
            brand: 'Wildframe 8',
            screenSize: 6.53,
            RAMsize: 2,
            state:
                "ble. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            storageSize: 32,
            color: 'Black/Silver',
            phoneNumber: '+306944513675',
            price: 97.99,
            images: [
                {
                    path:
                        'https://fdn2.gsmarena.com/vv/pics/htc/htc-wildfire-r70-2.jpg'
                },
                {
                    path:
                        'https://www.brumpost.com/wp-content/uploads/2020/03/htc-wildfire-r70-price-malaysia-1-480x560.jpg'
                },
                {
                    path:
                        'https://ae01.alicdn.com/kf/H0f561e43d0044b2d883a37c9c94369edt/Screen-phone-Protector-For-HTC-Wildfire-R70-9H-Hardness-Tempered-Glass-For-HTC-Wildfire-R70-Glass.jpg'
                },
                {
                    path:
                        'https://img.xda-cdn.com/tEMeYB2pm-5PkOTp-JeDZsu0d9g=/http%3A%2F%2Fshrani.si%2Ff%2F6%2Flr%2F2P0pyz7U%2Fimg1188.jpg'
                }
            ]
        },
        {
            model: 'NOKIA',
            brand: '8.3 5G',
            screenSize: 6.81,
            RAMsize: 8,
            state:
                "you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            storageSize: 128,
            color: 'Yellow',
            phoneNumber: '+306944513675',
            price: 127.45,
            images: [
                {
                    path:
                        'https://fdn2.gsmarena.com/vv/pics/nokia/nokia-83-5g-1.jpg'
                },
                {
                    path:
                        'https://www.slashgear.com/wp-content/uploads/2020/03/nokia835g-1280x720.jpg'
                }
            ]
        },
        {
            model: 'Xiaomi',
            brand: 'Mi 10 Lite 5G',
            screenSize: 6.57,
            RAMsize: 2,
            state:
                'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form ',
            storageSize: 128,
            color: 'Black',
            phoneNumber: '+306944513675',
            price: 132.45,
            images: [
                {
                    path:
                        'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi10-lite-5g-1.jpg'
                },
                {
                    path:
                        'https://cdn-files.kimovil.com/default/0004/43/thumb_342748_default_big.jpeg'
                },
                {
                    path:
                        'https://www.powerplanetonline.com/cdnassets/xiaomi_mi_10_8gb_128gb_06_azul_ad_l.jpg'
                }
            ]
        },
        {
            model: 'Sony ',
            brand: 'Xperia 1 II',
            screenSize: 6.5,
            RAMsize: 8,
            state:
                '1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form ',
            storageSize: 256,
            color: 'Purple',
            phoneNumber: '+306944513675',
            price: 114.45,
            images: [
                {
                    path:
                        'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-II-o.jpg'
                },
                {
                    path:
                        'https://live.mrf.io/statics/i/p/www.xperiablog.net/wp-content/uploads/2020/03/Xperia-1-II-docomo_1-640x479.jpg?width=1200&enable=upscale'
                },
                {
                    path:
                        'https://cdn.pocket-lint.com/r/s/748x/assets/images/151178-phones-vs-sony-xperia-1-ii-vs-sony-xperia-1-whats-the-difference-image1-basdr9gtxp.jpg?v1'
                }
            ]
        },
        {
            model: 'Microsoft ',
            brand: 'Lumia 650',
            screenSize: 5,
            RAMsize: 1,
            state: 'Old tool! their exact original form ',
            storageSize: 16,
            color: 'White',
            phoneNumber: '+306944513675',
            price: 37.45,
            images: [
                {
                    path:
                        'https://www.you.gr/getattachment/1208a2c0-13b2-42c3-8e2e-433aee2237e6?maxsidesize=850'
                },
                {
                    path:
                        'https://cdn.neow.in/news/images/uploaded/2016/03/1_lumia_650_640_800px_story.jpg'
                },
                {
                    path:
                        'https://www.phone.gr/wp-content/uploads/2016/05/ms-lumia-650-white-2.jpg'
                }
            ]
        },
        {
            model: 'Vodafone ',
            brand: 'Smart V10 ',
            screenSize: 5.9,
            RAMsize: 3,
            state:
                "I've owned this phone for three months. It cost Â€80 Euro in a Vodafone Ireland store. My main uses are WhatsApp, video calling, social media and YouTube. The phone has been very good, reliable and the battery lasts about 30 hours once charged.",
            storageSize: 32,
            color: 'White/Silver/Grey',
            phoneNumber: '+306944513675',
            price: 89.45,
            images: [
                {
                    path:
                        'https://cdn.mos.cms.futurecdn.net/KGeYnrDC4ZNdmLhQpPGuZC.jpg'
                },
                {
                    path: 'https://i.ytimg.com/vi/zTAY3Ly4vT8/hqdefault.jpg'
                },
                {
                    path:
                        'https://ptelemoveis.pt/11459-medium_default/silicone-cover-vodafone-smart-v10-black.jpg'
                }
            ]
        },
        {
            model: 'Acer',
            brand: 'Liquid Z6 Plus',
            screenSize: 5.5,
            RAMsize: 3,
            state:
                "Hi, I've wanted to write something about acer liquid z6... I can see you didn't satisfied with performance of battery, but it depends what are you doing on the phone. I bought this phone on december 2016 and I' m very satisfied with it",
            storageSize: 32,
            color: 'White/Silver/Grey',
            phoneNumber: '+306944513675',
            price: 79.99,
            images: [
                {
                    path:
                        'https://www.kickmobiles.com/images/thumbs/0008639_acer-liquid-z6-plus-dual-sim-t11-32gb-gray_610.jpeg'
                },
                {
                    path:
                        'https://cdn1.smartprix.com/rx-iHbc5alyZ-w1200-h1200/acer-liquid-z6-plus.jpg'
                },
                {
                    path:
                        'https://www.notebookcheck.net/fileadmin/Notebooks/Acer/Liquid_Z6_Plus/4_zu_3Liquid_Z6_Plus.jpg'
                }
            ]
        },
        {
            model: 'Honor',
            brand: '9X Lite',
            screenSize: 6.5,
            RAMsize: 4,
            state:
                'yes i already wrote that in my previous comment and it is proven to be good and as of a week ago it is with android 10.0 and works great',
            storageSize: 128,
            color: 'Cyan',
            phoneNumber: '+306944513675',
            price: 179.99,
            images: [
                {
                    path:
                        'https://www.gizmochina.com/wp-content/uploads/2020/02/Honor-9X-Lite-1-500x500.jpg'
                },
                {
                    path:
                        'https://live.mrf.io/statics/i/ps/www.gizchina.com/wp-content/uploads/images/2019/11/thumb_230141_default_big-1.jpg'
                },
                {
                    path:
                        'https://img01.honorfile.com/sa/ms/product/6901443213061/800_800_E03697D1DA1E7D1E9514FCBCC44FFAED0B85B77FE753B35Cmp.jpg'
                }
            ]
        }
    ]
};
async function seed() {
    await mongoose.set('useCreateIndex', true);
    await mongoose.connect(
        config.get('db'),
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => {
            console.log('Successfully connected to database');
        }
    );

    await User.deleteMany({});
    await Phone.deleteMany({});

    const { _id: userId } = await new User({
        name: data.name,
        email: data.email,
        password: data.password
    }).save();
    console.log(`User name ${data.name}, ${data.email}, ${data.password}`);
    const phones = data.phones.map((phone) => ({
        ...phone,
        creatorID: userId
    }));
    await Phone.insertMany(phones);

    mongoose.disconnect();

    console.log('Done!');
}

seed();
