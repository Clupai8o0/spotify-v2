import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtoms";
import useSpotify from "../hooks/useSpotify";
import Songs from "./Songs";
import { signOut } from 'next-auth/react';

const colors = [
	"from-indigo-500",
	"from-blue-500",
	"from-green-500",
	"from-red-500",
	"from-yellow-500",
	"from-pink-500",
	"from-purple-500",
];

const Center = () => {
	const { data: session } = useSession();
	const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
	const playlistId = useRecoilValue(playlistIdState);
	const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId])

	useEffect(() => {
		spotifyApi.getPlaylist(playlistId).then(data => {
			setPlaylist(data.body);
		}).catch(console.error);
	}, [spotifyApi, playlistId])

	return (
		<div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
			<header className="absolute top-5 right-8">
				<div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2" onClick={signOut}>
					<img
						src={session?.user.image}
						alt="user profile picture"
						className="rounded-full h-10 w-10"
					/>
					<h2 className="text-white">{session?.user.name}</h2>
					<ChevronDownIcon className="h-5 w-5 text-white" />
				</div>
			</header>

			<section
				className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
			>
				{/* ? stands for optional color (it might not exist)*/}
				<img src={playlist?.images?.[0]?.url} alt="playlist image " className="h-44 w-44 shadow-2xl"/>
				<div>
					<p>PLAYLIST</p>
					<h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">{playlist?.name}</h1>
				</div>
			</section>

			<div>
				<Songs />
			</div>
		</div>
	);
};

export default Center;
