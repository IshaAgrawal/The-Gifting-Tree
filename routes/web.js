const authContoller = require('../app/http/controllers/authController')
const homeContoller = require('../app/http/controllers/homeController')
const cartContoller = require('../app/http/controllers/customers/cartController')
const orderController = require('../app/http/controllers/customers/orderController')
const adminOrderController = require('../app/http/controllers/admin/orderController')
const statusController = require('../app/http/controllers/admin/statusController')

//Middlewares
const auth = require('../app/http/middlewares/auth')
const guest = require('../app/http/middlewares/guest')
const admin = require('../app/http/middlewares/admin')

function initRoutes(app)
{
    app.get('/',homeContoller().index)
    app.get('/login',guest,authContoller().login)
    app.post('/login',authContoller().postLogin)
    app.get('/register',guest,authContoller().register)
    app.post('/register',authContoller().postRegister)
    app.post('/logout',authContoller().logout)

    app.get('/cart',cartContoller().index)
    app.post('/update-cart',cartContoller().update)

    //Customer routes
    app.post('/orders',auth,orderController().store)
    app.get('/customer/orders',auth,orderController().index)
    app.get('/customer/orders/:id', auth, orderController().show)

    //Admin routes
    app.get('/admin/orders',admin,adminOrderController().index)
    app.post('/admin/order/status', admin, statusController().update)
}

module.exports=initRoutes