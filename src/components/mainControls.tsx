import React, { useEffect, useRef, useState } from 'react';
import { desktopCapturer } from 'electron';
import VideoSelect from './videoSelect';


const MainControls = () => {
  const [videoSources, setVideoSources] = useState<
    Electron.DesktopCapturerSource[] | null
  >(null);
  const [selectedVideoSourceId, setSelectedVideoSourceId] = useState('');

  const videoSelectButton = useRef<HTMLButtonElement | null>(null);

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

  const selectSource = async (event: any) => {
    console.log('selected ' + event);
    setSelectedVideoSourceId(event.target.value);

    // event should have id then map over video sources for id and set
    const source = videoSources?.find(a => a.id == event.target.value)
    const constraints:any = {
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: source,
          chromeMediaSourceId: selectedVideoSourceId
        }
      }
    }

    const stream = await navigator.mediaDevices.getUserMedia(constraints);
   
    // videoElement.srcObject = stream;
    // videoElement.play()
  };

  return (
    <>
      <h1>controls</h1>
      <div>
        <h1>ScreenRec</h1>
        <button ref={videoSelectButton} type="button">
          Start
        </button>
        <button type="button">Stop</button>
        <hr />
        <div>
          <VideoSelect
            selectSource={selectSource}
            selectedVideoSourceId={selectedVideoSourceId}
            videoSources={videoSources}
          />
        </div>
      </div>
    </>
  );
};

export default MainControls;
