import type { NextPage } from "next";
import HomeWrapper from "./_components/homepage/HomeWrapper";
import HomeServices from "./_components/homepage/HomeServices";
import Footer from "./_components/shared/Footer";
import HomePricing from "./_components/homepage/HomePricing";

const Homepage: NextPage = () => {
	return (
		<>
			<HomeWrapper />
			<HomeServices />
			<HomePricing />
			<Footer />
		</>
	);
};

export default Homepage;
