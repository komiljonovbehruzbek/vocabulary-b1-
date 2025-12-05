import React from "react";

export const words = [
    {
        id: 1,
        en: "inference",
        uz: "xulosa qilish, -dan kelib chiqgan fikr",
        definition_en: "Inference – a statement based on experience",
        definition_uz: "Xulosa — o'z tajribangga qarab chiqarilgan fikr"
    },
    {
        id: 2,
        en: "science",
        uz: "ilm-fan",
        definition_en: "Science – an orderly and reasoned process for answering questions",
        definition_uz: "Fan — savollarga javob berish uchun ketma-ket va mantiqiy yo‘l"
    },
    {
        id: 3,
        en: "hypothesis",
        uz: "ilmiy faraz, taxminiy qarash",
        definition_en: "Hypothesis – a possible answer to a scientific question based on observations",
        definition_uz: "Gipoteza — ilmiy savolga kuzatuvlar asosida berilgan taxminiy javob"
    },
    {
        id: 4,
        en: "experiment",
        uz: "tajriba, sinov",
        definition_en: "Experiment – an activity performed to test a hypothesis",
        definition_uz: "Tajriba — gipotezani tekshirish uchun bajariladigan faoliyat (ish, amal)"
    },
    {
        id: 5,
        en: "data",
        uz: "ma'lumot",
        definition_en: "Data – pieces of information that are collected to test a hypothesis",
        definition_uz: "Ma’lumotlar (data) — gipotezani tekshirish uchun to'plangan axborot bo'laklari"
    },
    {
        id: 6,
        en: "scientific method",
        uz: "ilmiy usul",
        definition_en: "A series of steps, including observing, forming a question, stating a hypothesis, collecting data, and reaching a conclusion, is called the scientific method",
        definition_uz: "Kuzatish, savol tuzish, gipoteza aytish, ma'lumot to'plash va xulosa chiqarishni o'z ichiga olgan bosqichlar ketma-ketligi “ilmiy usul” deb ataladi"
    },
    {
        id: 7,
        en: "scientific law",
        uz: "ilmiy qonun",
        definition_en: "Scientific laws describe, but do not explain, an observed phenomenon. An example of a scientific law is the law of gravity",
        definition_uz: "Ilmiy qonunlar kuzatilgan hodisani tasvirlaydi, lekin uni tushuntirib bermaydi. Ilmiy qonunlarga misol sifatida tortishish qonunini keltirish mumkin"
    },
    {
        id: 8,
        en: "scientific theory",
        uz: "ilmiy teoriya/nazariya",
        definition_en: "Scientific theories address more complex ideas. An example of a scientific theory is the theory of plate tectonics",
        definition_uz: "Ilmiy nazariyalar murakkabroq g'oyalarni tushuntiradi. Masalan, plitalar tektonikasi nazariyasi ilmiy nazariyaga misoldir"
    },
    {
        id: 9,
        en: "measurement",
        uz: "o'lchash, aniqlash, hisoblab chiqish",
        definition_en: "Measurement – a number that includes a unit",
        definition_uz: "O‘lchov — yonida birlik bo'lgan son (masalan, 5 metr, 3 kilogramm, 2 litr)"
    },
    {
        id: 10,
        en: "unit",
        uz: "birlik",
        definition_en: "Unit – a specific quantity that is counted to make a measurement",
        definition_uz: "Birlik — o'lchashda ishlatiladigan aniq son yoki miqdor (masalan, 1 metr, 1 kilogramm)"
    },
    {
        id: 11,
        en: "meter",
        uz: "metr",
        definition_en: "The meter is the basic distance unit for the SI system of measurement",
        definition_uz: "Metr — SI tizimidagi asosiy masofa birligi"
    },
    {
        id: 12,
        en: "atom",
        uz: "atom, zarra",
        definition_en: "Atom – a particle of matter",
        definition_uz: "Atom — moddaning eng kichik zarrachalaridan biri"
    },
    {
        id: 13,
        en: "matter",
        uz: "modda",
        definition_en: "Matter - anything that has mass and takes up space",
        definition_uz: "Massasi bor va joy egallaydigan hamma narsa “modda” deb ataladi"
    },
    {
        id: 14,
        en: "mass",
        uz: "massa",
        definition_en: "Mass – the amount of matter that an object contains",
        definition_uz: "Massa — biror narsada qancha modda borligini o'lchash"
    },
    {
        id: 15,
        en: "weight",
        uz: "og'irlik",
        definition_en: "Weight – a measurement of the force of gravity on the mass of an object",
        definition_uz: "Og'irlik — ob'ektdagi tortishish kuchi miqdori"
    },
    {
        id: 16,
        en: "gram",
        uz: "gram",
        definition_en: "Gram – the basic unit of mass in the SI system of measurement",
        definition_uz: "Gram — SI tizimida massani o'lchash uchun ishlatiladigan asosiy birlik"
    },
    {
        id: 17,
        en: "liter",
        uz: "litr",
        definition_en: "Liter – the basic unit of volume in the SI system of measurement",
        definition_uz: "Litr — SI tizimida suyuqlik yoki hajmni o'lchash uchun ishlatiladigan asosiy birlik"
    },
    {
        id: 18,
        en: "volume",
        uz: "hajm",
        definition_en: "Volume – a measurement of how much space is occupied by an object",
        definition_uz: "Hajm — ob'ektdagi bo'shliqni qancha egallashini o'lchash"
    },
    {
        id: 19,
        en: "hydrosphere",
        uz: "gidrosfera",
        definition_en: "Hydrosphere – all the water on Earth.",
        definition_uz: "Gidrosfera — Yer yuzidagi barcha suvlar yig'indisi."
    },
    {
        id: 20,
        en: "atmosphere",
        uz: "atmosfera",
        definition_en: "Atmosphere – the layer of gases that surrounds Earth.",
        definition_uz: "Atmosfera — Yer atrofini o‘rab turgan gazlar qatlami."
    },
    {
        id: 21,
        en: "surface water",
        uz: "yer usti suvlari",
        definition_en: "Surface water – water found on Earth's surface like oceans, lakes, and rivers.",
        definition_uz: "Yer usti suvlari — okean, ko‘l, daryo kabi yer yuzida joylashgan suvlar."
    },
    {
        id: 22,
        en: "reservoir",
        uz: "rezervuar",
        definition_en: "Reservoir – an artificial or natural lake used to store water.",
        definition_uz: "Rezervuar — suv saqlash uchun mo‘ljallangan tabiiy yoki sun’iy ko‘l."
    },
    {
        id: 23,
        en: "glacier",
        uz: "muzlik",
        definition_en: "Glacier – a huge mass of ice that forms when snow accumulates faster than it melts.",
        definition_uz: "Muzlik — qor erishidan ko‘ra tezroq to‘planib hosil bo‘lgan ulkan muz massasi."
    },
    {
        id: 24,
        en: "groundwater",
        uz: "yer osti suvi",
        definition_en: "Groundwater – water that collects underground.",
        definition_uz: "Yer osti suvi — yer ostida to‘plangan suv."
    },
    {
        id: 25,
        en: "water table",
        uz: "suv sathi",
        definition_en: "Water table – the upper level of groundwater.",
        definition_uz: "Suv sathi — yer osti suvlarining yuqori darajasi."
    },
    {
        id: 26,
        en: "water cycle",
        uz: "suv aylanishi",
        definition_en: "Water cycle – the process that keeps water moving on Earth.",
        definition_uz: "Suv aylanishi — Yerda suvning doimiy harakatlanish jarayoni."
    },
    {
        id: 27,
        en: "evaporation",
        uz: "bug‘lanish",
        definition_en: "Evaporation – liquid gaining energy and turning into gas.",
        definition_uz: "Bug‘lanish — suyuqlik energiya olib gaz holatiga o‘tishi."
    },
    {
        id: 28,
        en: "water vapor",
        uz: "suv bug‘i",
        definition_en: "Water vapor – water in gas form.",
        definition_uz: "Suv bug‘i — gaz holatidagi suv."
    },
    {
        id: 29,
        en: "transpiration",
        uz: "transpiratsiya",
        definition_en: "Transpiration – plants losing water through leaf pores.",
        definition_uz: "Transpiratsiya — o‘simliklarning barglaridagi teshikchalardan suv yo‘qotishi."
    },
    {
        id: 30,
        en: "condensation",
        uz: "kondensatsiya",
        definition_en: "Condensation – gas losing energy and turning into liquid.",
        definition_uz: "Kondensatsiya — gazning energiya yo‘qotib suyuqlikka aylanishi."
    },
    {
        id: 31,
        en: "precipitation",
        uz: "yog‘ingarchilik",
        definition_en: "Precipitation – rain, snow, sleet or hail falling from the atmosphere.",
        definition_uz: "Yog‘ingarchilik — yomg‘ir, qor, do‘l kabi atmosferadan tushadigan suv."
    },
    {
        id: 32,
        en: "surface runoff",
        uz: "yer usti oqimi",
        definition_en: "Surface runoff – water flowing over land to lakes and rivers.",
        definition_uz: "Yer usti oqimi — suvning yer yuzasidan oqib ko‘l yoki daryoga yetishi."
    },
    {
        id: 33,
        en: "percolation",
        uz: "suv shimilish",
        definition_en: "Percolation – liquid moving through a porous material.",
        definition_uz: "Shimilish — suyuqlikning teshikcha tuzilmadan o‘tib ketishi."
    },
    {
        id: 34,
        en: "aquifer",
        uz: "akvifer",
        definition_en: "Aquifer – a layer of rock and sediment that stores groundwater.",
        definition_uz: "Akvifer — yer osti suvlarini saqlovchi qatlam."
    },
    {
        id: 35,
        en: "watershed",
        uz: "suv havzasi hududi",
        definition_en: "Watershed – an area that collects precipitation into a body of water.",
        definition_uz: "Suv havzasi hududi — yog‘ingarchilikni daryo yoki ko‘lga yig‘adigan yer maydoni."
    },
    {
        id: 36,
        en: "air",
        uz: "havo",
        definition_en: "Air – the mixture of gases that makes up Earth's atmosphere.",
        definition_uz: "Havo — atmosferani tashkil qiluvchi gazlar aralashmasi."
    },
    {
        id: 37,
        en: "altitude",
        uz: "balandlik",
        definition_en: "Altitude – height above sea level.",
        definition_uz: "Balandlik — dengiz sathidan yuqorilik."
    },
    {
        id: 38,
        en: "atmospheric pressure",
        uz: "atmosfera bosimi",
        definition_en: "Atmospheric pressure – the force of air pressing on a surface.",
        definition_uz: "Atmosfera bosimi — havoning yerga bosim o‘tkazishi."
    },
    {
        id: 39,
        en: "barometer",
        uz: "barometr",
        definition_en: "Barometer – a tool that measures air pressure.",
        definition_uz: "Barometr — havo bosimini o‘lchaydigan asbob."
    },
    {
        id: 40,
        en: "troposphere",
        uz: "troposfera",
        definition_en: "Troposphere – the lowest atmospheric layer where weather occurs.",
        definition_uz: "Troposfera — atmosferaning eng past qatlami, ob-havo shu yerda bo‘ladi."
    },
    {
        id: 41,
        en: "stratosphere",
        uz: "stratosfera",
        definition_en: "Stratosphere – the layer containing the ozone layer.",
        definition_uz: "Stratosfera — ozon qatlami joylashgan atmosfera qatlami."
    },
    {
        id: 42,
        en: "mesosphere",
        uz: "mezosfera",
        definition_en: "Mesosphere – a very cold atmospheric layer.",
        definition_uz: "Mezosfera — atmosferaning eng sovuq qatlami."
    },
    {
        id: 43,
        en: "thermosphere",
        uz: "termosfera",
        definition_en: "Thermosphere – a high-temperature layer with low air density.",
        definition_uz: "Termosfera — havo zichligi past, harorati juda yuqori qatlam."
    },
    {
        id: 44,
        en: "exosphere",
        uz: "ekzosfera",
        definition_en: "Exosphere – the outermost layer extending into space.",
        definition_uz: "Ekzosfera — atmosferaning eng yuqori qatlami, kosmosga ulanadi."
    },
    {
        id: 45,
        en: "ionosphere",
        uz: "ionosfera",
        definition_en: "Ionosphere – a region where electrical energy can be transmitted.",
        definition_uz: "Ionosfera — elektr signallari uzatiladigan atmosfera hududi."
    },
    {
        id: 46,
        en: "specific heat",
        uz: "xususiy issiqlik sig‘imi",
        definition_en: "Specific heat – energy needed to raise 1 gram of a substance by 1°C.",
        definition_uz: "Xususiy issiqlik sig‘imi — 1 gram moddani 1°C ga qizdirish uchun kerak bo‘lgan energiya."
    },
    {
        id: 47,
        en: "rotation",
        uz: "aylanish",
        definition_en: "Rotation – Earth's spinning motion; one rotation equals a day.",
        definition_uz: "Aylanma harakat — Yerning o‘qi atrofida aylanishi; bir aylanish bir kun."
    },
    {
        id: 48,
        en: "revolution",
        uz: "aylanib chiqish",
        definition_en: "Revolution – Earth's movement around the Sun; one revolution equals a year.",
        definition_uz: "Revolyutsiya — Yerning Quyosh atrofida aylanishi; bir aylanish bir yil."
    }
]
