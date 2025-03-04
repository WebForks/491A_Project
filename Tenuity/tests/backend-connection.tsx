import {getDatabase, ref, set} from 'firebase/database';

const database = getDatabase();

// Simple test function to write into the database
export const testWrite = () => {
	// Adding dummy data to database
	set(ref(database, 'Landlords/' + 'test_user'), {
		name: 'test_user',
		email: 'dudeinlongbeach@gmail.com',
		phone: '123456789'
	});
}
