import React from 'react';

interface props {
  selectSource: (event: any) => void;
  videoSources: Electron.DesktopCapturerSource[] | null;
  selectedVideoSourceId: string;
}

const VideoSelect = (props: props) => {
  const renderSourceOptions = () => {
    let options = null;
    if (props.videoSources !== null) {
      options = props.videoSources.map((vs: Electron.DesktopCapturerSource) => {
         return (<option key={vs.id} value={vs.id}>{vs.name}</option>)
      });
    }

    return options
  };

  return (
    <>
      <select
        name="selectVideoSource"
        value={props.selectedVideoSourceId}
        onChange={props.selectSource}
      >
        {props.videoSources && renderSourceOptions()}
      </select>
    </>
  );
};
export default VideoSelect;
