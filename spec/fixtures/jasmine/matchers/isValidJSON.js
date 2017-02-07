const Schema = require('extensible-compiler').default;

module.exports = {
    default: function(str){
        try{
            JSON.parse(str);

            //valid
        }catch(e){
            //invalid
            console.log(e);
            return false;
        }

        return true;
    },
};
