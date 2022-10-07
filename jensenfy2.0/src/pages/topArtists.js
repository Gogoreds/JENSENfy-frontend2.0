import { useState, useEffect } from 'react';
import { catchErrors } from "../utils";
import { getTopArtists } from "../spotify";

import {
  SectionWrapper,
  ArtistsGrid,
  TimeRangeRangeButtons,
} from "../components";

const TopArtists = () => {
  const [topArtists, setTopArtists] = useState(null);
  const [activeRange, setActiveRange] = useState(`short`);


  useEffect(() => {
    const fetchData = async () => {
      const userTopArtists = await getTopArtists(`${activeRange}_term`);
      setTopArtists(userTopArtists.data);
    };

    catchErrors(fetchData());
  }, [activeRange]);

  console.log(topArtists);

  return (
    <main>

      {topArtists && (
        <SectionWrapper
          title="Top Artists"
          breadcrumb={true}
        >
          <TimeRangeRangeButtons activeRange={activeRange} setActiveRange={setActiveRange} />
          <ArtistsGrid artists={topArtists.items.slice(0, 10)} />
        </SectionWrapper>
      )}
    </main>

  );
}


export default TopArtists