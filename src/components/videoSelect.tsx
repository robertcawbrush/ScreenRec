import React from 'react';

interface props {
  selectSource: (event: any) => void;
  videoSources: Electron.DesktopCapturerSource[] | null;
  selectedVideoSource: string;
}

const VideoSelect = (props: props) => {
  const renderSourceOptions = () => {
    if (props.videoSources !== null) {
      return props.videoSources.map((vs: Electron.DesktopCapturerSource) => {
        // <option value={vs.id}>{vs.name}</option>;
        <h1>Hello</h1>
      });
    }
  };

  return (
    <>
      <select
        name="selectVideoSource"
        value={props.selectedVideoSource}
        onChange={props.selectSource}
      >
        {props.videoSources && renderSourceOptions()}
      </select>{props.videoSources && renderSourceOptions()}
    </>
  );
};
export default VideoSelect;
