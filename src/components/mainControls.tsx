import React, { useEffect, useRef, useState } from 'react';
import { desktopCapturer } from 'electron';
import VideoSelect from './videoSelect';

const MainControls = () => {
  const [videoSources, setVideoSources] = useState<
    Electron.DesktopCapturerSource[] | null
  >(null);
  const [selectedVideoSource, setSelectedVideoSource] = useState('');

  useEffect(() => {
    if (videoSources == null || videoSources.length < 1) {
      getVideoSources();
    }
  }, [videoSources]);

  const getVideoSources = async () => {
    const inputSources = await desktopCapturer.getSources({
      types: ['window', 'screen'],
    });

    console.log('fetched input sources');

    setVideoSources(inputSources);
  };

  const selectSource = (event: any) => {
    console.log('selected ' + event);
    setSelectedVideoSource(event.target.value);
    // event should have id then map over video sources for id and set
  };

  return (
    <>
      <h1>controls</h1>
      <div>
        <h1>ScreenRec</h1>
        <button type="button">Start</button>
        <button type="button">Stop</button>
        <hr />
        <div>
          <VideoSelect
            selectSource={selectSource}
            selectedVideoSource={selectedVideoSource}
            videoSources={videoSources}
          />
        </div>
      </div>
    </>
  );
};

export default MainControls;
