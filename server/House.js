const mongoose  = require( 'mongoose');

const Schema = mongoose.Schema;

const HouseSchema = new Schema({
	name:{
		type: String,
		require: true
	},
	user:{
        type:Schema.Types.ObjectId,
		ref:'users'     
	},
	location:{
		type:String,
		require:true,
	},
	price:{
		type:Number
	},
	available:{
		type:Boolean
    },
    kitchen:{
		type:Boolean
    },
    tv:{
		type:Boolean
    },
    internet:{
		type:Boolean
    },
    breakfast:{
		type:Boolean
    },
    description:{
		type: String,
	},
	photos:{
		type: [String],
    },
    
}, {timestamps:true});

module.exports = mongoose.model('houses',HouseSchema);