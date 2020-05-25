var configValues=require('./config.json');
module.exports={
    getDBConnectionString:function(){
        return 'mongodb+srv://'+configValues.user+':'+configValues.pwd+'@cluster0-55790.mongodb.net/gogas_dev?retryWrites=true&w=majority';
    }
}
