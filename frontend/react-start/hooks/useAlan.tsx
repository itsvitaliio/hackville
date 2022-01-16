import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";

const COMMANDS = {
    OPEN_SCHEDULE: 'open-schedule',
    CLOSE_SCHEDULE: 'close-schedule',
    REMINDER: 'reminder',
    UPDATE_CLASS: 'update_class'
}

export default function useAlan(){  
    useEffect(() => {
        alanBtn({
            key: "ccc769f7c35149ac67d9040ccd05366f2e956eca572e1d8b807a3e2338fdd0dc/stage",
            //commandData = {command:string, class:string, date:string, time:string}
            onCommand: (commandData: any) => {
                console.log(commandData)
                console.log(commandData.value)
                switch(commandData.command){
                    default:
                        console.log("ALAN TRIGGERED: Command not recognized");
                        break;
                    case COMMANDS.OPEN_SCHEDULE:
                        console.log("ALAN TRIGGERED: Open schedule Command");
                        break;
                    case COMMANDS.CLOSE_SCHEDULE:
                        console.log("ALAN TRIGGERED: Close Schedule Command");
                        break;
                    case COMMANDS.REMINDER:
                        console.log("ALAN TRIGGERED: Reminder command");
                        /*axios.post("http://localhost:8000/", {
                            "username": "John",
                            "name": "Math exam",
                            "description": "Math 101 Exam",
                            "date": "1642309165",
                            "type": "reminder"
                        })
                        .then((response) => {
                            console.log(response)
                            // navigate home: componentNavigation.navigate('Home')
                        })
                        .catch((error) => {
                            console.log(error)
                        })*/
                        break;
                    case COMMANDS.UPDATE_CLASS:
                        console.log("ALAN TRIGGERED: Update class command");
                        break;
                }
            }
        });
        }, []);

}