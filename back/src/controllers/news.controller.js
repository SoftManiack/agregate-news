const { GetAllNews } = require('../data/querys')

const getAll = async (req, res) => {
    try{
        
        //const news = await GetAllNews(req.user.userId);

        //https://www.permkrai.ru/bitrix/rss.php?ID=&LANG=s1&TYPE=news&LIMIT=7000
        const data = [
            {
                nameSourse: 'PGATU_PERM',
                title: 'Вчера, 30 июня, в конференц-зале главного корпуса Пермского ГАТУ прошло заседание Общественного совета при Министерстве сельского хозяйства и продовольствия Пермского края, в котором принял участие и.о. ректора Алексей Петрович Андреев Алексей Андреев',
                link: 'http://www.permkrai.ru/news/shtab-studencheskikh-otryadov-i-volonterskogo-dvizheniya-agrotekhuniversiteta-prikamya-priznan-luchsh',
                img: 'http://www.permkrai.ru/upload/iblock/8c8/2021_02_17_16_36_21.jpg',
                date: '01 июля 2021'
            },
            {
                nameSourse: 'PGATU_PERM',
                title: 'На площадке завода им. Шпагина 25 и 26 июня состоялось знаковое для нашего города мероприятие - Экофест-2021.',
                link: 'http://www.permkrai.ru/news/149-shkolnikov-iz-selskikh-territoriy-prikamya-primut-uchastie-v-regionalnom-etape-vserossiyskogo-ko',
                img: 'http://www.permkrai.ru/upload/iblock/171/agronti-promo.png',
                date: '01 июля 2021'
            },
            {
                nameSourse: 'PGATU_PERM',
                title: 'В вузах Пермского края идет приемная кампания.',
                link: 'http://www.permkrai.ru/news/komanda-permskogo-kraya-zanyala-pervoe-mesto-na-spartakiade-studotryadov-pfo',
                img: 'http://www.permkrai.ru/upload/iblock/e5d/u8vol1eatbs-_1_.jpg',
                date: '29 июня 2021'
            },
            {
                nameSourse: 'PGATU_PERM',
                title: 'Межрегиональный студенческий сельскохозяйственный отряд «Агротех» приступил к работе в Частинском районе на базе ООО «УралАгро».🌿',
                link: 'http://www.permkrai.ru/news/komanda-permskogo-kraya-zanyala-pervoe-mesto-na-spartakiade-studotryadov-pfo',
                date: '29 июня 2021'
            },
            {
                nameSourse: 'PGATU_PERM',
                title: 'Сегодня студенты факультета почвоведения, агрохимии, экологии и товароведения в рамках практики посетили экологический фестиваль «Живое все», который проходит в социокультурном пространстве «Завод Шпагина» с 25 по 26 июня🌿',
                link: 'http://www.permkrai.ru/news/komanda-permskogo-kraya-zanyala-pervoe-mesto-na-spartakiade-studotryadov-pfo',
                date: '25 июня 2021'
            },
            {
                nameSourse: 'PGATU_PERM',
                title: 'В рамках Всероссийского студенческого выпускного запускаем рубрику, в которой мы расскажем Вам истории успеха выпускников #АгроТехноУнивера🌿',
                link: 'http://www.permkrai.ru/news/komanda-permskogo-kraya-zanyala-pervoe-mesto-na-spartakiade-studotryadov-pfo',
                date: '25 июня 2021'
            },
            {
                nameSourse: 'PGATU_PERM',
                title: 'Сегодня был дан старт трудового проекта Межрегионального студенческого сельскохозяйственного отряда «Агротех» (МССхО «Агротех») на площадке ООО «УралАгро» (Частинский район, Пермский край).',
                link: 'http://www.permkrai.ru/news/komanda-permskogo-kraya-zanyala-pervoe-mesto-na-spartakiade-studotryadov-pfo',
                date: '25 июня 2021'
            },  
            {
                nameSourse: 'PERMKRAI.RU',
                title: 'Команда Пермского края заняла первое место на Спартакиаде студотрядов ПФО',
                link: 'http://www.permkrai.ru/news/komanda-permskogo-kraya-zanyala-pervoe-mesto-na-spartakiade-studotryadov-pfo',
                date: '25 июня 2021'
            },
            {
                nameSourse: 'PGATU_PERM',
                title: 'В мае в группе Зкб-11 состоялся круглый стол «VUCA-мир: вызовы и возможности».',
                link: 'http://www.permkrai.ru/news/komanda-permskogo-kraya-zanyala-pervoe-mesto-na-spartakiade-studotryadov-pfo',
                date: '25 июня 2021'
            },

        ]

        return res.status(200).send({
            data: data,
            messange: 'Новости получены',
        });


    }catch(err){
        res.status(500).send(err);
    }
}

module.exports = {
    getAll,
}