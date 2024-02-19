// // VoiceControl.js
// import React, { useState, useEffect } from 'react';
// import * as tf from '@tensorflow/tfjs';
// import * as speechCommands from '@tensorflow-models/speech-commands';
// import { ReactMic } from 'react-mic';

// const VoiceControl = ({ onVoiceCommand }) => {
//   const [model, setModel] = useState(null);
//   const [isListening, setListening] = useState(false);

//   const loadModel = async () => {
//     const recognizer = speechCommands.create('BROWSER_FFT');
//     await recognizer.ensureModelLoaded();
//     setModel(recognizer);
//   };

//   useEffect(() => {
//     loadModel();
//   }, []);

//   const startListening = () => {
//     setListening(true);
//     model.listen(
//       (result) => {
//         const command = result.scores.reduce(
//           (acc, score, index) => (score > result.scores[acc] ? index : acc),
//           0
//         );
//         onVoiceCommand(command);
//       },
//       { probabilityThreshold: 0.9 }
//     );
//   };

//   const stopListening = () => {
//     setListening(false);
//     model.stopListening();
//   };

//   return (
//     <div>
//       <ReactMic record={isListening} />
//       <button onClick={isListening ? stopListening : startListening}>
//         {isListening ? 'Stop Listening' : 'Start Listening'}
//       </button>
//     </div>
//   );
// };

// export default VoiceControl;
