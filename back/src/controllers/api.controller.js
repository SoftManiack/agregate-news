const { GetAllNews, SetUserKey } = require('../data/querys')
const jwt = require('jsonwebtoken');

const APIgetAll = async (req, res) => {
    try{
        
        console.log('1')
        console.log(req.params)

        const data = [
            {
                nameSourse: 'pgatu_perm',
                title: 'Вчера, 30 июня, в конференц-зале главного корпуса Пермского ГАТУ прошло заседание Общественного совета при Министерстве сельского хозяйства и продовольствия Пермского края, в котором принял участие и.о. ректора Алексей Петрович Андреев Алексей Андреев',
                link: '',
                img: '',
                date: '01 июля 2021'
            },
            {
                nameSourse: 'pgatu_perm',
                title: 'На площадке завода им. Шпагина 25 и 26 июня состоялось знаковое для нашего города мероприятие - Экофест-2021.',
                link: '',
                img: '',
                date: '01 июля 2021'
            },
            {
                nameSourse: 'pgatu_perm',
                title: 'В вузах Пермского края идет приемная кампания.',
                link: '',
                img: '',
                date: '29 июня 2021'
            },
            {
                nameSourse: 'pgatu_perm',
                title: 'Межрегиональный студенческий сельскохозяйственный отряд «Агротех» приступил к работе в Частинском районе на базе ООО «УралАгро».🌿',
                link: 'http://www.permkrai.ru/news/komanda-permskogo-kraya-zanyala-pervoe-mesto-na-spartakiade-studotryadov-pfo',
                date: '29 июня 2021'
            },
            {
                nameSourse: 'pgatu_perm',
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

const APIgetDate = async (req, res) => {
    console.log(req.params)
    console.log('*')
}

const APIcreateKey = async (req, res) => {


    const key = jwt.sign({ userId: req.user.userId },
        process.env.JWT_SECRET_KEY, 
        { expiresIn: 86400 }
    );

    await SetUserKey( req.user.userId, key);

    return res.status(200).send({
        data: key,
        messange: 'key получен',
    });

    
}

module.exports = {
    APIgetAll,
    APIgetDate,
    APIcreateKey 
}