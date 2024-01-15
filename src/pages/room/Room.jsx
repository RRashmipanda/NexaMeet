import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const Room = () => {
const {roomId} =useParams();


//MyMeetings Function
const MyMeeting=async(element) =>{
    const appID=1966915440;
    const serverSecret ="654058ca1c9cfd35a36340b5d7e1b97a"
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        " Enter Your Name"
   
    )
    
    
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container: element,
        sharedLinks: [{
            name: 'Copy Link',
            url: `http://localhost:5173/room/${roomId}`
        }],
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall
        },
        showScreenSharingButton: true
    })

    
}

  return (
    <div>
      <div ref={MyMeeting} />
    </div>
  )
}

export default Room
