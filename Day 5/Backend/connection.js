const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anjanaithikkad:Anjana123@cluster0.n1qrys0.mongodb.net/Kmct?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected!'))
.catch((err)=>console.log(err))

