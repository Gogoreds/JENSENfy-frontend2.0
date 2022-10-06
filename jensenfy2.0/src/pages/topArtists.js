import { useState, useEffect } from "react";
import { catchErrors } from "../utils";
import {
  getCurrentUserProfile,
  getCurrentUserPlaylists,
  getTopArtists,
} from "../spotify";
import { StyledHeader } from "../styles";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);

      const userTopArtist = await getTopArtists();
      setTopArtists(userTopArtist.data);
    };

    catchErrors(fetchData());
  }, []);
};
console.log(topArtists);
