import type { NextPage } from "next";
import HomeWrapper from "./_components/homepage/HomeWrapper";
import HomeServices from "./_components/homepage/HomeServices";

const Homepage: NextPage = () => {
	return (
		<>
			<HomeWrapper />
			<HomeServices />
		</>
	);
};

export default Homepage;
