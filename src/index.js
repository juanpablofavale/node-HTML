const express = require('express')
const app = express();

app.set('port', 4000);



app.listen(app.get('port'), () => {
    console.log('server port', app.get('port'));
})