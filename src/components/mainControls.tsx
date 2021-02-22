import React, { useEffect, useRef, useState} from 'react';
import Select from 'react-select';
import { desktopCapturer } from 'electron';

interface IOptions {
  label: string
  value: string
}

const MainControls = () => {

	const [dropDownOpen, setDropDownOpen] = useState(false);
	const [videoSources, setVideoSources] = useState<Electron.DesktopCapturerSource[] | null>(null);
  const [videoSourceNames, setVideoSourceNames] = useState<IOptions[]>([]);
	const [selectedVideoSource, setSelectedVideoSource] = useState('')

	useEffect(() => {
    if (videoSources == null || videoSources.length < 1) {
      getVideoSources();
    }

	}, [videoSources]);

	const getVideoSources = async () => {
		const inputSources = await desktopCapturer.getSources({
      types: ['window', 'screen']
		});

    setVideoSourceNames(inputSources.map(source => {
      return {label: source.name, value: source.id}
    }));

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
       <Select options={videoSourceNames} />
      </div>
		</div>
	</>
	);
};

	export default MainControls;
