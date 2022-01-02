import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import { getSession } from "next-auth/react";
import Player from "../components/Player";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Spotify</title>
				<link rel="icon" type="image/svg+xml" href="/spotify.png" />
			</Head>

			<main className="flex bg-black h-screen overflow-hidden">
				<Sidebar />
				<Center />
			</main>

			<div className="sticky bottom-0">
				<Player />
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	// pre rendering in server
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
}
