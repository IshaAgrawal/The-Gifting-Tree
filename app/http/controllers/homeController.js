const Menu = require('../../models/menu')

function homeContoller()
{
    return{
        async index(req,res)
        {
            const realtimeapps = await Menu.find()
            res.render('home',{realtimeapps:realtimeapps})
        }
    }
}

module.exports=homeContoller