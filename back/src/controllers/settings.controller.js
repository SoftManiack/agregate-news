const { CreateSourseNews, CreateRss, CreateKeyWord, GetSourses, GetKeyWord} = require('../data/querys')

const GetSourse = async (req, res) => {

    const sourses = await GetSourses(req.user.userId);

    let data = [];
    console.log(await GetKeyWord(sourses[0].soursenews_id));

    for(let i = 0; i < sourses.length; i++){
        data.push(
            {
                cartName: sourses[i].soursenews_name,
                VK: false,
                RSS: true,
                Link: sourses[i].rss_link,
                keyWords: await GetKeyWord(sourses[i].soursenews_id)
            }
        )
    }

    console.log((await GetKeyWord(sourses[0].soursenews_id)).map( ({keywords_word}) => keywords_word))
    res.status(200).send({
        messange: 'Данные получены',
        data: data
    })
    
}

const DeleteSourse = async (req, res) => {

    /*console.log('delete')

    var data = [ 
        {
            cartName: 'Cart1',
            VK: false,
            RSS: true,
            Link: '/https://vesti-perm.ru/vesti_perm.rss',
            keyWords: [
                'ПГАТУ',
                'Пермского государственного аграрно-технологического университета',
                'Пермским государственным аграрно-технологическим университетом',
                'Пермский государственный аграрно-технологический университет'
            ]
        },
    ]*/   

    res.status(200).send({
        messange: 'Данные Удалены',
        data: data
    })
}

const AddSourse = async ( req , res) => {

    const id = await CreateSourseNews(req.body.cartName, req.user.userId);
    console.log(id)
    
    console.log(req.body.cartName);
    console.log(req.body.RSS);
    console.log(req.body.VK);
    console.log(req.body.keyWords);

    /*if(req.body.RSS){
        console.log(req.body.RSS)
        await CreateRss(id, req.body.Link);
    }

    for(let i = 0; i < req.body.keyWords.length; i++){
        CreateKeyWord(req.body.keyWords[i], id);
    }
    
    res.status(200).send({
        messange: 'Данные получены',
    });*/

}


module.exports = {
    GetSourse,
    DeleteSourse,
    AddSourse
}

