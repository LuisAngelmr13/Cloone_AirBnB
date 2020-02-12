const mongoose  = require( 'mongoose');

const Schema = mongoose.Schema;

const ReservationSchema = new Schema({ 
	house:{
        type:Schema.Types.ObjectId,
		ref:'houses'     
    },
    users:{
        type:Schema.Types.ObjectId,
		ref:'users'     
	},
	from_date:{
		type:Date,
		require:true,
    },
    to_date:{
		type:Date,
		require:true,
	},
	total_price:{
		type:Number
	}

}, {timestamps:true});

module.exports = mongoose.model('reservations',ReservationSchema);