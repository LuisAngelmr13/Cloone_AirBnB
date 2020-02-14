const cloudinary = require('cloudinary');

const storage = ({ stream }) => {

	cloudinary.config({
		cloud_name:'djoblj0ap',
		api_key:'688342314145482',
		api_secret:'gzEDKYh3DsC_ameaqNbMue8pa1A'
	});

	return new Promise((resolve,reject) => {
		const buffer = cloudinary.v2.uploader.upload_stream((err,result) => {
			if(err) reject(err);
			resolve(result);
		});//chunks

		stream.pipe(buffer);

	});

};

module.exports = storage;