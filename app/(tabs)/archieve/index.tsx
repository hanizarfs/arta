import { View } from 'react-native';
import { Link } from 'expo-router';

const ListPage = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Link href="/archieve/1">News One</Link>
			<Link href="/archieve/2">News Two</Link>
			<Link href="/archieve/3">News Three</Link>
		</View>
	);
};

export default ListPage;