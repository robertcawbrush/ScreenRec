import React, { useEffect, useState} from 'react';
import { desktopCapturer } from 'electron';

const MainControls = () => {

	const [dropDownOpen, setDropDownOpen] = useState(false);
	const [videoSources, setVideoSources] = useState<Electron.DesktopCapturerSource[] | null>(null);
	const [selectedVideoSource, setSelectedVideoSource] = useState('')

	useEffect(() => {
    getVideoSources()

		if(selectedVideoSource) {
        console.log('source selected', selectedVideoSource)
    }

	}, [selectedVideoSource]);

	const getVideoSources = async () => {
		const inputSources = await desktopCapturer.getSources({
      types: ['window', 'screen']
		});

		setVideoSources(inputSources);
	}

	const selectSource = (source: Electron.DesktopCapturerSource) => {

	}

	return (
	<>
		<h1>controls</h1>
		<div>
      <h1>ScreenRec</h1>
      <button type="button">Start</button>
      <button type="button">Stop</button>
      <hr />
      <div>
        {dropDownOpen ? (
            <div>
            <select onChange={e => setSelectedVideoSource(e.target.value)} name="videoSource" id="videoSource">
              {videoSources && videoSources.map(source => {
                <option key={source.id} value={source.name}>{source.name}</option>
                })
              }
            </select>
            </div>
          ) : (
            <button type="button" onClick={() => {setDropDownOpen(!dropDownOpen)}}>Choose video source</button> )
        }
      </div>
		</div>
	</>
	);
};

	export default MainControls;
