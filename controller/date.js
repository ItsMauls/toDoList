const List = require('../model/list')

let isFilled = false


exports.getfullDate = (req,res) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const fullDate = new Date()
        const month =  fullDate.getMonth()
    const day = fullDate.getDay()
    const date = fullDate.getDate()
    const dates = `${days[day]}, ${months[month]} ${date}`
    const allList = List.fetchAll()
    res.render('todo', {
        allList : allList,
        dates : dates,
        isFilled : isFilled     
    })
}

exports.postFullDate = (req,res) => {
 const list = new List(req.body.newList)
        isFilled = true
       list.save()
        console.log(list)
       
      res.redirect('/')
    
}
