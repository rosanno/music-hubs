import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-[#151A24] to-[#1B2F3F]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <TopPlay />
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-20 bottom-0 left-0 right-0 py-11 flex animate-slideup bg-[#374552] z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
