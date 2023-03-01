function shout(string) {
    return string.toUpperCase();
}
"Hello!".toUpperCase();

function whisper(string) {
    return string.toLowerCase();
}
"Hello!".toLowerCase();



function logShout(string) {
    console.log("HELLO");
}
console.log.restore.spy("hello");

function logWhisper(string) {
    console.log("hello");
}
console.log(logWhisper);

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()){
        return "I can't hear you!"
    }
    if (string === string.toUpperCase()){
        return "YES INDEED!"
    }
    if (string === string){
        return "I would love to!"
    }
}
console.log.sayHiToHeadphonedRoommate("hello");
console.log.sayHiToHeadphonedRoommate("HELLO");
console.log.sayHiToHeadphonedRoommate("Hello");