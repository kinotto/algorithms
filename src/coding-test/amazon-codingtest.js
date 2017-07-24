/**
 "my.song.mp3 11b
greatSong.flac 1000b
not3.txt 5b
video.mp4 200b
game.exe 100b
mov!e.mkv 10000b"

"my.song.mp3 11b
greatSong.flac 1000b
not3.txt 5b
video.mp4 200b
game.exe 100b
mov!e.mkv 10000b"
 */


var collection = {
    music: [
        'mp3', 'aac', 'flac'
    ],
    image: [
        'jpg', 'bmp', 'gif'
    ],
    movie: [
        'mp4', 'avi', 'mkv'
    ]
}

function solution(S){
    var mediaRaw = S || [];
    var media = {
        music: {
            bytes: 0
        },
        images: {
            bytes: 0
        },
        movies: {
            bytes: 0
        },
        other: {
            bytes: 0
        }
    };
    mediaRaw = mediaRaw.split('\n');
    mediaRaw.forEach(function(m){
        m = m.split(' ');
        var extension = getExtension(m);
        var bytes = m[1];

        if(collection.music.indexOf(extension) !== -1){
            media.music.bytes = sumBytes(media.music.bytes, bytes); 
        }
        if(collection.image.indexOf(extension) !== -1){
            media.images.bytes = sumBytes(media.image.bytes, bytes); 
        }
        if(collection.movie.indexOf(extension) !== -1){
            media.movies.bytes = sumBytes(media.movies.bytes, bytes); 
        }
        if(collection.music.indexOf(extension) === -1 &&
            collection.image.indexOf(extension) === -1 &&
            collection.movie.indexOf(extension) === -1){
            media.other.bytes = sumBytes(media.other.bytes, bytes); 
        }
    })

    return toStdOut(media);
}

function getExtension(m){
    var split = m[0].split('.');
    return split[split.length - 1];
}
function sumBytes(sum, byte){
    var byteNum = byte.replace(/\D/g,'');
    return parseInt(sum) + parseInt(byteNum);
}
function toStdOut(media){
    var stdOut = '';
    Object.keys(media).forEach(function(key){
        stdOut += key + ' ' + media[key].bytes + 'b' + '\n';
    })
    console.log(stdOut);
    return stdOut;
}
solution('my.song.mp3 11b\ngreatSong.flac 1000b\nnot3.txt 5b\nvideo.mp4 200b\ngame.exe 100b\nmov!e.mkv 10000b');