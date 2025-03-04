import {database, ref, set} from '../firebaseConfig';

// Simple test function to write into the database
export const testWrite = async() => {
	try {
		// Adding dummy data to database
		await set(ref(database, 'Landlords/' + 'test_user'), {
			name: 'test_user',
			email: 'dudeinlongbeach@gmail.com',
			phone: '123456789'
		});
		console.log("Successfully wrote to the database");
	} catch(err){
		console.log("Error writing data:", err);
	}
}
